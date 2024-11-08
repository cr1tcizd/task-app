import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledDescription = styled.p`
	font-size: 24px;
	line-height: 32px;
	color: ${({ color }) => color || '#000'};
`

interface DescriptionProps {
	children: ReactNode
	color?: string
}

export default function Description(props: DescriptionProps) {
	return <StyledDescription {...props}>{props.children}</StyledDescription>
}
