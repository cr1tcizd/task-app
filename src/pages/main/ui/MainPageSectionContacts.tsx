import StyledButton from 'shared/ui/StyledButton'
import { Title } from 'shared/ui/Title'
import styled from 'styled-components'

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 100px 60px;
	background: #f5f5f5;
	margin: 0 -60px;
	border-top: 1px solid #c5c2c2;
`

export default function MainPageSectionContacts() {
	return (
		<StyledSection>
			<Title>Less important title</Title>
			<StyledButton>Contact us</StyledButton>
		</StyledSection>
	)
}
