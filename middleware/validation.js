

import Joi from "joi";

//import validation rules here
import example from "./validationRules/example.js"
import user from "./validationRules/user.js"


export let validateRequests = _ => {

    let validationRules;

    //Validate the request based on the url content
    return function (req, res, next) {        

        //point to correct validation based on route
        if(req.originalUrl.indexOf("example") != -1)
            validationRules = example[req.method]
        // put extra validations here
        else if(req.originalUrl.indexOf("user") != -1)
            validationRules = user[req.method]
        
        
        const validationSchema = Joi.object(validationRules)
        const { error } = validationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                msg: error.details[0].message,
            });
        }    

        next();
    }    
};