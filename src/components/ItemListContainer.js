import { ItemCount } from "./ItemCount";

export const ItemListContainer = (props) => {
  const handleOnAdd = (quantity) => {
    console.log("Cantida de Items agregados:", quantity);
  };

  return (
    <>
      <h1>{props.greeting}</h1>
      <ItemCount stock={0} initial={1} onAdd={handleOnAdd} />
    </>
  );
};
