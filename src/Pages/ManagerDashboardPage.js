import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "../Components/ManagerView/views/dashboard/Default/EarningCard";
import PopularCard from "../Components/ManagerView/views/dashboard/Default/PopularCard";
import TotalOrderLineChartCard from "../Components/ManagerView/views/dashboard/Default/TotalOrderLineChartCard";
import TotalIncomeLightCard from "../Components/ManagerView/views/dashboard/Default/TotalIncomeLightCard";
import TotalGrowthBarChart from "../Components/ManagerView/views/dashboard/Default/TotalGrowthBarChart";

import { gridSpacing } from "../store/constant";
import {
  getAllOrders,
  getStoreIncome,
  getStoreIncomeByMonth
} from "../services/serverServices";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [topOrders, setTopOrders] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [incomeByMonth, setIncomeByMonth] = useState();

  useEffect(() => {
    const func = async () => {
      Promise.all([
        getAllOrders(true),
        getStoreIncome(),
        getStoreIncomeByMonth(1)
      ]).then(res => {
        const orderRes = res[0];
        const totalIncomeRes = res[1];
        const incomeByMonthRes = res[2];

        if (orderRes.status === 200) {
          setTopOrders(orderRes.data);
        }

        if (totalIncomeRes.status === 200) {
          setTotalIncome(totalIncomeRes.data[0]?.totalStoreIncome);
        }

        if (incomeByMonthRes.status === 200) {
          setIncomeByMonth(incomeByMonthRes.data);
        }

        setLoading(false);
      });
    };
    func();
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} incomeByMonth={incomeByMonth} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <EarningCard isLoading={isLoading} incomeByMonth={incomeByMonth} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} totalIncome={totalIncome} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart
              isLoading={isLoading}
              incomeByMonth={incomeByMonth}
              totalIncome={totalIncome}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} topOrders={topOrders} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
