
import { Hono } from "hono";
import { addEmployee, getEmployee, updateEmployee, deleteEmployee } from "../controller/EmployeeController";

export const employeeRoutes = new Hono()

// GET
employeeRoutes.get("/getEmployee", getEmployee);

// POST
employeeRoutes.post("/addEmployee", addEmployee)

// PUT
employeeRoutes.put("/updateEmployee", updateEmployee)

// DELETE
employeeRoutes.delete("/deleteEmployee", deleteEmployee)