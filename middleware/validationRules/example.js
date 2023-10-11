import Joi from "joi";

export default {
    "POST":{
        mynumber: Joi.number().messages({
            //joi validation here
            "number.base":"example message",
            "any.required":"example message"
        }),
    },
    "PUT":{
        mystring: Joi.String().messages({
            //joi valdation here
            "String.base":"example message",
            "any.required":"example message"
        })
    }
}