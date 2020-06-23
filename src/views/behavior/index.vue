<template>
  <div class="dashboard-editor-container">
    <el-select
      v-model="type"
      placeholder="请选择渠道"
      clearable
      class="filter-item fixed-select"
      style="width: 130px"
    >
      <el-option
        label="XCEC"
        value="0"
      />
      <el-option
        label="ACPL"
        value="1"
      />
      <el-option
        label="DCEC"
        value="2"
      />
      <el-option
        label="BFCEC"
        value="3"
      />
      <el-option
        label="GCIC"
        value="4"
      />
    </el-select>
    <el-date-picker
      v-model="dateTime"
      placeholder="选择日期"
      class="fixed-select fixed-select-date"
      type="month"
    />
    <el-row>
      <div>
        <h3 class="center">
          e路康明斯用户及功能看板
        </h3>
        <h4 class="center">
          2020-06-08 12:00:00
        </h4>
        <div class="bg-shiny" />
      </div>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
      >
        <h3 class="padding10">
          用户行为分析
        </h3>
        <div class="title-line" />
        <div
          class="chart-wrapper"
          style="padding-top: 140px;"
        >
          <div class="total-count">
            <div>
              <div>总连接量</div>
              <div>5671</div>
            </div>
            <div>
              <div>总活跃量</div>
              <div>5128</div>
            </div>
          </div>
          <bar-chart />
        </div>
      </el-col>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
      >
        <h3 class="padding10">
          用户总数分析
        </h3>
        <div class="title-line" />
        <div class="chart-wrapper">
          <pie-chart />
          <p>
            用户总数<br><span class="yellow">5172<img src="https://img.alicdn.com/tfs/TB1nXLptQvoK1RjSZFDXXXY3pXa-800-800.png"></span>
          </p>
        </div>
        <div
          class="chart-wrapper"
          style="margin: 60px 0 40px 0;"
        >
          <line-chart />
        </div>
      </el-col>
      <el-col
        :xs="8"
        :sm="8"
        :lg="8"
      >
        <h3 class="padding10">
          日活量分析
        </h3>
        <div class="title-line" />
        <div class="chart-wrapper">
          <pie-chart />
          <p>日活量<br><span class="yellow">4172<img src="https://img.alicdn.com/tfs/TB1nXLptQvoK1RjSZFDXXXY3pXa-800-800.png"></span></p>
        </div>
        <div
          class="chart-wrapper"
          style="margin-top: 60px;"
        >
          <line-chart1 />
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
    private type:string = ''
    private dateTime:string =''
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    position: relative;
    background-image: url("http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/4cf50aa8e6ca597f42e08b3c0745d933.png");
    .fixed-select ::v-deep input {
      background: #2d3a4b;
      color:#ffffff;
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
      top:20px;
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
        top: -62px;
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
