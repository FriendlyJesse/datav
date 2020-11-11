<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '@/components/TopView/index.vue'
import SalesView from '@/components/SalesView/index.vue'
import MapView from '@/components/MapView/index.vue'
import BottomView from '@/components/BottomView/index.vue'
import { wordcloud } from '@/api'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  },
  mounted () {
    wordcloud()
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
