const Challenge = () => {
  const num1 = 5;
  const num2 = 10;

  return (
    <div>
      <h1>Número 1: {num1}</h1>
      <h1>Número 2: {num2}</h1>
      <button onClick={() => console.log(`Resultado: ${num1 + num2}`)}>
        Somar os números
      </button>
    </div>
  );
};

export default Challenge;
