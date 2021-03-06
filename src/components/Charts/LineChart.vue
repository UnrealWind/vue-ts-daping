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
    grid: { containLabel: true, top: 35, left: 10, bottom: 5, right: 10 },
    color: ['#2483ff', '#a3f6ff', '#2bcafb', '#fff'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['用户总数趋势'],
      textStyle: {
        color: '#ccc',
        fontSize: 12,
        padding: [10, 0, 0, 0]
      }
    },
    xAxis: [{
      type: 'category',
      data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07',
        '01/08', '01/09', '01/10', '01/11', '01/12', '01/13', '01/14',
        '01/15', '01/16', '01/17', '01/18', '01/19', '01/20', '01/21',
        '01/22', '01/23', '01/24', '01/25', '01/26', '01/27', '01/28', '01/29', '01/30', '01/31'],
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#fff', // 左边线的颜色
          width: '2'// 坐标线的宽度
        }
      },
      splitLine: {
        show: false,
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
      type: 'value',
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#fff', // 左边线的颜色
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
    series: []
  }
}

@Component({
  name: 'BarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '228px' }) private height!: string
  @Prop({ default: () => [] }) private data!:[]
  private options:any

  @Watch('data')
  private onValueChange(value: object) {
    this.initData()
  }

  mounted() {
    this.initData()
  }

  initData() {
    if (this.data.length === 0) return
    this.options = getOptions()

    this.data.forEach((n:any, i) => {
      const data:any = {
        name: n.title,
        data: n.data,
        type: 'line',
        smooth: true
      }
      if (n.areaStyle) {
        data.areaStyle = {}
      }
      this.options.series.push(data)
      this.options.legend.data[i] = n.title

      if (n.chartX) {
        this.options.xAxis[i].data = n.chartX
      }
    })
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
    this.chart.setOption(this.options as EChartOption<EChartOption.SeriesLine>)
  }
}
</script>
