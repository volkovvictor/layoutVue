<template>
  <router-link :to="getID">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img
        :src="require(`@/assets/img/${tour.img}`)"
        class="mb-3"
        :alt="tour.img"
      />

      <h3 class="">{{ tour.title }}</h3>
      <div class="description">
        {{ tour.description | filterText }}
        <br />
        <span v-if="tour.description.length >= 400">Читать далее ...</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getID(props) {
      return "/single/" + props.tour.id;
    },
  },

  filters: {
    filterText(value) {
      return value.length >= 400 ? value.slice(0, 400) + "..." : value;
    },
  },
};
</script>
