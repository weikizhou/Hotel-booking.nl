<template>
  <div class="home">
    <p class="current-page" v-if="searchText !== ''">Zoekresultaat: {{searchText}} <span
        id="search-results">Gevonden resultaten: {{ this.theSearchList.length }} /
        {{ hotelList.length }}</span> </p>
    <p class="current-page" v-else>Uitgelichte Hotels</p>
    <div id="home-wrapper">
      <div id="box1">
        <search-bar v-on:sendSearchList="setSearchList" :hotelList="hotelList"
          @show:featuredHotel="searchList" />
      </div>
      <div id="box2">
        <div v-if="searchText ==''">
          <featuredHotels v-for="(hotel, key) in hotelList" :key="key" :hotel="hotel" />
        </div>
        <div v-if="searchText !==''">
          <featuredHotels v-for="(hotel, key) in UpdatedFeaturedHotels" :key="key" :hotel="hotel"
            :UpdatedFeaturedHotels="UpdatedFeaturedHotels" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from '@/api/api';
  import SearchBar from '@/components/Home.page/SearchBarComponent.vue';
  import FeaturedHotels from '@/components/Home.page/FeaturedHotelsComponent.vue'

  export default {
    name: 'home',
    components: {
      SearchBar,
      FeaturedHotels,

    },
    data() {
      return {
        searchText: '',
        hotelList: [],
        UpdatedFeaturedHotels: {},
        theSearchList: [],
      }
    },
    async created() {
      this.hotelList = await Api.Hotel.fetchAll();
    },
    methods: {
      searchList(searchList, searchText) {
        this.UpdatedFeaturedHotels = searchList;
        this.searchText = searchText;
      },
      setSearchList(value) {
        this.theSearchList = value;
      }
    }

  };

</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  #home-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr 4fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
  }

  #box1 {
    grid-column: 1/2;
    grid-row: 2/5;
    padding: 10px;
    transform: translateY(-80px);
    background-color: #EDF5E1;
  }

  #box2 {
    grid-column: 2/4;
    grid-row: 2/2;
    transform: translateY(-13%);
    margin: 0 40px;
    height: 280px;
  }

  #search-results {
    float: right;
    padding-right: 3%;
  }

  @media only screen and (max-width: 1450px) {
    #search-icon {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    * {
      margin: 0;
      padding: 0;
    }

    #box1 {
      grid-column: 1/4;
      grid-row: 1/2;
    }

    #box2 {
      grid-column: 1/4;
      grid-row: 2/3;
    }
  }

</style>
