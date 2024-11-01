import { productsModel } from '../model/ProductModels';
import { Context } from 'hono';

// ** CRUD OPERATIONS **

// READ
export const getProduct = async (c: Context) => c.json(productsModel);

// CREATE
export const createProduct = async (c: Context) => {
   const { id, productName, category, price, stockQuantity, description, isActive } = await c.req.json();

   productsModel.push({ id, productName, category, price, stockQuantity, description, isActive });

   return c.json(productsModel);
}

// UPDATE
export const updateProduct = async (c: Context) => {
   const { id, productName, category, price, stockQuantity, description, isActive } = await c.req.json();

   const productIndex = productsModel.findIndex((product) => product.id === id); // Here we are finding the index of the employee with the id that we want to update. findIndex() method returns the array element index if any of the elements in the array pass the test, otherwise, it returns -1. 
 
   // Check if the employeeIndex is not equal to -1, then update the employee with the new data.
   if (productIndex !== -1) {
      productsModel[productIndex] = { id, productName, category, price, stockQuantity, description, isActive };
   }

   return c.json(productsModel);
};

// DELETE
export const deleteProduct = async (c: Context) => {
   const { id } = await c.req.json();

   const productIndex = productsModel.findIndex((product) => product.id === id); // same logic as the updateEmployee function

   // Check if the employeeIndex is not equal to -1, then delete the employee.
   if(productIndex !== -1) { 
      productsModel.splice(productIndex, 1);
   }

   return c.json(productsModel);
};