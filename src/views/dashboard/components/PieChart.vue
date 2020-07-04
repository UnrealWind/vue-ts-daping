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

const dataStyle = {
  normal: {
    label: {
      show: true,
      color: '#fff',
      fontSize: 18
    },
    labelLine: {
      // smooth: 0.2,
      length: 40,
      length2: 40
    }
  }
}

const labelShow = {
  show: true,
  color: '#fff',
  fontSize: 15,
  formatter: [
    '{d| {d}% }',
    '{b| {b} }'
  ].join('\n'),
  rich: {
    d: {
      fontSize: 15,
      color: '#fff'
    },
    b: {
      fontSize: 18,
      color: '#fff'
    }
  }
}

const placeHolderStyle = {
  normal: {
    color: 'rgba(0,0,0,0)',
    label: {
      show: false
    },
    labelLine: {
      show: false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
}

function getOptions() {
  return {
    backgroundColor: 'transparent',
    color: ['#fbf320', '#3dfffb', '#ffffff', '#2bcafb', '#397cfd', '#faad14'],
    tooltip: {
      show: true,
      formatter: '{b} <br/> {c} ({d}%)'
    },
    angleAxis: {
      type: 'category',
      z: 10,
      axisLine: {
        color: '#fff',
        lineStyle: {
          width: 3,
          color: '#fff'
        }
      }
    },
    radiusAxis: {
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        color: '#fff'
      },
      axisLine: {
        show: false,
        color: '#fff',
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        color: '#000',
        lineStyle: {
          type: 'dotted',
          color: 'rgba(170,170,170,.5)'
        }
      }

    },
    polar: {
      center: ['50%', '50%'],
      radius: 110
    },
    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: false,
      radius: [70, 75],
      itemStyle: dataStyle,
      hoverAnimation: false,
      data: []
    },
    {
      name: 'Line 2',
      type: 'pie',
      clockWise: false,
      radius: [60, 70],
      itemStyle: dataStyle,
      hoverAnimation: false,
      data: []
    },
    {
      name: 'Line 3',
      type: 'pie',
      clockWise: false,
      hoverAnimation: false,
      radius: [90, 95],
      itemStyle: dataStyle,

      data: []
    },
    {
      name: 'Line 4',
      type: 'pie',
      clockWise: false,
      hoverAnimation: false,
      radius: [80, 95],
      itemStyle: dataStyle,

      data: []
    },
    {
      name: 'Line 5',
      type: 'pie',
      clockWise: false,
      hoverAnimation: false,
      radius: [60, 70],
      itemStyle: dataStyle,
      data: []
    },
    {
      type: 'bar',
      data: [0],
      coordinateSystem: 'polar',
      name: '06a',
      stack: 'a'
    }]
  }
}
@Component({
  name: 'PieChart'
})
export default class extends mixins(ResizeMixin) {
    @Prop({ default: 'chart' }) private className!: string
    @Prop({ default: '100%' }) private width!: string
    @Prop({ default: '300px' }) private height!: string
    @Prop({ default: () => [] }) private data!: []
    private options:any

    mounted() {
      let total:number = 0
      this.options = getOptions()
      this.data.forEach((n:any, i) => {
        this.options.series[i].data = [{
          value: total,
          name: '',
          itemStyle: placeHolderStyle
        }, {
          value: n.value,
          name: n.label,
          label: labelShow
        }, {
          value: 360 - (total + n.value),
          name: '',
          itemStyle: placeHolderStyle
        }]
        total += n.value
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
      this.chart.setOption(this.options as EChartOption<EChartOption.SeriesPie>)
    }
}
</script>
