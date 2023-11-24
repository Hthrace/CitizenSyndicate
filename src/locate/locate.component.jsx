import { Routes, Route, useParams } from "react-router-dom";
import Categories from "../routes/categories/categories.component";

const Items = ()=>{
  let { items } = useParams();
  return(
    <h1>{items}</h1>
  )
}

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
