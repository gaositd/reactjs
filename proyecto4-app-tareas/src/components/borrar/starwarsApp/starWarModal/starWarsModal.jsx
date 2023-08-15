import { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

function starWarsModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={setIsOpen}>Open Modal</button>
      {/* <ReactModal
        isOpen={isOpen}
        contentLabel="Star Wars"
      >
        This is the content of the modal.
      </ReactModal> */}
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <h3>Modal title</h3>
          </ModalHeader>
          <CloseButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </CloseButton>
        </ModalContainer>
      </Overlay>
    </div>
  );
}
export default starWarsModal;

const Overlay = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
  width:50vw;
  min-height:10vh;
  background: #fff;
  position: relative;
  border-radius: 15px;
  box-shadow:rgba(100,100,111,0.2),0px 7px 29px 0px;
  padding:20px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e8e8e8;

  h3{
    font-weight:bolder;
    font-size:1.6rem;
    color:#1766dc;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right:20px;

  width: 30px;
  height:30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius:5px;
  color:#1766dc;

  &:hover{
    background-color:rgba(10,10,100, 0.3);
  }

  svg{
    width:100%;
    height:100%;
  }
`;