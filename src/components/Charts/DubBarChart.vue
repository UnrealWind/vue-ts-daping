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

const myColor = ['rgb(101, 245, 243)']
const data = {
  grade: ['内蒙古', '浙江', '辽宁', '吉林', '黑龙江', '安徽'],
  cost: [30, 30, 40, 50, 60, 70, 50, 40],
  totalCost: [100, 100, 100, 100, 100, 100, 100, 100]
}

function getOptions() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.value !== 100) { return params.name + ' ： ' + params.value }
      }
    },
    backgroundColor: 'transparent',
    grid: {
      left: '60',
      right: '10',
      top: '10',
      bottom: '10'
    },
    xAxis: {
      show: false
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        margin: 10,
        show: true,
        color: '#ccc',
        fontSize: 12
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: data.grade
    },
    series: [{
      type: 'bar',
      barGap: '-65%',
      barWidth: '40%',
      itemStyle: {
        normal: {
          borderColor: '#4DCEF8',
          borderWidth: 1,
          barBorderRadius: 15,
          color: 'rgba(102, 102, 102,0)'
        }
      },
      z: 1,
      data: data.totalCost
      // data: da
    }, {
      type: 'bar',
      barGap: '-85%',
      barWidth: '28%',
      itemStyle: {
        normal: {
          barBorderRadius: 16,
          color: function(params) {
            var num = myColor.length
            return myColor[params.dataIndex % num]
          }
        }
      },
      max: 1,
      labelLine: {
        show: true
      },
      z: 2,
      data: data.cost
    }]
  }
}

interface barChartData {
  grade: string[]
  cost: number[]
  totalCost: number[]
  titleWidth:string
}

@Component({
  name: 'BarChart3'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '180px' }) private height!: string
  @Prop({ default: () => {} }) private data!: barChartData
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
    this.options.yAxis.data = this.data.grade
    this.options.series[1].data = this.data.cost
    this.options.series[0].data = this.data.totalCost
    if (this.data.titleWidth) this.options.grid.left = this.data.titleWidth
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
    this.chart.setOption(this.options as EChartOption<EChartOption.SeriesBar>)
  }
}
</script>
