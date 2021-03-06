# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.4.11] - 2017-07-07
### Added
- Add summary for room [#135](https://github.com/hlcfan/pokr/pull/135)

## [0.4.10] - 2017-06-28
### Changed
- Fix room slug when dash or underline in title [commit](https://github.com/hlcfan/pokr/commit/8937097df8c8fa44dac1858937a560cb7a3e8ba7)

## [0.4.9] - 2017-06-19
### Added
- Add Chinese support for landing and other pages [#131](https://github.com/hlcfan/pokr/pull/131) [#134](https://github.com/hlcfan/pokr/pull/134)

## [0.4.8] - 2017-06-07
### Changed
- Remove consensus animation [#129](https://github.com/hlcfan/pokr/pull/129)

## [0.4.7] - 2017-06-05
### Changed
- Add logster [#128](https://github.com/hlcfan/pokr/pull/128)

## [0.4.6] - 2017-06-04
### Changed
- Upgrade `react_on_rails` to 8.0.1 [#127](https://github.com/hlcfan/pokr/pull/127)

## [0.4.5] - 2017-06-01
### Added
- Add shared links to sign up popup [#121](https://github.com/hlcfan/pokr/pull/121)
- Add consensus animation [#123](https://github.com/hlcfan/pokr/pull/123)

## [0.4.4] - 2017-05-25
### Added
- Add oauth, fb, twitter, google, github, weibo [#117](https://github.com/hlcfan/pokr/pull/117)

## [0.4.3] - 2017-05-21
### Added
- Make select point easier [#116](https://github.com/hlcfan/pokr/pull/116)

## [0.4.2] - 2017-05-20
### Added
- Allow sort stories whilst editing room [#114](https://github.com/hlcfan/pokr/pull/114)

### Changed
- Upgrade Rails to 5.1 [#115](https://github.com/hlcfan/pokr/pull/115)

## [0.4.1] - 2017-05-16
### Added
- Setup room tour guide [#110](https://github.com/hlcfan/pokr/pull/110)

## [0.4.0] - 2017-05-11
### Changed
- Switch from `react-rails` to `react_on_rails`[#105](https://github.com/hlcfan/pokr/pull/105)
- Series code refactor based on ^^^

## [0.3.0] - 2017-04-16
### Added
- Allow to clear votes [#104](https://github.com/hlcfan/pokr/pull/104)

### Version bump from 0.2.x to 0.3.0
So far, the basic functionalities of a planning/pointing poker is complete.
The further changes will be user experience improvements.

## [0.2.21] - 2017-04-09
### Added
- Allow to add moderator [#101](https://github.com/hlcfan/pokr/pull/101)

## [0.2.20] - 2017-03-30
### Added
- Support watcher mode [#100](https://github.com/hlcfan/pokr/pull/100)

## [0.2.19] - 2017-03-29
### Added
- Add room share button [#99](https://github.com/hlcfan/pokr/pull/99)

## [0.2.18] - 2017-03-23
### Changed
- Show users ordered by join sequence in room [#93](https://github.com/hlcfan/pokr/pull/93)

## [0.2.17] - 2017-03-14
### Changed
- Add page descriptions for sign up/in, about, faq pages [#91](https://github.com/hlcfan/pokr/pull/91)
- Update landing page title from **Planning Poker** to **Online Planning Poker**
- Add meta language to html tag on landing page
- Upgrade Rails to 5.0.2 [#92](https://github.com/hlcfan/pokr/pull/92)

## [0.2.16] - 2017-03-13
### Added
- Add robots/sitemap [#90](https://github.com/hlcfan/pokr/pull/90)

## [0.2.15] - 2017-03-09
### Changed
- Intact room form [#89](https://github.com/hlcfan/pokr/pull/89)

## [0.2.14] - 2017-03-04
### Changed
- Redo footer

## [0.2.13] - 2017-03-02
### Changed
- Cleaner result panel

## [0.2.12] - 2017-02-22
### Added
- Allow moderator to edit/close a room
- Reduce height of status bar to leave more space for content area

## [0.2.11] - 2017-02-10
### Changed
- Correct Turbolinks usage
- Reduce home page size(remove unused js files)
- Fix room status change(to closed) when go back/forward across pages
- Open room in current tab instead new tab

## [0.2.10] - 2017-01-19
### Changed
- Larger size of avatar
- Append 👑 for moderator instead of black circle
- Show story link if it's a story
- Show ongoing indicator to help tell which story is ongoing

## [0.2.9] - 2017-01-17
### Changed
- Fix current story id when re-vote story
- Fix user point(people list) not refresh issue
- Fix landing page sign up form 500 error

## [0.2.8] - 2017-01-16
### Added
- Display default avatar based on user name
- Allow user to upload avatar

## [0.2.7] - 2016-12-15
### Changed
- New home page, new look
- Rename Pokr to Pokrex

## [0.2.6] - 2016-12-10
### Added
- Dashboard now looks like a dashboard
  + Stats: Stories groomed, Time spent, Average per story
  + History: show a line chart of grooming history
  + Shrink rooms width
  + Add recently groomed stories
  + Add skip rate in stats

### Changed
- Expand width of dashboard

## [0.2.5] - 2016-11-30
### Added
- Can now switch groomed and un-groomed stories via tabs.
- Allow moderator to re-vote a story.

## [0.2.4] - 2016-10-11
### Changed
- Newly added egg timer is just fuckin ugly, replace icons with emojis,
  anyway the user experience of this is still shitty.

## [0.2.3] - 2016-10-09
### Added
- Add egg timer to ensure that discussion is structured

## [0.2.2] - 2016-09-10
### Changed
- Widen and enlarge room status
- Change 开 to Flip on the action button
- Change the sort to created date DESC of room list in dashboard page

### Added
- User can directly sign up on home page without redirecting to sign up page
  by opening a modal

## [0.2.1] - 2016-09-09
### Changed
- Support Emoji for some of the points, like coffee, question
- Change color scheme a bit, switch most green(success) to light blue(info)
- Colorize point bar from dark to light, as larger point to smaller one

### Added
- Feedback box - looking forward to more feedbacks!

## [0.2.0] - 2016-08-30
### Changed
- Switch most of communications from HTTP to WS
- Limit user name length to 20
- Rails 5.0.0 -> 5.0.0.1

## [0.1.2] - 2016-08-25
### Changed
- Reduce a few SQL queries
- Update react-rails to 1.8.2(react 15.3.0)

## [0.1.1] - 2016-08-07
### Changed
- Owner -> Moderator, to be more professional.

### Added
- Refresh people list when new user joins

## [0.1.0] - 2016-08-06
### Added
- This CHANGELOG file to hopefully serve as an evolving of Pokr.