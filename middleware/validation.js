

import Joi from "joi";

//import validation rules here
import user from "./validationRules/user.js"
import shoe from "./validationRules/shoe.js"
import shoeModel from "./validationRules/shoeModel.js"


export let validateRequests = _ => {

    let validationRules;

    //Validate the request based on the url content
    return function (req, res, next) {        

        //point to correct validation based on route
        console.log(req.originalUrl.indexOf("shoeModels"))
        if(req.originalUrl.indexOf("shoeModels") != -1)
            validationRules = shoeModel[req.method]
        else if(req.originalUrl.indexOf("users") != -1)
            validationRules = user[req.method]
        else if(req.originalUrl.indexOf("shoes") != -1)
            validationRules = shoe[req.method]
        
        
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