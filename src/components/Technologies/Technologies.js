import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section nopadding id='tech'>
		<SectionDivider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked on a range of technologies from Front-end to Back-end
		</SectionText>
		<List>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with: <br />
						React.JS and Angular
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with: <br />
						.NET and MS-SQL Server
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
