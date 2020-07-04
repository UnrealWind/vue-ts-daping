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
    data: ['用户访问量'],
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
    data: ['技术培训', '自助服务', '工单管理', '服务网点', '服务信息', '技术支持', '服务工具', '网上商城'],
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
      name: '用户访问量',
      type: 'bar',
      data: [18203, 23489, 29034, 44970, 60230, 84970, 104970, 131744],
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
  name: 'BarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '580px' }) private height!: string

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
