<template>
  <div id="button-container">
    <button id="Btn" @click="confirmReservation">Reserveer</button>
  </div>
</template>

<script>
  export default {
    name: 'ConfirmButton',
    props: {
      persons: {
        type: Array,
        required: true,
      }
    },
    methods: {
      confirmReservation() {
        for (let i = 0; i < this.persons.length; i++) {
          for (let index = 0; index < this.persons[i].length; index++) {
            if (this.persons[i][index].data != '') {
              if (this.persons[i][index].error == '') {
                if ((i + 1) == this.persons.length && (index + 1) == this.persons[i].length) {
                  this.$store.commit('setTemporaryReservation', this.persons, JSON.parse(window
                    .localStorage.getItem("persons")));
                  window.localStorage.setItem('persons', JSON.stringify(this.persons))
                  this.$emit("SwitchComponents");
                }
              } else {
                return;
              }
            } else {
              this.checkInput();
              console.log('vak is nog leeg')
              return;
            }
          }
        }
      },
      checkInput() {
        for (let i = 0; i < this.persons.length; i++) {
          for (let index = 0; index < this.persons[i].length; index++) {
            if (this.persons[i][index].data == "") {
              this.persons[i][index].error = '*vak leeg, vul het snel in'
            }
          }
        }
      },
    },
  }

</script>
<style>
  #Btn {
    width: 40%;
    margin: 0 0 10% 0;
    float: right;
  }

</style>
