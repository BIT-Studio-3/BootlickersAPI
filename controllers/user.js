import {
  createResource,
  getResource,
  updateResource,
  deleteResource,
} from "./base.js";

const createUser = async (req, res) => createResource(req, res, "user");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }

    return res.json({ data: users });
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
