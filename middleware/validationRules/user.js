import Joi from "joi";

export default {
    "POST":{
        email: Joi.string().required().messages({
            //joi validation here
            "string.base":"Email should be a string.",
            "any.required":"Email is required."
        }),
        firstName: Joi.string().required().messages({
            //joi validation here
            "string.base":"First name should be a string.",
            "any.required":"First name is required."
        }),
        lastName: Joi.string().required().messages({
            //joi validation here
            "string.base":"Last name should be a string.",
            "any.required":"Last name is required."
        }),
        password: Joi.string().required().messages({
            //joi validation here
            "string.base":"Password should be a string.",
            "any.required":"Password is required."
        }),
        footHeight: Joi.number().positive().required().messages({
            //joi validation here
            "number.base":"Foot height should be a number.",
            "number.positive": "Foot height should be positive.",
            "any.required":"Foot height is required."
        }),
        footWidth: Joi.number().positive().required().messages({
            //joi validation here
            "number.base":"Foot width should be a number.",
            "number.positive": "Foot width should be positive.",
            "any.required":"Foot width is required."
        })
    },
    "PUT":{
        email: Joi.string().messages({
            //joi validation here
            "string.base":"Email should be a string."
        }),
        firstName: Joi.string().messages({
            //joi validation here
            "string.base":"First name should be a string."
        }),
        lastName: Joi.string().messages({
            //joi validation here
            "string.base":"Last name should be a string."
        }),
        password: Joi.string().messages({
            //joi validation here
            "string.base":"Password should be a string."
        }),
        footHeight: Joi.number().positive().messages({
            //joi validation here
            "number.base":"Foot height should be a number.",
            "number.positive":"Foot height should be positive."
        }),
        footWidth: Joi.number().positive().messages({
            //joi validation here
            "number.base":"Foot width should be a number.",
            "number.positive":"Foot width should be positive."
        })
    }
}