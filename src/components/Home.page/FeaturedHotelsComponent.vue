<template>
  <div>
    <div class="featured-hotels">
      <div class="hotel-image-column">
        <img :src="hotel.img" alt="hotel img">
      </div>
      <!--box 2-->
      <div class="hotel-information-column">
        <p id="hotel-heading">{{hotel.name}} - {{hotel.city}}</p>
        <p id="hotel-place">{{hotel.city}}, {{hotel.country}}</p>
      </div>
      <!--box 3-->
      <div id="specifications">
        <hotelRequirements />
      </div>
      <!--box 4-->
      <div class="price-column">
        <section id="price-section">
          <p id="from-price-section">Vanaf</p>
          <p id="room-price">€{{hotel.price}},- p.p.p.n</p>
          <button @click="getSpecificHotel(hotel)">Lees meer</button>
        </section>

      </div>
    </div>
    <br><br>
  </div>
</template>
<script>
  import hotelRequirements from '@/components/HotelRequirements.vue'
  export default {
    name: 'featuredHotels',
    props: {
      featuredHotelList: {
        type: Object,
        required: false,
      },
      hotel: {
        type: Object,
        required: true,
      },
    },
    components: {
      hotelRequirements,
    },
    methods: {
      getSpecificHotel(hotel) {
        this.$store.commit("setSpecificHotel", hotel, JSON.parse(window.localStorage.getItem(
          "hotel")));
        window.localStorage.setItem('hotel', JSON.stringify(hotel))
        this.$router.push('/hotel');
      },
    },
  }

</script>

<style>
  .featured-hotels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid grey;
    background: #ffffff;
  }

  /*grid: box 1*/
  .hotel-image-column {
    grid-column: 1/2;
    grid-row: 1/3;
    height: 280px;
  }

  .hotel-image-column img {
    width: 100%;
    height: 100%;
  }

  /*grid box 2*/
  .hotel-information-column {
    grid-column: 2/4;
    grid-row: 1/2;
    text-align: left;
    margin-top: 2%;
  }

  #hotel-heading {
    width: 90%;
    font-size: 15pt;
    padding: 0 5%;
    color: #05386B;
  }

  #hotel-place {
    width: 90%;
    font-size: 11pt;
    padding: 5px 5%;
    color: grey;
  }

  /* grid box 3 */
  #specifications {
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 15% 0 0 10%;
  }

  .clear {
    clear: both;
  }

  /*grid box 4*/
  .price-column {
    grid-column: 3/4;
    grid-row: 2/3;

  }

  #price-section {
    width: 60%;
    padding: 10% 0 0 20%;
  }


  #from-price-section {
    font-size: 20pt;
    color: #05386B;
  }

  #room-price {
    text-align: left;
    font-size: 25pt;
    color: #05386B;
    padding-bottom: 5%;
  }

  #from-price-section,
  #price {
    text-align: left
  }

  button {
    border: none;
    color: #EDF5E1;
    background-color: #05386B;
    float: left;
    width: 80%;
    height: 50px;
    font-size: 15pt;
  }

  @media only screen and (max-width: 1450px) {

    #from-price-section,
    #room-price {
      font-size: 15pt;
    }
  }

  @media only screen and (max-width: 600px) {
    .featured-hotels {
      background-color: #EDF5E1;
      border: none;
      width: 100%;
      transform: translateY(-15%);
    }

    /*box1*/
    .hotel-image-column {
      grid-column: 1/4;
      grid-row: 2/3;
    }

    /*box2*/
    .hotel-information-column {
      grid-column: 1/4;
      grid-row: 1/2;
      border-top: 1px solid grey;
      padding: 3% 0;
    }

    #hotel-place {
      display: none;
    }

    /* grid box 3 */
    #specifications {
      display: none;
    }

    /*grid box 4*/
    .price-column {
      grid-column: 1/4;
      grid-row: 3/4;
      height: 50%;
    }
    #price-section {
      width: 100%;
      padding: 2.5% 0;
    }

    #room-price {
      float: left;
      width: 50%;
      margin: 0 2%;
    }

    #from-price-section {
      display: none;
    }

    button {
      width: 40%;
      float: right;
      margin: 1% 2%;
    }

  }

</style>
