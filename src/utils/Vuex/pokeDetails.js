import axios from 'axios'
const storageData = {
  pokedetail: localStorage.getItem('pokemonData') ? JSON.parse(localStorage.getItem('pokemonData')) : null,
  pokename: localStorage.getItem('pokemonName') ? JSON.parse(localStorage.getItem('pokemonName')) : null
}
export const pokeDetails = {
  state: {
    pokeStats: [],
    pokeName: []
  },
  getters: {
    getPokemonData (state) {
      return state.pokeStats
    }
  },
  actions: {
    getData ({ commit }, payload) {
      const DATA = []
      if (!storageData.pokedetail && !storageData.pokename) {
        console.log(storageData)
        for (let pokemonId = 0; pokemonId <= 32; pokemonId++) {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((res) => {
              // console.log(res.data)
              DATA.push(res.data)
            })
            .catch((err) => {
              console.log(err)
            })
        }
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
          .then(res => {
            const pokename = res.data.results.map((pk) => {
              return { name: pk.name }
            })
            commit('POKEMONDATA', { pokename: pokename, pokedetail: DATA })
          })
          .catch(err => console.log(err))
      } else {
        // const itemData = storageData
        commit('POKEMONDATA', storageData)
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
    POKEMONDATA (state, { pokedetail, pokename }) {
      if (!storageData.pokedetail && !storageData.pokename) {
        localStorage.setItem('pokemonData', JSON.stringify([...pokedetail]))
        localStorage.setItem('pokemonName', JSON.stringify([...pokename]))
        storageData.pokedetail = JSON.parse(localStorage.getItem('pokemonData'))
        storageData.pokename = JSON.parse(localStorage.getItem('pokemonName'))
      }
      state.pokeStats = storageData.pokedetail
      state.pokeName = storageData.pokename
    },
    SINGLEDATA (state, payload) {
      state.pokeStats = []
    }
  }
}
