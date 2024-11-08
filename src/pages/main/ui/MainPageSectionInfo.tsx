import { Title } from 'shared/ui/Title'
import MainPageInfoItem from './MainPageInfoItem'
import styled from 'styled-components'
import StyledButton from 'shared/ui/StyledButton'

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 100px;
	padding: 40px 0;
`

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`

const StyledContent = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 5px;
	row-gap: 100px;
`

export default function MainPageSectionInfo() {
	return (
		<StyledSection>
			<Title>Also very important title</Title>
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
	)
}
