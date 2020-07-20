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

const myColor = ['rgb(101, 245, 243)']
const data = {
  grade: ['others', 'CM2880', 'CM2220', 'CM2350', 'CM2250', 'CM2260'],
  cost: [40, 30, 40, 50, 60, 70, 50, 40],
  totalCost: [100, 100, 100, 100, 100, 100, 100, 100],
  dataCost: [100, 100, 100, 100, 100, 100, 100, 100]
}

const options = {
  backgroundColor: 'transparent',
  grid: {
    left: '60',
    right: '10',
    top: '20',
    bottom: '0'
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

@Component({
  name: 'BarChart1'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '255px' }) private height!: string

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
