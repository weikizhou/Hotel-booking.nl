<template>
  <div id="hotel-reservation-info-container">
    <hr id="stripe">
    <div id="hotel-room-details">
      <p>
        {{specificRoom.roomType}} <span>€ {{specificRoom.roomPrice}}</span><br>
        {{specificRoom.bedType}}<br>
        max {{specificRoom.maxPerson}} personen<br>
      </p>
      <section id="extra-costs-container">
        <p class="extra-cost">Bijkomende kosten: <span>€
            {{specificRoom.additionalCosts}}</span></p>
        <p class="extra-cost">ToeristenBelasting: <span>€ {{specificRoom.touristTax}}</span>
        </p>
        <p class="extra-cost">Persoon per nacht: <span>€
            {{specificRoom.personPerNight}}</span>
        </p>
        <p class="extra-cost">Servicekosten: <span>€ {{specificRoom.serviceFee}}</span></p>
      </section>
      <section>
        <p id="total-price">
          totaal: <span>€ {{calculateRoomCost(specificRoom)}}</span><br>
          <span id="persoon-per-nacht">*personen per nacht</span>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    name: 'reservation-screen',
    data() {
      return {
        totalPrice: null,
      }
    },
    computed: {
      ...mapState([
        'specificRoom',
        'specificHotelDetails',
      ]),

    },
    methods: {
      calculateRoomCost: function () {
        let totalPrice =
          this.specificRoom.roomPrice +
          this.specificRoom.additionalCosts +
          this.specificRoom.touristTax +
          this.specificRoom.personPerNight +
          this.specificRoom.serviceFee;
        return Math.round(totalPrice);
      },
    },

  }

</script>

<style>
  #hotel-reservation-info-container {
    width: 100%;
    text-align: left;
    color: #05386b;
  }

  #stripe {
    display: none;
  }

  #extra-costs-container {
    padding-top: 10%;
  }

  .extra-cost {
    padding: 1.1% 0;
  }

  span {
    float: right;
  }

  #total-price {
    font-size: 20pt;
  }

  #persoon-per-nacht {
    font-size: 12pt;
  }

  @media only screen and (max-width: 900px) {
    #hotel-reservation-info-container {
      padding: 5% 10%;
    }

    #stripe {
      display: block;
    }
  }

</style>
