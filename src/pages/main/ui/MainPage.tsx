import Footer from 'shared/ui/Footer'
import Header from 'shared/ui/Header'
import styled from 'styled-components'
import MainPageContent from './MainPageContent'

const StyledMainPage = styled.div`
	height: 100vh;
	position: relative;
`

export default function MainPage() {
	return (
		<StyledMainPage>
			<Header />
			<MainPageContent />
			<Footer />
		</StyledMainPage>
	)
}
