import styled from "styled-components";

export default function Aside() {
	const typesBooks = [
		{ iconName: "time-outline", type: "Recently added" },
		{ iconName: "prism-outline", type: "Fiction" },
		{ iconName: "reader-outline", type: "Nonfiction" },
		{ iconName: "school-outline", type: "Education" },
	];

	return (
		<Main>
			{typesBooks.map((element) => {
				return (
					<div className='icon-container' key={element.type}>
						<ion-icon name={element.iconName}></ion-icon>
						<p>{element.type}</p>
					</div>
				);
			})}
		</Main>
	);
}

const Main = styled.aside`
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80px;
		width: 120px;
		margin-bottom: 15px;
		border-radius: 7px;

		font-family: "Inter";
		font-weight: 500;
		font-size: 14px;
		color: #7b807e;

		ion-icon {
			font-size: 28px;
			margin-bottom: 10px;
		}
	}
	.icon-container:hover {
		cursor: pointer;
		background-color: #d7d7d7;
		color: #558b78;
	}
`;
