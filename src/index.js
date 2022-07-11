import express,{json} from "express";
import dotenv from "dotenv";
import cors from "cors";
import {loginUser,createUser} from "./Controllers/authControllers.js";
import  { createCarrinho, getCarrinho} from './Controllers/carrinhoControllers.js';

import { carregarProdutos,postProdutos } from "./Controllers/productController.js"


dotenv.config();

const app = express();

app.use(json());
app.use(cors());

//Auth Route
app.post("/",loginUser);
app.post("/cadastro", createUser);


//Produtos Route


app.get("/produtos", carregarProdutos);
app.post("/produtos",postProdutos)
// Carrinho Route
app.post("/carrinho",createCarrinho)
app.get("/carrinho",getCarrinho)


app.listen(process.env.PORT)
