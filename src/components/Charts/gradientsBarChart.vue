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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '15',
      right: '15',
      bottom: '10',
      top: '30',
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#ddd', // 左边线的颜色
          width: '2'// 坐标线的宽度
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#315070'],
          width: 1,
          type: 'solid'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ccc'// 坐标值得具体的颜色

        }
      }
    }],
    yAxis: [{
      type: 'category',
      data: [],
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#ddd', // 左边线的颜色
          width: '2'// 坐标线的宽度
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#315070'],
          width: 1,
          type: 'solid'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ccc'// 坐标值得具体的颜色

        }
      }
    }],
    series: [
      {
        name: '',
        type: 'bar',
        data: [],
        barWidth: 12, // 柱图宽度
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,244,255,1)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0,77,167,1)' // 100% 处的颜色
            }], false),
            barBorderRadius: [30, 30, 30, 30],
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4
          }
        }
      }
    ]
  }
}

  interface barChartData {
    data: number[]
    chartY: string[]
    chartX: string[]
    barWidth:number,
    barColor:string
  }

  @Component({
    name: 'BarChart'
  })
export default class extends mixins(ResizeMixin) {
    @Prop({ default: 'chart' }) private className!: string
    @Prop({ default: '100%' }) private width!: string
    @Prop({ default: '250px' }) private height!: string
    @Prop({ default: () => {} }) private data!: barChartData

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
      this.options.yAxis[0].data = this.data.chartY || this.data.chartX

      // 如果有barWidth 则使用这个
      if (this.data.barWidth) {
        this.options.series[0].barWidth = this.data.barWidth
      }

      if (this.data.barColor) {
        this.options.series[0].itemStyle.normal.color = this.data.barColor
      }

      if (this.data.chartX) {
        [this.options.yAxis, this.options.xAxis] = [this.options.xAxis, this.options.yAxis]
        this.options.xAxis[0].splitLine.show = false
      } else {
        this.options.yAxis[0].splitLine.show = false
      }

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
