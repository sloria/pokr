import PropTypes from 'prop-types'
import React from 'react'
import BarColors from 'libs/barColors'

export default class Story extends React.Component {
  revote = (e) => {
    const revoteStoryId = $(e.target).parents("li").data("id");
    if (this.props.role === 'Moderator') {
      App.rooms.perform('revote', {
        roomId: this.props.roomId,
        data: { story_id: revoteStoryId }
      });
    }
  }

  render() {
    const that = this;
    let revoteIcon;
    let liElementClass;
    revoteIcon = (() => {
      if (this.props.role === 'Moderator' && that.props.tab === "groomed" && this.props.roomState !== "draw") {
        return(
          <a href="javascript:;" className="revote" onClick={that.revote}>
            <i className="fa fa-refresh"></i>
          </a>
        )
      }
    })()

    liElementClass = (() => {
      if (that.props.tab === "groomed") {
        return("story story__groomed");
      } else {
        return("story story__ungroomed");
      }
    })()

    return (
      <li className={liElementClass} id={`story-${this.props.id}`} data-id={this.props.id}>
        <a href={storyLinkHref(that.props.link)} className="storyLink" rel="noreferrer" target="_blank">
          {this.props.link}
        </a>
        <span className="label label-info story--voted-point">{BarColors.emoji(this.props.point) || this.props.point}</span>
        {revoteIcon}
        <p className="story-desc">
          {this.props.desc}
        </p>
      </li>
    )
  }
}