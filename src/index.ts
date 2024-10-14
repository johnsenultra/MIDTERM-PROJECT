import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { rootRoutes } from './routes/RootRoutes'

const app = new Hono()

app.route("/api", rootRoutes)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
