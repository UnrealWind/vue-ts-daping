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
import 'echarts/extension/bmap/bmap'

const convertData = function(data:any, geoCoordMap) {
  const res:Array<any> = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

function getOptions() {
  return {
    title: {
      text: '',
      subtext: '',
      sublink: '',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    bmap: {
      center: [113, 38.5],
      zoom: 5,
      roam: true,
      mapStyle: {
        styleJson: [
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#001c3d'
            }
          },
          {
            featureType: 'land',
            elementType: 'all',
            stylers: {
              color: '#09416a'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'geometry',
            stylers: {
              color: '#eeeeee'
            }
          },
          {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'highway',
            elementType: 'geometry',
            stylers: {
              color: '#004981'
            }
          },
          {
            featureType: 'highway',
            elementType: 'geometry.fill',
            stylers: {
              color: '#005b96',
              lightness: 1
            }
          },
          {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
              color: '#004981'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
              color: '#00508b'
            }
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'green',
            elementType: 'all',
            stylers: {
              color: '#056197',
              visibility: 'off'
            }
          },
          {
            featureType: 'subway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'local',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'geometry.fill',
            stylers: {
              color: '#029fd4'
            },
            borderWidth: 1

          },
          {
            featureType: 'building',
            elementType: 'all',
            stylers: {
              color: '#1a5787'
            }
          },
          {
            featureType: 'label',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          }
        ]
      }
    },
    series: [
      {
        name: '',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: () => {},
        encode: {
          value: 2
        },
        symbolSize: function(val:any) {
          return val[2] * 5
        },
        label: {
          formatter: '{b}',
          position: 'right'
        },
        itemStyle: {
          color: '#f4e925'
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      {
        name: '',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: () => {},
        encode: {
          value: 2
        },
        symbolSize: function(val:any) {
          return val[2] * 5
        },
        label: {
          formatter: '{b}',
          position: 'right'
        },
        itemStyle: {
          color: 'rgba(229, 159, 159, 1) '
        },
        emphasis: {
          label: {
            show: true
          }
        }
      }
    ]
  }
}

interface mapChartData {
  data:object[]
  geoCoordMap:object
  dataDes:object[]
  geoCoordMapDes:object
}

@Component({
  name: 'RadarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '600px' }) private height!: string
  @Prop({ default: () => {} }) private data!: mapChartData
  private options:any

  @Watch('data')
  private onValueChange(value: object) {
    this.initData()
  }

  mounted() {
    this.initData()
  }

  initData() {
    if (!this.data.data) return
    this.options = getOptions()
    this.options.series[0].data = convertData(this.data.data, this.data.geoCoordMap)
    if (this.data.dataDes) this.options.series[1].data = convertData(this.data.dataDes, this.data.geoCoordMapDes)
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
    this.chart.setOption(this.options as EChartOption<EChartOption.SeriesMap>)
  }
}
</script>

<style lang="scss" scoped>

</style>
