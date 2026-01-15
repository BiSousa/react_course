import React from "react";

const UserDetails = ({ dados }) => {
  return (
    <div>
      {dados.map((user) => (
        <p key={user.id}>
          {user.nome} - {user.idade} - {user.profissao}
          {user.idade >= 18 ? " - Pode tirar CNH" : " - Não pode tirar CNH"}
        </p>
      ))}
    </div>
  );
};

export default UserDetails;
