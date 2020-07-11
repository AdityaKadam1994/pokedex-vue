import axios from 'axios'
const storageData = {
  pokedetail: localStorage.getItem('pokemonData') ? JSON.parse(localStorage.getItem('pokemonData')) : null,
  pokename: localStorage.getItem('pokemonName') ? JSON.parse(localStorage.getItem('pokemonName')) : null
}
export const pokeDetails = {
  state: {
    pokeStats: [],
    pokeName: [],
    pokeType: []
  },
  getters: {
    getPokemonData (state) {
      return state.pokeStats
    },
    getPokemonName (state) {
      return state.pokeName
    },
    getPokemonType (state) {
      return state.pokeType
    }
  },
  actions: {
    getData ({ commit }, payload) {
      const DATA = []
      const loadDataInstance = axios.create()
      const loadNameInstance = axios.create()
      loadDataInstance.interceptors.request.use(config => {
        if (!storageData.pokedetail) {
          return config
        } else {
          commit('POKEMONDATA', storageData)
        }
      })
      loadNameInstance.interceptors.request.use(config => {
        if (!storageData.pokename) {
          return config
        } else {
          commit('POKEMONDATA', storageData)
        }
      })
      const multiData = async () => {
        for (let pokemonId = 1; pokemonId <= 30; pokemonId++) {
          await new Promise(resolve => {
            loadDataInstance.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
              .then((res) => {
                resolve(DATA.push(res.data))
              })
          })
        }
      }
      multiData().then(() => {
        loadNameInstance.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
          .then(res => {
            const pokename = res.data.results.map((pk) => {
              return { name: pk.name }
            })
            commit('POKEMONDATA', { pokename: pokename, pokedetail: DATA })
          })
          .catch(err => console.log(err))
      })
    },
    singlePokemon ({ commit }, payload) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${payload}`)
        .then((res) => {
          const formattedData = [res.data]
          commit('SINGLEDATA', formattedData)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getPokeType ({ commit }) {
      axios.get('https://pokeapi.co/api/v2/type')
        .then(res => {
          commit('POKETYPEDATA', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPokemonByType ({ commit }, payload) {
      console.log(payload)
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
      const top27 = storageData.pokedetail.filter((item, index) => {
        return index <= 26
      })
      console.log(top27)
      state.pokeStats = storageData.pokedetail
      state.pokeName = storageData.pokename
    },
    SINGLEDATA (state, payload) {
      state.pokeStats = [...payload]
    },
    POKETYPEDATA (state, payload) {
      // console.log(payload)
      const formattedData = payload.map(item => {
        return {
          name: item.name,
          url: item.url,
          type_id: item.url.split('/').slice(-2)[0]
        }
      })
      state.pokeType = [...formattedData]
    }
  }
}
