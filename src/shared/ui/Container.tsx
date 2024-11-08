import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	max-width: 1920px;
	width: 100%;
	padding: 0 60px;
	margin: 0 auto;
`

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export default function Container({ children, ...props }: ContainerProps) {
	return <StyledContainer {...props}>{children}</StyledContainer>
}
