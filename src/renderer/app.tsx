import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy } from 'react'
import { createRoot } from 'react-dom/client'

// lazy loading
const Home = lazy(() => import('./pages/home/index'))
const Setting = lazy(() => import('./pages/setting/index'))

const hashPath = window.location.hash.slice(1)
const Page = hashPath === 'home' ? Home : Setting

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
})

const root = createRoot(document.body)
root.render(
  <QueryClientProvider client={queryClient}>
    <Page />
  </QueryClientProvider>,
)
