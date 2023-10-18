import Joi from "joi";

export default {
    "POST":{
        size: Joi.number().positive().required().messages({
            "number.base":"Size should be a number",
            "any.required":"Size values expected",
            "number.positive":"Negative values not allowed for size"
        }),
        shoeModelId: Joi.number().positive().required().messages({
            "number.base":"shoeModelId should be a number.",
            "number.positive": "shoeModelId should be positive.",
            "any.required":"shoeModelId is required."
        }),
        userId: Joi.number().positive().required().messages({
            "number.base":"userId should be a number.",
            "number.positive": "userId should be positive.",
            "any.required":"userId is required."
        }),
    },
    "PUT":{
        size: Joi.number().positive().required().messages({
            "number.base":"Size should be a number",
            "any.required":"Size value expected",
            "number.positive":"Negative values not allowed for size"
        }),
        
    }
}