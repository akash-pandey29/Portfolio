import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 20, text: 'Open Source Projects' },
	{ number: 80, text: 'Clients' },
	{ number: 500, text: 'Projects Completed' },
	{ number: 500, text: 'Github Stars' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
