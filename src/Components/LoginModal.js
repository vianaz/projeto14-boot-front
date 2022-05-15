import styled from "styled-components";

export default function LoginModal() {
	return (
		<Main>
			<Content>
				<LoginText>
					<p>Log in to BooksBox</p>
				</LoginText>
				<Inputs>
					<input type='text' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button>Log in</button>
					<p>
						No account? <span>Create one</span>
					</p>
				</Inputs>
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
	top: 30px;
	width: 350px;
	height: 400px;
	background-color: white;
	border-radius: 15px;
`;
const LoginText = styled.div`
	display: flex;
	justify-content: center;
	height: 100px;
	width: 85%;
	font-family: "Inter";
	font-size: 24px;
	font-weight: 450;

	border-bottom: 1px solid #EBF1E9;
	p {
		margin-top: 20px;
        letter-spacing: 0.75px;
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
		font-size: 18px;
		height: 40px;
		width: 270px;
		margin: 15px;

		border: 1px solid #d2d8d0;
		border-radius: 15px;
		padding-left: 15px;

		&:focus {
			box-shadow: 0 0 0 0;
			border: 2px solid #558B78;
			outline: 0;
		}
	}
	button {
		font-family: "Inter";
		font-weight: 500;
		font-size: 22px;
        letter-spacing: 1px;
		height: 40px;
		width: 280px;
		margin-top: 15px;
		border: none;
		border-radius: 15px;
        background-color: #558B78;
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
			color: #558B78;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
		}
	}
`;
