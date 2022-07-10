import { validateSchema } from "../assets/validateSchema"
import {carrinhoSchemas} from '../Schemas/carrinhoSchemas'
import {db,objectId} from "./../dbStrategy/mongo.js";
export async function createCarrinho (req,res){
    const body = req.body;
    const {id} = body;
    const bodyValido = validateSchema(carrinhoSchemas,body);
    if(bodyValido){
        res.status(422).send("body enviado inválido")
        return
    }

    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        return res.status(401).send("token inválido")
    }
    const session = await db.collection("sessions").findOne({token});
    if(!session){
        return res.status(401).send("sessão não encontrada")
    }

    try {
        const produto = await db.collection("catalogo").findOne({_id:objectId(id)})
        await db.collection("carrinho").insertOne({...produto});
        return res.status(201).send("Produto adicionado ao carrinho")
    } catch (error) {
        res.sendStatus(500)
    }
}

export async function getCarrinho (req,res){
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        return res.status(401).send("token inválido")
    }
    const session = await db.collection("sessions").findOne({token});
    if(!session){
        return res.status(401).send("sessão não encontrada")
    }

    try{
        const produtos = await db.collection("carrinho").find({}).toArray();
        res.status(200).send(produtos)
    }catch(error){
        res.sendStatus(500)
    }
}