import { onlyCapitalizeInEnglish } from 'i18n';
import React, { FC } from 'react';
import styled from 'styled-components';

import { FlexDivCentered } from 'styles/common';

export type CardHeaderProps = {
	children: React.ReactNode;
	className?: string;
	lowercase?: boolean;
};

const CardHeader: FC<CardHeaderProps> = ({ children, lowercase = false, ...rest }) => (
	<Container lowercase={lowercase} {...rest}>
		{children}
	</Container>
);

const Container = styled(FlexDivCentered)<{ lowercase: boolean }>`
	position: relative;
	color: ${(props) => props.theme.colors.white};
	border-bottom: 1px solid ${(props) => props.theme.colors.navy};
	height: 32px;
	padding: 0 18px;
	justify-content: flex-start;
	text-transform: ${(props) => (props.lowercase ? 'none' : onlyCapitalizeInEnglish)};
	font-family: ${(props) => props.theme.fonts.bold};
	font-size: 14px;
	flex-shrink: 0;
`;

export default CardHeader;
