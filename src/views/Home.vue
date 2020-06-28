<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <img alt="logo" src="img/pokemon.gif">
    </div>
    <PokemonBasic/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonBasic from './pokemon_details/PokemonBasic'
export default {
  name: 'Home',
  components: {
    PokemonBasic
  }
}
</script>
