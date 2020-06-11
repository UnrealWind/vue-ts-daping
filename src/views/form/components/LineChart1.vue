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
    data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07'],
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
    data: [820, 932, 901, 934, 1290, 1330, 1320],
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
  @Prop({ default: '200px' }) private height!: string

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
