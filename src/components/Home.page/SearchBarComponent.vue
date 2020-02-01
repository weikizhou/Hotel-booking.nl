<template>
  <div>
    <section>
      <input id="searchbar" type="search" placeholder="Zoek een stad..." v-model="searchText"
        @keyup="filteredHotels(), showFeaturedHotels(searchList), hideSearchIcon(), sendSearchList()">
      <img id="search-icon" :src="require('@/assets/search-symbol.png')" alt="search-symbol">
    </section>
    <br><br>
    <div v-if="searchText==''">
      <ul>
        <li v-for="(hotel, key) in hotelList" :key="key" :hotel="hotel">
          <p id="hotel-location-country">{{ hotel.city }}</p>
          <p id="">{{ hotel.country }} {{ hotel.continent }}</p>
        </li>
      </ul>

    </div>
    <div v-else>
      <ul>
        <li v-for="(hotel, key) in searchList" :key="key" :hotel="hotel">
          <p id="hotel-location-country">{{ hotel.city }}</p>
          <p id="hotel-spot-country-continent">{{ hotel.country }} {{ hotel.continent }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-bar',
    data: () => ({
      searchText: '',
      searchList: [],
    }),
    props: {
      hotelList: {
        type: Array,
        required: true,
      }
    },
    methods: {
      filteredHotels() {
        this.searchList = this.hotelList.filter((hotel) => {
          const city = hotel.city.toLowerCase();
          const country = hotel.country.toLowerCase();
          const continent = hotel.continent.toLowerCase();
          const name = hotel.name.toLowerCase();

          const searchText = this.searchText.toLowerCase().trim();
          if (city.includes(searchText) || country.includes(searchText) || continent.includes(
              searchText) || (name.includes(searchText))) {
            return true;
          }
        })
      },
      showFeaturedHotels(searchList) {
        this.$emit('show:featuredHotel', searchList, this.searchText);
      },
      hideSearchIcon() {
        let hideIcon = document.getElementById('search-icon').style.display = 'none';
        let searchBarWidth = document.getElementById('searchbar').style.width = '100%';

        if (this.searchText == '') {
          let showIcon = document.getElementById('search-icon').style.display = 'block';
          let searchBarWidth = document.getElementById('searchbar').style.width = '88%';
        }
      },
      sendSearchList(event) {
        this.$emit('sendSearchList', this.searchList)
      }
    },
  };

</script>

<style>
  #searchbar {
    float: left;
    margin-right: 3%;
    border-radius: 5px;
    width: 88%;
    height: 30px;
  }

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }

  #search-icon {
    float: left;
    margin: 5px 0;
  }

  li {
    border: 1px solid black;
    padding: 10px;
    color: #05386B;
    list-style-type: none;
  }

  p#hotel-location-country {
    font-size: 15pt;
  }

  p#hotel-spot-country-continent {
    font-size: 10pt;
  }

  @media only screen and (max-width: 1450px) {
    #search-icon {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    #searchbar {
      width: 100%;
      border-radius: 10px;
    }

    li {
      border: none;
      width: 45%;
      float: left;
    }

    p#hotel-location-country {
      font-size: 14pt;
    }
  }

</style>
