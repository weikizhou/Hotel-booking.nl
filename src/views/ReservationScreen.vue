<template>
  <div>
    <p class="current-page">Reserveer kamer</p>
    <div id="hotel-reservation-container">
      <roomImg id="room-img-section" />
      <component id="room-detail-section" :is="currentComponentRoomDetail"
        @SwitchComponents="SwitchComponents"></component>
      <!--
      Door de: v-on:childToParent="setPersonList"
      wordt de data van de Child component naar de Parent 
      Component verstuurd
    -->
      <component id="personal-data-section" v-on:childToParent="setPersonList" :persons="persons"
        :is="currentComponentData" @SwitchComponents="SwitchComponents"></component>
      <!--
      Ik stuur de persons data naar de 
      confirmReservation component
    -->
      <component id="btn-section" :persons="persons" :is="currentComponentButton"
        @SwitchComponents="SwitchComponents">
      </component>
    </div>

  </div>
</template>
<script>
  import roomImg from '@/components/ReservationScreen.page/RoomImg.vue';
  import roomDetails from '@/components/ReservationScreen.page/RoomDetails.vue';
  import personalData from '@/components/ReservationScreen.page/PersonalData.vue';
  import ConfirmButton from '@/components/ReservationScreen.page/ConfirmButton.vue';
  import ConfirmReservationData from '@/components/ReservationScreen.page/ConfirmReservationData.vue';
  import ConfirmChangeButton from '@/components/ReservationScreen.page/ConfirmChangeButton.vue';
  import ConfirmedRoomDetail from '@/components/ReservationScreen.page/ConfirmedRoomDetail.vue';

  import {
    mapState
  } from "vuex";

  export default {
    name: 'reservation-screen',
    components: {
      roomImg,
      roomDetails,
      personalData,
      ConfirmButton,
      ConfirmReservationData,
      ConfirmChangeButton,
      ConfirmedRoomDetail,
    },
    computed: {
      ...mapState([
        'specificRoom',
        'specificHotelDetails',
      ])
    },
    data() {
      return {
        persons: [],
        currentComponentData: personalData,
        currentComponentButton: ConfirmButton,
        currentComponentRoomDetail: roomDetails,
      }
    },
    methods: {
      setPersonList(value) {
        this.persons = value;
      },
      SwitchComponents() {
        if (this.currentComponentData == personalData) {
          this.currentComponentData = ConfirmReservationData;
        } else {
          this.currentComponentData = personalData;
        }
        if (this.currentComponentButton == ConfirmButton) {
          this.currentComponentButton = ConfirmChangeButton;
        } else {
          this.currentComponentButton = ConfirmButton;
        }
        if (this.currentComponentRoomDetail == roomDetails) {
          this.currentComponentRoomDetail = ConfirmedRoomDetail;
        } else {
          this.currentComponentRoomDetail = roomDetails;
        }
      }
    },
  }

</script>
<style>
  #hotel-reservation-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
    margin: 2% 0 0 25%;
    color: #05386b;
  }

  #room-img-section {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  #room-img {
    width: 100%;
    height: 40%;
  }

  #room-detail-section {
    grid-column: 1/2;
    grid-row: 2/5;
  }

  #personal-data-section {
    grid-column: 2/3;
    grid-row: 1/4;
    margin-left: 5%;
  }

  #btn-section {
    grid-column: 2/3;
    grid-row: 4/5;
  }

  #hotel-reservation-info-container img {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    #hotel-reservation-container {
      margin: 2% 0 0 0%;
    }

    #room-img-section {
      grid-column: 1/4;
      grid-row: 1/2;
      margin-left: 0 5%;
    }

    #room-detail-section {
      grid-column: 1/4;
      grid-row: 3/4;
      margin: 0 5%;
    }

    #personal-data-section {
      grid-column: 1/4;
      grid-row: 2/3;
      margin: 0 5%;
    }

    #btn-section {
      grid-column: 1/4;
      grid-row: 4/5;
      margin: 0 5% 5% 0;
    }
  }

</style>
