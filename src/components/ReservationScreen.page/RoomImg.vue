<template>
  <div>
    <section id="reservation-img-section">
      <h3 id="reservation-title">Uw reserveringsgegevens</h3>
      <img id="room-img" :src="specificRoom.roomImg" alt="room img">
      <h4 id="reservation-place">{{specificHotelDetails[0]}} - {{specificHotelDetails[1]}},
        {{specificHotelDetails[2]}}
      </h4>
    </section>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    name: 'roomimg',
    computed: {
      ...mapState([
        'specificRoom',
        'specificHotelDetails',
      ]),
    },
  }

</script>

<style>
  #room-img {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    #reservation-title,
    #reservation-place {
      margin-left: 5%;
    }
  }

  @media only screen and (max-width: 600px) {
    #reservation-title {
      padding: 1% 0 1% 0;
      margin-bottom: 0;
    }

    #reservation-title,
    #reservation-place {
      margin-left: 5%;
    }

    #reservation-place {
      padding-top: 5%;
      float: left;
    }
  }

</style>
