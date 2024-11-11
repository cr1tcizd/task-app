import MainPageSectionHead from './MainPageSectionHead'
import MainPageSectionInfo from './MainPageSectionInfo'
import MainPageSectionContacts from './MainPageSectionContacts'

export default function MainPageContent() {
	return (
		<main>
			<MainPageSectionHead />
			<MainPageSectionInfo />
			<MainPageSectionContacts />
		</main>
	)
}
