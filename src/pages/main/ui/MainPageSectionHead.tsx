import Container from 'shared/ui/Container'
import Description from 'shared/ui/Description'
import { Title } from 'shared/ui/Title'
import styled from 'styled-components'

const StyledSection = styled.section`
	padding: 40px 0;
	background: var(--background-gray);
	border-bottom: 1px solid #c5c2c2;
`

const StyledContent = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
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
	@media (max-width: 768px) {
		padding-right: 0;
	}
`

const RightContainer = styled.div`
	flex-grow: 1;
	flex-basis: 100%;
	flex-shrink: 1;
`

export default function MainPageSectionHead() {
	return (
		<StyledSection>
			<Container>
				<StyledContent>
					<LeftContainer>
						<LeftContent>
							<Title>Most important title on the page</Title>
							<Description>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								mattis, leo et condimentum ultricies, sem urna convallis metus,
								vel suscipit nibh lacus tincidunt ante
							</Description>
						</LeftContent>
					</LeftContainer>
					<RightContainer>
						<iframe
							width='100%'
							height='235'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ'
							allowFullScreen
							title='Embedded youtube'
						/>
					</RightContainer>
				</StyledContent>
			</Container>
		</StyledSection>
	)
}
