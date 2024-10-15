import { Hono } from 'hono'
import { employeeRoutes } from './EmployeeRoutes';
import { cors } from 'hono/cors';


export const rootRoutes = new Hono();

// Apply CORS middleware to all routes
rootRoutes.use('@*', cors({
   origin: ["http://localhost:3000", "http://localhost:3001"], // This will allow request from this URL
   allowMethods: ["GET", "POST", "PUT", "DELETE"], // This only the allow HTTP method
   allowHeaders: ["Content-Type", "Authorization"], // This will allow the headers
   exposeHeaders: ["Content-Type", "Authorization"], // This will expose the headers
   maxAge: 600, // This will set the max age of the request
   credentials: true // This will allow the credentials **Note: This is only for the browser
}));

rootRoutes.route("/viewEmployee", employeeRoutes);

rootRoutes.route("/postEmployee", employeeRoutes);

rootRoutes.route("/putEmployee", employeeRoutes);

rootRoutes.route("/deleteEmployee", employeeRoutes);