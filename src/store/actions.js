import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'
import {saveSearch, deleteSearch, clearSearch} from 'common/js/cache'

// 查找列表中是否有某首歌曲，返回其索引
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

// 当从搜索结果中播放一首歌时，需要作如下修改
export const insertSong = function ({commit, state}, song) {
  // 下面添加一个slice()获得playlist和sequenceList的副本，则playlist.splice(fpIndex, 1)及其它操作修改的是state的副本
  // 不然会报错，因为playlist.splice(fpIndex, 1)；playlist.splice(currentIndex, 0, song)没有通过mutations直接修改了state里的内容
  let playlist = state.playlist.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  // 记录当前歌曲
  let currentSong = playlist[currentIndex]
  // 查找当前列表中是否有待插入的歌曲，并返回其索引(先查找再插入，不然插入后再查找，fpIndex永远大于-1)
  let fpIndex = findIndex(playlist, song)
  // 因为是插入歌曲，所以索引+1
  currentIndex++
  // 插入这首歌到当前索引位置
  playlist.splice(currentIndex, 0, song)
  // 如果已经包含了这首歌
  if (fpIndex > -1) {
    // 如果当前插入的序号大于列表中的序号,以及当前插入的序号小于列表中的序号
    if (currentIndex > fpIndex) {
      playlist.splice(fpIndex, 1)
      currentIndex--
    } else {
      playlist.splice(fpIndex + 1, 1)
    }
  }

  // 获得在sequenceList中应该插入的位置
  let currentSIndex = findIndex(sequenceList, currentSong) + 1
  // 查找sequenceList中是否有待插入的歌曲
  let fsIndex = findIndex(sequenceList, song)

  sequenceList.splice(currentSIndex, 0, song)

  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1)
      // 这里不需要操作currentIndex，之所以在playlist中操作currentIndex，是因为根据它找到playlist中的currentSong
    } else {
      sequenceList.splice(fsIndex + 1, 1)
    }
  }

  commit(types.SET_PLAYLIST, playlist)
  commit(types.SET_SEQUENCE_LIST, sequenceList)
  commit(types.SET_CURRENT_INDEX, currentIndex)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

// 保存搜索历史
export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

// 删除某条搜索记录，返回新搜索历史
export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

// 清除所有搜索记录
export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
