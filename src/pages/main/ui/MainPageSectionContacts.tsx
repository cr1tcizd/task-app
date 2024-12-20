import { useNavigate } from 'react-router-dom'
import StyledButton from 'shared/ui/StyledButton'
import { Subject } from 'shared/ui/Title'
import styled from 'styled-components'

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 100px 60px;
	margin: 0 -60px;
	text-align: center;
	background: var(--background-gray);
	border-top: 1px solid #c5c2c2;
`

export default function MainPageSectionContacts() {
	const navigate = useNavigate()
	return (
		<StyledSection>
			<Subject justify-content='center'>Less important title</Subject>
			<StyledButton onClick={() => navigate('/contact-us-auth')}>
				Contact us
			</StyledButton>
		</StyledSection>
	)
}
