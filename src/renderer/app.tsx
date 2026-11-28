import { createRoot } from 'react-dom/client'
import { lazy } from 'react'

// lazy loading
const Home = lazy(() => import('./pages/home/index'))
const Setting = lazy(() => import('./pages/setting/index'))

const hashPath = window.location.hash.slice(1)
const Page = hashPath === 'home' ? Home : Setting

const root = createRoot(document.body)
root.render(<Page />)
