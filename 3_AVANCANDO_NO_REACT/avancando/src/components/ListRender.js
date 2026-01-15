import { use, useState } from "react";

const ListRender = () => {
  const [list] = useState(["Ana", "Bia", "Carlos", "Daniel"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Bia", age: 30 },
    { id: 3, name: "Carlos", age: 28 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    console.log(randomNumber);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
