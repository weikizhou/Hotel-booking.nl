<template>
  <div id="app">
    <div id="nav">
      <p id="header-name">Hotel-Booking.nl</p>
      <div id="menu-icon1" @click="showRouterLinks"></div>
      <div id="menu-icon2" @click="showRouterLinks"></div>
      <div id="menu-icon3" @click="showRouterLinks"></div>
      <router-link class="navLink" to="/">Home </router-link>
      <router-link class="navLink" to="/reserved-room">Mijn gereserveerde kamers </router-link>
      <router-link class="navLink" to="/contact">Contact</router-link>
    </div>
    <footer>
      <p id="copright-text">
        &copy; Copyright 2019 ROC MONDRIAAN - APPLICATIEONTWIKKELAAR
      </p>
    </footer>
    <router-view />
  </div>
</template>
<script>
  export default {
    methods: {
      showRouterLinks() {
        this.$router.push('/menupage')
      }
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background-color: #eDF5E1;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .menu-icon {
    display: none;
  }

  #nav {
    padding: 30px 30px 50px 30px;
    background-color: #05386B;
    text-align: right;
  }

  #nav a {
    font-weight: bold;
    color: #EDF5E1;
    font-weight: 300;
    font-size: 15pt;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #header-name {
    float: left;
    color: #EDF5E1;
    font-size: 19pt;
  }

  .current-page {
    text-align: left;
    padding: 5px 0 5px 30px;
    background-color: #379683;
    color: #EDF5E1;
    font-size: 15pt;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background-color: #379683;
    z-index: 100;
  }

  #copright-text {
    color: #EDF5E1;
  }

  @media only screen and (max-width: 600px) {
    * {
      margin: 0;
      padding: 0;
    }

    .navLink {
      display: none;
      text-align: left;
    }

    #nav {
      padding: 10% 0 10% 0;
    }

    #header-name {
      transform: translateY(-100%);
      margin-left: 5%
    }

    #menu-icon1,
    #menu-icon2,
    #menu-icon3 {
      display: block;
      float: right;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #ffffff;
      margin: 6px 0;
      position: absolute;
      left: 90%;
    }

    #menu-icon1 {
      top: 1.5%;
    }

    #menu-icon2 {
      top: 2.7%;
    }

    #menu-icon3 {
      top: 4%;
    }

    footer {
      background-color: #05386B;
    }
  }

</style>
