export const state = () => ({
  DPI: null,
})

export const getters = {
  getDPI(state) {
    return state.esGestor
  },
}

export const mutations = {
  setDPI(state, esGestor) {
    state.esGestor = esGestor
  },
}
