<template>
  <div class="total-sales">
    <common-card
      title="累计用户数"
      value="1,087,503"
    >
      <template>
        <v-chart :options="data"></v-chart>
      </template>
      <template #footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
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
          bottom: 0,
          left: 0
        },
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: '总量', // 将相同数据的图表合并
            barWidth: '10px',
            itemStyle: {
              color: '#45c946'
            },
            data: [100]
          },
          {
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: '#eee'
            },
            data: [250]
          },
          {
            type: 'custom', // 自定义系列
            stack: '总量',
            renderItem (params, api) {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M937.7 268.6c26.2 26.2 26.2 68.6 0 94.7l-379 379c-26.2 26.2-68.6 26.2-94.7 0l-379-379c-26.2-26.2-26.2-68.6 0-94.7h852.7z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10
                    },
                    style: {
                      fill: '#45c946'
                    },
                    layout: 'cover'
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M86.3 755.4c-26.2-26.2-26.2-68.6 0-94.7l379-379c26.2-26.2 68.6-26.2 94.7 0l379 379c26.2 26.2 26.2 68.6 0 94.7l-852.7 0z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10
                    },
                    style: {
                      fill: '#45c946'
                    },
                    layout: 'cover'
                  }
                ]
              }
            },
            data: [100]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 14px;
  }
}
</style>
