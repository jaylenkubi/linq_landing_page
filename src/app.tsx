import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { resolver, theme } from './styles/theme.tsx';
import './styles/globalStyle.module.css';
import { Router } from './router.tsx';


function App() {

	return (
		<>
			<MantineProvider theme={ theme } cssVariablesResolver={resolver} defaultColorScheme="light">
				<Router/>
			</MantineProvider>
		</>
	)

}

export default App
