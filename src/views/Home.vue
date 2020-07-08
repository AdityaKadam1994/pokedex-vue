<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <img alt="logo" src="img/pokemon.gif">
    </div>
    <SearchBar/>
    <FilterByType/>
    <PokemonBasic/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonBasic from '../components/pokemon_details/PokemonBasic'
import SearchBar from '../components/pokemon_details/SearchBar'
import FilterByType from '../components/pokemon_details/FilterByType'
export default {
  name: 'Home',
  components: {
    PokemonBasic,
    SearchBar,
    FilterByType
  }
}
</script>
