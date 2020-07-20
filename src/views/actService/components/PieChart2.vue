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
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  color: ['rgb(101, 245, 243)', 'rgb(250, 173, 20)', 'rgb(121, 218, 255)'],
  legend: {
    orient: 'horizontal',
    left: 10,
    data: ['四小时内', '八小时内', '其他'],
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '短信',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        formatter: '{d}%'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 135, name: '四小时内' },
        { value: 108, name: '八小时内' },
        { value: 202, name: '其他' }
      ]
    },
    {
      name: '派工',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        formatter: '{b}({d}%)'
      },
      data: [
        { value: 335, name: '四小时内' },
        { value: 310, name: '八小时内' },
        { value: 234, name: '其他' }
      ]
    }
  ]
}
@Component({
  name: 'PieChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '345px' }) private height!: string

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
    this.chart.setOption(options as EChartOption<EChartOption.SeriesPie>)
  }
}
</script>
