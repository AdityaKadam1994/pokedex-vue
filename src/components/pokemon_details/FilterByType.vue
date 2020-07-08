<template>
  <div class="container">
    <div class="filter-wrapper d-flex align-items-center">
      <h6>Filter By Type:</h6>
      <p v-for="type in getPokemonType" :key="type.type_id" :class="type.name" class="badge-pill">{{type.name}}</p>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FilterByType',
  data () {
    return {
      pokemonTypes: null
    }
  },
  methods: {
    ...mapActions([
      'getPokeType'
    ])
  },
  computed: {
    ...mapGetters([
      'getPokemonType'
    ])
  },
  created () {
    this.getPokeType()
  }
}

</script>

<style lang='scss' scoped>
.filter-wrapper {
  margin-bottom: 60px;
  flex-wrap: wrap;
  h5 {
    margin: 0;
  }
  p {
    margin: 5px;
  }
}
</style>
