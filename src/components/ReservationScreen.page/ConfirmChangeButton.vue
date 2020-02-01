<template>
  <div id="confirmed-button-container">
    <button id="confirmBtn" @click='confirmReservation'>Bevestigen</button>
    <button id="changeBtn" @click='changePersonData'>Wijzigen</button>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    name: 'ConfirmChangeButton',
    props: {
      persons: {
        type: Array,
        required: true,
      }
    },
    computed: {
      ...mapState([
        'specificRoom',
        'specificHotelDetails',
        'isConfirmedReservation',
      ])
    },
    methods: {
      changePersonData() {
        this.$emit('SwitchComponents')
      },
      confirmReservation() {
        let reservation = {
          person: this.persons,
          room: this.specificRoom,
          place: this.specificHotelDetails,
        }
        this.$store.commit('setConfirmedReservation', reservation);
        this.$router.push('/reserved-room');
      },
    }
  }

</script>

<style>
  #confirmed-button-container {
    float: left;
    width: 100%;
  }

  #changeBtn {
    float: right;
    width: 40%;
    margin-bottom: 5%;
  }

  #confirmBtn {
    float: right;
    width: 40%;
    margin: 0 0 5% 3%;
  }

  @media only screen and (max-width: 600px) {
    #changeBtn {
      width: 30%;
      margin: 0 0 11% 0;
    }

    #confirmBtn {
      width: 30%;
      margin: 0 0 10% 3%;
    }
  }

</style>
