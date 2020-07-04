<template>
  <div class="dashboard-editor-container">
    <el-radio-group
      v-model="dealer"
      class="fixed-top-right"
    >
      <el-radio-button label="经销商总计" />
      <el-radio-button label="发展中经销商总计" />
    </el-radio-group>
    <el-row>
      <el-col
        :xs="4"
        :sm="4"
        :lg="4"
        style="position: absolute;left: 0;z-index: 999;"
      >
        <div class="left-part">
          <h3 class="margin-top">
            省份分布
          </h3>
          <div class="title-line" />
          <div
            class="chart-wrapper"
            style="background-color:rgba(0,16,52,0.8);height:780px;overflow: hidden"
          >
            <el-row>
              <el-col
                :xs="24"
                :sm="24"
                :lg="24"
              >
                <bar-chart />
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
            经销商服务网络分布
          </h3>
          <h4 class="center">
            2020-06-08 12:00:00
          </h4>
          <div class="bg-shiny" />
        </div>
        <div class="chart-wrapper">
          <div class="total-count">
            <div v-if="dealer === '经销商总计'">
              <div>经销商统计</div>
              <div>5671</div>
            </div>
            <div v-else>
              <div>发展中经销商总计</div>
              <div>5128</div>
            </div>
          </div>
          <map-chart />
        </div>
      </el-col>
      <el-col
        :xs="4"
        :sm="4"
        :lg="4"
        style="position: absolute;right: 0;"
        class="fixed-right-bottom"
      >
        <div class="right-part ">
          <h3 class="margin-top">
            站点统计
          </h3>
          <div class="title-line" />
          <div
            class="chart-wrapper"
            style="background-color:rgba(0,16,52,0.8);height:150px;overflow: hidden"
          >
            <el-row>
              <el-col
                :xs="24"
                :sm="24"
                :lg="24"
              >
                <bar-chart1 />
              </el-col>
            </el-row>
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

import mapChart from './components/mapChart.vue'

  @Component({
    name: 'DashboardAdmin',
    components: {
      BarChart,
      BarChart1,
      mapChart
    }
  })
export default class extends Vue {
  private dealer:string = '经销商总计'
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    position: relative;
    background-image: url("http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/4cf50aa8e6ca597f42e08b3c0745d933.png");
    .margin-top {
      margin-top: 37px;
      padding: 10px;
    }
    .fixed-top-right {
      position: absolute;
      right: 30px;
      top:90px;
      z-index: 999;
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
    .fixed-right-bottom {
      position: absolute;
      bottom: 20px;
      right: 220px;
      z-index: 999;
    }
    .left-part,.right-part {
      padding: 0 10px;
    }
    .total-count{
      width:250px;
      >div{
        width: 200px;
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
