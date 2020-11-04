<template>
  <div class="home">
    <top-view />
    <sales-view />
    <map-view />
    <bottom-view />
  </div>
</template>

<script>
import TopView from '@/components/TopView/index.vue'
import SalesView from '@/components/SalesView/index.vue'
import MapView from '@/components/MapView/index.vue'
import BottomView from '@/components/BottomView/index.vue'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
