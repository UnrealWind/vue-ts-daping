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
      },
      formatter: function(params) {
        let tar
        if (params[1].value !== '-') {
          if (params[2]) {
            tar = params[1]
            tar.value = Number(params[1].value) + Number(params[2].value)
          } else {
            tar = params[1]
          }
        } else {
          tar = params[0]
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    grid: {
      left: '15',
      right: '15',
      bottom: '10',
      top: '30',
      containLabel: true
    },
    xAxis: {
      // type:'category',
      data: ['1', '2', '3', '4'],
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#ddd', // 左边线的颜色
          width: '2'// 坐标线的宽度
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ccc'// 坐标值得具体的颜色

        }
      }
    },
    yAxis: {
      type: 'value',
      splitArea: {
        show: true
      },
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
    },
    series: [
      { // 起始结束柱形[0]
        name: '当前值',
        type: 'bar',
        stack: 'total',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(121, 218, 255)',
            barBorderRadius: 8
          }
        },
        barGap: '50%', /* 多个并排柱子设置柱子之间的间距 */
        barCategoryGap: '30%',
        data: []
      },
      { // 辅助柱形[1]
        name: '当前值',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        barGap: '50%', /* 多个并排柱子设置柱子之间的间距 */
        barCategoryGap: '30%',
        data: [0]
      },
      { // 上升的红色柱形[2]
        name: 'up',
        type: 'bar',
        stack: 'total',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        barGap: '50%', /* 多个并排柱子设置柱子之间的间距 */
        barCategoryGap: '30%',
        itemStyle: {
          normal: {
            color: 'rgb(121, 218, 255)',
            barBorderRadius: 8
          }
        },
        data: []
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
    if (!this.data) return
    this.options = getOptions()
    this.options.xAxis.data = this.data[0].chartX
    this.options.xAxis.data.push('当前值')
    let total = 0
    this.data[0].data.forEach((n, i) => {
      total += Number(n)
      this.options.series[0].data.push('-')
      if (this.data[0].data.length - 1 !== i) this.options.series[1].data.push(total)
      this.options.series[2].data.push(n)
    })
    this.options.series[0].data.push(total)
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
