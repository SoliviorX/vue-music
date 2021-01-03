import * as types from './mutation-types';

const mutations = {
  // 第一个参数是state，第二个参是payload
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations