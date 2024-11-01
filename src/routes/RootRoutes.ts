import { Hono } from 'hono'
import { employeeRoutes } from './EmployeeRoutes';
import { productRoutes } from './ProductRoutes';
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


// Root Routes for employeeData
rootRoutes.route("/viewEmployee", employeeRoutes);

rootRoutes.route("/postEmployee", employeeRoutes);

rootRoutes.route("/putEmployee", employeeRoutes);

rootRoutes.route("/deleteEmployee", employeeRoutes);


// Root Routes for productData
rootRoutes.route("/viewProduct", productRoutes);

rootRoutes.route("/postProduct", productRoutes);

rootRoutes.route("/putProduct", productRoutes);

rootRoutes.route("/deleteProduct", productRoutes);
