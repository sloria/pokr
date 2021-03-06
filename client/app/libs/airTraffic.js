import EventEmitter from 'libs/eventEmitter'
import BarColors from 'libs/barColors'
import RoomActions from 'libs/roomActions'
import ActionCable from 'actioncable'

window.App = {}

export default {
  setupChannelSubscription(roomId, roomState) {
    if (roomState === "draw") {
      return false
    }

    App.cable = ActionCable.createConsumer()

    App.rooms = App.cable.subscriptions.create({channel: 'RoomsChannel', room: roomId}, {
      connected: function(){
      },
      received: function(data) {
        // console.dir(data)
        if (data.type === 'action') {
          if (data.data === 'open') {
            RoomActions.showResultSection()
          } else if (data.data === 'refresh-users') {
            if ($("#u-" + data.user_id).length <= 0) {
              EventEmitter.dispatch("refreshUsers")
            }
          } else if(data.data === "next-story") {
            RoomActions.nextStory()
          } else if(data.data === "revote") {
            RoomActions.nextStory()
          } else if(data.data === "close-room") {
            EventEmitter.dispatch("roomClosed")
          } else if(data.data === "switch-roles") {
            EventEmitter.dispatch("refreshUsers")
          } else if(data.data === "clear-votes") {
            RoomActions.nextStory()
          }
        } else if(data.type === 'notify') {
          if (window.syncResult) {
            EventEmitter.dispatch("refreshUsers")
          }
          // Must keep for now
          var $personElement = $('#u-' + data.person_id)
          if ($personElement.hasClass('voted')) {
            $personElement.removeClass("voted")
          }
          setTimeout(function(){
            $personElement.addClass("voted", 100)
          }, 200)
        } else {

        }
      }
    })
  }
}