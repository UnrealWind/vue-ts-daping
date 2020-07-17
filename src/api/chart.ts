import request from '@/utils/request'
import { debuglog } from 'util'

// 4.1
export const getActiveDaysList = (params: any) =>
  request.get('aba/getActiveDaysList', params)

export const getDailyCountList = (params: any) =>
  request.get('aba/getDailyCountList', params)

export const getLocationDistribution = (params: any) =>
  request.get('aba/getLocationDistribution', params)

export const getMonthlyMemberGrowth = (params: any) =>
  request.get('aba/getMonthlyMemberGrowth', params)

export const getTotalCount = (params: any) =>
  request.get('aba/getTotalCount', params)

export const getUsageDistributionByHour = (params: any) =>
  request.get('aba/getUsageDistributionByHour', params)

export const getChannelCountList = (params: any) =>
  request.get('aba/getChannelCountList', params)

export const getChannelCountLastDay = (params: any) =>
  request.get('aba/getChannelCountLastDay', params)

export const getActionCountList = (params: any) =>
  request.get('aba/getActionCountList', params)

// 4.4
export const getCountListByAuthLevel = (params: any) =>
  request.get('dls/getCountListByAuthLevel', params)

export const getCountListByEmissionLevel = (params: any) =>
  request.get('dls/getCountListByEmissionLevel', params)

export const getCountListByGradedStatus = (params: any) =>
  request.get('dls/getCountListByGradedStatus', params)

export const getCountListByMainframeCompanyName = (params: any) =>
  request.get('dls/getCountListByMainframeCompanyName', params)

export const getCountListByAuthModel = (params: any) =>
  request.get('dls/getCountListByAuthModel', params)

export const getCountListByIndustrialMarketStatus = (params: any) =>
  request.get('dls/getCountListByIndustrialMarketStatus', params)

export const getCountListByProvince = (params: any) =>
  request.get('dls/getCountListByProvince', params)

export const getDealerList = (params: any) =>
  request.get('dls/getDealerList', params)
