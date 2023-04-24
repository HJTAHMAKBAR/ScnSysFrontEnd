import { defHttp } from '/@/utils/http/axios'

enum Api {
  WORDCLOUD = '/mul/word-cloud',
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
