<template>
  <div>
    <p class="current-page">{{specificHotel.name}} - {{specificHotel.city}}</p>
    <div id="hotel-wrapper">

      <!--box 1-->
      <div id="building-image-column">
        <img :src="specificHotel.buildingImg" alt="building img">
      </div>

      <!--box 2-->
      <div id="popular-amenities-column">
        <h3>Populaire voorzieningen</h3>
        <hr>
        <p id="hotel-amenities">
          <hotelRequirements />
        </p>


      </div>
      <!--box 3-->
      <div id="room-choice-column">
        <h3>Kamerkeuze</h3>
        <hr>
        <RoomChoice />
      </div>

      <!--box 4-->
      <div id="description-column">
        <section>
          <h3>Beschrijving</h3>
          <hr>
          <p class='hotel-description-text'>{{specificHotel.description[0]}}</p><br>
          <p class='hotel-description-text'>{{specificHotel.description[1]}}</p><br>
          <!-- <p class='hotel-description-text'>{{specificHotel.description[2]}}</p><br> -->
        </section>
      </div>


    </div>

  </div>
</template>

<script>
  import hotelRequirements from '@/components/HotelRequirements.vue';
  import RoomChoice from '@/components/Hotel.page/RoomChoice.vue'

  import {
    mapState
  } from "vuex";
  export default {
    name: 'hotel',
    components: {
      hotelRequirements,
      RoomChoice,
    },
    props: {
      hotel: {
        type: Object
      }
    },
    data() {
      return {
        roomChoice: [],
      }
    },

    computed: {
      ...mapState([
        'specificHotel'
      ])
    },
    created() {
      this.roomChoice = this.specificHotel.rooms;
    },
  }

</script>

<style>
  #hotel-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  #popular-amenities-column,
  #room-choice-column {
    padding: 5% 2%;
    margin-top: 5%;
  }

  h3 {
    text-align: left;
    font-size: 15pt;
    color: #05386B;
  }

  p {
    color: #05386B;
  }

  /*box 1*/
  #building-image-column {
    grid-column: 1/2;
    grid-row: 1/2;
    margin: 5% 0 2% 5%;
  }

  #building-image-column img {
    width: 100%;
    height: 300px;
  }

  /*box 2*/
  #popular-amenities-column {
    grid-column: 2/3;
    grid-row: 1/2;
    margin-top: 5%;
  }

  #hotel-amenities {
    padding: 2% 0 0 0;
  }

  /*box 3*/
  #room-choice-column {
    grid-column: 3/4;
    grid-row: 1/3;
  }

  /*box 4*/
  #description-column {
    grid-column: 1/3;
    grid-row: 2/4;
    margin-left: 2.5%;
  }

  .hotel-description-text {
    text-align: left;
  }

  @media only screen and (max-width: 600px) {
    * {
      margin: 0;
      padding: 0;
    }

    /*box 1*/
    #building-image-column {
      grid-column: 1/4;
      grid-row: 1/2;
      margin: 0;
    }

    #building-image-column img {
      width: 100%;
      height: 300px;
    }

    /*box 2*/
    #popular-amenities-column {
      grid-column: 1/4;
      grid-row: 3/4;
      margin: 0;
    }

    #hotel-amenities {
      padding: 1% 0 0 0;
    }

    /*box 3*/
    #room-choice-column {
      grid-column: 1/4;
      grid-row: 4/5;
    }

    #room-choice-column {
      margin-top: 0;
      padding: 3% 2%;
    }

    /*box 4*/
    #description-column {
      grid-column: 1/4;
      grid-row: 2/3;
    }
  }

</style>
