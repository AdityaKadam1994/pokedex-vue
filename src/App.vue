<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #141E30;
  // background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  font-family: 'Quantico', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
    .grass {
      background: #7ec850;
    }
    .poison {
      background: #706286;
    }
    .fire {
      background: #ff7b00;
    }
    .flying {
      background: #b1aeac;
    }
    .water {
      background: #54A4DE;
    }
    .bug {
      background: #b0dea3;
    }
    .normal {
      background: grey;
    }
    .fighting {
      background: #d07800;
    }
    .ground {
      background: #99803a;
    }
    .rock {
      background: #6f6a5d;
    }
    .ghost {
      background: #8d008c;
    }
    .steel {
      background: #ddd5ce;
    }
    .electric {
      background: #ffd100;
    }
    .psychic {
      background: #615981;
    }
    .ice {
      background: #6b9cce;
    }
    .dragon {
      background: #aa5061;
    }
    .dark {
      background: #36373c;
    }
    .fairy {
      background: #ff87c5;
    }
    .unknown, .shadow {
      background: #fff;
      color: black
    }
</style>
