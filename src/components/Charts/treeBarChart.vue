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

const xKeys = []
const xGroup = []

function getOptions() {
  return {
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      bottom: '30',
      top: '10',
      left: '5',
      right: '5',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        data: xKeys,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#315070'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#ddd'// 坐标值得具体的颜色
          }
        },
        zlevel: 2
      },
      {
        type: 'category',
        data: xGroup,
        position: 'bottom',
        axisLine: {
          onZero: false,
          show: false
        },
        axisLabel: {
          margin: -15,
          interval: (index, value) => {
            if (!value) return false
            return true
          },
          textStyle: {
            color: '#ddd'// 坐标值得具体的颜色
          }
        },
        axisTick: {
          length: 40,
          inside: true,
          interval: (index, value) => {

          },
          lineStyle: {
            color: '#ddd',
            fontSize: '14px'
          }
        },
        offset: 40,
        minorSplitLine: {
          show: true,
          length: 10
        },
        zlevel: 1
      }
    ],
    yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ddd'
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
        type: 'bar',
        data: {},
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#ddd'
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(121, 218, 255)',
            barBorderRadius: 8
          }
        }
        // xAxisIndex: 0,
        // yAxisIndex: 0
      }
    ]
  }
}

interface barChartData {
  data: any[]
  xKeys: string[]
  splitIndex: number[]
  xGroup:string[]
}

@Component({
  name: 'treeBarChart'
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
    // this.options.series[0].data = this.data.data

    this.options.series[0].data = this.data.data.map(item => item.value)
    this.options.xAxis[0].data = this.data.xKeys
    this.options.xAxis[1].data = this.data.xGroup
    this.options.xAxis[1].axisTick.interval = (index, value) => {
      if (index === 0) {
        return true
      }
      if (this.data.splitIndex.indexOf(index) >= 0) {
        return true
      }
      if (this.data.data.length === index) {
        return true
      }
      return false
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
