import { SubTitle } from 'shared/ui/Title'
import MainPageInfoItem from './MainPageInfoItem'
import styled from 'styled-components'
import StyledButton from 'shared/ui/StyledButton'
import Container from 'shared/ui/Container'

const StyledSection = styled.section`
	padding: 40px 0;
`

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 100px;
`

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	width: 100%;
`

const StyledItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* justify-content: space-evenly; */
	flex-wrap: wrap;
	/* column-gap: 10px; */
	row-gap: 100px;
	width: 100%;
`

export default function MainPageSectionInfo() {
	return (
		<StyledSection>
			<Container>
				<StyledContent>
					<SubTitle>Also very important title</SubTitle>
					<StyledContainer>
						<StyledItems>
							<MainPageInfoItem />
							<MainPageInfoItem />
							<MainPageInfoItem />
							<MainPageInfoItem />
							<MainPageInfoItem />
							<MainPageInfoItem />
						</StyledItems>
						<StyledButton>Contact Us</StyledButton>
					</StyledContainer>
				</StyledContent>
			</Container>
		</StyledSection>
	)
}
