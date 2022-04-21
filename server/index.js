const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("OWO i am using nodemon with auto reload");
});
const users = [
  {
    id: 1,
    name: "Suborna",
    email: "Suborna@gmail.com",
    password: "ufdfjgf463@#",
  },
  {
    id: 2,
    name: "Sadia",
    email: "Sadia@gmail.com",
    password: "ufgfgfj463@#",
  },
  {
    id: 3,
    name: "Shucorita",
    email: "Shucorita@gmail.com",
    password: "ufdfgfj463@#",
  },
  {
    id: 4,
    name: "Shumita",
    email: "Shumita@gmail.com",
    password: "gfjgf43@#",
  },
  {
    id: 5,
    name: "Shuchona",
    email: "Shuchona@gmail.com",
    password: "ufgfj463@#",
  },
  {
    id: 6,
    name: "suborna",
    email: "suborna@gmail.com",
    password: "ufgfj463gf@#",
  },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.listen(port, () => {
  console.log("listening to port", port);
});
