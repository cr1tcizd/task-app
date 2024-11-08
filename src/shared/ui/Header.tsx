import styled from 'styled-components'
import Container from 'shared/ui/Container'
import { SubTitle } from './Title'
import StyledButton from './StyledButton'

const StyledHeader = styled.header`
	z-index: 100;
	display: flex;
	position: sticky;
	top: 0;
	width: 100%;
	height: 144px;
	border-bottom: 1px solid gray;
	background: #fff;
`

export default function Header() {
	return (
		<StyledHeader>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<SubTitle>Some Company</SubTitle>
				<StyledButton>Contact Us</StyledButton>
			</Container>
		</StyledHeader>
	)
}
