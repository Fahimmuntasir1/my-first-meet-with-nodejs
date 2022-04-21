import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { name, email, password };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
      });
  };

  return (
    <div className="App">
      <h3>my own data : {users.length}</h3>
      <form onSubmit={handleCreateUser}>
        <input type="text " name="name" placeholder="Name" />
        <input type="text " name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="create user" />
      </form>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} {user.email} {user.password}
        </li>
      ))}
    </div>
  );
}

export default App;
