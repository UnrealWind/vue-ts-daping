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
    formatter: '{b}: {c} ({d}%)'
  },
  color: ['#fbf320', '#3dfffb', '#ffffff', '#2bcafb', '#397cfd', '#faad14'],
  grid: { containLabel: true, top: 0, left: 10 },
  series: [
    {
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
          formatter: '{c}\n{b}'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: 'ACPL' },
        { value: 310, name: 'CM2350' },
        { value: 234, name: 'ACPL ' },
        { value: 135, name: 'CM2350 ' }
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
  @Prop({ default: '255px' }) private height!: string

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
