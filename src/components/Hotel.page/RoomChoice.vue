<template>
  <div>
    <div id=room-type v-for="(aRoom, key) in specificHotel.rooms" :key="key">
      <img id="room-img" :src="aRoom.roomImg" alt="room img">
      <section id="reservation-detail-section">
        <p id="hotel-details">
          {{aRoom.roomType}}
          {{aRoom.bedType}}<br>
          max {{aRoom.maxPerson}} personen
        </p>
        <p id="room-price">€{{aRoom.roomPrice}}</p>
        <p id="extra-hotel-detail">*Per persoon per nacht</p>
        <button id="reserveer-btn"
          @click="getSpecificRoom(aRoom), getHotelDetails(specificHotel)">Reserveer</button>
      </section>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    name: 'RoomChoice',
    computed: {
      ...mapState([
        'specificHotel'
      ])
    },
    methods: {
      getSpecificRoom(aRoom) {
        this.$store.commit("setSpecificRoom", aRoom, JSON.parse(window.localStorage.getItem(
          "aRoom")));
        window.localStorage.setItem('aRoom', JSON.stringify(aRoom))
        this.$router.push('/reservation-screen');
      },
      getHotelDetails(specificHotel) {
        this.$store.commit("setspecificHotelDetails", specificHotel);
      },
    },
  }

</script>

<style>
  #room-type {
    float: left;
    width: 100%;
    text-align: left;
    margin: 2% 0 7% 0;
  }

  #hotel-details {
    padding: 7.5% 0 0 5%;
  }

  #reservation-detail-section {
    float: right;
    width: 35%;
  }

  #room-img {
    width: 300px;
    height: 235px;
    float: left;
  }

  #room-price {
    font-size: 20pt;
    padding: 10% 0 0 5%;
  }

  #extra-hotel-detail {
    padding: 0 0 13% 5%;
  }

  #reserveer-btn {
    width: 70%;
  }

  @media only screen and (max-width: 1450px) {
    #room-img {
      width: 60%;
      height: 60%;
      float: left;
    }

    #hotel-details {
      font-size: 70%;
    }

    #room-price {
      font-size: 15pt;
    }

    #extra-hotel-detail {
      font-size: 70%;
    }
  }

</style>
