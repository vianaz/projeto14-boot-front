import styled from "styled-components";
import Book from "./Book";

import json from "../Assets/index.json";
import { Link } from "react-router-dom";

export default function Content() {
	return (
		<Main>
			<div className='books'>
				{json.map((element, index) => {
					return (
						<Link to={`/book/${index}`}>
							<Book infos={element} />
						</Link>
					);
				})}
			</div>
		</Main>
	);
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-left: 30px;
	.books {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-column-gap: 25px;
		grid-row-gap: 25px;
		flex-grow: 1;
	}
`;
