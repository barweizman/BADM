import { Avatar, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const PopularProductCard = ({ title, income, isProfitable, amount }) => {
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle1" color="inherit">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="inherit">
                  {income}
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "5px",
                    backgroundColor: theme.palette.success.light,
                    color: theme.palette.success.dark,
                    ml: 2
                  }}
                >
                  {isProfitable
                    ? <KeyboardArrowUpOutlinedIcon
                        fontSize="small"
                        color="inherit"
                      />
                    : <KeyboardArrowDownOutlinedIcon
                        fontSize="small"
                        color="inherit"
                      />}
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" sx={{ color: "success.dark" }}>
          {amount} {isProfitable ? "profit" : "loss"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PopularProductCard;
