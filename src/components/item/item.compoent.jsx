import { ItemContainer } from "./item.styles";
import ItemCard from "../item-card/item-card.component";
import { useParams } from "react-router-dom";

const Item = ({ itemData }) => {
  let { items } = useParams();
  return (
    <>
      <h1 style={{ textAlign: "center", color: "whitesmoke" }}>{items}</h1>
      <ItemContainer>
        <>
          {itemData.map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </>
      </ItemContainer>
    </>
  );
};

export default Item;
