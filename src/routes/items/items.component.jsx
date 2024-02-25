import SUB_CATEGORIES_WEAPONS_DATA from "../../data/sub-categories-data/sub-categories-weapons/sub-categories-weapons";
import Item from "../../components/item/item.compoent";

const Items = () => {
  return (
    <>
      <Item itemData={SUB_CATEGORIES_WEAPONS_DATA} />
    </>
  );
};

export default Items;
