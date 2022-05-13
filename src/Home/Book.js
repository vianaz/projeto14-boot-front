import styled from "styled-components";

export default function Book() {
	return (
		<Main>
			<img
				src='https://images-na.ssl-images-amazon.com/images/I/4119l82gW1L._SX518_BO1,204,203,200_.jpg'
				alt='book'
			/>
			<div className='book-text'>
				<p className='title'>JavaScript and JQuery</p>
				<p className='author'>Jon Ducat</p>
				<p className='price'>R$ 20,00</p>
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
			margin-bottom: 10px;
			font-size: 18px;
            margin-top: 10px
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
