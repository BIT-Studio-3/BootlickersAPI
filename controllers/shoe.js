import {
    createResource,
    getResource,
    updateResource,
    deleteResource,
  } from "./base.js";
  
  const createShoe = async (req, res) =>
    createResource(req, res, "shoe");
  
  const getShoes = async (req, res) => {
    try {
        const sortBy = req.query.sortBy || "size";
        const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";
        
        const query = {
          orderBy: {
            [sortBy]: sortOrder,
          },
          include: {
            shoe_model: true,
            user: true
          }
        };
    
        //remove sorting from future response
        delete req.query.sortBy;
        delete req.query.sortOrder;
    
        //makes sure the query parameter is in the correct type
        if(req.query.size){
          req.query.size = parseInt(req.query.size)
        }
    
        query.where = req.query;
        const shoes = await prisma.shoe.findMany(query);
    
        if (shoes.length === 0) {
          return res.status(404).json({ msg: "No shoes found" });
        }
    
        return res.json({
          data: shoes,
        });
      } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
      }
  };
  
  const getShoe = async (req, res) => getResource(req, res, "shoe");
  
  const updateShoe = async (req, res) =>
    updateResource(req, res, "shoe");
  
  const deleteShoe = async (req, res) =>
    deleteResource(req, res, "shoe");
  
  export {
    createShoe,
    getShoes,
    getShoe,
    updateShoe,
    deleteShoe,
  };