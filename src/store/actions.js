import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

// 当一次性提交多个mutations时，可定义一个actions
export const selectPlay = function({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  // 在music-list页中点击随机‘播放全部音乐’后，再点击播放某一首歌曲，index不对，因为歌曲列表已被打乱；需要做如下处理
  if (state.mode === playMode.random) {
    // 如果是'随机播放全部音乐',则需要先把播放列表打乱，再把‘顺序列表中点击的音乐’的索引修改为‘打乱后的列表’中的索引
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    // 找到list[index]在randomList中的索引
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}