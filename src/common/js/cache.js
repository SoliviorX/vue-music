import storage from 'good-storage'

const SEARCH_KEY = '__search__'
// 最大存储空间
const SEARCH_MAX_LENGTH = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LENGTH = 200

// 将一条搜索记录插入搜索历史中
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  // 如果插入的数据是已经存在的处于第一条的数据
  if (index === 0) {
    return
  }
  // 如果待插入的数据已存在，但不处于第一条
  if (index > 0) {
    // 删掉已存在的数据
    arr.splice(index, 1)
  }
  // 把数据插到第一的位置
  arr.unshift(val)
  // 如果插入后数组长度大于最大长度，则把最后一个数据删掉
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

// 从数组中删掉一个元素
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

// 保存搜索结果
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 获取本地搜索结果
export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

// 删除某条搜素结果，返回新数组
export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) => {
    return item === query
  })
  // 从vuex中删掉之后不要忘记重新设置本地缓存
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 清空搜索历史
export function clearSearch() {
  // 清空缓存，并返回一个空数组给actions，将state里的searchHistory设为空
  storage.remove(SEARCH_KEY)
  return []
}

// 保存播放记录
export function savePlay(song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return item.id === song.id
  }, PLAY_MAX_LENGTH)
  storage.set(PLAY_KEY, songs)
  return songs
}

// 读取播放记录
export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}