<template>
  <div class="dashboard-editor-container">
    <el-radio-group
      v-model="dealer"
      class="fixed-top-right"
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
        :xs="16"
        :sm="16"
        :lg="16"
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
            <map-chart height="600px" />
            <div class="bg">
              <h3 class="padding10 margin-top20">
                <span class="dark-yellow">·</span>各省经销商数量分析
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="提示文字"
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
              <bar-chart
                :data="barChartData"
                height="306px"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
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
                  content="提示文字"
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
                  :data="pieChartData"
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
                  content="提示文字"
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
                  :data="pieChartData1"
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
                  content="提示文字"
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
                  :data="pieChartData2"
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
                  content="提示文字"
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
                  :data="pieChartData3"
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
                  content="提示文字"
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
                  :data="barChartData1"
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
                  content="提示文字"
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
                  :data="barChartData2"
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
                  content="提示文字"
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

  @Component({
    name: 'DashboardAdmin',
    components: {
      PieChart,
      BarChart,
      LineChart,
      mapChart,
      actPieChart,
      dubBarChart
    }
  })

export default class extends Vue {
    private dealer:string = '经销商'
    private currentTime:object = new Date()
    private pieChartData:object[] = [{ name: '一般站', value: 110 }, { name: '重点站', value: 110 }, { name: '精英站', value: 60 },
      { name: '其他站', value: 80 }]

    private pieChartData1:object[] = [{ name: '一般站', value: 90 }, { name: '重点站', value: 160 }, { name: '精英站', value: 80 },
      { name: '其他站', value: 30 }]

    private pieChartData2:object[] = [{ name: '燃油服务', value: 80 }, { name: '区域服务站', value: 110 }, { name: 'HMLD快修级', value: 60 },
      { name: 'HMLD保养级', value: 110 }]

    private pieChartData3:object[] = [{ name: '国三', value: 80 }, { name: '国四', value: 55 }, { name: '国五', value: 55 }, { name: '四阶段', value: 110 }, { name: '三阶段', value: 60 }]

    private barChartData:object = {
      data: [1823, 2389, 2904, 4970, 6230, 1823, 2389, 2904, 4970, 6230, 1823, 2389],
      chartX: ['河北', '河南', '湖北', '陕西', '北京', '上海', '深圳', '合肥', '山东', '成都', '杭州', '长沙'],
      barWidth: 30,
      barColor: '#65f5f3'
    }

    private barChartData1:object = {
      grade: ['ISF2.8', 'ISG11', 'ISD4.5', 'QSX15', 'ISB5.9'],
      cost: [40, 30, 40, 50, 70, 50, 40],
      totalCost: [100, 100, 100, 100, 100, 100, 100]
    }

    private barChartData2:object = {
      grade: ['安徽江淮', '中国重汽', '三一集团', '河南开封', '江铃汽车'],
      cost: [60, 30, 40, 50, 30, 70, 50],
      totalCost: [100, 100, 100, 100, 100, 100, 100]
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
      data: [0.821, 0.851, 0.871, 0.841, 0.891, 0.831],
      areaStyle: {},
      title: '中区'
    }]

    mounted() {
      setInterval(() => {
        this.dealer === '经销商' ? this.dealer = '发展中经销商' : this.dealer = '经销商'
      }, 15000)
      setInterval(() => {
        this.currentTime = new Date()
      }, 1000)
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
      right: 60px;
      top:18px;
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
