import styled from 'styled-components'
import Container from 'shared/ui/Container'
import { Heading } from './Title'
import StyledButton from './StyledButton'
import { useNavigate } from 'react-router-dom'

const StyledHeader = styled.header`
	z-index: 100;
	display: flex;
	position: sticky;
	top: 0;
	width: 100%;
	height: var(--header-height);
	border-bottom: 1px solid gray;
	background: #fff;
`

export default function Header() {
	const navigate = useNavigate()
	return (
		<StyledHeader>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Heading>Some Company</Heading>
				<StyledButton onClick={() => navigate('/contact-us-auth')}>
					Contact Us
				</StyledButton>
			</Container>
		</StyledHeader>
	)
}
