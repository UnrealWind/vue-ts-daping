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
    data: ['未处理', '短信', '派工'],
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
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
  series: [
    {
      name: '未处理',
      type: 'bar',
      stack: '总量',
      data: [320, 302, 301, 334, 390, 330, 320],
      itemStyle: {
        normal: {
          color: 'rgb(101, 245, 243)',
          barBorderRadius: 20
        }
      }
    },
    {
      name: '短信',
      type: 'bar',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: {
        normal: {
          color: 'rgb(250, 173, 20)',
          barBorderRadius: 20
        }
      }
    },
    {
      name: '派工',
      type: 'bar',
      stack: '总量',
      barWidth: '50%',
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle: {
        normal: {
          color: 'rgb(121, 218, 255)',
          barBorderRadius: 20
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
