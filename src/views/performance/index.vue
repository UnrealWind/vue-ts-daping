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
        :xs="10"
        :sm="10"
        :lg="10"
      >
        <div class="bg">
          <div
            class="chart-wrapper"
          >
            <div class="">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>经销商利用率
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
              class="chart-wrapper rate"
            >
              <el-row>
                <el-col
                  :xs="8"
                  :sm="8"
                  :lg="8"
                >
                  <div class="light-blue">
                    <p>综合利用率</p>
                    <span><i>78.6</i>%</span>
                  </div>
                </el-col>
                <el-col
                  :xs="8"
                  :sm="8"
                  :lg="8"
                >
                  <div class="blue">
                    <p>服务利用率</p>
                    <span><i>86.3</i>%</span>
                  </div>
                </el-col>
                <el-col
                  :xs="8"
                  :sm="8"
                  :lg="8"
                >
                  <div class="yellow">
                    <p>
                      销售利用率
                    </p>
                    <span><i>74.6</i>%</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div
            class="chart-wrapper"
          >
            <div class="bg">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>工单30s接起率
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
              <div class="chart-wrapper">
                <bar-line-chart
                  :data="barLineChartData"
                  height="330px"
                />
              </div>
            </div>
          </div>
          <div
            class="chart-wrapper"
          >
            <div class="bg">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>索赔完成率
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
              <el-row>
                <el-col
                  :xs="11"
                  :sm="11"
                  :lg="11"
                >
                  <gauge-chart
                    :data="gaugeChartData"
                    height="360px"
                  />
                </el-col>
                <el-col
                  :xs="11"
                  :sm="11"
                  :lg="11"
                >
                  <gauge-chart
                    :data="gaugeChartData1"
                    height="360px"
                  />
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="7"
        :sm="7"
        :lg="7"
      >
        <div class="bg">
          <div
            class="chart-wrapper"
          >
            <div class="">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>NPS客户忠诚度趋势
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
              <line-chart
                :data="lineChartData"
                height="293px"
              />
            </div>
          </div>
          <div
            class="chart-wrapper"
          >
            <div class="bg">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>分公司NPS客户忠诚度
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
              <dub-bar-chart
                :data="dubBarChartData"
                height="600px"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="7"
        :sm="7"
        :lg="7"
      >
        <div class="bg">
          <div
            class="chart-wrapper"
          >
            <div class="">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>RV维修速率趋势
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
              <line-chart
                :data="lineChartData1"
                height="293px"
              />
            </div>
          </div>
          <div
            class="chart-wrapper"
          >
            <div class="bg">
              <h3 class="padding10">
                <span class="dark-yellow">·</span>分公司RV维修速率
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
              <dub-bar-chart
                :data="dubBarChartData1"
                height="600px"
              />
            </div>
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
import barLineChart from '@/components/Charts/barLineChart.vue'
import GaugeChart from '@/components/Charts/GaugeChart.vue'

import { } from '@/api/chart'

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
      barLineChart,
      GaugeChart
    }
  })

export default class extends Vue {
    private currentTime:object = new Date()

    private barLineChartData:object[] = [{
      data: [175, 165, 160, 150, 145, 140],
      title: '工单总数',
      areaStyle: {},
      type: 'bar',
      chartX: ['1月', '2月', '3月', '4月', '5月', '6月']
    }, {
      data: [0.25, 0.24, 0.23, 0.22, 0.21, 0.20],
      title: '30S连起率',
      yAxisIndex: 1
    }]

    private gaugeChartData:object = {
      data: [{ value: 83.12, name: '分公司LT 45天完成率' }],
      name: '分公司LT 45天完成率'
    }

    private gaugeChartData1:object = {
      data: [{ value: 73.12, name: 'CSH LT 30天完成率' }],
      name: 'CSH LT 30天完成率'
    }

    private lineChartData:object[] = [{
      data: [0.631, 0.681, 0.611, 0.661, 0.601, 0.691],
      title: 'NPS客户忠诚度',
      areaStyle: {},
      chartX: ['1月', '2月', '3月', '4月', '5月', '6月']
    }]

    private lineChartData1:object[] = [{
      data: [0.631, 0.681, 0.611, 0.661, 0.601, 0.691],
      title: 'on-highway',
      areaStyle: {},
      chartX: ['1月', '2月', '3月', '4月', '5月', '6月']
    }, {
      data: [0.531, 0.581, 0.411, 0.361, 0.451, 0.631],
      areaStyle: {},
      title: 'off-highway'
    }]

    private dubBarChartData:object = {
      grade: ['JNDB', 'GZDB', 'WHDB', 'SH CSH', 'CEBJ', 'SYDB', 'JJJ CSH', 'XADB', 'URDB', 'LN CSH', 'SX CSH', 'CY CSH', 'SHDB', 'CDDB', 'SCEC'],
      cost: [95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81],
      totalCost: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
    }

    private dubBarChartData1:object = {
      grade: ['JNDB', 'GZDB', 'WHDB', 'SH CSH', 'CEBJ', 'SYDB', 'JJJ CSH', 'XADB', 'URDB', 'LN CSH', 'SX CSH', 'CY CSH', 'SHDB', 'CDDB', 'SCEC'],
      cost: [95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81],
      totalCost: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
    }

    async mounted() {
      // init时渲染
      setInterval(async() => {
        this.currentTime = new Date()
        // 初始化
        if (new Date().getMinutes() === 15 && new Date().getSeconds() === 0) {
          // 一小时更新一次

          if (new Date().getHours() === 16) {
            // 一天更新一次

          }
        }
      }, 1000)
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
          padding: 0 20px;
        }
        span {
          padding: 0 20px;
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
