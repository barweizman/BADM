import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CategoryItem from "./CategoryItem";
import SubTitle from "../SubTitle";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between"
    // ${mobile({ padding: "0px", flexDirection:"column" })}
  }
}));

const CategoriesList = ({ categories }) => {
  const classes = useStyles();
  return (
    <>
    <Grid mt={5} >
    <SubTitle text="Categories" />
    </Grid>
    <Grid className={classes.root}>
      {categories.map(category =>
        <CategoryItem
          key={category.id}
          categoryName={category.cat}
          title={category.title}
          img={category.img}
        />
      )}
    </Grid>
    </>
  );
};

export default CategoriesList;
