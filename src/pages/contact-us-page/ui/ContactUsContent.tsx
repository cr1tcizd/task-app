import Container from "shared/ui/Container";
import { Title } from "shared/ui/Title";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  height: calc(100vh - var(--header-height) - var(--footer-height));
  background: var(--background-gray);
`;

const StyledContent = styled.div`
  margin: auto;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

export default function ContactUsContent() {
  return (
    <StyledMain>
      <Container>
        <StyledContent>
          <Title>Message generated on the server</Title>
        </StyledContent>
      </Container>
    </StyledMain>
  );
}
