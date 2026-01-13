const Events = () => {
  const handleMyEvent = (e) => {
    console.log("Evento ativado!");
    console.log(e);
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
    </div>
  );
};

export default Events;
