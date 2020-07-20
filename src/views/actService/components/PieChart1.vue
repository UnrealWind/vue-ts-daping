<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  />
</template>

<script lang="ts">
// eslint-disable-next-line
import echarts, { EChartOption } from 'echarts'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ResizeMixin from '@/components/Charts/mixins/resize'

const options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  grid: { containLabel: true, top: 0, left: 30, bottom: 10 },
  color: ['rgb(250, 173, 20)', 'rgb(121, 218, 255)'],
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['60%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          formatter: '{b}: {c} ({d}%)'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 310, name: '派工' },
        { value: 135, name: '短信' }
      ]
    }
  ]
}
@Component({
  name: 'PieChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '345px' }) private height!: string

  mounted() {
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
    this.chart.setOption(options as EChartOption<EChartOption.SeriesPie>)

    let charPie3currentIndex = 0

    // fydebug 这里因为echarts相关并不是ts风格的，所以基本上所有echarts实例相关的基本都用了any了
    const targetChart:any = this.chart
    setInterval(() => {
      const dataLen = options.series[0].data.length
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
