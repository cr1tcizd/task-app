import Description from 'shared/ui/Description'
import { Title } from 'shared/ui/Title'
import styled from 'styled-components'

const StyledSection = styled.section`
	display: flex;
	gap: 20px;
	padding: 40px 60px;
	margin: 0 -60px;
	background: #f5f5f5;
	border-bottom: 1px solid #c5c2c2;
`

const LeftContainer = styled.div`
	flex-grow: 1;
	flex-basis: 100%;
	flex-shrink: 1;
`

const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-right: 35%;
`

const RightContainer = styled.div`
	flex-grow: 1;
	flex-basis: 100%;
	flex-shrink: 1;
`

export default function MainPageSectionHead() {
	return (
		<StyledSection>
			<LeftContainer>
				<LeftContent>
					<Title>Most important title on the page</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						mattis, leo et condimentum ultricies, sem urna convallis metus, vel
						suscipit nibh lacus tincidunt ante
					</Description>
				</LeftContent>
			</LeftContainer>
			<RightContainer>YOUTUBE</RightContainer>
		</StyledSection>
	)
}
