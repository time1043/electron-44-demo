import { createHashRouter } from 'react-router'
import { lazy, Suspense } from 'react'

// lazy loading
const Home = lazy(() => import('./pages/home'))
const Setting = lazy(() => import('./pages/setting'))

// index.html#/home -> Home
export const router = createHashRouter([
  {
    path: '/home',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/setting',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Setting />
      </Suspense>
    ),
  },
])
