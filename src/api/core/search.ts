import { defHttp } from '/@/utils/http/axios'

enum Api {
  TEXTSEARCH = '/textSearch',
}

export const textSearch = (text) => {
  return defHttp.post(
    {
      url: Api.TEXTSEARCH,
      params: { text },
    },
    // {
    //   //配置这个就可代理 上面的路径了
    //   apiUrl: '/search',
    // },
  )
}
