import {playMode} from 'common/js/config'
import {loadSearch, loadPlay} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  // searchHistory的初始值不能为空,应该是从本地获取到的值,不然从后台带前台,每次都会把初始值设为空,playHistory同理
  searchHistory: loadSearch(),
  playHistory: loadPlay()
}

export default state