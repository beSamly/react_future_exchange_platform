import styled from 'styled-components';

const ScrollBar = styled.div`
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    width: 7px;
    background-color: #252b43;
  }
`;
export default ScrollBar;
