import { createStore } from 'vuex'

export default createStore({
  state: {
    cakes: [{ name: 'Tres Leches' ,price: 100, src: require('@/assets/tresLeches.jpg')}, 
            { name: 'Marmoleado', price: 200,src: require('@/assets/marmoleado.jpg') },
            { name: 'Crujiente de Avellana', price: 500, src: require('@/assets/avellana.jpg')},
            { name: 'Oreo', price: 250, src: require('@/assets/oreo.jpg')},
            { name: 'Queso con Zarzamora', price: 200, src: require('@/assets/queso.jpg')},
            { name: 'Napolitano', price: 300, src: require('@/assets/napolitano.jpg')}
          ],
    sabores: [
      {name: "Fresa", price: "100", src: require('@/assets/fresa.jpg')},
      {name: "Fresa", price: "100", src: require('@/assets/fresa.jpg')}
    ]
  },
  getters: {

    favorites(state){
      state.cakes.sort(() => { return Math.random() - 0.5 })
      return state.cakes.slice(0,4);
    }
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
