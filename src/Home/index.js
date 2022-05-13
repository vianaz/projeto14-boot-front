import styled from 'styled-components';

import Header from "../Components/Header";
import Aside from './Aside';
import Content from './Content';

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Aside />
                <Content />
            </Main>
        </>
    )
}

const Main = styled.main`
  display: flex;
  margin-top: 80px;
  width: 70%;

`;