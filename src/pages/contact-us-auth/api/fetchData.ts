import { FormValues } from '../types/types'

export const fetchData = async (data: FormValues) => {
	try {
		const promise = await fetch('http://localhost:4000/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		if (promise.status !== 200) return new Error('Error')
		return promise.json()
	} catch (error) {
		console.log(error)
	}
}
