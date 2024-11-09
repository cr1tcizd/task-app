import { Title } from "shared/ui/Title";
import ContactUsAuthForm from "./ContactUsAuthForm";
import styled from "styled-components";
import Container from "shared/ui/Container";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  height: calc(100vh - var(--header-height) - var(--footer-height));
  background: var(--background-gray);
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

export default function ContactUsAuthContent() {
  return (
    <StyledMain>
      <Container>
        <StyledContent>
          <Title>Only CTA on the page</Title>
          <ContactUsAuthForm />
        </StyledContent>
      </Container>
    </StyledMain>
  );
}
