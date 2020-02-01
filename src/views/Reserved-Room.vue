<template>
  <div>
    <p class="current-page">Mijn gereserveerde kamer(s)</p>
    <div id="reserved-room-wrapper">
      <div id="reserved-hotel" v-for="(isConfirmedReservation, key) in isConfirmedReservation"
        :key="key">
        <section id="hotel-reserved-img">
          <img class="specific-hotel-img" :src="isConfirmedReservation.room.roomImg" alt="reserved room img">
          <div id="stripe"></div>
        </section>
        <section id="hotel-reserved-place">
          <div id="place-container">
            <p id="hotel-name-city">{{isConfirmedReservation.place[0]}} -
              {{isConfirmedReservation.place[1]}}</p>
            <p id="hotel-city-country">{{isConfirmedReservation.place[1]}},
              {{isConfirmedReservation.place[2]}}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    name: '',
    computed: {
      ...mapState([
        'isConfirmedReservation',
      ])
    },
  }

</script>

<style>
  #stripe {
    display: none;
  }

  #reserved-room-wrapper {
    width: 60%;
    margin: auto;
  }

  #reserved-hotel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5%;
  }

  .specific-hotel-img {
    width: 100%;
  }

  #hotel-reserved-img {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  #hotel-reserved-place {
    grid-column: 2/3;
    grid-row: 1/2;
    background-color: #ffffff;
    padding: 0;
  }

  #hotel-name-city {
    width: 100%;
    margin-top: 5%;
    color: #05386B;
    font-size: 20pt;
  }

  #hotel-city-country {
    width: 100%;
    margin-top: 5%;
    color: grey;
    font-size: 15pt;
  }

  @media only screen and (max-width: 900px) {
    #stripe {
      display: block;
      width: 100%;
      padding-top: 5%;
      border-bottom: 1px solid grey;
    }

    #reserved-room-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }

    #hotel-reserved-place {
      grid-column: 1/4;
      grid-row: 1/2;
      width: 100%;
      background-color: #EDF5E1;
    }

    #hotel-name-city,
    #hotel-city-country {
      width: 50%;
      float: left;
      font-size: 11pt;
    }

    #place-container {
      padding: 5% 0;
    }

    #hotel-reserved-img {
      grid-column: 1/4;
      grid-row: 2/3;
      width: 100%;
    }
  }

</style>
