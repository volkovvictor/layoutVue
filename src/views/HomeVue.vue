<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <tour-component v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
    </div>
  </div>
</template>

<script>
import TourComponent from "@/components/TourComponent.vue";

export default {
  components: { TourComponent },
  computed: {
    tours() {
      return this.$store.getters["getTours"];
    },
  },
};
</script>
