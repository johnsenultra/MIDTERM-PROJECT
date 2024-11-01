
import { Hono } from "hono";
import { addEmployee, getEmployee, updateEmployee, deleteEmployee } from "../controller/EmployeeController";
import { middleware } from "../middleware/middleware";

export const employeeRoutes = new Hono()

// ** HTTP method **
// GET
employeeRoutes.get("/getEmployee", middleware, getEmployee);

// POST
employeeRoutes.post("/addEmployee", middleware, addEmployee)

// PUT
employeeRoutes.put("/updateEmployee", middleware, updateEmployee)

// DELETE
employeeRoutes.delete("/deleteEmployee", middleware, deleteEmployee)