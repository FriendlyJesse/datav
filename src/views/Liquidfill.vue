<template>
  <div id="container">
    456
  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  mounted () {
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data: [0.68, {
          value: 0.5,
          direction: 'left'
        }, {
          value: 0.3,
          itemStyle: {
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9
            }
          }
        }],
        color: ['red', 'blue', 'yellow'],
        // waveAnimation: false,
        // animationDuration: 0,
        // animationDurationUpdate: 0,
        amplitude: 50,
        backgroundStyle: {
          color: 'purple',
          borderWidth: 4
        }
      }]
    })
  }
}
</script>

<style>
#container {
  width: 100%;
  height: 100%;
}
</style>
