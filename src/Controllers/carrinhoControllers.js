import { validateSchema } from "../assets/validateSchema.js"
import {produtoIdSchema,userIdSchema} from '../Schemas/carrinhoSchemas.js'
import {db,objectId} from "./../dbStrategy/mongo.js";

export async function createCarrinho (req,res){
    const body = req.body;
    const {id_user,id_produto}=body
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const session = await db.collection("sessions").findOne({token});
    const {name,email}=session
    const validacao = await validacoes(body,produtoIdSchema,token,res,session)
    if(validacao){
        return
    }
    try {
        
        const item = await db.collection("users").findOne({email:"victor@gmail.com"})
        const produtoDoCarrinho= {
            name, 
            email,
            id_user,
            produto:item
        }
        await db.collection("carrinho").insertOne({...produtoDoCarrinho});
        const carrinho = await db.collection("carrinho").find({}).toArray()
        return res.status(201).send(carrinho)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function validacoes(body,schema,token,res,session){
    const bodyValido = validateSchema(schema,body)
    if(bodyValido){
        res.status(422).send("não foi possível adicionar ao carrinho")
        return true
    }
    if(!token){
        res.status(401).send("token inválido")
        return true
    }

   
    if(!session){
        res.status(401).send("sessão não encontrada")
        return true
    }
    return false
}

export async function getCarrinho (req,res){
    const {authorization} = req.headers;
    const body = req.body;
    const {id_user}= body;
    const token = authorization?.replace('Bearer ', '');
    const session = await db.collection("sessions").findOne({token});
    const validacao = await validacoes(body,userIdSchema,token,res,session);
  
    if(validacao){
        return
    }

    try{
        const userProdutos = await db.collection("carrinho").find({id_user}).toArray();
        const listaProdutos= userProdutos.map((item)=> item.produto)
        res.status(200).send(listaProdutos);
    }catch(error){
        res.sendStatus(500);
    }
}
