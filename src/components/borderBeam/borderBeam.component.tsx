import { Box, createStyles } from '@mantine/core';

interface BorderBeamProps {
	className?: string;
	size?: number;
	duration?: number;
	borderWidth?: number;
	anchor?: number;
	colorFrom?: string;
	colorTo?: string;
	delay?: number;
}

const useStyles = createStyles((theme, {
	size = 100,
	duration = 15,
	anchor = 90,
	borderWidth = 1.5,
	colorFrom = "#ffaa40",
	colorTo = "#9c40ff",
	delay = 0,
}: BorderBeamProps) => ({
	borderBeam: {
		position: 'absolute',
		inset: 0,
		borderRadius: 'inherit',
		border: `${borderWidth}px solid transparent`,
		maskClip: 'padding-box, border-box',
		maskComposite: 'intersect',
		mask: 'linear-gradient(transparent, transparent), linear-gradient(white, white)',

		'&::after': {
			content: '""',
			position: 'absolute',
			aspectRatio: '1 / 1',
			width: `${size}px`,
			animation: `${duration}s linear infinite borderBeam`,
			animationDelay: `${-delay}s`,
			background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
			offsetAnchor: `${anchor}% 50%`,
			offsetPath: `rect(0 auto auto 0 round ${size}px)`,
		},
	},

	'@keyframes borderBeam': {
		'0%': { offsetDistance: '0%' },
		'100%': { offsetDistance: '100%' },
	},
}));

export const BorderBeam = ({
							   className,
							   size = 100,
							   duration = 15,
							   anchor = 90,
							   borderWidth = 1.5,
							   colorFrom = "#ffaa40",
							   colorTo = "#9c40ff",
							   delay = 0,
						   }: BorderBeamProps) => {
	const { classes, cx } = useStyles({ size, duration, anchor, borderWidth, colorFrom, colorTo, delay });

	return (
		<Box className={cx(classes.borderBeam, className)}></Box>
	);
};