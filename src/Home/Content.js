import styled from "styled-components";
import Book from "./Book";

export default function Content() {
	return (
		<Main>
			<div className='filters'>
				<p>Filter</p>
				<p>Filter</p>
				<p>Filter</p>
				<p>Filter</p>
			</div>
			<div className='books'>
				<Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
			</div>
		</Main>
	);
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
    margin-left: 30px;
	.filters {
        display: flex;
        align-items: center;
        height: 45px;

        background-color: aqua;
	}
	.books {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 25px;
        grid-row-gap: 25px;
		flex-grow: 1;
	}
`;
