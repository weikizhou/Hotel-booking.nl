<template>
  <div class="contact">
    <p class="current-page">Contact</p>
    <div id="contact-wrapper">
      <section id="frequently-asked-questions-section">
        <h4>Meest gestelde vragen</h4>
        <h5>Hoe moet ik betalen?</h5>
        <p>
          Wij zijn op dit moment druk bezig,
          met een online betalingssyteem.
          Maar geen zorgen! Bij ons staat
          jouw kamer reservering vast als je
          jouw reservering bevestigd en terug
          te zien is in 'mijn gereserveerde kamers'.
          Betalen doe je pas na je verblijf in de
          desbetreffende hotel.
        </p>
        <h5>Komen er extra kosten bij?</h5>
        <p>
          Naast de kamer prijs hanteren de
          meeste hotels toeristenbelasting.
          De hoogte van de toeristenbelasting
          verschilt per hotel. Hotels mogen zelf
          bepalen of zij toeristenbelasting heffen
          en hoe zij het tarief berekenen.
          Bijvoorbeeld een vast bedrag per verblijf of
          een percentage per overnachttingsprijs.
          Elke gemeente kan de hoogte regelen in een
          eigen verordering. De verordering kunt u
          opvragen of inzien bij de desbetreffendehotel.
        </p>
      </section>
      <section id="contact-details-section">
        <h4 id="contact-details">Contactgegevens</h4>
        <h5>Adres</h5>
        <p id="adres">
          Hotel Booking BV.<br>
          Amsterdamse veerkade 20<br>
          2516 OG Den Haag<br>
          (070)-9000020<br>
          <br><br>
          U kunt gerust bellen!<br>
        </p>
        <iframe id="map"
          src="https://maps.google.com/maps?width=200&height=400&hl=nl&q=1202%20JJ%20DenHaag%20+(Music4U)&ie=UTF8&t=&z=11&iwloc=B&output=embed"
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a
            href="https://www.mapsdirections.info/nl/maak-een-google-map/">Maak een Google Map</a>
          van <a href="https://www.mapsdirections.info/nl/">Nederland Kaart</a></iframe>
      </section>
      <section id="contact-options">
        <h4 id="contact-us-title">Andere contact mogelijkheden</h4>
        <a href="https://www.messenger.com/"><img
            :src="require('@/assets/contact-icons/messenger.png')" alt="messenger"></a>
        <a href="tel:0624363481"><img :src="require('@/assets/contact-icons/call.png')"
            alt="call"></a>
        <a href="https://twitter.com/?lang=nl"><img
            :src="require('@/assets/contact-icons/twitter.png')" alt="twitter"></a>
        <a href="mailto:noreply@service.hotelbooking.nl"><img
            :src="require('@/assets/contact-icons/mail.png')" alt="mail"></a>
        <img :src="require('@/assets/contact-icons/chat.png')" alt="chat">
        <a href="https://www.whatsapp.com/?lang=nl"><img
            :src="require('@/assets/contact-icons/app.png')" alt="app"></a>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
  }

</script>

<style>
  #contact-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 60%;
    margin: auto;
  }

  #frequently-asked-questions-section,
  #contact-details-section,
  #contact-options {
    padding: 10px;
    text-align: left;
    color: #05386B
  }

  #frequently-asked-questions-section {
    text-align: left;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  h4 {
    padding: 20px 0;
    font-size: 15pt;
  }

  h5 {
    padding: 10px 0;
    font-size: 12pt;
  }

  p {
    font-size: 11pt;
  }

  #contact-details-section {
    margin-left: 5%;
    grid-column: 2/3;
    grid-row: 1/2;
  }

  #map {
    padding-top: 5%;
    width: 80%;
    height: 40%;
  }

  #contact-options {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  #contact-options img {
    margin-left: 5%;
  }

  @media only screen and (max-width: 600px) {
    #frequently-asked-questions-section {
      grid-column: 1/4;
      grid-row: 1/2;
    }

    #contact-details-section {
      grid-column: 1/4;
      grid-row: 2/3;
      margin: 0;
    }

    #contact-details,
    #contact-us-title {
      width: 100%;
      background-color: #379683;
      color: #ffffff;
      text-decoration: underline;
      padding-left: 5%;
    }

    #map {
      float: right;
      width: 40%;
      height: 40%;
      transform: translateY(-20%);
    }

    p#adres {
      width: 50%;
      margin: 0;
      float: left;
    }

    #contact-options {
      grid-column: 1/4;
      grid-row: 3/4;
      margin-bottom: 15%;
    }

    #contact-options img {
      padding: 2% 0;
    }
  }

</style>
