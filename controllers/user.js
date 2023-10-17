import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {
  createResource,
  getResource,
  updateResource,
  deleteResource,
} from "./base.js";

const createUser = async (req, res) => createResource(req, res, "user");

const getUsers = async (req, res) => {
  try {
    const sortBy = req.query.sortBy || "email" || "firstName" || "lastName" || "footHeight" || "footWidth" || "id";
    const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

    const query = {
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        shoes: true
      }
    };
    
    delete req.query.sortBy;
    delete req.query.sortOrder;

    if (req.query.id) {
      req.query.id = parseInt(req.query.id);
    }
    if (req.query.footHeight) {
      req.query.footHeight = parseInt(req.query.footHeight);
    }
    if (req.query.footWidth) {
      req.query.footWidth = parseInt(req.query.footWidth);
    }

    query.where = req.query;

    const users = await prisma.user.findMany(query);

    if (users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }

    return res.json({
      data: users
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const getUser = async (req, res) => getResource(req, res, "user");

const updateUser = async (req, res) => updateResource(req, res, "user");

const deleteUser = async (req, res) => deleteResource(req, res, "user");

export { createUser, getUsers, getUser, updateUser, deleteUser };
