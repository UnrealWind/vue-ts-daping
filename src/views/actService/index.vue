<template>
  <div class="dashboard-editor-container">
    <el-row>
      <el-col
        :xs="6"
        :sm="6"
        :lg="6"
        style="position: absolute;left: 0;z-index: 999;"
      >
        <div class="left-part">
          <h3 class="margin-top">
            发动机数量分析
          </h3>
          <div class="title-line" />
          <div
            class="chart-wrapper"
            style="background-color:rgba(0,16,52,0.8);height:450px;overflow: hidden"
          >
            <el-row>
              <h5><span class="point">·</span>连接量</h5>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <pie-chart />
              </el-col>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <pie-chart />
              </el-col>
              <h5><span class="point">·</span>活跃量</h5>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <pie-chart />
              </el-col>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <pie-chart />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :lg="24"
      >
        <div>
          <h3 class="center">
            车联网及HMLD主动服务
          </h3>
          <h4 class="center">
            2020-06-08 12:00:00
          </h4>
          <div class="bg-shiny" />
        </div>
        <div class="chart-wrapper">
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
          <map-chart />
        </div>
      </el-col>
      <el-col
        :xs="6"
        :sm="6"
        :lg="6"
        style="position: absolute;right: 0;"
      >
        <div class="right-part">
          <h3 class="margin-top">
            故障分析
          </h3>
          <div class="title-line" />
          <div
            class="chart-wrapper"
            style="background-color:rgba(0,16,52,0.8);height:450px;overflow: hidden"
          >
            <el-row>
              <h5><span class="point">·</span>故障统计</h5>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <bar-chart />
                <h6>主机厂</h6>
              </el-col>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <bar-chart1 />
                <h6>SMN</h6>
              </el-col>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <bar-chart2 />
                <h6>故障等级</h6>
              </el-col>
              <el-col
                :xs="12"
                :sm="12"
                :lg="12"
              >
                <bar-chart3 />
                <h6>区域</h6>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="bottom-part">
      <el-col
        :xs="5"
        :sm="5"
        :lg="5"
      >
        <div>
          <h5><span class="point">·</span>区域分析</h5>
          <div class="chart-wrapper">
            <bar-chart4 />
          </div>
        </div>
      </el-col>
      <el-col
        :xs="4"
        :sm="4"
        :lg="4"
      >
        <div>
          <h5><span class="point">·</span>任务处理方式</h5>
          <div class="chart-wrapper">
            <pie-chart1 />
          </div>
        </div>
      </el-col>
      <el-col
        :xs="5"
        :sm="5"
        :lg="5"
      >
        <div>
          <h5><span class="point">·</span>当日故障报警情况</h5>
          <div class="chart-wrapper">
            <bar-chart5 />
          </div>
        </div>
      </el-col>
      <el-col
        :xs="5"
        :sm="5"
        :lg="5"
      >
        <div>
          <h5><span class="point">·</span>解除时间比例</h5>
          <div class="chart-wrapper">
            <pie-chart2 />
          </div>
        </div>
      </el-col>
      <el-col
        :xs="5"
        :sm="5"
        :lg="5"
      >
        <div>
          <h5><span class="point">·</span>故障码排名</h5>
          <div class="chart-wrapper">
            <bar-chart6 />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import { Component, Vue } from 'vue-property-decorator'
import BarChart from './components/BarChart.vue'
import BarChart1 from './components/BarChart1.vue'
import BarChart2 from './components/BarChart2.vue'
import BarChart3 from './components/BarChart3.vue'
import BarChart4 from './components/BarChart4.vue'
import BarChart5 from './components/BarChart5.vue'
import BarChart6 from './components/BarChart6.vue'

import PieChart from './components/PieChart.vue'
import PieChart1 from './components/PieChart1.vue'
import PieChart2 from './components/PieChart2.vue'

import mapChart from './components/mapChart.vue'

  @Component({
    name: 'DashboardAdmin',
    components: {
      BarChart,
      BarChart1,
      BarChart2,
      BarChart3,
      BarChart4,
      BarChart5,
      BarChart6,
      PieChart,
      PieChart1,
      PieChart2,
      mapChart
    }
  })
export default class extends Vue {
  // 多饼图， 动态图
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    position: relative;
    background-image: url("../../assets/img/bg.png");
    .margin-top {
      margin-top: 37px;
      padding: 10px;
    }
    .center{
      text-align: center;
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
