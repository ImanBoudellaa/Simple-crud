import { v4 as uuid } from 'uuid';

let users = [];


export const getUsers = (req, res) => {
  res.send(users)
}


export const addUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send(`User with the name ${user.firstName} added to the datebase!`)
}


export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id)
  res.send(user)
}


export const deleteUser = (req, res)=>{
  const { id } = req.params;

  users = users.filter((user)=>user.id!=id)

  res.send(`User deleted ${id}`)
}


export const editUser = (req, res)=>{
  const { id } = req.params;
  const user   = users.find(((user)=>user.id===id));

  const {firstName, lastName, age} = req.body

  if(firstName){
    user.firstName = firstName
  }

  if(lastName){
    user.lastName=lastName
  }

  if(age){
    user.age=age
  }

  res.send(`User edited ${id}`)
}
