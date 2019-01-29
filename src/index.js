import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const Ul = styled.ul`
  border: 1px solid;
  display: flex;
  list-style: none;
`;
const Li = styled.li`
  margin: 3px;
  padding: 5px;
  :hover {
    color: green;
  }
`;
const Wrapper = styled.section`
  padding: 3px;
  background: papayawhip;
`;
function App() {
  return (
    <Wrapper>
      <Ul>
        <Li>li1</Li>
        <Li>li2</Li>
        <Li>li3</Li>
        <Li>li4</Li>
        <Li>li5</Li>
      </Ul>
    </Wrapper>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
