import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    specificHotel: [],
    specificRoom: [],
    specificHotelDetails: [],
    TemporaryReservation: [],
    isConfirmedReservation: [],

  },
  plugins: [createPersistedState()],
  mutations: {
    setSpecificHotel: (state, specificHotel) => {
      state.specificHotel = specificHotel;
    },
    setSpecificRoom: (state, aRoom) => {
      state.specificRoom = aRoom;
    },
    setspecificHotelDetails: (state, specificHotel) => {
      state.specificHotelDetails = [
        specificHotel.name,
        specificHotel.city,
        specificHotel.country,
        specificHotel.continent,
      ];
    },
    setTemporaryReservation: (state, persons) => {
      state.TemporaryReservation = persons;
    },
    setConfirmedReservation: (state, reservation) => {
      state.isConfirmedReservation.push(reservation);
    }
  },
})
