import styled from "styled-components";

export default function Book({ infos }) {
	const { name, author, price, image } = infos;
	return (
		<Main>
			<img
				src={image}
				alt='book'
			/>
			<div className='book-text'>
				<p className='title'>{name}</p>
				<p className='author'>{author}</p>
				<p className='price'>{`R$ ${price}`}</p>
			</div>
		</Main>
	);
}

const Main = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;

	&:hover {
		cursor: pointer;
	}
	img {
		border-radius: 10px;
		object-fit: contain;
		width: 150px;
	}
	.book-text {
		font-family: "Inter";
		font-weight: 400;
		.title {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			margin-bottom: 5px;
			font-size: 18px;
			margin-top: 10px;
			height: 25px;
		}
		.author {
			margin-bottom: 10px;
			color: #7b807e;
			font-size: 14px;
		}
		.price {
			font-size: 18px;
		}
	}
`;
