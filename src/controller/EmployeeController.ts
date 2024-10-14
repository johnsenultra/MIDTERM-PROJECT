import { Context } from "hono";
import { employeesModel } from "../model/models";

// READ
export const getEmployee = async (c: Context) => c.json(employeesModel);

// POST
export const addEmployee = async (c: Context) => {
   const { id, fullName, department, position, email, phone, salary, isActive } = await c.req.json();

   employeesModel.push({ id, fullName, department, position, email, phone, salary, isActive });

   return c.json(employeesModel);
}

// PUT
export const updateEmployee = async (c: Context) => {
   const { id, fullName, department, position, email, phone, salary, isActive } = await c.req.json();

   const employeeIndex = employeesModel.findIndex((employee) => employee.id === id); // Here we are finding the index of the employee with the id that we want to update. findIndex() method returns the array element index if any of the elements in the array pass the test, otherwise, it returns -1. 
 
   // Check if the employeeIndex is not equal to -1, then update the employee with the new data.
   if (employeeIndex !== -1) {
      employeesModel[employeeIndex] = { id, fullName, department, position, email, phone, salary, isActive };
   }

   return c.json(employeesModel);
};

// DELETE
export const deleteEmployee = async (c: Context) => {
   const { id } = await c.req.json();

   const employeeIndex = employeesModel.findIndex((employee) => employee.id === id); // same logic as the updateEmployee function

   // Check if the employeeIndex is not equal to -1, then delete the employee.
   if(employeeIndex !== -1) { 
      employeesModel.splice(employeeIndex, 1);
   }

   return c.json(employeesModel);
};