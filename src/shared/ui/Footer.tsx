import styled from 'styled-components'
import { Heading } from './Title'

const StyledFooter = styled.footer`
	z-index: 100;
	position: sticky;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0;
	width: 100%;
	height: var(--footer-height);
	border-top: 1px solid grey;
	background: #fff;
`

export default function Footer() {
	return (
		<StyledFooter>
			<Heading>Some Company 2024</Heading>
		</StyledFooter>
	)
}
