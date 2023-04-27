import { defHttp } from '/@/utils/http/axios'

enum Api {
  WORDCLOUD = '/mul/word-cloud',
  RELATIONGRAPH = '/mul/relation-graph',
}

export const wordCloud = (params) => {
  return defHttp.post(
    {
      url: Api.WORDCLOUD,
      params,
    },
    {
      apiUrl: '/basic-api',
    },
  )
}

export const relationGraph = (params) => {
  return defHttp.post(
    {
      url: Api.RELATIONGRAPH,
      params,
    },
    {
      apiUrl: '/basic-api',
    },
  )
}
