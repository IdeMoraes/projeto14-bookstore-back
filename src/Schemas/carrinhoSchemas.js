import joi from 'joi';

export const produtoIdSchema = {
    id: joi.string().required()
}