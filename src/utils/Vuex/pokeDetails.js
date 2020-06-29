import axios from 'axios'
export const pokeDetails = {
  state: {
    pokeStats: []
  },
  getters: {
    getPokemonData (state) {
      return state.pokeStats
    }
  },
  actions: {
    getData ({ commit }, payload) {
      const DATA = []
      for (let pokemonId = 12; pokemonId <= 23; pokemonId++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
          .then((res) => {
            // console.log(res.data)
            DATA.push(res.data)
            commit('POKEMONDATA', DATA)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    singlePokemon ({ commit }, payload) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${payload}`)
        .then((res) => {
          console.log(res.data)
          const formattedData = [res.data]
          commit('SINGLEDATA', formattedData)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mutations: {
    POKEMONDATA (state, payload) {
      state.pokeStats = [...payload]
    },
    SINGLEDATA (state, payload) {
      state.pokeStats = [...payload]
    }
  }
}
