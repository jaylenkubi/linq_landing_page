import { AppShell, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from './header/header.component.tsx';
import styles from './header/styles/header.module.css';
import classes from '../styles/globalStyle.module.css';

export function AppWrapperComponent() {
	return (
		<AppShell
			header={
				{
					height: {
						base: 60,
						sm: 60
					}
				}
			}
			className="bg-background text-foreground"
		>
			<AppShell.Header className={ styles.header }>
				<Header/>
			</AppShell.Header>

			<AppShell.Main className={ classes.main }>
				{/*<Container size="xl">*/}
					<Outlet/>
				{/*</Container>*/}
			</AppShell.Main>

		</AppShell>

	)

}