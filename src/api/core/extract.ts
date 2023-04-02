import { defHttp } from '/@/utils/http/axios'

enum Api {
  TEXTEXTRACT = '/text/extract-entities',
}

export const textExtract = (inputText) => {
  return defHttp.post(
    {
      url: Api.TEXTEXTRACT,
      params: { inputText },
    },
    {
      apiUrl: '/basic-api',
    },
  )
}
