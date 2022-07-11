import {v4 as uuid} from "uuid"
import {db,objectId} from "./../../dbStrategy/mongo.js";

async function limparTokensUsados(email,token){
const listaTokens = await db.collection("sessions").deleteOne({email,token})
}

export async function createToken (email,timeNow){
    const horaEmMilesec = 3600000;
    const tempoLimite = timeNow - horaEmMilesec;
    const userUltimoLogin = await db.collection("sessions").findOne({email})
    const tokenEhAtual = !userUltimoLogin? false :userUltimoLogin.time>=tempoLimite? true : false;
    const newToken = uuid();
    if (userUltimoLogin && tokenEhAtual){
        //console.log(userUltimoLogin)
        limparTokensUsados(email,userUltimoLogin.token)
        //console.log("usando tokem antigo...")
        return userUltimoLogin.token
    }else{
        userUltimoLogin? await db.collection("sessions").deleteMany({"email":userUltimoLogin.email,"time":{$lt:tempoLimite}}):"";
        //console.log("criando novo token...")
        return newToken
    }
}