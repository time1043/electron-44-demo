import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router'

const root = createRoot(document.body)
root.render(<RouterProvider router={router} />)
