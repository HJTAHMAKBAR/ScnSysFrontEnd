import { defHttp } from '/@/utils/http/axios'

enum Api {
  SEARCH = '/search',
}

export const search = (params) => {
  return defHttp.get(
    {
      url: Api.SEARCH,
      params,
    },
    {
      apiUrl: '/search-api',
      isTransformResponse: false,
    },
  )
}
