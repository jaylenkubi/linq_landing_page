import { Button, createTheme, CSSVariablesResolver } from '@mantine/core';
import classes from './globalStyle.module.css';

export const theme = createTheme({
	fontFamily: 'Roboto, sans-serif',
	fontFamilyMonospace: 'Roboto, sans-serif',
	fontSmoothing: true,
	scale: 0.875,
	autoContrast: true,
	headings: {
		fontFamily: 'Roboto, sans-serif',
		sizes: {
			h1: {fontSize: '3rem', lineHeight: '3.75rem'},
			h2: {fontSize: '2.25rem', lineHeight: '3rem'},
			h3: {fontSize: '1.75rem', lineHeight: '2.5rem'},
			h4: {fontSize: '1.375rem', lineHeight: '2rem'},
			h5: {fontSize: '1.125rem', lineHeight: '1.75rem'},
			h6: {fontSize: '1rem', lineHeight: '1.5rem'},
		}
	},
	radius: {xs: '0.25rem', sm: '0.5rem', md: '0.75rem', lg: '1rem', xl: '2rem'},

	fontSizes: {
		xxs: '0.625rem',
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.25rem',
		xl: '1.5rem'
	},

	breakpoints: {
		xs: '31.25rem',
		sm: '48rem',
		md: '62rem',
		lg: '75rem',
		xl: '87.5rem'
	},

	shadows: {
		xs: '0 2px 4px rgba(0, 0, 0, 0.1)',
		sm: '0 4px 8px rgba(0, 0, 0, 0.12)',
		md: '0 8px 16px rgba(0, 0, 0, 0.14)',
		lg: '0 16px 24px rgba(0, 0, 0, 0.16)',
		xl: '0 24px 32px rgba(0, 0, 0, 0.18)'
	},

	spacing: {
		xs: '0.5rem',
		sm: '1rem',
		md: '1.5rem',
		lg: '2rem',
		xl: '3rem',
		xxl: '4rem'
	},

	primaryColor: 'purple',
	primaryShade: {light: 6, dark: 8},
	components: {
		Button: Button.extend({
			classNames: {
				root: classes.button
			}
		})
	},
	colors: {
		purple: [
			"#F4F0FE",  // Index 0 (lightest)
			"#D7CBFD",  // Index 1
			"#B7A4FC",  // Index 2
			"#9B7DFA",  // Index 3
			"#845EF7",  // Index 4
			"#845EF7",  // Index 5 (original color)
			"#6A3DD4",  // Index 6
			"#5022B1",  // Index 7
			"#370C8E",  // Index 8
			"#1F006B"   // Index 9 (darkest)
		],
		blue: [
			'#d2d7db',
			'#b9cbda',
			'#9bc0df',
			'#78b6e8',
			'#50acf7',
			'#4DABF7', // original accent
			'#047bdc',
			'#00437a',
			'#000b14',
			'#000000'
		],
		yellow: [
			'#c8c2b1',
			'#cdbf93',
			'#d8bd6f',
			'#e7bf46',
			'#fbc318',
			'#FCC419', // original accent
			'#ad8200',
			'#473600',
			'#000000',
			'#000000'
		],
		red: [
			'#ede3e3',
			'#eacdcd',
			'#ecb1b1',
			'#f39191',
			'#ff6b6b',
			'#FF6B6B', //original accent
			'#ff0505',
			'#9e0000',
			'#380000',
			'#000000'
		],
		pink: [
			'#f6f4f5',
			'#eee2ea',
			'#eccbe1',
			'#efaed9',
			'#f78dd4',
			'#F78ED4', // original accent
			'#f628b1',
			'#b50379',
			'#520036',
			'#000000'
		],
		coral: [
			'#e7ddda',
			'#e5cac2',
			'#e9b4a5',
			'#f19b83',
			'#ff7f5c',
			'#FF7F5C',
			'#f53500',
			'#8f1f00',
			'#290900',
			'#000000'
		],
		peach: [
			'#ffffff',
			'#ffffff',
			'#fbf4ef',
			'#fae6d6',
			'#ffd8b8',
			'#FFD8B8',
			'#ffa052',
			'#eb6a00',
			'#853c00',
			'#1f0e00'
		],
	},
});

export const resolver: CSSVariablesResolver = (theme) => ({
	variables: {
		'--background': '#fbf4ef',
		'--textColor': theme.colors.purple[8],
		'--mantine-radius-default': '0.75rem',
		'--mantine-header-height': '4rem',
		'--mantine-blur-amount': '15px',
		'--mantine-overlay-opacity': '0.8',
		'--mantine-header-background': 'rgba(255, 255, 255, 0.1)',
		'--mantine-header-border-color': 'rgba(255, 255, 255, 0.2)',

	},
	light: {
		'--mantine-color-card': 'rgba(255, 255, 255, 0.15)',
		'--mantine-color-card-foreground': theme.white,
		'--mantine-color-popover': 'rgba(255, 255, 255, 0.2)',
		'--mantine-color-popover-foreground': theme.white,
		'--mantine-color-primary': theme.colors.purple[6],
		'--mantine-color-primary-foreground': theme.white,
		'--mantine-color-secondary': theme.colors.pink[5],
		'--mantine-color-secondary-foreground': theme.white,
		'--mantine-color-muted': theme.colors.purple[2],
		'--mantine-color-muted-foreground': theme.colors.purple[8],
		'--mantine-color-accent': theme.colors.coral[5],
		'--mantine-color-accent-foreground': theme.white,
		'--mantine-color-destructive': theme.colors.peach[6],
		'--mantine-color-destructive-foreground': theme.white,
		'--mantine-color-border': `rgba(${ theme.colors.purple[3] }, 0.3)`,
		'--mantine-color-input': 'rgba(255, 255, 255, 0.2)',
		'--mantine-color-ring': theme.colors.pink[5],
	},
	dark: {
		'--mantine-color-background': `linear-gradient(135deg, ${ theme.colors.purple[8] }, ${ theme.colors.pink[8] })`,
		'--mantine-color-foreground': theme.white,
		'--mantine-color-card': 'rgba(0, 0, 0, 0.3)',
		'--mantine-color-card-foreground': theme.white,
		'--mantine-color-popover': 'rgba(0, 0, 0, 0.4)',
		'--mantine-color-popover-foreground': theme.white,
		'--mantine-color-primary': theme.colors.purple[5],
		'--mantine-color-primary-foreground': theme.white,
		'--mantine-color-secondary': theme.colors.pink[4],
		'--mantine-color-secondary-foreground': theme.white,
		'--mantine-color-muted': theme.colors.purple[7],
		'--mantine-color-muted-foreground': theme.colors.purple[2],
		'--mantine-color-accent': theme.colors.coral[4],
		'--mantine-color-accent-foreground': theme.white,
		'--mantine-color-destructive': theme.colors.peach[5],
		'--mantine-color-destructive-foreground': theme.white,
		'--mantine-color-border': `rgba(${ theme.colors.purple[6] }, 0.3)`,
		'--mantine-color-input': 'rgba(0, 0, 0, 0.3)',
		'--mantine-color-ring': theme.colors.pink[4],
	},
});