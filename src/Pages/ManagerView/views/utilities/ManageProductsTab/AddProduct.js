import { AttachMoney, Send as SendIcon } from "@mui/icons-material";
import {
  Button,
  Chip,
  CircularProgress,
  Grid,
  InputAdornment,
  IconButton,
  Stack,
  Switch,
  TextField,
  Typography,
  MenuItem
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import {
  productCategories,
  productTypes
} from "../../../../../Constants/naming";
import { adminAddProduct } from "../../../../../services/serverServices";

const useStyles = makeStyles(() => ({
  root: {}
}));

const initProductForm = {
  title: "",
  description: "",
  price: 0,
  categories: [],
  quantity: 0,
  type: productTypes[0],
  images: [],
  isFeatured: false
};

const initFormError = {
  title: false,
  description: false,
  price: false,
  categories: false,
  quantity: false,
  type: false,
  images: false,
  isFeatured: false
};

const productFormInputs = [
  { type: "text", label: "Title", id: "title" },
  { type: "text", label: "Description", id: "description" },
  { type: "number", label: "Price", id: "price" },
  { type: "number", label: "Quantity", id: "quantity" }
];

const AddProduct = () => {
  const classes = useStyles();
  const [productForm, setProductForm] = useState({ ...initProductForm });
  const [curImgUrl, setCurImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErr, setFormErr] = useState({ ...initFormError });

  const handleUploadProduct = async () => {
    setIsLoading(true);
    const res = await adminAddProduct(productForm);
    if (res.status === 200) {
      // reset the product form.
      setProductForm({ ...initProductForm });
    } else {
      // errors..
    }
    setIsLoading(false);
  };

  const handleFormChanged = (key, val) => {
    setProductForm(prevState => ({
      ...prevState,
      [key]: val
    }));
  };

  const handleToggleFeatured = () => {
    setProductForm(prevState => ({
      ...prevState,
      isFeatured: !prevState.isFeatured
    }));
  };

  const handleCategoryClicked = categoryId => {
    const index = productForm.categories.findIndex(a => a === categoryId);
    if (index === -1) {
      setProductForm(prevState => ({
        ...prevState,
        categories: [...prevState.categories, categoryId]
      }));
    } else {
      const newCategories = [...productForm.categories];
      newCategories.splice(index, 1);
      setProductForm(prevState => ({
        ...prevState,
        categories: newCategories
      }));
    }
  };

  const handleImageAdded = () => {
    setProductForm(prevState => ({
      ...prevState,
      images: [...prevState.images, curImgUrl]
    }));
  };

  const handleDeleteImg = img => {
    const newImages = [...productForm.images];
    const index = newImages.findIndex(a => a === img);
    if (index !== -1) {
      newImages.splice(index, 1);
      setProductForm(prevState => ({
        ...prevState,
        images: newImages
      }));
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="center">
        <Typography variant="h3" textAlign="center" color={isLoading && "gray"}>
          Add Product
        </Typography>
        {isLoading &&
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>}
      </Grid>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={2}
            justifyContent="center"
            mt={2}
          >
            {productFormInputs.map(input =>
              <Grid item key={input.id}>
                <TextField
                  disabled={isLoading}
                  label={input.label}
                  name={input.id}
                  type={input.type}
                  rows={3}
                  error={formErr[input.id]}
                  onChange={e =>
                    handleFormChanged(e.target.name, e.target.value)}
                  value={productForm[input.id]}
                  multiline={input.label === "Description"}
                  InputProps={{
                    endAdornment:
                      input.label === "Price" &&
                      <InputAdornment>
                        <AttachMoney />
                      </InputAdornment>
                  }}
                />
              </Grid>
            )}
            <Grid item sx={{ display: "flex", maxWidth: 120 }}>
              <TextField
                label="Product Type"
                name="type"
                disabled={isLoading}
                fullWidth
                select
                value={productForm.type}
                onChange={e => handleFormChanged(e.target.name, e.target.value)}
              >
                {productTypes.map(type =>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    key={type}
                    value={type}
                  >
                    {type}
                  </MenuItem>
                )}
              </TextField>
            </Grid>
            <Grid item>
              <Typography>Is the product featured?</Typography>
              <Switch
                disabled={isLoading}
                checked={productForm.isFeatured}
                onChange={handleToggleFeatured}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={2}
            justifyContent="center"
            mt={2}
          >
            <Grid item mt={2}>
              <Typography>Select Product Categories</Typography>
              <Stack direction="row" spacing={1}>
                {Object.keys(productCategories).map(key =>
                  <Chip
                    label={productCategories[key]}
                    onClick={() =>
                      handleCategoryClicked(productCategories[key])}
                    disabled={isLoading}
                    variant={
                      productForm.categories.findIndex(
                        a => a === productCategories[key]
                      ) > -1
                        ? "filled"
                        : "outlined"
                    }
                  />
                )}
              </Stack>
            </Grid>
            <Grid item mt={2} sx={{ display: "flex" }}>
              <TextField
                label="Image URL"
                fullWidth
                value={curImgUrl}
                disabled={isLoading}
                onChange={e => setCurImgUrl(e.target.value)}
              />
              <IconButton disabled={isLoading} onClick={handleImageAdded}>
                <SendIcon />
              </IconButton>
            </Grid>
            <Grid
              container
              justifyContent="center"
              sx={{
                maxWidth: "300px",
                overflowX: "scroll"
              }}
            >
              {productForm.images.map(img =>
                <IconButton onClick={() => handleDeleteImg(img)}>
                  <img src={img} height="50px" width="50px" alt={img} />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Button
          disabled={isLoading}
          onClick={handleUploadProduct}
          variant="contained"
        >
          Upload Product
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
