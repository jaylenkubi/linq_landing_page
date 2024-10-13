import { Button, Container, Stack, Text, useMantineTheme } from '@mantine/core';
import { TextShimmer } from '../textShimmer/textShimmer.component.tsx';
import { GoArrowRight } from 'react-icons/go';
import ImageWithGradient from '../imageWithGradient/imageWithGradient.component.tsx';


export function HeroSection() {
	const theme = useMantineTheme();
	return (
		<><Container size="md" px={ 6 } mt={ 'xxl' } align="center">
			<Stack align="center">
				<TextShimmer shimmerWidth={ 350 }>
					<span>👨‍🚀 Introducing Linq Tracker</span>{ " " }
					<GoArrowRight size={ 20 }/>
				</TextShimmer>
				<Stack gap="12">
					<Text size={ '80px' } fw={ 600 } c={ theme.colors.purple[7] }>
						Linq:
					</Text>
					<Text size={ '80px' } fw={ 500 } c={ theme.colors.purple[6] }>
						Your magical toolkit for dev resources
					</Text>
				</Stack>
				<Text size={ 'lg' } opacity={ 0.9 } mt={ 'lg' } style={ {maxWidth: '600px', textAlign: 'center'} }>
					Effortlessly manage your toolkit by tracking and categorizing SaaS and open source products
				</Text>
				<Button mt={ 'lg' } size={ 'lg' } variant="hero" fullWidth={ false }
						rightSection={ <GoArrowRight size={ 20 }/> }>
					Get Started, It's Free
				</Button>
			</Stack>
		</Container>
			<ImageWithGradient/>
		</>
	)
}