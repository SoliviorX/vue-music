// state => state.singer等价于 function(state) { return state.singer }
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  // 根据currentIndex取得currentSong，如果取不到，设为空
  return state.playlist[state.currentIndex] || {}
}
