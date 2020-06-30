<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-4 mb-4" v-for="(pokemon, index) in pokemons" :key="index">
        <div class="card h-100">
          <div class="card-body">
            <div class="text-center">
              <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="img-fluid">
            </div>
            <h5 class="card-title text-center mb-3">{{pokemon.name}}</h5>
            <h6 class="card-subtitle mb-1">Type: <span class="atr-separations" v-for="type in pokemon.types" :key="type.slot">{{type.type.name}}</span></h6>
            <p class="card-text">Abilities: <span class="atr-separations" v-for="ability in pokemon.abilities" :key="ability.slot">{{ability.ability.name}}</span></p>
            <div class="d-flex justify-content-between">
              <p class="stats">Hp: {{pokemon.stats[0].base_stat}} <font-awesome-icon icon="heart" /></p>
              <p class="stats">Attack: {{pokemon.stats[1].base_stat}} <font-awesome-icon icon="fist-raised" /></p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="stats">Defense: {{pokemon.stats[2].base_stat}} <font-awesome-icon icon="shield-alt" /></p>
              <p class="stats">Speed: {{pokemon.stats[4].base_stat}} <font-awesome-icon icon="tachometer-alt" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonBasic',
  computed: {
    pokemons () {
      return this.$store.getters.getPokemonData
    }
  },
  created () {
    this.$store.dispatch('getData')
  }
}
</script>

<style lang="scss" scoped>
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
  }
  .card-subtitle {
    text-transform: capitalize;
    font-size: 18px;
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
    color: #33e833
  }
  .stats {
    margin-bottom: 5px;
  }
}
</style>
