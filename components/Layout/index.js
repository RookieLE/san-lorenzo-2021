import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem;
`;

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}
