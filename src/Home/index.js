import { useContext } from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import LoginModal from "../Components/LoginModal";
import UserContext from "../Contexts/AppContext";
import Aside from "./Aside";
import Content from "./Content";

export default function Home() {
	const { showModal } = useContext(UserContext);
	return (
		<>
			<Header />
			{showModal ? <LoginModal /> : <></>}
			<Main>
				<Aside />
				<Content />
			</Main>
		</>
	);
}

const Main = styled.main`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin-top: 80px;
	margin-left: 20px;
	margin-bottom: 80px;
`;
