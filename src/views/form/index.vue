<template>
  <div class="dashboard-editor-container">
    <el-row>
      <div>
        <h3 class="center">
          APP差异化用户行为分析和引流
        </h3>
        <h4 class="center">
          2020-06-08 12:00:00
        </h4>
        <div class="bg-shiny" />
      </div>
      <el-col
        :xs="16"
        :sm="16"
        :lg="16"
      >
        <h3 class="padding10">
          用户行为分析
        </h3>
        <div class="title-line" />
        <div class="chart-wrapper">
          <bar-chart />
        </div>

        <el-row>
          <h3 class="padding10">
            用户数量和日活量统计
          </h3>
          <div class="title-line" />
          <el-col
            :xs="12"
            :sm="12"
            :lg="12"
          >
            <div class="chart-wrapper">
              <pie-chart />
              <p>用户总数<br><span>5172</span></p>
            </div>
          </el-col>
          <el-col
            :xs="12"
            :sm="12"
            :lg="12"
          >
            <div class="chart-wrapper">
              <pie-chart />
              <p>日活量<br><span>4172</span></p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
        style="position: absolute;right: 0"
      >
        <h3 class="padding10">
          用户行为分析
        </h3>
        <div class="title-line" />
        <div class="chart-wrapper">
          <line-chart />
        </div>
        <div class="chart-wrapper">
          <line-chart1 />
        </div>
        <div class="chart-wrapper margin-top30">
          <line-chart2 />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import { Component, Vue } from 'vue-property-decorator'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'
import LineChart from './components/LineChart.vue'
import LineChart1 from './components/LineChart1.vue'
import LineChart2 from './components/LineChart2.vue'

  @Component({
    name: 'DashboardAdmin',
    components: {
      LineChart,
      PieChart,
      BarChart,
      LineChart1,
      LineChart2
    }
  })
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    position: relative;
    background-image: url("http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/4cf50aa8e6ca597f42e08b3c0745d933.png");
    .margin-top {
      margin-top: 40px;
      padding: 10px;
    }
    .padding10 {
      padding:0 10px 10px 10px;
      margin-top: 0;
    }
    .center{
      text-align: center;
    }
    .margin-top30 {
      margin-top: 30px;
    }
    .point {
      color: yellow;
      height: 22px;
      line-height:22px;
      display: inline-block;
      font-weight: 900;
      margin-right: 5px;
    }
    .anchorBL{
      display:none;
    }
    h3.center {
      background-image: url('http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/d06a96e82958d368db355d1a137eed2a.png');
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
      background-image: url("http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/86312663657fba11927232db79833d7e.png");
      background-size: 100% 100%;
      width: 100%;
      height: 3px;
    }
    .bg-shiny {
      background-image: url('https://img.alicdn.com/tps/TB1Z8MHPFXXXXacaXXXXXXXXXXX-500-54.gif');
      background-size: 100% 100%;
      height: 16px;
      width: 144px;
      margin:0 auto;
    }
    .bottom-part {
      margin-top: 10px;
      .el-col {
        padding: 0 10px;
        >div{
          background-color:rgba(0,16,52,0.8);
          padding: 5px 0 0 0;
          h5 {
            padding: 0 0 7px 0;
          }
        }
      }
    }
    .left-part,.right-part {
      padding: 0 10px;
    }
    .total-count{
      width:250px;
      >div{
        width: 100px;
        text-align: center;
        display: inline-block;
        div{
          margin-top:10px;
          color:#faad14;
          font-size: 26px;
        }
        div:first-child {
          font-size: 20px;
          color:#fff;
          font-weight: 300;
        }
      }
      >div:nth-child(2){
        margin-left: 30px;
      }
      position: absolute;
      top:0px;
      left:30%;
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
        top:120px;
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
