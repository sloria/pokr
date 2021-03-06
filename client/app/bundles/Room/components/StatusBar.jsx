import PropTypes from 'prop-types'
import React from 'react'
import {defaultTourColor} from 'libs/barColors'

const MODERATOR_ROLE = 0
const PARTICIPANT_ROLE = 1
const WATCHER_ROLE = 2

export default class StatusBar extends React.Component {

  state = {
    role: this.props.role
  }

  closeRoom = () => {
    if(confirm("Do you want to close this room? It can not be undo!")) {
      App.rooms.perform('action', {
        roomId: this.props.roomId,
        data: "close-room",
        type: 'action'
      });
    }
  }

  componentDidMount() {
    const originalTitle = "Copy to clipboard";
    $('[data-toggle="tooltip"]').tooltip({container: "#tooltip-area", title: originalTitle})
      .on("click", function() {
        $(this).attr("title", "Copied!").tooltip("fixTitle").tooltip("show");
      }).mouseleave(function() {
        $(this).attr("title", originalTitle).tooltip("fixTitle");
      });

    this.props.addSteps({
      title: 'Handy bar',
      text: 'You can change room status or edit from here. Click "Share link" to copy the link of current room.',
      selector: '.name .col-md-8',
      position: 'right',
      style: defaultTourColor
    })

    this.props.addSteps({
      title: 'Switch your role',
      text: 'Participant can switch to Watcher, and Watcher can easily switch to Participant. Moderator is not allowd to switch role.',
      selector: '.name .col-md-4 .dropdown',
      position: 'top-right',
      style: defaultTourColor
    });
  }

  beWatcher = () => {
    if ("Watcher" === this.state.role || 'Moderator' === this.state.role)
      return

    $.ajax({
      url: `/rooms/${this.props.roomId}/switch_role`,
      cache: false,
      type: 'POST',
      data: { role: WATCHER_ROLE },
      success: data => {
        this.setState({ role: "Watcher" })
      },
      error: (xhr, status, err) => {
        console.error("Switch role failed!")
      }
    })
  }

  beParticipant = () => {
    if ("Participant" === this.state.role || 'Moderator' === this.state.role)
      return

    $.ajax({
      url: `/rooms/${this.props.roomId}/switch_role`,
      cache: false,
      type: 'POST',
      data: { role: PARTICIPANT_ROLE },
      success: data => {
        this.setState({ role: "Participant" })
      },
      error: (xhr, status, err) => {
        console.error("Switch role failed!")
      }
    })
  }

  playTourGuide = () => {
    this.props.playTourGuide()
  }

  render() {
    const roomStatusButton = (() => {
      if ('Moderator' === this.state.role) {
        const buttonText = "🏁 Close it"
        const buttonClassName = "btn-warning close-room"
        const onClickHandler = this.closeRoom

        return (
          <button type="button" onClick={onClickHandler} className={`btn btn-default ${buttonClassName}`}>{buttonText}</button>
        )
      }
    })()

    const editButton = (() => {
      if('Moderator' === this.state.role) {
        return(
          <a href={`/rooms/${this.props.roomId}/edit`} className="btn btn-default">✏️ Edit room</a>
        )
      }
    })();

    const copyLink = () => {
      const aField = document.getElementById("hiddenField");
      aField.hidden   = false;
      aField.value    = window.location.href;
      aField.select();
      document.execCommand("copy");
      aField.hidden = true;
    };

    const operationButtons = (() => {
      if (this.props.roomState !== "draw") {
        return(
          <div className="btn-group pull-right room-operation" role="group">
            {roomStatusButton}
            {editButton}
            <button type="button" onClick={copyLink} className="btn btn-default" data-toggle="tooltip" data-placement="bottom">📻 Share link</button>
          </div>
        )
      }
    })();

    const userRoleClassName = role => {
      // Dont allow moderator to switch role at the moment
      if (role === this.state.role || "Moderator" === this.state.role) {
        return "disabled";
      } else {
        return "";
      }
    };

    const currentRoleEmoji = (() => {
      if ("Moderator" === this.state.role) {
        return "👑";
      } else if ("Participant" === this.state.role) {
        return "👷";
      } else {
        return "👲";
      }
    })();

    return (
      <div className="name row">
        <div className="col-md-8">
          <h3 className="pull-left">{this.props.roomName}</h3>
          {operationButtons}
          <div id="tooltip-area"></div>
        </div>
        <div className="col-md-4">
          <div className="pull-left tour-guide">
            <a href="javascript:;" onClick={this.playTourGuide}>
              <i className="fa fa-question-circle" aria-hidden="true"></i> How to use?
            </a>
          </div>
          <div className="dropdown pull-right">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {currentRoleEmoji} &nbsp;{this.state.role} &nbsp;
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li className={userRoleClassName("Watcher")}><a onClick={this.beWatcher} href="javascript:;">Be watcher 👲</a></li>
              <li className={userRoleClassName("Participant")}><a onClick={this.beParticipant} href="javascript:;">Be participant 👷</a></li>            </ul>
          </div>
        </div>
        <input type="text" id="hiddenField" className="room--share-link" />
      </div>
    )
  }
}