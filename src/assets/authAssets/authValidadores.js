
import bcrypt from "bcrypt"
import {db,objectId} from "./../../dbStrategy/mongo.js";

export async function conferirCadastroExistente(acesso){
    //console.log("estou conferindo cadastro")
    const {email} = acesso;
    const usuarioEncontrado = await db.collection("users").findOne({email});
    if(usuarioEncontrado){
        return usuarioEncontrado
    }
    return false
}

export function verificarSenha(acesso,cadastro){
    //console.log("estou conferindo senha")
    const {password} = acesso;
    const passwordCrypt = cadastro.password;
    if(!cadastro){
        return true
    }
    const verificacao = bcrypt.compareSync(password,passwordCrypt);    
    return verificacao
}
