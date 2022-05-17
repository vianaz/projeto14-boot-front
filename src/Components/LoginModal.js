import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import UserContext from "../Contexts/AppContext";

export default function LoginModal() {
	const navigate = useNavigate();
	const { setShowModal, APILink } = useContext(UserContext);
	const [showSignUp, setShowSignUp] = useState(false);

	const [user, setUser] = useState("");
	const [token, setToken] = useState("");
	const [formInput, setFormInput] = useState("");
	
	function handleInput(e) {
		formInput[e.target.name] = e.target.value;
		setFormInput(formInput);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const { name, email, password } = formInput;

		axios.post(`${APILink}/signup`, {name, email, password})
		.then(({ data }) => {
			const { name, email, token } = data;
			setUser({ name, email });
			setToken( { token });
			localStorage.setItem("bootstore_token", JSON.stringify(token));
			navigate("/"); 
		})
		.catch( (error) => {
			console.log(error);
		})
	}

	return (
		<Main>
			<Content>
				{showSignUp ? (
					<>
						<ContainerTitle>
							<p>Create account</p>
							<ion-icon
								name='close-outline'
								onClick={() => {
									setShowModal(false);
								}}></ion-icon>
						</ContainerTitle>
						<SignUp>
							<FormsSignUp>
								<input type='text' placeholder='Email' onChange={handleInput} name='email'/>
								<input type='password' placeholder='Password' onChange={handleInput} name='password'/>
							</FormsSignUp>
							<p>Personal Information</p>
							<FormsSignUp>
								<div className='name'>
									<input type='text' placeholder='Name' onChange={handleInput} name='name'/>
									<input type='text' placeholder='Last name' />
								</div>
								<input type='text' placeholder='Phone number' />
								<input type='text' placeholder='Country' />
								<input type='text' placeholder='City / Town' />
								<button onClick={handleSubmit} >Create Account</button>
								<p>
									Already have an account?{" "}
									<span
										onClick={() => {
											setShowSignUp(false);
										}}>
										Log in
									</span>
								</p>
							</FormsSignUp>
						</SignUp>
					</>
				) : (
					<>
						<ContainerTitle>
							<p>Log in to BooksBox</p>
							<ion-icon
								name='close-outline'
								onClick={() => {
									setShowModal(false);
								}}></ion-icon>
						</ContainerTitle>
						<Inputs>
							<input type='text' placeholder='Email' />
							<input type='password' placeholder='Password' />
							<button>Log in</button>
							<p>
								No account?{" "}
								<span
									onClick={() => {
										setShowSignUp(true);
									}}>
									Create one
								</span>
							</p>
						</Inputs>
					</>
				)}
			</Content>
		</Main>
	);
}

const Main = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #00000096;
	z-index: 2;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 5px;
	min-width: 340px;
	min-height: 325px;
	background-color: white;
	border-radius: 15px;
`;
const ContainerTitle = styled.div`
	display: flex;
	justify-content: center;
	height: 60px;
	width: 90%;
	font-family: "Inter";
	font-size: 20px;
	font-weight: 400;

	border-bottom: 1px solid #ebf1e9;
	p {
		margin-top: 20px;
		letter-spacing: 0.75px;
	}
	ion-icon {
		position: absolute;
		right: 10px;
		top: 10px;
		&:hover {
			cursor: pointer;
		}
	}
`;
const Inputs = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 15px;

	input {
		font-family: "Inter";
		font-weight: 500;
		font-size: 15px;
		height: 35px;
		width: 300px;
		margin: 10px;

		border: 1px solid #d2d8d0;
		border-radius: 15px;
		padding-left: 15px;

		&:focus {
			box-shadow: 0 0 0 0;
			border: 2px solid #558b78;
			outline: 0;
		}
	}
	button {
		font-family: "Inter";
		font-weight: 500;
		font-size: 20px;
		letter-spacing: 1px;
		height: 40px;
		width: 310px;
		margin-top: 15px;
		border: none;
		border-radius: 15px;
		background-color: #558b78;
		color: white;

		&:hover {
			cursor: pointer;
			background-color: #406659;
		}
	}
	p {
		font-family: "Inter";
		margin-top: 15px;
		letter-spacing: 1px;
		span {
			color: #558b78;
			&:hover {
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}
`;
const SignUp = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	p {
		font-family: "Inter";
		font-weight: 400;
		font-size: 18px;
		letter-spacing: 1px;
		margin-left: 15px;
	}
`;
const FormsSignUp = styled.form`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
	input {
		width: 300px;
		height: 35px;
		margin: 10px;
		font-family: "Inter";
		font-size: 15px;
		border: 1px solid #d2d8d0;
		border-radius: 15px;
		padding-left: 15px;

		&:focus {
			box-shadow: 0 0 0 0;
			border: 2px solid #558b78;
			outline: 0;
		}
	}
	.name {
		display: flex;
		input {
			margin: 5px;
			width: 135px;
		}
	}
	button {
		font-family: "Inter";
		font-weight: 500;
		font-size: 18px;
		letter-spacing: 1px;
		height: 40px;
		width: 310px;
		margin-top: 25px;
		margin-bottom: 15px;
		border: none;
		border-radius: 15px;
		background-color: #558b78;
		color: white;

		&:hover {
			cursor: pointer;
			background-color: #406659;
		}
	}
	p {
		font-family: "Inter";
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 1px;
		margin-bottom: 25px;
		span {
			color: #558b78;
			&:hover {
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}
`;
