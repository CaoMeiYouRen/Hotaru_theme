<template>
  <div class="ui container" id="cards">
    <div class="ui doubling three column grid">
      <CardItem v-for="(server, index) of servers" :key="index" :server="server"></CardItem>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import CardItem from '@/components/CardItem.vue';

export default defineComponent({
  name: "Card",
  props: {
    servers: Array as PropType<Array<StatusItem | BoxItem>>
  },
  components: {
    CardItem
  }
})
</script>

<style scoped>
#cards {
  padding-top: 3.4rem;
  padding-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  #cards .column {
    width: 100% !important;
    margin: 0 auto !important;
  }
}
</style>
