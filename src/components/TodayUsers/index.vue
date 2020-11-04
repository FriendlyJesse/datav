<template>
  <div class="total-sales">
    <common-card
      title="今日交易用户数"
      value="81,014"
    >
      <template>
        <v-chart :options="data"></v-chart>
        <div id="today-users-chart" :style="{width: '100%', height: '100%'}"></div>
      </template>
      <template #footer>
        <span>退货率</span>
        <span class="emphasis">5%</span>
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
        color: ['#3398DB'],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false,
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00']
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'bar',
          barWidth: '60%',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
