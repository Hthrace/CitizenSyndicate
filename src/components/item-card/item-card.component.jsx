import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ItemInfoModal from "../item-info-modal/item-info-modal.component";

const ItemCard = () => {
  let { items } = useParams();
  return (
    <Card sx={{ maxWidth: 345, opacity: "0.9", background: "#1a1a1b" }}>
      <CardMedia
        component="img"
        alt="cool space item"
        height="140"
        image="https://cig-galactapedia-prod.s3.amazonaws.com/upload/a261e29d-9273-4bf1-aef1-bc22614f3bad"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "whitesmoke" }}
        >
          {items}
        </Typography>
        <Typography variant="body2" color="whitesmoke">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          consequatur sed soluta.
        </Typography>
      </CardContent>
      <CardActions>
        <ItemInfoModal item={items} size="small" />
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
