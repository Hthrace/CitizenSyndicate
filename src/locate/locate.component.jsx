import { Routes, Route } from "react-router-dom";
import Categories from "../routes/categories/categories.component";
import ItemCard from "../components/item-card/item-card.component";

const Locate = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Categories />} />
      <Route path=":category/:items" element={<ItemCard />} />
    </Routes>
  );
};

export default Locate;
