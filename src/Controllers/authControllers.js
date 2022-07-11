import {validateSchema} from "../assets/validateSchema.js";
import {signInSchema, signUpSchema} from "./../Schemas/authSchemas.js";
import {db, objectId} from "./../dbStrategy/mongo.js";
import {createToken} from "./../assets/authAssets/createToken.js"
import {conferirCadastroExistente, verificarSenha} from "../assets/authAssets/authValidadores.js";
import bcrypt from "bcrypt"

export async function loginUser(req,res){
const loginBody = req.body;

//VALIDACOES
const loginValido = validateSchema(signInSchema,loginBody)
if(loginValido){
    res.status(422).send("Login inválido")
    return
}
const cadastroExistente = await conferirCadastroExistente(loginBody)
const senhaValida = await verificarSenha(loginBody, cadastroExistente)
if(!cadastroExistente||!senhaValida){
    return res.status(401).send("Email ou Senha inválidos")
}
// FIM DAS VALIDACOES
    try {
        const time = Date.now()

        const token = await createToken(loginBody.email,time)
        await db.collection("sessions").insertOne({"name":cadastroExistente.name,"email": cadastroExistente.email,"user_id":cadastroExistente._id, token,time})
        const userToken =await db.collection("sessions").find({token}).toArray()
        res.status(201).send({...cadastroExistente,token})

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function createUser(req,res){
    const CadastroBody = req.body;
    const {password} = CadastroBody
    const CadastroValido = validateSchema(signUpSchema, CadastroBody)
    
    if(CadastroValido){
        res.status(422).send("Cadastro inválido")
        return
    }
    
    const cadastroExistente = await conferirCadastroExistente(CadastroBody)
   
    if(cadastroExistente){
        return res.status(401).send("Email já cadastrado")
    }

    try {
        const passwordCrypt = bcrypt.hashSync(password,10)
        await db.collection("users").insertOne({...CadastroBody,password:passwordCrypt})
        res.status(201).send({...CadastroBody,password:passwordCrypt})

    } catch (error) {
        res.status(500).send(error)
    }
}