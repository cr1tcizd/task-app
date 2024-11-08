import { Button } from '@mui/material'
import { HTMLAttributes, ReactNode } from 'react'

interface StyledButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export default function StyledButton({ children }: StyledButtonProps) {
	return (
		<Button
			variant='contained'
			size='large'
			sx={{
				background: '#2C2C2C',
				borderRadius: '12px',
				textTransform: 'none',
				padding: '8px 60px',
			}}
		>
			{children}
		</Button>
	)
}
