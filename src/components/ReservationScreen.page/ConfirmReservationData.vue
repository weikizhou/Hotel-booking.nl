<template>
  <div>
    <div id="personal-data-container">
      <h3 id='personal-data-title'>Persoonlijke gegevens</h3>
      <p id="number-of-people-text">Aantal personen: </p>
      <div id="fill-in-details-container" v-for="(aPersonsData, i) in TemporaryReservation"
        :key="i">
        <br>
        <h4 id="amount-of-person">Persoon {{i+1}}</h4>
        <hr>
        <section class="confirmedPersonalDataField">
          <label class="personal-data" for="firstName">Voornaam: </label>
          <p class="data-output">{{aPersonsData[0].data}} </p>
        </section>
        <section class="confirmedPersonalDataField">
          <label class="personal-data" for="lastName">Achternaam: </label>
          <p class="data-output">{{aPersonsData[1].data}} </p>
        </section>
        <section class="confirmedPersonalDataField">
          <label class="personal-data" for="mobileNumber">Mobiel: </label>
          <p class="data-output">{{aPersonsData[2].data}} </p>
        </section>
        <section class="confirmedPersonalDataField">
          <label class="personal-data" for="email">Email: </label>
          <p class="data-output">{{aPersonsData[3].data}} </p>
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
    name: 'ConfirmedRoomDetail',
    computed: {
      ...mapState([
        'TemporaryReservation',
        'isConfirmedReservation',
      ])
    },
  }

</script>

<style>
  #personal-data-title {
    padding: 2% 0 2% 0;
  }

  #number-of-people-text {
    float: left;
    width: 35%;
  }

  select {
    float: left;
    width: 25%;
  }

  #amount-of-person {
    padding: 6% 0 0 0;
  }

  .confirmedPersonalDataField {
    margin: 3% 0;
  }

  .data-output {
    margin: 0 5%;
    text-align: right;
  }

  section {
    padding: 2% 0;
  }

  .personal-data {
    color: #05386B;
    width: 20%;
    float: left;
    margin-right: 10%;
  }

  @media only screen and (max-width: 600px) {
    .personalDataField {
      margin: 2% 0;
    }
  }

</style>
