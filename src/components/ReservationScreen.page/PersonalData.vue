<template>
  <div :personList="personList">
    <div id="personal-data-container">
      <h3 id="personal-data-title">Persoonlijke gegevens</h3>
      <p id="number-of-people-text">Aantal personen:</p>
      <select @change="getNewPerson(amountPeople)" v-model="amountPeople">
        <!--Ik loop het aantal maxPerson wat in de stub staat van die specifieke kamer-->
        <option :value="people" v-for="(people, key) in specificRoom.maxPerson" :key="key">
          {{people}}
        </option>
      </select>
      <!--
        Door de v-model amountPeople die 
        standaard op 1 staat en word veranderd 
        door de select tag loop ik hier hetzelfde 
        aantal inputs van de **fill-in-details-container**
      -->
      <!--
        //SEND THE PERSONLIST TO THE PARENT COMPONENT//

        Als de #fill-in-details-container# 
        wordt veranderd voert hij de sendPersonList uit
      -->
      <div id="fill-in-details-container" @change="sendPersonList"
        v-for="(aPersonsData, i) in personList" :key="i">
        <br>
        <h4 id="amount-of-person">Persoon {{i+1}}</h4>
        <hr>
        <!--FirstName-->
        <section class="personalDataField">
          <label class="personal-data-input" for="firstName">Voornaam: </label>
          <input class="personal-input" type="text" v-model="aPersonsData[0].data"
            placeholder="John" @change="validateInput(i,aPersonsData[0].value)">
          <span class="error">{{aPersonsData[0].error}}</span>
        </section>
        <!--LastName-->
        <section class="personalDataField">
          <label class="personal-data-input" for="lastName">Achternaam: </label>
          <input class="personal-input" type="text" v-model="aPersonsData[1].data" placeholder="Doe"
            @change="validateInput(i,aPersonsData[1].value)">
          <span class="error">{{aPersonsData[1].error}}</span>
        </section>
        <!--MobileNumber-->
        <section class="personalDataField">
          <label class="personal-data-input" for="mobileNumber">Mobiel: </label>
          <input class="personal-input" type="text" v-model="aPersonsData[2].data"
            placeholder="06-12345678" @change="validateInput(i,aPersonsData[2].value)">
          <span class="error">{{aPersonsData[2].error}}</span>
        </section>
        <!--Email-->
        <section class="personalDataField">
          <label class="personal-data-input" for="email">Email: </label>
          <input class="personal-input" type="email" v-model="aPersonsData[3].data"
            placeholder="john.doe@hotmail.com" @change="validateInput(i,aPersonsData[3].value)">
          <span class="error">{{aPersonsData[3].error}}</span>
        </section>
      </div>
    </div>
  </div>

</template>

<script>
  /*
    Doormiddel van de import van vuex kan ik 
    mijn data in dit component versturen/doorsturen. 
  */
  import {
    mapState
  } from "vuex";
  import {
    validateText,
    validateNumber,
    validateEmail
  } from '@/utils/validation.reservation.util';
  export default {
    name: 'personalData',
    data() {
      return {
        amountPeople: 1,
        personList: [
          [{
              value: "firstName",
              error: "",
              data: "",
            },
            {
              value: "lastName",
              error: "",
              data: "",
            },
            {
              value: "mobileNumber",
              error: "",
              data: "",
            },
            {
              value: "email",
              error: "",
              data: "",
            }
          ]
        ]
      }
    },
    methods: {
      getNewPerson(amountPeople) {
        this.amountPeople = parseInt(amountPeople);
        this.personList = [];
        if (this.amountPeople) {
          for (let i = 0; i < this.amountPeople; i++) {
            this.personList.push([{
                value: "firstName",
                error: "",
                data: "",
              },
              {
                value: "lastName",
                error: "",
                data: "",
              },
              {
                value: "mobileNumber",
                error: "",
                data: "",
              },
              {
                value: "email",
                error: "",
                data: "",
              }
            ]);
          }
        } else {
          return;
        }
      },
      hasError(personalDataField) {
        return personalDataField.error !== '';
      },
      /*
      Hier maak ik een switch bij welke data hij hoort, 
      vervolgen leidt ik het naar de **validation.reservation.util.js**
      in de map util. 
      */
      validateInput(i, value) {
        switch (value) {
          case "firstName":
            this.personList[i][0].error = validateText({
              min: 2,
              max: 15
            }, this.personList[i][0].data);
            break;

          case "lastName":
            this.personList[i][1].error = validateText({
              min: 2,
              max: 20
            }, this.personList[i][1].data);
            break;

          case "mobileNumber":
            this.personList[i][2].error = validateNumber({
              min: 10,
              max: 10
            }, this.personList[i][2].data);
            break;

          case "email":
            this.personList[i][3].error = validateEmail(this.personList[i][3].data);
            break;
        }
      },
      /*
        Dit zorgt ervoor dat van 
        de Child component de #personList# 
        wordt verstuurd naar de Parent component
      */
      sendPersonList(event) {
        this.$emit('childToParent', this.personList);
      }
    },
    computed: {
      //Hier geef ik de data specificRoom en specificHotelDetail mee aan deze component. 
      ...mapState([
        'specificRoom',
        'specificHotelDetails',
      ]),
    },
  }

</script>

<style>
  #personal-data-container {
    text-align: left;
    color: #05368B;
  }

  #personal-data-title {
    padding: 2% 0 2% 0;
  }

  #number-of-people-text {
    float: left;
    width: 50% !important;
  }

  select {
    float: left;
    width: 25%;
  }

  #amount-of-person {
    padding: 6% 0 0 0;
  }

  section {
    padding: 2% 5%;
  }

  .personalDataField {
    margin: 5% 0;
  }

  .personal-data-input {
    width: 20%;
    float: left;
  }

  input.personal-input {
    width: 65%;
    margin-left: 12%;
  }

  .error {
    color: red;
    font-size: 10pt;
    padding-left: 32%;
    float: left;
  }

  ::-webkit-input-placeholder {
    text-align: left;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    text-align: left;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: left;
  }

  :-ms-input-placeholder {
    text-align: left;
  }

  @media only screen and (max-width: 1300px) {
    input.personal-input {
      width: 40%;
      margin-left: 25%;
    }

    .personal-data-input {
      width: 15%;
      margin-right: 5%;
      float: left;
    }

    #amount-of-person {
      margin: 5% 0 0 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .personalDataField {
      margin: 2% 0;
    }


  }

</style>
