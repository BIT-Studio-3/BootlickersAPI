import Joi from "joi";

export default {
    "POST":{
        name: Joi.string().max(50).required().messages({
            "string.base":"shoe model should be a string.",
            "string.max": "shoe model should have a maximum length of {#limit}",
            "any.required":"shoe model is required."
        }),
    },
    "PUT":{
        name: Joi.string().max(50).messages({
            "string.base":"shoe model should be a string.",
            "string.max": "shoe model should have a maximum length of {#limit}"
        }),
    }
}