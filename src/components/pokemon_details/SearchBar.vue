<template>
  <div class="container">
    <form class="form-inline mb-5" @submit.prevent>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="pokeName">
      <button class="btn my-2 my-sm-0" type="submit" @click="handleForm">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      pokeName: null
    }
  },
  methods: {
    handleForm () {
      console.log(this.pokeName)
      this.$store.dispatch('singlePokemon', this.pokeName)
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
}
</style>
