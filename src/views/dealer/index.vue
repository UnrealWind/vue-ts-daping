<template>
  <div class="dashboard-editor-container">
    <el-radio-group
      v-model="dealer"
      class="fixed-top-right"
      @change="changeDealer"
    >
      <el-radio-button label="经销商" />
      <el-radio-button label="发展中经销商" />
    </el-radio-group>
    <el-row>
      <div>
        <h3 class="center">
          经销商服务网络分布
        </h3>
        <h4 class="center">
          {{ currentTime |parseTime }}
        </h4>
        <div class="bg-shiny" />
      </div>
      <el-col
        :xs="14"
        :sm="14"
        :lg="14"
      >
        <div class="bg">
          <div class="total-count">
            <div v-if="dealer === '经销商'">
              <div>经销商</div>
              <div>5671</div>&nbsp;个
            </div>
            <div v-if="dealer === '发展中经销商'">
              <div>发展中经销商</div>
              <div>5128</div>&nbsp;个
            </div>
          </div>
          <div
            class="chart-wrapper"
          >
            <map-chart
              height="600px"
              :data="dealerListData"
            />
            <div class="bg">
              <h3 class="padding10 margin-top20">
                <span class="dark-yellow">·</span>各省经销商数量分析
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今各大区各省份经销商数量"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
            </div>
            <div class="title-line">
              <span class="sml-circle" />
            </div>
            <div
              class="chart-wrapper"
            >
              <tree-bar-chart
                :data="countListByProvinceData"
                height="306px"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="10"
        :sm="10"
        :lg="10"
      >
        <div class="bg">
          <el-row>
            <el-col
              :xs="12"
              :sm="12"
              :lg="12"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>车用市场
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今车用市场精英/重点/一般站的数量展示"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <act-pie-chart
                  :data="countListByGradedStatusData"
                  height="180px"
                />
              </div>
            </el-col>
            <el-col
              :xs="12"
              :sm="12"
              :lg="12"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>工业市场
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今工业市场精英/重点/一般站的数量展示"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <act-pie-chart
                  :data="countListByIndustrialMarketStatus"
                  height="180px"
                />
              </div>
            </el-col>
            <el-col
              :xs="12"
              :sm="12"
              :lg="12"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>授权级别
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今不同授权级别经销商数量占比"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <act-pie-chart
                  :data="countListByAuthLevelData"
                  height="180px"
                />
              </div>
            </el-col>
            <el-col
              :xs="12"
              :sm="12"
              :lg="12"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>排放等级
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今不同排放等级经销商数量占比"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <act-pie-chart
                  :data="countListByEmissionLevelData"
                  height="180px"
                />
              </div>
            </el-col>
            <el-col
              :xs="12"
              :sm="12"
              :lg="12"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>授权机型
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今不同授权机型经销商数量Top5"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <dub-bar-chart
                  :data="countListByAuthModelData"
                  height="180px"
                />
              </div>
            </el-col>
            <el-col
              :xs="12"
              :sm="12"
              :lg="12"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>主机厂
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今不同主机厂的经销商数量"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <dub-bar-chart
                  :data="countListByMainframeCompanyNameData"
                  height="180px"
                />
              </div>
            </el-col>
            <el-col
              :xs="24"
              :sm="24"
              :lg="24"
            >
              <h3 class="padding10">
                <span class="dark-yellow">·</span>各大区经销商利用率
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="2020年至今全国各区域经销商利用率"
                  placement="top"
                >
                  <el-button
                    class="hide-btn"
                    type="info"
                    icon="el-icon-question"
                  />
                </el-tooltip>
              </h3>
              <div class="title-line">
                <span class="sml-circle" />
              </div>
              <div class="chart-wrapper">
                <line-chart
                  :data="lineChartData"
                  height="300px"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import { Component, Vue } from 'vue-property-decorator'
import BarChart from '../../components/Charts/BarChart.vue'
import PieChart from '../../components/Charts/PieChart.vue'
import LineChart from '../../components/Charts/LineChart.vue'
import mapChart from '../../components/Charts/mapChart.vue'
import actPieChart from '../../components/Charts/ActPieChart.vue'
import dubBarChart from '../../components/Charts/DubBarChart.vue'
import treeBarChart from '../../components/Charts/treeBarChart.vue'

import { getCountListByAuthLevel, getCountListByEmissionLevel, getCountListByGradedStatus, getCountListByMainframeCompanyName, getCountListByAuthModel, getCountListByIndustrialMarketStatus, getCountListByProvince, getDealerList } from '@/api/chart'

  @Component({
    name: 'DashboardAdmin',
    components: {
      PieChart,
      BarChart,
      LineChart,
      mapChart,
      actPieChart,
      dubBarChart,
      treeBarChart
    }
  })

export default class extends Vue {
    private dealer:string = '经销商'
    private currentTime:object = new Date()

    private dealerListData:any = {}
    private dealerListDataPartNow:any = {}
    private dealerListDataPartDes:any = {}

    private countListByGradedStatusData:object[] = []

    private countListByIndustrialMarketStatus:object[] = []

    private countListByAuthLevelData:object[] = []

    private countListByEmissionLevelData:object[] = []

    private countListByProvinceData:object = {
      data: [],
      xKeys: [],
      splitIndex: [],
      xGroup: []
    }

    private countListByAuthModelData:object = {
      grade: [],
      cost: [],
      totalCost: []
    }

    private countListByMainframeCompanyNameData:object = {
      grade: [],
      cost: [],
      totalCost: []
    }

    private lineChartData:object[] = [{
      data: [0.631, 0.681, 0.611, 0.661, 0.601, 0.691],
      title: '北区',
      areaStyle: {},
      chartX: ['1月', '2月', '3月', '4月', '5月', '6月']
    }, {
      data: [0.412, 0.492, 0.432, 0.452, 0.472, 0.412],
      areaStyle: {},
      title: '南区'
    }, {
      data: [0.0821, 0.851, 0.871, 0.841, 0.891, 0.831],
      areaStyle: {},
      title: '中区'
    }]

    async mounted() {
      setInterval(() => {
        this.dealer === '经销商' ? this.dealer = '发展中经销商' : this.dealer = '经销商'
        this.changeDealer()
      }, 15000)

      this.getCountListByAuthLevel()
      this.getCountListByEmissionLevel()
      this.getCountListByGradedStatus()
      this.getCountListByMainframeCompanyName()
      this.getCountListByAuthModel()
      this.getCountListByIndustrialMarketStatus()
      this.getCountListByProvince()
      await this.getDealerList(1)
      await this.getDealerList(2)
      await this.changeDealer()
      setInterval(async() => {
        this.currentTime = new Date()
        // 初始化
        if (new Date().getMinutes() === 15 && new Date().getSeconds() === 0) {
          // 一小时更新一次

          if (new Date().getHours() === 16) {
            // 一天更新一次
            this.getCountListByAuthLevel()
            this.getCountListByEmissionLevel()
            this.getCountListByGradedStatus()
            this.getCountListByMainframeCompanyName()
            this.getCountListByAuthModel()
            this.getCountListByIndustrialMarketStatus()
            this.getCountListByProvince()
            await this.getDealerList(1)
            await this.getDealerList(2)
            await this.changeDealer()
          }
        }
      }, 1000)
    }

    private async changeDealer() {
      if (this.dealer === '经销商') {
        this.dealerListData = JSON.parse(JSON.stringify(this.dealerListDataPartNow))
      } else {
        this.dealerListData = JSON.parse(JSON.stringify(this.dealerListDataPartNow))
        this.dealerListData.dataDes = JSON.parse(JSON.stringify(this.dealerListDataPartDes.data))
        this.dealerListData.geoCoordMapDes = JSON.parse(JSON.stringify(this.dealerListDataPartDes.geoCoordMap))
      }
    }

    // 地图
    private async getDealerList(type) {
      const { data } = await getDealerList({ params: { type: type } })

      interface tar {
        data:object[]
        geoCoordMap:object
      }
      const target:tar = {
        data: [],
        geoCoordMap: {}
      }

      data.list.forEach((n:any, i) => {
        target.data.push({ name: n.clientName, value: 1 })
        target.geoCoordMap[n.clientName] = [n.geoLo, n.geoLa]
      })
      type === 1 ? this.dealerListDataPartNow = target : this.dealerListDataPartDes = target
    }

    // 授权级别
    private async getCountListByAuthLevel() {
      const { data } = await getCountListByAuthLevel({ params: { type: 1 } })
      data.forEach((n:any, i) => {
        n.name = n.entity
        n.value = n.count
      })
      this.countListByAuthLevelData = data
    }

    // 排放等级
    private async getCountListByEmissionLevel() {
      const { data } = await getCountListByEmissionLevel({ params: { type: 1 } })
      data.forEach((n:any, i) => {
        n.name = n.entity
        n.value = n.count
      })
      this.countListByEmissionLevelData = data
    }

    // 车用市场
    private async getCountListByGradedStatus() {
      const { data } = await getCountListByGradedStatus({ params: { type: 1 } })
      data.forEach((n:any, i) => {
        n.name = n.entity
        n.value = n.count
      })
      this.countListByGradedStatusData = data
    }

    // 工业市场
    private async getCountListByIndustrialMarketStatus() {
      const { data } = await getCountListByIndustrialMarketStatus({ params: { type: 1 } })
      data.forEach((n:any, i) => {
        n.name = n.entity
        n.value = n.count
      })
      this.countListByIndustrialMarketStatus = data
    }

    // 授权机型
    private async getCountListByAuthModel() {
      const { data } = await getCountListByAuthModel({ params: { type: 1 } })
      interface tar {
        grade:string[]
        cost: number[]
        totalCost:number[]
        titleWidth:string
      }
      const target:tar = {
        grade: [],
        cost: [],
        totalCost: [],
        titleWidth: '150'
      }
      data.sort(this.compare('count'))
      data.length = 5
      data.forEach((n:any, i) => {
        target.grade.unshift(n.entity)
        target.cost.unshift(n.count)
        target.totalCost.unshift(data[0].count)
      })
      this.countListByAuthModelData = target
    }

    // 主机厂
    private async getCountListByMainframeCompanyName() {
      const { data } = await getCountListByMainframeCompanyName({ params: { type: 1 } })
      interface tar {
        grade:string[]
        cost: number[]
        totalCost:number[]
        titleWidth:string
      }
      const target:tar = {
        grade: [],
        cost: [],
        totalCost: [],
        titleWidth: '180'
      }
      data.sort(this.compare('count'))
      data.length = 5
      data.forEach((n:any, i) => {
        target.grade.unshift(n.entity)
        target.cost.unshift(n.count)
        target.totalCost.unshift(data[0].count)
      })
      this.countListByMainframeCompanyNameData = target
    }

    // 各大区经销商利用率
    private async getCountListByProvince() {
      const { data } = await getCountListByProvince({ params: { type: 1 } })

      interface tar {
        data: object[]
        xKeys: string[]
        splitIndex: number[]
        xGroup:string[]
      }
      const target:tar = {
        data: [],
        xKeys: [],
        splitIndex: [],
        xGroup: []
      }
      let total = 0
      data.forEach((n:any, i) => {
        total += n.regionList.length
        target.splitIndex.push(total)
        n.regionList.forEach((ni:any, ii) => {
          target.xKeys.push(ni.entity)
          target.data.push({
            value: ni.count,
            label: ni.entity
          })
          ii === Math.round(n.regionList.length / 2) ? target.xGroup.push(n.region) : target.xGroup.push('')
        })
      })
      this.countListByProvinceData = target
    }

    private compare(property) {
      return function(obj1, obj2) {
        const value1 = obj1[property]
        const value2 = obj2[property]
        return value2 - value1 // 降序
      }
    }
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    position: relative;
    background-image: url("../../assets/img/bg.png");
    .fixed-select ::v-deep input {
      background: #2d3a4b;
      color:#ffffff;
    }
    .hide-btn {
      height: 0;
      padding: 0;
      float: right;
      background-color: rgba(0, 16, 52, 0);
      border: 0;
      position: relative;
      top: 3px;
    }
    .bg {
      background-color: rgba(0, 16, 52, 0.6);
      margin:5px;
      padding: 10px 0 0 0;
    }
    .fixed-top-right {
      position: absolute;
      left: 20px;
      top:50px;
      z-index: 999;
      ::v-deep span {
        padding: 6px 12px;
        display: inline-block;
        width: 120px;
      }
      ::v-deep .el-radio-button__inner{
        background: rgba(255,255,255,0.8);
      }
      ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        background: #1890ff;
      }
      ::v-deep .el-radio-button:last-child .el-radio-button__inner{
        border-radius: 0 12px 12px 0;
      }
      ::v-deep .el-radio-button:first-child .el-radio-button__inner{
        border-radius: 12px 0 0 12px;
      }
    }
    .dark-yellow {
      color: #faad14;
      font-size:18px;
    }
    .fixed-select {
      position: absolute;
      right: 300px;
      top:20px;
      z-index: 999999;
    }

    .fixed-select-date {
      right: 60px;
      ::v-deep input {
        background: #2d3a4b;
      }
    }
    .margin-top {
      margin-top: 40px;
      padding: 10px;
    }
    .padding10 {
      padding:0 10px 10px 10px;
      margin-top: 0;
      font-size:17px;
    }
    .center{
      text-align: center;
    }
    .margin-top20 {
      margin-top: 20px;
    }
    .point {
      color: yellow;
      height: 22px;
      line-height:22px;
      display: inline-block;
      font-weight: 900;
      margin-right: 5px;
    }
    .sml-circle {
      position: relative;
      top:-9px;
      float: left;
      display: inline-block;
      height: 20px;
      width: 20px;
      background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;
      background-image: url("../../assets/img/rol-circle.png");
    }
    h3.center {
      background-image: url('../../assets/img/title.png');
      background-size: 100% 100%;
      height: 50px;
      font-size: 28px;
      font-weight: 300;
      margin-bottom: 0;
      margin-top: 0;
    }
    h4.center {
      margin: 0;
      padding: 0;
      font-size: 13px;
      position: relative;
      top:-5px;
      color:#ccc;
    }
    .title-line {
      background-image: url("../../assets/img/sml-title.png");
      background-size: 100% 100%;
      width: 100%;
      height: 3px;
    }
    .bg-shiny {
      background-image: url('../../assets/img/shiny.gif');
      background-size: 100% 100%;
      height: 16px;
      width: 144px;
      margin:0 auto;
    }
    .total-count{
      width:550px;
      margin:0 auto;
      position: absolute;
      >div{
        width: 225px;
        text-align: left;
        display: inline-block;
        color:#fff;
        div{
          margin:10px 0 0 10px;
          color:#faad14;
          font-size: 26px;
          display: inline-block;
        }
        div:first-child {
          font-size: 20px;
          color:#fff;
          font-weight: 300;
          display: inline-block;
        }
      }
      >div:nth-child(2){
        margin-left: 30px;
      }
      z-index:999;
    }
    .chart-wrapper {
      padding: 0;
      position: relative;
      p {
        position: absolute;
        z-index: 999;
        text-align: center;
        width: 100%;
        top:100px;
        .yellow {
          position: relative;
          color:#faad14;
          font-size: 20px;
        }
      }
      img {
        z-index: 998;
        height: 120px;
        width: 120px;
        position: absolute;
        margin:0 auto;
        top: -67px;
        left: -38px;
      }
    }
    h3,h4,h5 {
      color: #ffffff;
      margin: 10px;
      font-weight: 300;
      margin-bottom: 0;
    }
    h6 {
      color: #ffffff;
      margin:5px;
      text-align: center;
      font-weight: 300;
    }
    p {
      color: #ffffff;
    }
  }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>
