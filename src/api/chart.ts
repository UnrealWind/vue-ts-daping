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

// 4.3
export const getAbandonRate = (params: any) =>
  request.get('sse/getAbandonRate', params)

export const getCaseQty = (params: any) =>
  request.get('sse/getCaseQty', params)

export const getChannelList = (params: any) =>
  request.get('sse/getChannelList', params)

export const getDealerUtilization = (params: any) =>
  request.get('sse/getDealerUtilization', params)

export const getNPSList = (params: any) =>
  request.get('sse/getNPSList', params)

export const getNPSLoyaltyTrendByChannel = (params: any) =>
  request.get('sse/getNPSLoyaltyTrendByChannel', params)

export const getPickingRateIn30s = (params: any) =>
  request.get('sse/getPickingRateIn30s', params)

export const getRVList = (params: any) =>
  request.get('sse/getRVList', params)

export const getRVRepairingRateTrendByChannel = (params: any) =>
  request.get('sse/getRVRepairingRateTrendByChannel', params)

export const getTSRRate = (params: any) =>
  request.get('sse/getTSRRate', params)

export const getWarrantyRate = (params: any) =>
  request.get('sse/getWarrantyRate', params)

export const getAllUtilization = (params: any) =>
  request.get('sse/getAllUtilization', params)
