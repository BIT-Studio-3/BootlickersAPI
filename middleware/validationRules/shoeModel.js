import Joi from "joi";

export default {
    "POST":{
        firstName: Joi.string().max(50).required().messages({
            //joi validation here
            "string.base":"shoe model should be a string.",
            "string.max": "shoe model should have a maximum length of {#limit}",
            "any.required":"shoe model is required."
        }),
    },
    "PUT":{
        firstName: Joi.string().max(50).messages({
            //joi validation here
            "string.base":"shoe model should be a string.",
            "string.max": "shoe model should have a maximum length of {#limit}"
        }),
    }
}