import joi from 'joi';

export const produtoIdSchema = joi.object({
    id_user: joi.string().required(),
    id_produto:joi.string().required()
})

export const userIdSchema= joi.object({
    id_user: joi.string().required(),
    
})
