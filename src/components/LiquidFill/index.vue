<template>
  <ve-liquidfill
    height="100%"
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>

function getColor (value) {
  return value > 0 && value <= 0.5 ? 'rgba(97, 216, 0, .7)'
    : value > 0.5 && value <= 0.8 ? 'rgba(204, 178, 26, .7)'
      : value > 0.8 ? 'rgba(241, 47, 28, .7)' : '#c7c7cb'
}

export default {
  data () {
    return {
      chartSettings: {},
      chartData: {
        columns: ['title', 'percent'],
        rows: [{
          title: 'rate',
          percent: 0.38
        }]
      }
    }
  },
  mounted () {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          label: {
            formatter: (v) => `${Math.floor(v.data.value * 100)}%`,
            textStyle: {
              fontSize: 36,
              color: '#999',
              fontWeight: 'normal'
            },
            insideColor: 'blue'
          },
          outline: {
            itemStyle: {
              borderColor: '#aaa4a4',
              borderWidth: 1,
              color: 'none',
              shadowBlur: 0,
              shadowColor: 'white'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: 'white'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: 'white'
          },
          amplitude: 8,
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>

<style>
#container {
  width: 100%;
  height: 100%;
}
</style>
