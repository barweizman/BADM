import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../../services/serverServices";
import CardSecondaryAction from "../../ui-component/cards/CardSecondaryAction";

import MainCard from "../../ui-component/cards/MainCard";
import SubCard from "../../ui-component/cards/SubCard";
import UserCard from "./ManageUsers/UserCard";

const SamplePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const res = await getAllUsers();
      setIsLoading(false);
      if (res.status === 200) {
        setUsers(res.data);
      } else {
        // err on getting users
      }
    };
    getUsers();
  }, []);

  return (
    <MainCard
      title="Manage Users"
      secondary={
        <CardSecondaryAction src="https://www.svgrepo.com/show/312080/drunk-person.svg" />
      }
    >
      {isLoading &&
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>}
      <SubCard title="Drunk List">
        <Grid
          container
          mt={5}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {users.map(user =>
            <Grid item xs={4} key={user._id}>
              <UserCard user={user} />
            </Grid>
          )}
        </Grid>
      </SubCard>
    </MainCard>
  );
};

export default SamplePage;
