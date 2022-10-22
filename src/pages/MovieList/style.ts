import styled from "@emotion/styled";

export const Container = styled.div`
  height: 400px;
  overflow: hidden;
  cursor: pointer;

  &:hover .description {
    opacity: 1;
    transform: translateY(-100%);
  }

  .description {
    color: #fff;
    padding: 1rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: 0.3s;
  }
`;
