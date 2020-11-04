<template>
  <div class="total-sales">
    <common-card
      title="累计订单量"
      value="2,157,420"
    >
      <template>
        <v-chart :options="data"></v-chart>
      </template>
      <template #footer>
        <span>昨日订单量</span>
        <span class="emphasis">￥20,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [CommonCardMixin],
  data () {
    return {
      data: {
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false // 去掉默认间隔
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
