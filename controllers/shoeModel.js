import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {
    createResource,
    getResource,
    updateResource,
    deleteResource,
  } from "./base.js";
  
  const createShoeModel = async (req, res) =>
    createResource(req, res, "shoeModel");
  
  const getShoeModels = async (req, res) => {
    try {
        const sortBy = req.query.sortBy || "name";
        const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";
        
        const query = {
          orderBy: {
            [sortBy]: sortOrder,
          },
          include: {
            shoes: true,
          }
        };
    
        //remove sorting from future response
        delete req.query.sortBy;
        delete req.query.sortOrder;
    
        query.where = req.query;
        const shoeModels = await prisma.shoeModel.findMany(query);
    
        if (shoeModels.length === 0) {
          return res.status(404).json({ msg: "No shoeModels found" });
        }
    
        return res.json({
          data: shoeModels,
        });
      } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
      }
  };
  
  const getShoeModel = async (req, res) => getResource(req, res, "shoeModel");
  
  const updateShoeModel = async (req, res) =>
    updateResource(req, res, "shoeModel");
  
  const deleteShoeModel = async (req, res) =>
    deleteResource(req, res, "shoeModel");
  
  export {
    createShoeModel,
    getShoeModels,
    getShoeModel,
    updateShoeModel,
    deleteShoeModel,
  };