import { Routes, Route } from "react-router-dom";
import Categories from "../routes/categories/categories.component";
import Items from "../routes/items/items.component";
Items

const Locate = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Categories />} />
      <Route path=":category/:items" element={<Items />} />
    </Routes>
  );
};

export default Locate;
