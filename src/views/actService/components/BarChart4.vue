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
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['活跃量', '连街量'],
    orient: 'horizontal',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'value',
    boundaryGap: [0, 0.01],
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
    type: 'category',
    data: ['内蒙古', '浙江', '辽宁', '吉林', '黑龙江', '安徽'],
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
  series: [
    {
      name: '活跃量',
      type: 'bar',
      data: [1803, 2349, 2903, 6323, 10497, 13174],
      itemStyle: {
        normal: {
          color: 'rgb(250, 173, 20)',
          barBorderRadius: 7
        }
      }
    },
    {
      name: '链接量',
      type: 'bar',
      data: [1925, 2348, 3100, 6810, 12159, 13414],
      itemStyle: {
        normal: {
          color: 'rgb(121, 218, 255)',
          barBorderRadius: 7
        }
      }
    }
  ]
}

@Component({
  name: 'BarChart3'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '279px' }) private height!: string

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
    this.chart.setOption(options as EChartOption<EChartOption.SeriesBar>)
  }
}
</script>
