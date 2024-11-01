import { Hono } from "hono";
import { getProduct, createProduct, updateProduct, deleteProduct } from "../controller/ProductController";
import { middleware } from "../middleware/middleware";


export const productRoutes = new Hono()

// ** GET
productRoutes.get("/getProduct", middleware, getProduct);

// ** POST
productRoutes.post("/createProduct", middleware, createProduct)

// ** PUT
productRoutes.put("/updateProduct", middleware, updateProduct) 

// ** DELETE
productRoutes.delete("/deleteProduct", middleware, deleteProduct)