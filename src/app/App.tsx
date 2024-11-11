import { ContactUsAuth } from 'pages/contact-us-auth'
import { ContactUsPage } from 'pages/contact-us-page'
import { MainPage } from 'pages/main'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/*' element={<MainPage />} />
				<Route path='/contact-us-auth' element={<ContactUsAuth />} />
				<Route path='/contact-us' element={<ContactUsPage />} />
			</Routes>
		</>
	)
}

export default App
