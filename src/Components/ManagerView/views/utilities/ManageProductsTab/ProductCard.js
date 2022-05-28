import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

const ProductCard = ({product, onClick}) => (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product?.images[0]}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
            <Typography variant="body2" color="text.secondary">
                Quantity left:{product.quantity}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

export default ProductCard;
