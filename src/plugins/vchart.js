import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import VeBMap from 'v-charts/lib/bmap.common'
import VeLiquidfill from 'v-charts/lib/liquidfill.common'
import VeWordcloud from 'v-charts/lib/wordcloud.common'
import 'v-charts/lib/style.css'

Vue.component('ve-line', VeLine)
Vue.component('ve-bmap', VeBMap)
Vue.component('ve-liquidfill', VeLiquidfill)
Vue.component('ve-wordcloud', VeWordcloud)
