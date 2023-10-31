import Joi from "joi";

export default {
    "POST":{
        email: Joi.string().required().email().messages({
            //joi validation here
            "string.base":"Email should be a string.",
            "string.email":"Email should be a valid email address.",
            "any.required":"Email is required."
        }),
        firstName: Joi.string().min(2).messages({
            //joi validation here
            "string.base":"First name should be a string.",
            "string.min": "First name should have a minimum length of {#limit}",
        }),
        lastName: Joi.string().min(2).messages({
            //joi validation here
            "string.base":"Last name should be a string.",
            "string.min": "Last name should have a minimum length of {#limit}",
        }),
        password: Joi.string().required().messages({
            //joi validation here
            "string.base":"Password should be a string.",
            "any.required":"Password is required."
        }),
        footHeight: Joi.number().positive().messages({
            //joi validation here
            "number.base":"Foot height should be a number.",
            "number.positive": "Foot height should be positive.",
        }),
        footWidth: Joi.number().positive().messages({
            //joi validation here
            "number.base":"Foot width should be a number.",
            "number.positive": "Foot width should be positive.",
        })
    },
    "PUT":{
        email: Joi.string().email().messages({
            //joi validation here
            "string.base":"Email should be a string.",
            "string.email":"Email should be a valid email address."
        }),
        firstName: Joi.string().min(2).messages({
            //joi validation here
            "string.base":"First name should be a string.",
            "string.min": "First name should have a minimum length of {#limit}"
        }),
        lastName: Joi.string().min(2).messages({
            //joi validation here
            "string.base":"Last name should be a string.",
            "string.min": "Last name should have a minimum length of {#limit}"
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