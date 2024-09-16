import { v4 as uuidv4 } from 'uuid';
let users=[
];
const getUsers=(req,res)=>{
    console.log(users);
    res.send(users);
}

const addUser=(req,res)=>{
    const userID=uuidv4();
    const user=req.body;
    const userWithID={...user,id: userID}
    users.push(userWithID);
    res.send(`User: ${req.body.firstName} added to DB!`);
}

const findUser=(req,res)=>{
    const id=req.params.id;
    const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
 }

 const deleteUser=(req,res)=>{
    const id=req.params.id;
    users=users.filter(user=>user.id !== id);
    res.send(`user with id ${id} deleted!`);
 }

 const updateUser=(req,res)=>{
    const id=req.params.id;
    const {firstName, lastName, age}=req.body;
    const userUpdated=users.find((user)=>user.id===id);
    if(firstName) userUpdated.firstName=firstName;
    if(lastName) userUpdated.lastName=lastName;   
    if(age) userUpdated.age=age;
    
    res.send(`user with id: ${id} was updated!`)

}
export {getUsers,addUser,findUser,deleteUser,updateUser}