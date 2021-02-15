import * as React from "react";
import {useState} from "react";
import styled, {css, createGlobalStyle} from "styled-components";
import Modal from "./Components/Modal";

import {Context} from "./Components/Context";


export default function App() {
  const [viewModal, setViewModal] = useState(false);
  return (
    <Context.Provider value={[viewModal, setViewModal]}>
      <Globales/>
      <Modal />
      <Button onClick={()=>setViewModal(true)}>Abrir Modal</Button>
    </Context.Provider>
  );
}

const Globales = createGlobalStyle`
  body {
  background-color: #1e1e3a;
  background-image: linear-gradient(
    225deg,
    #ad0062 0%,
    #442063 50%,
    #0062a8 100%
  );

  color: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  padding: 20px;
}

h1 {
  color: cyan;
}

h5 {
  color: yellow;
  margin: 0;
}

p {
  font-size: 14px;
}

.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid white;
  border-left: 10px dodgerblue solid;
  animation: rotar 0.5s infinite linear;
}

img {
  max-height: 200px;
}

header {
  font-size: 22px;
}

@keyframes rotar {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}

`

const Button = styled.button`
  background-color: green;
  color: #FFF;
  border: none;
  font-size: 24px;
  padding: 1rem;
  outline: 0;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;

&:hover{
  background-color: dodgerblue;
}

&:active{
  transform: scale(1.1)
}
`;