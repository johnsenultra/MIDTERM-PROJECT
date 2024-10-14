import { serve } from '@hono/node-server' // Import the serve function
import { Hono } from 'hono' // Import the Hono class
import { rootRoutes } from './routes/RootRoutes' // Import the rootRoutes
import { hashPassword } from './utils/authutils' // Import the AuthUti
import { cors } from 'hono/cors' // Import the cors middleware

const app = new Hono()

app.use(cors()); // Initialise the cors middleware
app.route("/api", rootRoutes); // Here we are routing the root path to the rootRoutes

app.route("/fetch", hashPassword);

const port = 3000
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
})
