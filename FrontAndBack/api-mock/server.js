const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;
const STATIC_ROOT = `http://localhost:${PORT}`

const products = [
  {id: 1, name: "phone1", img: `${STATIC_ROOT}/images/mobile.png`, price: 10, discount: 0, count: 1},
  {id: 2, name: "phone2", img: `${STATIC_ROOT}/images/mobile.png`, price: 20, discount: 0.1, count: 1},
];
const advertisments = [
  {id: 1, title: "Add1", category: "Cat1", text: "This is an add1", img: `${STATIC_ROOT}/images/mobile.png`},
  {id: 2, title: "Add2", category: "Cat2", text: "This is an add2", img: `${STATIC_ROOT}/images/mobile.png`},
];
const categories = [
  {id: 1, name: "Category1", img: `${STATIC_ROOT}/images/mobile.png`},
  {id: 2, name: "Category2", img: `${STATIC_ROOT}/images/mobile.png`},
];
const users = [
  {id: 1, firstname: "firstname", lastname: "lastname", email: "email@example.com", phone: "11111111111", password: "1111"},
]
let id = 100;

app.get("/api/products", function(_, res){
    res.send({products: products});
});
app.post("/api/products/delete", function(req, res){
  const data = req.body;
  console.log(data);
  const idx = products.find((p) => p.id === data.id);
  products.splice(idx, 1);
  res.send({id: data.id});
});
app.post("/api/products/update", function(req, res){
  const data = req.body;
  console.log(data);
  const product = data.product;
  if (product.id) {
    const idx = products.map((p) => p.id).indexOf(product.id);
    if (idx === -1) {
      res.status(404).send({message: "not found"});
      return;
    }
    products.splice(idx, 1, product);
  } else {
    product.id = id++;
    products.push(product);
  }
  res.send(data);
});

app.get("/api/advertisments", function(_, res){
  res.send({advertisments: advertisments});
});
app.post("/api/advertisments/delete", function(req, res){
  const data = req.body;
  console.log(data);
  const idx = advertisments.find((p) => p.id === data.id);
  if (idx === -1) {
    res.status(404).send({message: "not found"});
    return;
  }
  advertisments.splice(idx, 1);
  res.send({id: data.id});
});
app.post("/api/advertisments/update", function(req, res){
  const data = req.body;
  console.log(data);
  const advertisment = data.advertisment;
  if (advertisment.id) {
    const idx = advertisments.map((p) => p.id).indexOf(advertisment.id);
    if (idx === -1) {
      res.status(404).send({message: "not found"});
      return;
    }
    advertisments.splice(idx, 1, advertisment);
  } else {
    advertisment.id = id++;
    advertisments.push(advertisment);
  }
  res.send(data);
});


app.get("/api/categories", function(_, res){
  res.send({categories: categories});
});
app.post("/api/categories/delete", function(req, res){
  const data = req.body;
  console.log(data);
  const idx = categories.find((p) => p.id === data.id);
  if (idx === -1) {
    res.status(404).send({message: "not found"});
    return;
  }
  categories.splice(idx, 1);
  res.send({id: data.id});
});
app.post("/api/categories/update", function(req, res){
  const data = req.body;
  console.log(data);
  const category = data.category;
  if (category.id) {
    const idx = categories.map((p) => p.id).indexOf(category.id);
    if (idx === -1) {
      res.status(404).send({message: "not found"});
      return;
    }
    categories.splice(idx, 1, category);
  } else {
    category.id = id++;
    categories.push(category);
  }
  res.send(data);
});


app.post("/api/user", function(req,res) {
  const id = req.body.id;
  const user = users.find((u)=>u.id === id);
  if(user){
    res.send({user: {...user, password: undefined}});
  }
  else{
      res.status(404).send({message: "not found"});
  }
});
app.post("/api/login", function(req,res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = users.find((u)=>u.email === email && u.password === password);
  if(user){
    res.send({user: {...user, password: undefined}});
  }
  else{
    res.status(401).send({message: "Anauthorized"});
  }
});;
app.post("/api/register", function(req,res) {
  const email = req.body.email;
  const user = users.find(u=> u.email === email);
  if(!user) {
    const newUser = req.body;
    newUser.id = id++;
    users.push(newUser);
    res.send({user: {...newUser, password: undefined}});
  } else{
    res.status(409).send({message: "Conflict"});
  }
});

app.get("/api/products/:id", function(req, res){
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: "not found"});
    }
});
// // получение отправленных данных
// app.post("/api/users", function (req, res) {
//     if(!req.body) return res.sendStatus(400);

//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const user = {name: userName, age: userAge};
//     // присваиваем идентификатор из переменной id и увеличиваем ее на единицу
//     user.id = id++;
//     // добавляем пользователя в массив
//     users.push(user);
//     res.send(user);
// });
//  // удаление пользователя по id
// app.delete("/api/users/:id", function(req, res){

//     const id = req.params.id;
//     const index = findUserIndexById(id);
//     if(index > -1){
//         // удаляем пользователя из массива по индексу
//         const user = users.splice(index, 1)[0];
//         res.send(user);
//     }
//     else{
//         res.status(404).send("User not found");
//     }
// });
// // изменение пользователя
// app.put("/api/users", function(req, res){

//     if(!req.body) return res.sendStatus(400);

//     const id = req.body.id;
//     const userName = req.body.name;
//     const userAge = req.body.age;

//     const index = findUserIndexById(id);
//     if(index > -1){
//         // изменяем данные у пользователя
//         const user = users[index];
//         user.age = userAge;
//         user.name = userName;
//         res.send(user);
//     }
//     else{
//         res.status(404).send("User not found");
//     }
// });

app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`);
});
