<template>
  <div>
    <div id="hotelRequirements">
      <section>
        <img class="img-hotel-requirement" :src="require('@/assets/hotel-requirements/wifi.png')"
          alt="wifi">
        <p class="hotel-requirement-text">Wifi</p>
      </section>
      <p class="clear"></p>
      <section>
        <img class="img-hotel-requirement"
          :src="require('@/assets/hotel-requirements/restaurant.png')" alt="restaurant">
        <p class="hotel-requirement-text">Restaurant</p>
      </section>
      <p class="clear"></p>
      <section>
        <img class="img-hotel-requirement" :src="require('@/assets/hotel-requirements/fitness.png')"
          alt="fitness hall">
        <p class="hotel-requirement-text">Fitness</p>
      </section>
      <p class="clear"></p>
      <section>
        <img class="img-hotel-requirement"
          :src="require('@/assets/hotel-requirements/swimming-pool.png')" alt="swimming pool">
        <p class="hotel-requirement-text">Zwembad</p>
      </section>
      <p class="clear"></p>
      <section>
        <img class="img-hotel-requirement"
          :src="require('@/assets/hotel-requirements/near-by-station.png')" alt="station">
        <p class="hotel-requirement-text">Naast het station</p>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotelRequirements',
  }

</script>

<style>
  .img-hotel-requirement,
  .hotel-requirement-text {
    float: left;
  }

  .hotel-requirement-text {
    text-align: left;
    width: 40%;
    padding: 0 5%;
  }

</style>
