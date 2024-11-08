import Container from 'shared/ui/Container'
import MainPageSectionHead from './MainPageSectionHead'
import MainPageSectionInfo from './MainPageSectionInfo'
import MainPageSectionContacts from './MainPageSectionContacts'

export default function MainPageContent() {
	return (
		<main>
			<Container>
				<MainPageSectionHead />
				<MainPageSectionInfo />
				<MainPageSectionContacts />
			</Container>
		</main>
	)
}
