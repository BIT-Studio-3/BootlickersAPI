import Joi from "joi";

export default {
    "POST":{
        size: Joi.number().positive().required().messages({
            "number.base":"Size should be a number",
            "any.required":"Size values expected",
            "number.positive":"Negative values not allowed for size"
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