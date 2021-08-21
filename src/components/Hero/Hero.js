import React, { useEffect } from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, TypingCursor } from './HeroStyles';

const Hero = () => {
	// array with texts to type in typewriter
	const dataText = ['Hi there!', 'I am Akash Pandey '];

	useEffect(() => {
		typeWriter();
	}, []);
	let count = 0;
	let index = 0;
	let currentText = '';
	let letter = '';

	const typeWriter = () => {
		if (count === dataText.length) {
			count = 0;
		}
		currentText = dataText[count];
		letter = currentText.slice(0, ++index);

		document.querySelector('#typingCursorText').textContent = letter;
		if (letter.length === currentText.length) {
			count++;
			index = 0;
		}
		setTimeout(typeWriter, 300);
	};
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					<TypingCursor id='typingCursorText'></TypingCursor>
				</SectionTitle>

				<SectionText>
					A Software Engineer @Gartner.Inc. You can reach me out for .NET and
					Javascript(React &amp; Angular) based Applications.
				</SectionText>
				<Button onClick={() => (window.location = 'https://google.com')}>
					Know more
				</Button>
			</LeftSection>
		</Section>
	);
};

export default Hero;
