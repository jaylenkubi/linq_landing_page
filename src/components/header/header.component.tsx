import { Anchor, Burger, Button, Container, Group } from '@mantine/core';
import styles from './styles/header.module.css';
import { useState } from 'react';

export function Header() {
	const [ hamburgerMenuIsOpen, setHamburgerMenuIsOpen ] = useState(false);

	return (
		<Container size="xl" py={ '12' }>
			<Group justify="space-between" align="center" className={ styles.headerNav }>

				<Anchor size="lg" href="/" className={ styles.headerLogo }>
					linq
				</Anchor>

				<Group align="center" className={ styles.headerNavLink }>
					<Anchor href="/signin" className={ styles.link }>
						Log in
					</Anchor>
					<Button variant="outline" size="sm">
						Sign up
					</Button>
				</Group>
			</Group>

			<Burger
				opened={ hamburgerMenuIsOpen }
				onClick={ () => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen) }
				className={ styles.burger }
				size="sm"
			/>
		</Container>
	)
}