<<<<<<< HEAD
import express,{json} from "express";
import dotenv from "dotenv";
import cors from "cors";
import {loginUser,createUser} from "./Controllers/authControllers.js";
import  { createCarrinho, getCarrinho} from './Controllers/carrinhoControllers.js';

=======
import express,{json} from "express"
import dotenv from "dotenv"
import cors from "cors"
import {loginUser,createUser} from "./Controllers/authControllers.js"
import { carregarProdutos } from "./Controllers/productController.js"
import { db } from "./dbStrategy/mongo.js";
>>>>>>> b5385664b88969362c44c9bced22bac507eee258
dotenv.config();

const app = express();

app.use(json());
app.use(cors());

//Auth Route
app.post("/",loginUser);
app.post("/cadastro", createUser);

app.get("/produtos", carregarProdutos);


//      TESTE PARA LIMPEZA DE TOKEN

// function agendarLimpezaToken(){
//     setInterval(deletarTokenVelho,900000)
// }

// agendarLimpezaToken()

// async function deletarTokenVelho(){
//     const timeNow = Date.now();
//     const horaEmMilesec = 3600000;
//     const tempoLimite = timeNow - horaEmMilesec;
//     await db.collection("sessions").deleteMany({"time":{$lt:tempoLimite}})
// }


// Carrinho Route
app.post("/carrinho",createCarrinho)
app.get("/carrinho",getCarrinho)


app.get("/teste", (req,res)=>{
    console.log("rodei")
    res.status(200).send("tudo ok")
})

app.listen(process.env.PORT,()=>{
    console.log("servido funfando")
})