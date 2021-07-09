import express from "express";
import { getUsers, addUser, getUser, deleteUser, editUser } from "../controllers/users.js";

const router = express.Router();

let users = [
  {
    firstName: "Iman",
    lastName: "Boudellaa",
    age: 24
  },
  {
    firstName: "Iman2",
    lastName: "Boudellaa2",
    age: 22
  }
]

router.get('/', getUsers);

router.post('/', addUser)


router.get('/:id', getUser)


router.delete('/:id', deleteUser);

router.patch('/:id', editUser);

export default router;