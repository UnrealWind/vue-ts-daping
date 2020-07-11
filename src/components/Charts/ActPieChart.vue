<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  />
</template>

<script lang="ts">
// eslint-disable-next-line
import echarts, { EChartOption } from 'echarts'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ResizeMixin from '@/components/Charts/mixins/resize'

function getOptions() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    color: ['#2483ff', '#a3f6ff', '#3dabff', '#2bcafb', '#fff'],
    grid: { containLabel: true, top: 0, left: 10, bottom: 0 },
    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        hoverOffset: 4,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 13,
            formatter: '{c}\n{b}'
          }
        },
        labelLine: {
          show: false
        },
        data: []
      }
    ]
  }
}

interface pieChartData {
  data:[],
}

@Component({
  name: 'PieChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '160px' }) private height!: string
  @Prop({ default: () => {} }) private data!:pieChartData
  private options:any

  @Watch('data')
  private onValueChange(value: object) {
    this.initData()
  }

  mounted() {
    this.initData()
  }

  initData() {
    this.options = getOptions()
    this.options.series[0].data = this.data
    this.$nextTick(() => {
      this.initChart()
    })
  }

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }

  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, 'macarons')
    this.chart.setOption(this.options as EChartOption<EChartOption.SeriesPie>)
    let charPie3currentIndex = 0

    const targetChart:any = this.chart

    this.chart.on('mouseover', function(params) {
      if (params.dataIndex !== charPie3currentIndex) {
        targetChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: charPie3currentIndex
        })
      }
    })
    setInterval(() => {
      const dataLen = this.options.series[0].data.length
      // 取消之前高亮的图形
      targetChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
      })
      charPie3currentIndex = (charPie3currentIndex + 1) % dataLen
      // 高亮当前图形
      targetChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
      })
    }, 3000)
  }
}
</script>
