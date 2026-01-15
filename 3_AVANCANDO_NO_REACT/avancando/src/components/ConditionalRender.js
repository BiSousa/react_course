import { use, useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name] = useState("Bia");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>IF Ternário</h1>
      {name === "Bia" ? (
        <div>
          <p>O nome é Bia</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
