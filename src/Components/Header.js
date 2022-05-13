import styled from "styled-components";

export default function Header() {
	return (
		<HeaderContainer>
			<div class='header-content'>
				<div>BooksBox</div>
				<div className='search'>
					<ion-icon name='search-outline'></ion-icon>
					<input type='text' placeholder='Search by Title or Author' />
				</div>
				<div className='buttons'>
					<div className='login'>
						<p>Log In</p>
					</div>
				</div>
			</div>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	width: 100%;
	border-bottom: 1px solid #d7d7d7;
	background-color: #d7d7d7;
	z-index: 1;
	.header-content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 80%;
		height: 60px;
	}

	.search {
		display: flex;
		align-items: center;
		border-radius: 15px;
		border: 1px solid #d7d7d7;
		padding-left: 10px;
		background-color: #ffffff;
		height: 40px;
		width: 280px;
		ion-icon {
			color: #7b807e;
			font-size: 22px;
			margin-right: 10px;
		}
		input {
			border: none;
			font-family: "Inter";
			font-weight: 500;
			font-size: 16px;
			height: 25px;
			width: 220px;
		}
		textarea:focus,
		input:focus,
		select:focus {
			box-shadow: 0 0 0 0;
			border: 0 none;
			outline: 0;
		}
	}

	.buttons {
		.login {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 85px;
			height: 35px;
			background: white;
			border: 1px solid #558b78;
			border-radius: 10px;

			font-family: "Inter";
			font-weight: 500;
			font-size: 16px;
			color: #558b78;
		}
		.login:hover {
			cursor: pointer;
		}
	}
`;
