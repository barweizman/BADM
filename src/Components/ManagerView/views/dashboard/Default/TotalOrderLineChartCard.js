import { useState } from "react";

import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Chart from "react-apexcharts";

import MainCard from "../../../ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "../../../ui-component/cards/Skeleton/EarningCard";

import ChartDataMonth from "./chart-data/total-order-month-line-chart";
import ChartDataYear from "./chart-data/total-order-year-line-chart";


const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&>div": {
        position: "relative",
        zIndex: 5
    },
    "&:after": {
        content: "\"\"",
        position: "absolute",
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: "50%",
        zIndex: 1,
        top: -85,
        right: -95,
        [theme.breakpoints.down("sm")]: {
            top: -105,
            right: -140
        }
    },
    "&:before": {
        content: "\"\"",
        position: "absolute",
        zIndex: 1,
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: "50%",
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down("sm")]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading, incomeByMonth  }) => {
    const theme = useTheme();

    const dataByMonth = new Array(12).fill(0);
    incomeByMonth?.map(i => {
        dataByMonth[Number(i._id)] = i.totalIncome;
        return i
    });

    const [timeValue, setTimeValue] = useState(false);
    const handleChangeTime = (event, newValue) => {
        setTimeValue(newValue);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Button
                                            disableElevation
                                            variant={timeValue ? "contained" : "text"}
                                            size="small"
                                            sx={{ color: "inherit" }}
                                            onClick={(e) => handleChangeTime(e, true)}
                                        >
                                            Current Month
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={!timeValue ? "contained" : "text"}
                                            size="small"
                                            sx={{ color: "inherit" }}
                                            onClick={(e) => handleChangeTime(e, false)}
                                        >
                                            Current Year
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container alignItems="center">
                                            <Grid item>
                                                {timeValue ? (
                                                    <Typography sx={{ fontSize: "2.125rem", fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        ${dataByMonth[new Date().getMonth() + 1]}
                                                    </Typography>
                                                ) : (
                                                    <Typography sx={{ fontSize: "2.125rem", fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        ${dataByMonth.reduce((a, b) => a + b)}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item>
                                                <Avatar
                                                    sx={{
                                                        ...theme.typography.smallAvatar,
                                                        cursor: "pointer",
                                                        backgroundColor: theme.palette.primary[200],
                                                        color: theme.palette.primary.dark
                                                    }}
                                                >
                                                    <ArrowDownwardIcon fontSize="inherit" sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: 500,
                                                        color: theme.palette.primary[200]
                                                    }}
                                                >
                                                    Total Order
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

export default TotalOrderLineChartCard;
