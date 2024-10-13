import { MantineStyleProp, Text } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './styles/textShimmer.module.css';

interface TextShimmerProps {
	children: ReactNode;
	className?: string;
	shimmerWidth?: number;
	style?: MantineStyleProp;
}

export function TextShimmer({children, className, shimmerWidth = 100, style}: TextShimmerProps) {
	return (
		<Text
			size="sm"
			align="center"
			style={ {
				...style,
				'--shimmer-width': `${ shimmerWidth }px`,
			} }
			className={ `${ classes.textShimmer } ${ className || '' }` }
		>
			{ children }
		</Text>
	);
};
