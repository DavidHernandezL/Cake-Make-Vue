import { createStore } from 'vuex'

export default createStore({
  state: {
    cakes: [{ name: 'Chocolate' ,price: 100, src: require('@/assets/1.jpg')}, 
            { name: 'Limon', price: 200,src: require('@/assets/2.jpg') },
            { name: 'Fresa', price: 500, src: require('@/assets/3.jpg')}],
    numberSabor: 3,
    numberAdornos: 3
  },
  getters: {
  },
  mutations: {
    addCake(state, cake){
      state.cakes.push(cake);
    }
  },
  actions: {
    addCake({ commit }, cake){
      commit('addCake',cake)
    }
  },
  modules: {
  }
})
