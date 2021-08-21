import styled from 'styled-components';

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;

export const TypingCursor = styled.span`
	color: white;
	&:after {
		content: '';
		width: 1px;
		height: 100px;
		border-right: 2px solid white;
		animation: blink 0.5s infinite ease;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
