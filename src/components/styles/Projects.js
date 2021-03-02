import styled from 'styled-components';

export const ProjectsCtn = styled.div`
  width: 90%;
  margin: 40px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
