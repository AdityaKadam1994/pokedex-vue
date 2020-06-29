<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <img alt="logo" src="img/pokemon.gif">
    </div>
    <SearchBar/>
    <PokemonBasic/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonBasic from '../components/pokemon_details/PokemonBasic'
import SearchBar from '../components/pokemon_details/SearchBar'
export default {
  name: 'Home',
  components: {
    PokemonBasic,
    SearchBar
  }
}
</script>
