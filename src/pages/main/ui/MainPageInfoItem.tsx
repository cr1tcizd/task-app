import Description from 'shared/ui/Description'
import { SubTitle } from 'shared/ui/Title'
import styled from 'styled-components'

const StyledItem = styled.div`
	flex-grow: 1;
	flex-basis: 33%;
	flex-shrink: 1;
	width: 200px;
`

export default function MainPageInfoItem() {
	return (
		<StyledItem>
			<SubTitle>Title</SubTitle>
			<Description color='#757575'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
				leo et condimentum
			</Description>
		</StyledItem>
	)
}
