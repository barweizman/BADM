import {
	Box,
	Button,
	Checkbox,
	CssBaseline,
	FormControlLabel,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";

import { makeStyles } from "@mui/styles";
import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import WhatsappButton from "../Components/Common/WhatsappButton";
import { validateEmail } from "../Constants/validators";

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const initialErrors = {
	email: false,
	notFound: false,
};

const CheckoutPage = () => {
	const classes = useStyles();
	const [errors, setErrors] = useState({ ...initialErrors });

	const handleValidationCheck = async (email) => {
		if (!validateEmail.test(email)) {
			setErrors({ ...initialErrors, email: true });
			console.log("Email must be in valid format");
		}
	};

	const handleSubmit = (event) => {
		console.log();
	};
	return (
		<>
			<FreeShipping />
			<MyNavbar />
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							"url(https://firebasestorage.googleapis.com/v0/b/javascriptblog-e9b5a.appspot.com/o/badm%2Fcup.png?alt=media&token=e0a775b9-f1f8-4e94-b814-716d1e42741e)",
						backgroundRepeat: "no-repeat",

						// eslint-disable-next-line no-confusing-arrow

						// backgroundColor: (t) =>
						// 	t.palette.mode === "light"
						// 		? t.palette.grey[50]
						// 		: t.palette.grey[900],
						// backgroundSize: "cover",
						// backgroundPosition: "center",
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography component="h1" variant="h5">
							Check Out
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								autoComplete="fullName"
								autoFocus
								id="fullName"
								label="Full Name"
								margin="normal"
								name="fullName"
								required
								fullWidth
							/>
							<TextField
								autoComplete="phoneNumber"
								autoFocus
								id="phoneNumber"
								label="Phone Number"
								margin="normal"
								name="phoneNumber"
								required
								fullWidth
							/>
							<TextField
								autoComplete="email"
								autoFocus
								fullWidth
								id="email"
								label="Email Address"
								margin="normal"
								name="email"
								required
							/>
							<TextField
								autoComplete="address"
								autoFocus
								fullWidth
								id="address"
								label="Address"
								margin="normal"
								name="address"
								required
							/>
							<Typography
								style={{
									alignItems: "center",
									marginTop: "20px",
									marginBottom: "20px",
								}}
								component="h1"
								variant="h5"
							>
								Payment
							</Typography>

							<Grid item>
								<TextField
									autoComplete="cardNumber"
									autoFocus
									id="cardNumber"
									label="Card Number"
									margin="normal"
									name="cardNumber"
									fullWidth
									required
								/>
							</Grid>

							<Grid item xs={5.5}>
								<TextField
									autoComplete="CVV"
									autoFocus
									id="CVV"
									label="CVV"
									margin="normal"
									name="CVV"
									required
								/>
							</Grid>
							<Grid item xs={5.5}>
								<TextField
									autoComplete="expDate"
									autoFocus
									id="expDate"
									label="Expiration Date"
									margin="normal"
									name="expDate"
									required
								/>
							</Grid>

							<Button
								type="submit"
								fullWidth
								color="primary"
								variant="contained"
								sx={{ mt: 3, mb: 2, textTransform: "capitalize" }}
							>
								Pay Now
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<WhatsappButton />
		</>
	);
};

export default CheckoutPage;
