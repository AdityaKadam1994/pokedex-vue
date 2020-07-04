<template>
  <div class="container">
    <div class="mb-5">
      <form class="form-inline" @submit.prevent>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="pokeName" @keyup="filterData()">
        <button class="btn my-2 my-sm-0" type="submit" @click="handleForm">Search</button>
        <ul class="suggestion-list" v-if="flag">
          <li v-for="list in autoSuggestList" :key="list"> {{ list }} </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      pokeName: null,
      autoSuggestList: [],
      flag: false
    }
  },
  computed: {

  },
  methods: {
    handleForm () {
      console.log(this.pokeName)
      this.$store.dispatch('singlePokemon', this.pokeName)
    },
    filterData () {
      const query = this.pokeName
      query ? this.flag = true : this.flag = false
      const pokemonNameData = this.$store.getters.getPokemonName
      const qur = new RegExp(query ? query.toLowerCase() : '', 'g')
      const filteredPokemon = pokemonNameData.map(pk => {
        if (pk.name.match(qur) && query) {
          return pk.name
        } else {
          return null
        }
      })
        .filter(retNotNull => {
          return retNotNull !== null
        })
      this.autoSuggestList = [...filteredPokemon]
    }
  }
}
</script>

<style lang='scss'>
button {
  background: transparent;
  color: white;
  border: 1px solid #fff !important;
}
input {
  background: transparent !important;
  color: white !important;
  width: 450px !important;
}
form {
  justify-content: center;
  font-family: 'Quantico', sans-serif;
  position: relative;
}
.suggestion-list {
  list-style: none;
  background: #243B55;
  color: white;
  padding: 0 10px;
  width: 40%;
  position: absolute;
  top: 100%;
  left: 46%;
  transform: translateX(-50%);
  height: 190px;
  z-index: 1;
  overflow-y: scroll;
  border: 1px solid #fff;
  border-top: none;
}
.suggestion-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
  border-radius: 10px;
  width: 8px;
}
.suggestion-list::-webkit-scrollbar {
  width: 8px;
  background: #243B55;
}
.suggestion-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #fff;
}
</style>
