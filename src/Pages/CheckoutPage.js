/* eslint-disable prefer-template */
import {
	Box,
	Button,
	CssBaseline,
	Grid,
	MenuItem,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { wait } from "@testing-library/user-event/dist/utils";

import AppAnimation from "../Components/AppAnimation";
import FreeShipping from "../Components/FreeShippingBar";
import LoginDialog from "../Components/Common/LoginDialog";
import MyNavbar from "../Components/MyNavbar";
import WhatsappButton from "../Components/Common/WhatsappButton";

import theme from "../Constants/theme";
import {createUserOrder,loginUser} from "../services/serverServices"
import { validateEmail, validatePassword } from "../Constants/validators";
import { getUser,getUserCart, resetUserCart, setIsCurrentUserAdmin, setUser } from "../store/reducers/generalReducer";
import { deleteCartSession, rememberMeSession, setCartSession } from "../Constants/helpers";
import paths from "../Constants/paths";
import ValidationAnimation from "../assets/animations/validation.json";


const initialErrors = {
	email: false,
	password: false,
	notFound: false,
};

const initialOrderErrors = {
	address: false,
	cc: false,
	cvv: false,
	year: false,
	month: false,
};

const initialForm = {
	address: "",
	cc: "",
	cvv: "",
	year: "2022",
	month: "1",
}

const months = Array.from({length: 12}, (_, i) => i + 1);
const years = Array.from({length: 12}, (_, i) => i + 2022);

const CheckoutPage = () => {
	const state = useSelector(s => s);
	// const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formErrors, setFormErrors] = useState({ ...initialErrors });
	const [formOrderErrors, setOrderFormErrors] = useState({ ...initialOrderErrors });
	const [orderForm, setOrderForm] = useState({ ...initialForm });
	const [dialogOpen, setDialogOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const user = getUser(state);
	const cart = getUserCart(state);

	const isLoginFormValid = (email, password) => {
		if (!validateEmail.test(email)) {
			setFormErrors({ ...initialErrors, email: true });
			return false;
		}
		if(!validatePassword.test(password)) {
			setFormErrors({ ...initialErrors, password: true });
			return false;
		}
		return true;
	};

	const isPaymentDetailsValid = () => {
		if(!user) return false;
		
		if(cart.products.length === 0) return false;

		if(orderForm.address.length < 3) {
			setOrderFormErrors({...initialOrderErrors, address: true});
			return false;
		}
		if(orderForm.cc.length < 19) {
			setOrderFormErrors({...initialOrderErrors, cc: true});
			return false;
		}
		if(orderForm.cvv.length < 3) {
			setOrderFormErrors({...initialOrderErrors, cvv: true});
			return false;
		}
		if(orderForm.year < 2022) {
			setOrderFormErrors({...initialOrderErrors, year: true});
			return false;
		}
		if(orderForm.month < 0 || orderForm.month > 12) {
			setOrderFormErrors({...initialOrderErrors, month: true});
			return false;
		}

		return true;
	}

	const handleLogin = async (email, password) => {
		if(isLoginFormValid(email, password)) {
				const res = await loginUser(email, password);
				setIsLoading(false);
			if (res.status === 200) {
				rememberMeSession(res.data.jwt);
				if(res?.data?.user?.isAdmin) {
					dispatch(setIsCurrentUserAdmin(true));
				}
				dispatch(setUser(res.data.user));
				setDialogOpen(false);
			} else {
				setFormErrors({ ...initialErrors, notFound: true });
			}
		}

	}

	const handleSubmit = async () => {
		if(isPaymentDetailsValid()) {
			const products = cart?.products?.map(item => ({ productId: item.product._id, quantity: item.quantity }));
			const order = {
				userId: user._id,
				products,
				price: cart.total,
				address: orderForm.address
			}
			setIsLoading(true);
			console.log(order);
			const res = await createUserOrder(order);
			if(res.status === 200) {
				dispatch(resetUserCart());
				setOrderForm({ ...initialForm });
				await wait(1500);
				// navigate(`${paths.userProfile}/${user._id}`);
			}
			setIsLoading(false);
		}

		
	};

	const handleChangeForm = (key, value) => {
		const numberVal = String(value).replace(/-/g, "").replace(/\//, "");
		if(key !== "address" && Number.isNaN(Number(numberVal))) return;

	 	if(key === "cc") {
				const checkValue = String(value).replace(/-/g, "");
				let newVal = value;
				if(checkValue.length > 0 && checkValue.length % 4 === 0 && checkValue.length <= 15) {
					newVal += "-";
				}
				setOrderForm(prevState => ({...prevState, [key]: newVal}));	
		} else {
			setOrderForm(prevState => ({...prevState, [key]: value}));
		}
	}

	const handleOpenLoginDialog = () => setDialogOpen(true);

	return (
		<>
		{isLoading && (
			<Grid sx={{position: "absolute",right: 0, top: 0, bottom: 0, mt: "20%", zIndex: 99}} >
				<AppAnimation LottieCmp={ValidationAnimation} title="" />;
			</Grid>
		)}
		<LoginDialog 
			open={dialogOpen}
			handleClose={() => setDialogOpen(false)} 
			handleLogin={handleLogin} 
			errors={formErrors}
			isLoading={isLoading}
			resetErrors={() => setFormErrors({...initialErrors})}
		 />
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
					}}
				/>
				<Grid
				 	item
				  	xs={12}
				   	sm={8}
				    md={5}
				 	component={Paper}
				  	elevation={6} 
				  	sx={{opacity: isLoading && 0.5}}
					square
				>
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
						{user ? 
						<>
							<TextField
								autoComplete="Name"
								autoFocus
								id="name"
								label="Name"
								margin="normal"
								name="Name"
								required
								fullWidth
								disabled
								defaultValue={user?.name}
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
								disabled
								defaultValue={user?.email}
							/>
							<TextField
								autoComplete="address"
								autoFocus
								fullWidth
								error={formOrderErrors.address}
								onFocus={() => setOrderFormErrors({...initialOrderErrors})}
								id="address"
								label="Address"
								margin="normal"
								name="address"
								required
								onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
								value={orderForm.address}
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
								Payment Information
							</Typography>

							<Grid item>
								<TextField
									autoComplete="cardNumber"
									id="cardNumber"
									label="Card Number"
									margin="normal"
									name="cc"
									error={formOrderErrors.cc}
									onFocus={() => setOrderFormErrors({...initialOrderErrors})}
									fullWidth
									required
									inputProps={{maxLength: 19}}
									onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
									value={orderForm.cc}
								/>
							</Grid>

							<Grid item xs={5.5}>
								<TextField
									autoComplete="CVV"
									id="CVV"
									error={formOrderErrors.cvv}
									onFocus={() => setOrderFormErrors({...initialOrderErrors})}
									label="CVV"
									margin="normal"
									name="cvv"
									required
									inputProps={{maxLength: 4}}
									onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
									value={orderForm.cvv}
								/>
							</Grid>
							<Grid item xs={5.5}>
								<TextField
									autoComplete="expDate"
									id="expDate"
									error={formOrderErrors.month}
									onFocus={() => setOrderFormErrors({...initialOrderErrors})}
									label="Month"
									margin="normal"
									name="month"
									required
									sx={{width: 80, m: theme.spacing(2)}}
									select
									onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
									value={orderForm.month}
								>
									{months.map(i => (
										<MenuItem key={i} value={i} >
											{i}
										</MenuItem>
									)) }
								</TextField>
								<TextField
									autoComplete="expDate"
									id="expDate"
									error={formOrderErrors.year}
									onFocus={() => setOrderFormErrors({...initialOrderErrors})}
									label="Year"
									margin="normal"
									name="year"
									required
									sx={{width: 80, m: theme.spacing(2)}}
									select
									onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
									value={orderForm.year}
								>
									{years.map(i => (
										<MenuItem key={i} value={i} >
											{i}
										</MenuItem>
									)) }
								</TextField>
							</Grid>

							<Button
								type="submit"
								fullWidth
								color="primary"
								variant="contained"
								sx={{ mt: 3, mb: 2, textTransform: "capitalize" }}
								onClick={handleSubmit}
							>
								Pay Now
							</Button>
						</>:
						<Grid container justifyContent="center" direction="column"  >
							<Grid item>
							<Typography variant="h4" >
								Please login to conitune checkout.
							</Typography>		
						</Grid>
						<Grid item>
						<Button 
							onClick={handleOpenLoginDialog} 
							mt={theme.spacing(10)}
						 	variant="contained" 
						 >
							Login
						</Button>
						</Grid>
						</Grid>
					}
					</Box>
				</Grid>
			</Grid>
			<WhatsappButton />
		</>
	);
};

export default CheckoutPage;
