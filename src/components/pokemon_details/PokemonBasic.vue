<template>
  <div class="container">
    <div class="text-center" v-show="pokemonDataState.loading">
      <img src="img/spinner.gif" alt="spinner" class="spinner">
    </div>
    <div class="wrapper" v-if="fetchPokemonData.length > 0">
      <div class="">
        <transition-group name="list" tag="div" class="row">
          <div class="col-sm-4 mb-4" v-for="pokemon in fetchPokemonData" :key="pokemon.name">
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center">
                  <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="img-fluid">
                </div>
                <h5 class="card-title text-center mb-3">{{pokemon.name}}</h5>
                <h6 class="card-subtitle mb-1">Type: <span class="badge badge-pill" :class="type.type.name" v-for="type in pokemon.types" :key="type.slot">{{type.type.name}}</span></h6>
                <p class="card-text">Abilities: <span class="atr-separations" v-for="ability in pokemon.abilities" :key="ability.slot">{{ability.ability.name}}</span></p>
                <div class="d-flex justify-content-between">
                  <p class="stats">Hp: {{pokemon.stats[0].base_stat}} <font-awesome-icon icon="heart" /></p>
                  <p class="stats">Height: {{pokemon.height}} <font-awesome-icon icon="ruler-vertical" /></p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="stats">Attack: {{pokemon.stats[1].base_stat}} <font-awesome-icon icon="fist-raised" /></p>
                  <p class="stats">Defense: {{pokemon.stats[2].base_stat}} <font-awesome-icon icon="shield-alt" /></p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="stats">Speed: {{pokemon.stats[4].base_stat}} <font-awesome-icon icon="tachometer-alt" /></p>
                  <p class="stats">Weight: {{pokemon.weight}} <font-awesome-icon icon="weight-hanging" /></p>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div v-show="fetchPokemonData.length === 0 && !pokemonDataState.loading">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center">No Data Found</h2>
        </div>
      </div>
    </div>
    <div class="pagination-wrapper">
      <nav aria-label="...">
        <ul class="pagination pagination-md justify-content-center">
          <li class="page-item" v-for="pg_no in paginationOptions.totalPages" :key="pg_no">
            <a class="page-link" tabindex="-1" @click="pageClick(pg_no)">{{pg_no}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PokemonBasic',
  data () {
    return {
      pokemonDataState: {
        loading: true,
        data: null
      },
      paginationOptions: {
        totalPages: null,
        currentPage: 1,
        perPage: 6,
        totalItems: null
      }
    }
  },
  computed: {
    // pokemons () {
    //   return this.$store.getters.getPokemonData
    // }
    ...mapGetters([
      'getPokemonData'
    ]),
    fetchPokemonData () {
      // set: function ({ data, loading }) {
      //   if (data) {
      //     this.pokemonData.data = [...data]
      //     console.log('excuted')
      //     this.pokemonData.loading = loading
      //   }
      // },
      // get: function () {
      //   if (this.pokemonData.data.length > 0) {
      //     return this.pokemonData
      //   } else {
      //     console.log('here')
      //     return false
      //   }
      // }
      if (this.getPokemonData.length > 0) {
        const loadingState = this.pokemonDataState
        loadingState.loading = false
        loadingState.data = this.getPokemonData
        this.paginationCreation(this.getPokemonData)
      }
      const currentPage = this.paginationOptions.currentPage
      const perPage = this.paginationOptions.perPage
      const firstIndex = (currentPage * perPage) - perPage
      const lastIndex = (currentPage * perPage)
      const slicedData = this.getPokemonData.slice(firstIndex, lastIndex)
      return slicedData
    }
  },
  methods: {
    pageClick (pgNo) {
      this.paginationOptions.currentPage = pgNo
    },
    paginationCreation (result) {
      const data = result
      const totalPages = (Math.ceil(data.length / 6))
      this.paginationOptions.totalItems = data.length
      this.paginationOptions.totalPages = totalPages
    }
  },
  created () {
    this.$store.dispatch('getData')
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  max-width: 150px;
}

.list-enter-active {
  transition: all 2s ease;
}

.list-enter {
  opacity: 0;
}
.list-enter-to {
  transform: rotate(360deg);
  opacity: 1;
}

.list-leave-active {
  transition: all 1s ease;
}

.list-leave {
  opacity: 1;
}

.list-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.card {
  background: #243B55;
  font-family: 'Quantico', sans-serif;
  border: 1px solid white;
  border-top: 9px outset #fff;
  border-top-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom: 8px inset white;
  -webkit-box-shadow: 0px -1px 5px 0px rgba(255,255,255,1);
  -moz-box-shadow: 0px -1px 5px 0px rgba(255,255,255,1);
  box-shadow: 0px -1px 5px 0px rgba(255,255,255,1);
  img {
    width: 180px;
  }
  .card-title {
    text-transform: capitalize;
    font-size: 22px;
    text-shadow: 2px 2px 2px rgba(255, 234, 241, 1);
  }
  .card-subtitle {
    text-transform: capitalize;
    font-size: 18px;
    span {
      font-size: 16px;
      margin: 0 3px;
    }
  }
  .card-text {
    text-transform: capitalize;
    font-size: 18px;
  }
  .atr-separations {
      &:after {
        content: ', '
      }
      &:last-child {
        &:after {
          content: '';
        }
      }
  }
  .fa-heart {
    color: red;
  }
  .fa-fist-raised {
    color: #f1570d;
  }
  .fa-shield-alt {
    color: #507eff;
  }
  .fa-tachometer-alt {
    color: #33e833;
  }
  .fa-ruler-vertical {
    color: yellow;
  }
  .fa-weight-hanging {
    color: grey;
  }
  .stats {
    margin-bottom: 5px;
  }
}
</style>
