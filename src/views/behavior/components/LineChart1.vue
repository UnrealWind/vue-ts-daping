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
  grid: { containLabel: true, top: 30, left: 10, bottom: 10 },
  legend: {
    data: ['日活跃量'],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: [{
    type: 'category',
    data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07',
      '01/08', '01/09', '01/10', '01/11', '01/12', '01/13', '01/14',
      '01/15', '01/16', '01/17', '01/18', '01/19', '01/20', '01/21',
      '01/22', '01/23', '01/24', '01/25', '01/26', '01/27', '01/28', '01/29', '01/30', '01/31'],
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: '#fff', // 左边线的颜色
        width: '2'// 坐标线的宽度
      }
    },
    axisLabel: {
      textStyle: {
        color: '#fff'// 坐标值得具体的颜色

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
    axisLabel: {
      textStyle: {
        color: '#fff'// 坐标值得具体的颜色

      }
    }
  }],
  series: [{
    name: '日活跃量',
    data: [820, 932, 1030, 934, 820, 820, 820, 820, 932, 901, 934, 820, 820, 820, 820, 932, 901, 934, 820, 820, 820, 820, 932, 901, 934, 820, 1030, 1020, 820, 920, 1320],
    type: 'line',
    smooth: true
  }]
}

@Component({
  name: 'BarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '350px' }) private height!: string

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
    this.chart.setOption(options as EChartOption<EChartOption.SeriesLine>)
  }
}
</script>
