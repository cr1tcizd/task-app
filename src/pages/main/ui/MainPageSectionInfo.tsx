import { SubTitle, Title } from "shared/ui/Title";
import MainPageInfoItem from "./MainPageInfoItem";
import styled from "styled-components";
import StyledButton from "shared/ui/StyledButton";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding: 40px 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
  /* column-gap: 10px; */
  row-gap: 100px;
  width: 100%;
`;

export default function MainPageSectionInfo() {
  return (
    <StyledSection>
      <SubTitle>Also very important title</SubTitle>
      <StyledContainer>
        <StyledContent>
          <MainPageInfoItem />
          <MainPageInfoItem />
          <MainPageInfoItem />
          <MainPageInfoItem />
          <MainPageInfoItem />
          <MainPageInfoItem />
        </StyledContent>
        <StyledButton>Contact Us</StyledButton>
      </StyledContainer>
    </StyledSection>
  );
}
