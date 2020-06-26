import axios from 'axios'
export const pokeDetails = {
  state: {
    pokeStats: []
  },
  getters: {
  },
  actions: {
    getData ({ commit }, payload) {
      for (let i = 1; i <= 10; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  },
  mutations: {
  }
}
