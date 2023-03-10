import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
    {
      path: 'basicSearch',
      name: 'BasicSearch',
      component: () => import('/@/views/dashboard/basic-search/index.vue'),
      meta: {
        // affix: true,
        // frameSrc: 'http://124.222.237.67:8084/',
        title: t('routes.dashboard.basicSearch'),
      },
    },
    {
      path: 'docBasedSearch',
      name: 'docBasedSearch',
      component: () => import('/@/views/dashboard/document-based-search/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.docBasedSearch'),
      },
    },
  ],
}

export default dashboard
