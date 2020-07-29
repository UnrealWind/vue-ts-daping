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
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '',
        type: 'gauge',
        center: ['50%', '80%'],
        data: [],
        radius: '150%',
        startAngle: 180, // 开始角度
        endAngle: -0, // 结束角度
        axisLine: { // 坐标轴线
          lineStyle: { // 属性lineStyle控制线条样式
            color: [[0.20, 'lime'], [0.80, '#1e90ff'], [1, '#ff4500']],
            width: 3,
            shadowColor: '#fff', // 默认透明
            shadowBlur: 10
          }
        },
        axisLabel: { // 坐标轴小标记
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fff', // 默认透明
          shadowBlur: 10
        },
        axisTick: { // 坐标轴小标记
          length: 0, // 属性length控制线长
          lineStyle: { // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', // 默认透明
            shadowBlur: 10
          }
        },
        splitLine: { // 分隔线
          length: 10, // 属性length控制线长
          lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
            width: 1,
            color: '#fff',
            shadowColor: '#fff', // 默认透明
            shadowBlur: 10
          }
        },
        pointer: { // 分隔线
          shadowColor: '#fff', // 默认透明
          shadowBlur: 5
        },
        title: {
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 16,
            color: '#fff',
            shadowColor: '#fff', // 默认透明
            shadowBlur: 10
          }
        },
        detail: {
          shadowColor: '#fff', // 默认透明
          shadowBlur: 5,
          formatter: '{value}%',
          offsetCenter: [0, '15%'], // x, y，单位px
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: '700',
            color: '#fff',
            fontSize: 18
          }
        }
      }
    ]
  }
}

interface guageChartData {
  data: object[]
  name: string
}

@Component({
  name: 'BarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '250px' }) private height!: string
  @Prop({ default: () => {} }) private data!: guageChartData

  @Watch('data')
  private onValueChange(value: object) {
    this.initData()
  }

  private options:any

  mounted() {
    this.initData()
  }

  initData() {
    if (!this.data.data) return
    this.options = getOptions()
    this.options.series[0].data = this.data.data
    this.options.series[0].name = this.data.name
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
    this.chart.setOption(this.options as EChartOption<EChartOption.SeriesBar>, true)
    // this.chart.getDom().style.height = '800px' // 设置高度
    // this.chart.resize() // 重载
  }
}
</script>
