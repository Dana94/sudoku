import board from '../../data/board';

const state = {
  board: []
}

const mutations = {
  'SET_BOARD'(state, board) {
    state.board = board;
  }
}

const actions = {
  initBoard({commit}){
    commit('SET_BOARD', board);
  }
}

const getters = {
  createBoard(state){
    return state.board;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
