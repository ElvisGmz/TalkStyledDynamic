import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";

export default function Modal() {
  const [viewModal, setViewModal] = useContext(Context);

  return (
    <>
      <ModalContainer
        onClick={() => setViewModal(false)}
        isOpen={viewModal ? "flex" : "none"}
      >
        <CloseBtn onClick={() => setViewModal(false)}>X</CloseBtn>
        <ModalCard onClick={(e) => e.stopPropagation()}>Soy un modal</ModalCard>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #21212cbf;
  display: ${({ isOpen }) => isOpen};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  min-width: 300px;
  min-height: 250px;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 900;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 36px;
  font-weight: 900;
  background-color: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 1.5rem 2rem;
  outline: 0;
`;
