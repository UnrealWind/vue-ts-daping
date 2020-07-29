<template>
  <div class="dashboard-editor-container">
    <el-row>
      <div>
        <h3 class="center">
          服务表现和现场服务
        </h3>
        <h4 class="center">
          {{ currentTime |parseTime }}
        </h4>
        <div class="bg-shiny" />
      </div>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
      >
        <div class="bg">
          <div class="">
            <h3
              class="padding10"
              style="position: relative;"
            >
              <span class="dark-yellow">·</span>Customer
              <el-select
                v-model="channel"
                placeholder="请选择"
                class="fixed-select-right"
                @change="init"
              >
                <el-option
                  v-for="item in channelListData"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-tooltip
                class="item"
                effect="dark"
                content="tips"
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
            <h4>
              <span class="sml-circle fixed-circle" />
              NPS客户忠诚度趋势
              <span style="float: right"> NPS YTD
                <span style="font-size: 20px;color: #ffa523">74.6%</span>
              </span>
              <el-radio-group
                v-model="NPSType"
                class="fixed-top-right"
                @change="getNPSLoyaltyTrendByChannel"
              >
                <el-radio-button
                  v-for="item in NPSListData"
                  :key="item"
                  :label="item"
                />
              </el-radio-group>
            </h4>
          </div>
          <div
            class="chart-wrapper"
          >
            <line-chart
              :data="NPSLoyaltyTrendByChannelData"
              height="180px"
            />
          </div>
          <el-row>
            <div class="">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>Service Event
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="tips"
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
              <h4>
                <span class="sml-circle fixed-circle" />
                RV 维修速率趋势

                <el-radio-group
                  v-model="RVType"
                  class="fixed-top-right"
                  @change="getRVList"
                >
                  <el-radio-button
                    v-for="item in RVListData"
                    :key="item"
                    :label="item"
                  />
                </el-radio-group>
              </h4>
              <div
                class="chart-wrapper"
              >
                <line-chart
                  :data="RVRepairingRateTrendByChannelData"
                  height="200px"
                />
              </div>
            </div>
            <div
              class="chart-wrapper"
            >
              <h4>
                <span class="sml-circle fixed-circle" />
                TSR完成率
              </h4>
              <div
                class="chart-wrapper"
              >
                <line-chart
                  :data="TSRRateData"
                  height="200px"
                />
              </div>
            </div>
            <div
              class="chart-wrapper"
            >
              <h4>
                <span class="sml-circle fixed-circle" />
                Case Qty维修事件数量
              </h4>
              <div
                class="chart-wrapper"
              >
                <waterfall-chart
                  :data="caseQtyData"
                  height="220px"
                />
              </div>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
      >
        <div class="bg">
          <h3 class="padding10">
            <span class="dark-yellow">·</span>EFFICIENCY
            <el-tooltip
              class="item"
              effect="dark"
              content="tips"
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
          <div
            class="chart-wrapper rate"
          >
            <el-row>
              <el-col
                :xs="8"
                :sm="8"
                :lg="8"
              >
                <div
                  v-if="dealerUtilizationData.overview"
                  class="light-blue"
                >
                  <p>
                    {{ dealerUtilizationData.overview.month }}综合利用率
                  </p>
                  <span><i>{{ dealerUtilizationData.overview.actualValue *100 }}</i>%</span>
                </div>
              </el-col>
              <el-col
                :xs="8"
                :sm="8"
                :lg="8"
              >
                <div
                  v-if="dealerUtilizationData.sales"
                  class="soft-blue"
                >
                  <p>
                    {{ dealerUtilizationData.sales.month }}销售利用率
                  </p>
                  <span><i>{{ dealerUtilizationData.sales.actualValue *100 }}</i>%</span>
                </div>
              </el-col>
              <el-col
                :xs="8"
                :sm="8"
                :lg="8"
              >
                <div
                  v-if="dealerUtilizationData.service"
                  class="blue"
                >
                  <p>
                    {{ dealerUtilizationData.service.month }}服务利用率
                  </p>
                  <span><i>{{ dealerUtilizationData.service.actualValue *100 }}</i>%</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="chart-wrapper">
            <h4><span class="sml-circle fixed-circle" />综合利用率</h4>
            <gradients-bar-chart
              :data="overviewRateData"
              height="240px"
            />
          </div>
          <div class="chart-wrapper">
            <h4><span class="sml-circle fixed-circle" />销售利用率</h4>
            <gradients-bar-chart
              :data="salesRateData"
              height="241px"
            />
          </div>
          <div class="chart-wrapper">
            <h4><span class="sml-circle fixed-circle" />服务利用率</h4>
            <gradients-bar-chart
              :data="serviceRateData"
              height="241px"
            />
          </div>
        </div>
      </el-col>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
      >
        <div class="bg">
          <h3 class="padding10">
            <span class="dark-yellow">·</span>Efficiency-central
            <el-tooltip
              class="item"
              effect="dark"
              content="tips"
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

          <div
            class="chart-wrapper"
          >
            <h4><span class="sml-circle fixed-circle" />CSH LT 30天完成率</h4>
            <gauge-chart
              :data="gaugeChartData30D"
              height="280px"
            />
            <h4><span class="sml-circle fixed-circle" />分公司 LT 45天完成率</h4>
            <gauge-chart
              :data="gaugeChartData45D"
              height="280px"
            />
          </div>

          <div
            class="chart-wrapper"
          >
            <h4><span class="sml-circle fixed-circle" />掉线率&30S连接率</h4>
            <line-chart
              :data="abandonRateData"
              height="290px"
            />
          </div>
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
import gradientsBarChart from '@/components/Charts/gradientsBarChart.vue'
import GaugeChart from '@/components/Charts/GaugeChart.vue'
import waterfallChart from '@/components/Charts/waterfallChart.vue'

import {
  getAbandonRate,
  getCaseQty,
  getChannelList,
  getDealerUtilization,
  getNPSList,
  getNPSLoyaltyTrendByChannel,
  getPickingRateIn30s,
  getRVList,
  getRVRepairingRateTrendByChannel,
  getTSRRate,
  getWarrantyRate,
  getAllUtilization
} from '@/api/chart'

  @Component({
    name: 'DashboardAdmin',
    components: {
      PieChart,
      BarChart,
      LineChart,
      mapChart,
      actPieChart,
      dubBarChart,
      treeBarChart,
      gradientsBarChart,
      GaugeChart,
      waterfallChart
    }
  })

export default class extends Vue {
    private currentTime:object = new Date()
    private currentMonth:number = new Date().getMonth()
    private RVType:string = ''
    private NPSType:string = ''
    private channel:string=''
    private NPS_YTD:string=''

    private overviewRateData:any = {}
    private salesRateData:any = {}
    private serviceRateData:any = {}

    private gaugeChartData45D:any = {
      data: [{ value: 0, name: '分公司LT 45天完成率' }],
      name: '分公司LT 45天完成率'
    }

    private gaugeChartData30D:any = {
      data: [{ value: 0, name: 'CSH LT 30天完成率' }],
      name: 'CSH LT 30天完成率'
    }

    private abandonRateData:object[] = []
    private caseQtyData:any = [{
      data: [],
      chartX: []
    }]

    private channelListData:any = {}
    private dealerUtilizationData:any = {}

    private NPSListData:[] = []
    private RVListData:[] = []
    private NPSLoyaltyTrendByChannelData:object[] = [{
      data: [],
      chartX: []
    }]

    private TSRRateData:object[] = [{
      data: [],
      chartX: []
    }]

    private RVRepairingRateTrendByChannelData:object[] = []

    private warrantyRateData:any = {}

    async mounted() {
      // 初始化
      await this.getChannelList()
      this.init()
      // init时渲染
      setInterval(async() => {
        this.currentTime = new Date()
        this.currentMonth = new Date().getMonth()
        if (new Date().getMinutes() === 15 && new Date().getSeconds() === 0) {
          // 一小时更新一次

          if (new Date().getHours() === 16) {
            // 一天更新一次
            await this.getChannelList()
            await this.getNPSList()
            await this.getRVList()
            this.getNPSLoyaltyTrendByChannel()
            this.getRVRepairingRateTrendByChannel()
            this.getTSRRate()
            this.getDealerUtilization()
            this.getWarrantyRate()
            this.getAbandonRate()
            this.getAllUtilization()
            this.getCaseQty()
          }
        }
      }, 1000)
    }

    async init() {
      await this.getNPSList()
      await this.getRVList()
      this.getNPSLoyaltyTrendByChannel()
      this.getRVRepairingRateTrendByChannel()
      this.getTSRRate()
      this.getDealerUtilization()
      this.getWarrantyRate()
      this.getAbandonRate()
      this.getAllUtilization()
      this.getCaseQty()
    }

    async getAbandonRate() {
      const data1 = await getAbandonRate({ params: { channel: this.channel } })
      const data2 = await getPickingRateIn30s({ params: { channel: this.channel } })

      const target:any[] = [{
        data: [],
        title: '掉线率',
        areaStyle: {},
        chartX: []
      }, {
        data: [],
        areaStyle: {},
        title: '连接率'
      }]

      data1.data.forEach((n, i) => {
        target[0].data.unshift(n.actualValue)
        target[0].chartX.unshift(n.month)
      })
      data2.data.forEach((n, i) => {
        target[1].data.unshift(n.actualValue)
      })
      this.abandonRateData = target
    }

    async getCaseQty() {
      const { data } = await getCaseQty({ params: { channel: this.channel } })
      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      const target:callBackItem[] = [{
        data: [],
        chartX: []
      }]
      data.forEach((n, i) => {
        target[0].data.unshift(n.actualValue)
        target[0].chartX.unshift(n.month)
      })
      this.caseQtyData = target
    }

    async getChannelList() {
      const { data } = await getChannelList({ params: { channel: this.channel } })
      this.channelListData = data
      this.channel = data[2]
    }

    async getDealerUtilization() {
      const { data } = await getDealerUtilization({ params: { channel: this.channel } })
      this.dealerUtilizationData = data
    }

    async getNPSList() {
      const { data } = await getNPSList({ params: { channel: this.channel } })
      if (!data) return
      this.NPSListData = data
      if (!this.NPSType) this.NPSType = data[0]
    }

    async getRVList() {
      const { data } = await getRVList({ params: { channel: this.channel } })
      if (!data) return
      this.RVListData = data
      if (!this.RVType) this.RVType = data[0]
    }

    async getNPSLoyaltyTrendByChannel() {
      const { data } = await getNPSLoyaltyTrendByChannel({ params: { channel: this.channel, category: this.NPSType } })
      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      const target:callBackItem[] = [{
        data: [],
        chartX: []
      }]
      data.list.forEach((n, i) => {
        target[0].data.unshift(n.actualValue)
        target[0].chartX.unshift(n.month)
      })
      this.NPS_YTD = data.NPS_YTD
      this.NPSLoyaltyTrendByChannelData = target
    }

    async getRVRepairingRateTrendByChannel() {
      const { data } = await getRVRepairingRateTrendByChannel({ params: { channel: this.channel, category: this.RVType } })

      const target:any[] = [{
        data: [],
        title: '',
        areaStyle: {},
        chartX: []
      }, {
        data: [],
        areaStyle: {},
        title: ''
      }]
      data.forEach((n, i) => {
        target[i].title = n.rvDemand
        n.list.forEach((ni, ii) => {
          target[i].data.unshift(ni.actualValue)
          if (target[i].chartX) target[i].chartX.unshift(ni.month)
        })
      })

      this.RVRepairingRateTrendByChannelData = target
    }

    async getTSRRate() {
      const { data } = await getTSRRate({ params: { channel: this.channel } })

      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      const target:callBackItem[] = [{
        data: [],
        chartX: []
      }]
      data.forEach((n, i) => {
        target[0].data.unshift(n.actualValue)
        target[0].chartX.unshift(n.month)
      })

      this.TSRRateData = target
    }

    async getAllUtilization() {
      const { data } = await getAllUtilization({ params: { channel: this.channel } })
      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      function splData(arr) {
        const target:callBackItem = {
          data: [],
          chartX: []
        }
        arr.forEach((n, i) => {
          target.data.push(n.actualValue)
          target.chartX.push(n.month)
        })
        return target
      }

      this.overviewRateData = splData(data.overview)
      this.salesRateData = splData(data.sales)
      this.serviceRateData = splData(data.service)
    }

    async getWarrantyRate() {
      const { data } = await getWarrantyRate({ params: { channel: this.channel } })
      this.warrantyRateData = data
      data.forEach((n, i) => {
        if (n.name === '45D') this.gaugeChartData45D.data[0].value = n.rate
        if (n.name === '30D') this.gaugeChartData30D.data[0].value = n.rate
      })
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
    .fixed-select-right {
      position: absolute;
      right: 50px;
      top:-5px;
      ::v-deep input{
        background: #001034;
        height: 30px;
        color:#ffffff;
      }
      ::v-deep .el-input__suffix{
        top:5px;
      }
    }
    .fixed-top-right {
      float: right;
      margin-right: 10px;
      z-index:100;
      ::v-deep span {
        padding: 3px 15px;
        font-size: 12px;
        display: inline-block;
      }
      ::v-deep .el-radio-button__inner{
        background: rgba(255,255,255,0.8);
      }
      ::v-deep #screenfull {
        opacity: 0.5;
      }
      ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        background: #1890ff;
      }
      ::v-deep .el-radio-button:last-child .el-radio-button__inner{
        border-radius: 0 8px 8px 0;
      }
      ::v-deep .el-radio-button:first-child .el-radio-button__inner{
        border-radius:  8px 0 0 8px;
      }
    }
    .fixed-select ::v-deep input {
      background: #2d3a4b;
      color:#ffffff;
    }
    .rate {
      padding: 10px !important;
      .el-col {
        padding: 10px;
        width: 32%;
        div {
          background-color: rgba(0, 16, 52, 1);
        }
        p {
          display: inline-block;
          position: inherit;
          text-align: left;
          padding: 0 10px;
        }
        span {
          padding: 0 10px;
          font-size: 15px;
          i {
            font-size: 35px;
            font-style:normal;
            font-weight: 700;
            margin-right: 5px;
          }
        }
      }

      .light-blue {
        color: #65f5f3;
        padding: 0 0 10px 0;
      }
      .blue {
        color: #3779fd;
        padding: 0 0 10px 0;
      }
      .soft-blue {
        color: #31a4fe;
        padding: 0 0 10px 0;
      }
      .yellow {
        color: #ffa523;
        padding: 0 0 10px 0;
      }
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
      background-color: rgba(0, 16, 52, 0.5);
      margin:5px;
      padding: 10px 0 0 0;
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
    .fixed-circle {
      top:-2px;
      margin-right: 5px;
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
