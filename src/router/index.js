import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/estudio-juridico',
    name: 'EstudioJuridico',
    component: () => import('../views/EstudioJuridico.vue')
  },
  {
    path: '/area-civil',
    name: 'AreaCivil',
    component: () => import('../views/AreaCivil.vue')
  },
  {
    path: '/area-laboral',
    name: 'AreaLaboral',
    component: () => import('../views/AreaLaboral.vue')
  },
  {
    path: '/derecho-comercial',
    name: 'DerechoComercial',
    component: () => import('../views/DerechoComercial.vue')
  },
  {
    path: '/derecho-familia',
    name: 'DerechoFamilia',
    component: () => import('../views/DerechoFamilia.vue')
  },
  {
    path: '/derecho-empresarial',
    name: 'DerechoEmpresarial',
    component: () => import('../views/DerechoEmpresarial.vue')
  },
  {
    path: '/derecho-penal',
    name: 'DerechoPenal',
    component: () => import('../views/DerechoPenal.vue')
  },
  {
    path: '/socios',
    name: 'Socios',
    component: () => import('../views/Socios.vue')
  },
  {
    path: '/trabajar-con-nosotros',
    name: 'TrabajarConNosotros',
    component: () => import('../views/TrabajarConNosotros.vue')
  },
  {
    path: '/guia-trabajadores',
    name: 'GuiaTrabajadores',
    component: () => import('../views/GuiaTrabajadores.vue')
  },
  {
    path: '/notas-interes',
    name: 'NotasInteres',
    component: () => import('../views/NotasInteres.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
