<template>
  <div>
    <p class="current-page">Menu</p>
    <ul>
      <li class="routerlink-list">
        <router-link to="/">Home </router-link>
      </li>
      <li class="routerlink-list">
        <router-link to="/reserved-room">Mijn gereserveerde kamers </router-link>
      </li>
      <li class="routerlink-list">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'menupage',
  }
</script>

<style>
  .routerlink-list {
    width: 100%;
    text-align: left;
    margin-left: 5%;
    color: #05386b;
    font-weight: bold;
    font-size: 20pt;
  }

</style>
