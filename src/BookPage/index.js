import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../Components/Header";
import UserContext from "../Contexts/AppContext";
import LoginModal from "../Components/LoginModal";

import json from "../Assets/index.json";

export default function BookPage() {
	const { idBook } = useParams();
	const infoBook = json[idBook];
	const { showModal } = useContext(UserContext);
	return (
		<>
			<Header />
			{showModal ? <LoginModal /> : <></>}
			<Main>
				<BookColumn>
					<img src={infoBook.image} alt='book thumb' />
				</BookColumn>
				<TextColumn>
					<p className='title-book'>Description</p>
					<p className='description-book'>{infoBook.description}</p>
					<Infos>
						<p>Author</p>
						<hr width='100%' />
						<p className='black'>{infoBook.author}</p>
					</Infos>
					<Infos>
						<p>Gender</p>
						<hr width='100%' />
						<p className='black'>{infoBook.gender}</p>
					</Infos>
					<Infos>
						<p>Publisher</p>
						<hr width='100%' />
						<p className='black'>{infoBook.publisher}</p>
					</Infos>
					<Infos>
						<p>Publication Date</p>
						<hr width='100%' />
						<p className='black'>{infoBook.date_publish}</p>
					</Infos>
					<Infos>
						<p>Language</p>
						<hr width='100%' />
						<p className='black'>{infoBook.language}</p>
					</Infos>
					<Infos>
						<p>Print Length</p>
						<hr width='100%' />
						<p className='black'>{`${infoBook.pages} pages`}</p>
					</Infos>
				</TextColumn>
				<PriceColumn>
					<div className='price-text'>
						<p>Price</p>
						<p>{`R$ ${infoBook.price}`}</p>
					</div>
					<button>Buy Now</button>
					<button className='white-background'>Add Cart</button>
				</PriceColumn>
			</Main>
		</>
	);
}

const Main = styled.div`
	display: flex;
	margin-top: 90px;
	margin-left: 100px;
`;
const BookColumn = styled.div`
	img {
		height: 450px;
		border-radius: 20px;
	}
`;
const TextColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 30px;
	.description-book {
		font-family: "Inter";
		font-weight: 300;
		font-size: 14px;
		letter-spacing: 1px;
		color: #a7a7a7;

		width: 600px;
	}
	.title-book {
		font-family: "Inter";
		font-weight: 500;
		font-size: 28px;
		letter-spacing: 1px;
		margin-bottom: 10px;
		color: black;
	}
`;
const Infos = styled.div`
	display: flex;
	margin-top: 15px;
	align-items: center;
	justify-content: center;
	hr {
		border: none;
		border-top: 1px solid #a7a7a7;
		margin-left: 10px;
		margin-right: 10px;
	}
	p {
		font-family: "Inter";
		font-weight: 400;
		font-size: 14px;
		color: #a7a7a7;
	}
	.black {
		color: black;
		width: 250px;
	}
`;
const PriceColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 270px;
	height: 240px;
	margin-left: 30px;
	border: 1px solid black;
	border-radius: 15px;
	.price-text {
		margin-left: 20px;
		margin-top: 10px;
		font-family: "Inter";
		font-weight: 400;
		font-size: 30px;
		p {
			margin-bottom: 10px;
		}
	}
	button {
		margin: 15px;
		font-family: "Inter";
		font-weight: 500;
		font-size: 20px;
		letter-spacing: 1px;
		height: 40px;
		margin-top: 15px;
		border: none;
		border-radius: 15px;
		background-color: #558b78;
		color: white;
        &:hover {
            cursor: pointer;
            background-color: #3e6457;
            transition: 0.2s;
        }
	}
    .white-background{
        border: 1px solid #558b78;
        color: #558b78;
        background-color: white;
        &:hover {
            cursor: pointer;
            background-color: #c2c2c2;
          
    }
`;
