<template>
  <ve-wordcloud
    height="100%"
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: '呵呵',
            value: 100
          },
          {
            name: '呵呵1',
            value: 101
          },
          {
            name: '呵呵2',
            value: 102
          },
          {
            name: '呵呵3',
            value: 103
          },
          {
            name: '呵呵4',
            value: 104
          }
        ]
      },
      chartSettings: {
        color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)', 'rgba(245, 266, 35, .7)', 'rgba(156, 13, 113, .7)']
      }
    }
  }
}
</script>

<style>

</style>
