import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/basicSearch',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.basicSearch'),
  },
  children: [
    {
      path: 'basicSearch',
      name: 'BasicSearch',
      component: () => import('/@/views/dashboard/basic-search/index.vue'),
      meta: {
        title: t('routes.dashboard.basicSearch'),
      },
    },
    {
      path: 'docBasedSearch',
      name: 'docBasedSearch',
      component: () => import('/@/views/dashboard/single-document-based-search/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.docBasedSearch'),
      },
    },
    {
      path: 'mulDocBasedSearch',
      name: 'mulDocBasedSearch',
      component: () => import('/@/views/dashboard/multiple-document-based-search/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.mulDocBasedSearch'),
      },
    },
  ],
}

export default dashboard
