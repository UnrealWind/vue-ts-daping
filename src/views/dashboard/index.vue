<template>
  <div class="dashboard-editor-container">
    <el-row>
      <div>
        <h3 class="center">
          e路康明斯用户及功能看板
        </h3>
        <h4 class="center">
          {{ currentTime |parseTime }}
        </h4>
        <div class="bg-shiny" />
      </div>
      <el-col
        :xs="6"
        :sm="6"
        :lg="6"
      >
        <div class="bg">
          <h3 class="padding10">
            <span class="dark-yellow">·</span>用户总数分析
            <el-tooltip
              class="item"
              effect="dark"
              content="2020年至今各渠道用户数量分布"
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
            <shiny-pie-chart
              :data="channelCountData.result"
              height="280px"
              style="position: relative;"
            />
            <p>
              用户总数
              <br>
              <span class="yellow">{{ channelCountData.total }}
                <img src="../../assets/img/mov-circle.png">
              </span>
            </p>
          </div>
          <h3 class="padding10">
            <span class="dark-yellow">·</span>普通用户省份分布
            <el-tooltip
              class="item"
              effect="dark"
              content="2020年至今各省份用户数量排名"
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
          <div style="position: relative;">
            <el-radio-group
              v-model="top5"
              class="fixed-top-right"
              @change="getLocationDistribution"
            >
              <el-radio-button label="top5" />
              <el-radio-button label="bottom5" />
            </el-radio-group>
            <bar-chart
              :data="locationDistributionData"
              height="300px"
            />
          </div>
          <h3 class="padding10 margin-top20">
            <span class="dark-yellow">·</span>用户月增量趋势
            <el-tooltip
              class="item"
              effect="dark"
              content="2020年至今每月新增用户数量"
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
            <line-chart
              :data="monthlyMemberGrowthData"
              height="294px"
            />
          </div>
        </div>
      </el-col>
      <el-col
        :xs="12"
        :sm="12"
        :lg="12"
      >
        <div class="bg">
          <h3 class="padding10">
            <span class="dark-yellow">·</span>用户行为分析
            <el-tooltip
              class="item"
              effect="dark"
              content="2020年至今各功能使用次数"
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
          <div class="total-count">
            <div>
              <div>总用户数量</div>
              <div>{{ memberNum }}</div>
            </div>
            <div>
              <div>{{ targetMonth }}月活跃数量</div>
              <div>{{ visitingCount }}</div>
            </div>
          </div>
          <div
            class="chart-wrapper"
          >
            <radar-chart
              :data="actionCountListData"
              height="480px"
            />
            <div class="radar-item">
              <el-row>
                <el-col
                  v-for="(item, index) in actionCountListData.dis"
                  :key="index"
                  :xs="6"
                  :sm="6"
                  :lg="6"
                  class="radar-dis"
                >
                  <span>{{ item.name }}</span>:<span>{{ actionCountListData.data[index] }}</span><span>次</span>
                </el-col>
              </el-row>
            </div>
            <h3 class="padding10 margin-top20">
              <span class="dark-yellow">·</span>登录时间分析
              <el-tooltip
                class="item"
                effect="dark"
                content="2020年至今用户登录时间段统计"
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
              <line-chart
                :data="usageDistributionData"
                height="294px"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        :xs="6"
        :sm="6"
        :lg="6"
      >
        <div class="bg">
          <h3 class="padding10">
            <span class="dark-yellow">·</span>日活量分析
            <el-tooltip
              class="item"
              effect="dark"
              content="各渠道当日使用APP的用户数量"
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
            <shiny-pie-chart
              :data="channelCountLastDayData.result"
              height="280px"
            />
            <p>
              用户总数
              <br>
              <span class="yellow">{{ channelCountLastDayData.total }}
                <img src="../../assets/img/mov-circle.png">
              </span>
            </p>
          </div>
          <h3 class="padding10">
            <span class="dark-yellow">·</span>用户活跃天数分析
            <el-tooltip
              class="item"
              effect="dark"
              content="用户当月累计登录天数分布"
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
          <bar-chart
            ref="activeDays"
            :data="activeDaysData"
            height="300px"
          />
          <h3 class="padding10 margin-top20">
            <span class="dark-yellow">·</span>日活量变化趋势
            <el-tooltip
              class="item"
              effect="dark"
              content="2020年至今每天使用APP的用户数量变化趋势"
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
            <line-chart
              :data="dailyCountData"
              height="294px"
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
import RadarChart from '../../components/Charts/RadarChart.vue'
import ShinyPieChart from '../../components/Charts/shinyPieChart.vue'

import { getTotalCount, getActiveDaysList, getDailyCountList, getLocationDistribution, getMonthlyMemberGrowth, getUsageDistributionByHour, getChannelCountList, getChannelCountLastDay, getActionCountList } from '@/api/chart'

@Component({
  name: 'DashboardAdmin',
  components: {
    PieChart,
    BarChart,
    LineChart,
    RadarChart,
    ShinyPieChart
  }
})

export default class extends Vue {
    // 切换top5/bottom5
    private top5:string = 'top5'
    // 当前月份
    private targetMonth:number = new Date().getMonth()
    // 用户总量
    private memberNum:number = 0
    // 当月活跃
    private visitingCount:number = 0
    // 当前时间
    private currentTime:object = new Date()

    private channelCountData:object = {}

    private channelCountLastDayData:object[] = []

    private locationDistributionData:object = {}

    private activeDaysData:object = {}

    private monthlyMemberGrowthData:object[] = []

    private dailyCountData:object[] = []

    private usageDistributionData:object[] = []

    private actionCountListData:object = {}

    mounted() {
      this.getActionCountList()
      this.getTotalCount()
      this.getActiveDays()
      this.getDailyCount()
      this.getLocationDistribution()
      this.getMonthlyMemberGrowth()
      this.getUsageDistributionByHour()
      this.getChannelCountList()
      this.getChannelCountLastDay()
      setInterval(() => {
        this.currentTime = new Date()
        if (new Date().getMinutes() === 15 && new Date().getSeconds() === 0) {
          this.getActionCountList()
          if (new Date().getHours() === 16) {
            this.getTotalCount()
            this.getActiveDays()
            this.getDailyCount()
            this.getLocationDistribution()
            this.getMonthlyMemberGrowth()
            this.getUsageDistributionByHour()
            this.getChannelCountList()
            this.getChannelCountLastDay()
          }
        }
      }, 1000)
    }

    // 用户行为分析
    private async getActionCountList() {
      const { data } = await getActionCountList({})
      interface tar {
        data:number[]
        dis:object[]
      }
      const target:tar = {
        data: [],
        dis: []
      }
      data.sort(this.compare('count'))
      data.reverse()
      data.length = 8

      data.forEach((n:any, i) => {
        target.data.push(n.count)
        target.dis.push({
          name: n.actionName,
          max: data[0].count
        })
      })
      this.actionCountListData = target
    }

    // 日活量分析
    private async getChannelCountLastDay() {
      const { data } = await getChannelCountLastDay({})
      data.result.sort(this.compare('count'))
      this.channelCountLastDayData = data
    }

    // 用户总数分析
    private async getChannelCountList() {
      const { data } = await getChannelCountList({})
      data.result.sort(this.compare('count'))
      // todo need del
      data.result[data.result.length - 1].count = data.result[data.result.length - 1].count - 9000
      // todo need del
      data.total = data.total - 9000
      this.channelCountData = data
    }

    // 总访问量/月活跃量
    private async getTotalCount() {
      const { data } = await getTotalCount({})
      // todo need del
      this.memberNum = data.memberNum - 9000
      this.visitingCount = data.visitingCount
    }

    // 登录时间分析
    private async getUsageDistributionByHour() {
      const { data } = await getUsageDistributionByHour({})
      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      const target:callBackItem[] = [{
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        chartX: ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点']
      }]
      data.forEach((n, i) => {
        target[0].data[Number(n.hour)] = n.count
        target[0].chartX[Number(n.hour)] = Number(n.hour) + '点'
      })

      this.usageDistributionData = target
    }

    // 用户月增量趋势
    private async getMonthlyMemberGrowth() {
      const { data } = await getMonthlyMemberGrowth({})
        interface callBackItem {
          data:number[]
          chartX:string[]
        }
        const target:callBackItem[] = [{
          data: [],
          chartX: []
        }]
        data.forEach((n, i) => {
          for (const i in n) {
            target[0].data.push(n[i])
            target[0].chartX.push(i)
          }
        })

        this.monthlyMemberGrowthData = target
    }

    // 日活量变化趋势
    private async getDailyCount() {
      const { data } = await getDailyCountList({})
      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      const target:callBackItem[] = [{
        data: [],
        chartX: []
      }]
      data.forEach((n, i) => {
        target[0].data.push(n.DailyCount)
        target[0].chartX.push(n.Days)
      })

      this.dailyCountData = target
    }

    // 用户活跃天数分析
    private async getActiveDays() {
      const { data } = await getActiveDaysList({})
      interface callBackItem {
        data:number[]
        chartX:string[]
      }
      const target:callBackItem = {
        data: [],
        chartX: []
      }
      data.forEach((n, i) => {
        target.data.push(n.count)
        target.chartX.push(n.activeDays + '天')
      })

      this.activeDaysData = target
    }

    // 用户省份分布
    private async getLocationDistribution() {
      let type:number
      this.top5 === 'top5' ? type = 1 : type = 2
      const { data } = await getLocationDistribution({ params: { type: type } })
      interface callBackItem {
        data:number[]
        chartY:number[]
      }
      const target:callBackItem = {
        data: [],
        chartY: []
      }

      data.sort(this.compare('count'))
      data.forEach((n, i) => {
        target.data.push(n.count)
        target.chartY.push(n.province)
      })

      this.locationDistributionData = target
    }

    private compare(property) {
      return function(obj1, obj2) {
        const value1 = obj1[property]
        const value2 = obj2[property]
        return value1 - value2 // 升序
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
    .fixed-top-right {
      position: absolute;
      right:6px;
      top:3px;
      z-index:100;
      ::v-deep span {
        padding: 3px 6px;
        font-size: 12px;
        display: inline-block;
        width: 70px;
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
    .radar-dis {
      margin-top: 7px;
      color: #fff;
      font-size: 14px;
      padding: 5px 0 0px 20px;
      span:first-child{
        padding: 0 5px;
      }
      span:nth-child(2){
        color: #faad14;
        padding: 0 5px;
        font-size: 16px;
      }
      span:nth-child(3){
        font-size: 12px;
      }
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
      width:340px;
      margin:0 auto;
      >div{
        width: 150px;
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
      z-index:999;
    }
    .radar-item {
      height:60px;
    }
    .chart-wrapper {
      padding: 0;
      position: relative;
      p {
        position: absolute;
        z-index: 999;
        text-align: center;
        width: 100%;
        top:105px;
        .yellow {
          position: relative;
          color:#faad14;
          font-size: 20px;
          display: inline-block;
          width: 100px;
        }
      }
      img {
        z-index: -1;
        height: 120px;
        width: 120px;
        position: absolute;
        margin:0 auto;
        top: -61px;
        left: -11px;
      }
    }
    ::v-deep .el-icon-question {
      opacity: 0.5;
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
