import { Hono } from 'hono'
import { employeeRoutes } from './EmployeeRoutes';

export const rootRoutes = new Hono();

rootRoutes.route("/viewEmployee", employeeRoutes);

rootRoutes.route("/postEmployee", employeeRoutes);

rootRoutes.route("/putEmployee", employeeRoutes);

rootRoutes.route("/deleteEmployee", employeeRoutes);