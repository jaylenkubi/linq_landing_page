import { useRef, useEffect } from 'react';
import { Box, Container } from '@mantine/core';
import { useInView } from 'react-intersection-observer';
import styles from './styles/imageWithGradient.module.css';
import { BorderBeam } from '../borderBeam/borderBeam.component.tsx';

const ImageWithGradient = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});
	const innerRef = useRef(null);

	useEffect(() => {
		if (inView && innerRef.current) {
			innerRef.current.classList.add(styles['animate-glow']);
		}
	}, [inView]);

	return (
		<Box ref={ref} className={styles.outerSection} mt={'lg'}>
			<BorderBeam />
			<Container size={ 1500 }
				ref={innerRef}
				className={styles.innerSection}
			>
				<div className={styles.glowEffect}></div>
				<img
					src="src/assets/article-page.png"
					alt="Hero Image"
					className={styles.image}
				/>
			</Container>
		</Box>
	);
};

export default ImageWithGradient;