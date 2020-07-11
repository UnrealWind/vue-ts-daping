import request from '@/utils/request'

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
