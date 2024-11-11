import { Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import StyledButton from 'shared/ui/StyledButton'
import styled from 'styled-components'
import { FormValues } from '../types/types'
import { fetchData } from '../api/fetchData'

const StyledForm = styled.form`
	padding: 25px;
	border: 1px solid #3b3b3b;
	border-radius: 8px;
	background: #fff;
	max-width: 320px;
	width: 100%;
`

export default function ContactUsAuthForm() {
	const navigate = useNavigate()

	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	const { register, handleSubmit, formState } = form
	const { errors } = formState

	const onSubmit = (data: FormValues) => {
		fetchData(data).then(data => alert(data.message))
		navigate('/contact-us')
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={2}>
				<TextField
					label='Name'
					type='text'
					{...register('name', {
						required: 'Name is required',
					})}
					error={!!errors.name}
					helperText={errors.name?.message}
				/>
				<TextField
					label='Email'
					type='email'
					{...register('email', {
						required: 'Email is required',
					})}
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
				<TextField
					label='Message'
					type='message'
					multiline
					rows={4}
					{...register('message', {
						required: 'Message is required',
					})}
					error={!!errors.message}
					helperText={errors.message?.message}
				/>
				<StyledButton type='submit'>Submit</StyledButton>
			</Stack>
		</StyledForm>
	)
}
