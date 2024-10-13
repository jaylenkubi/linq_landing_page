import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppWrapperComponent } from './components/appWrapper.component.tsx';
import { HeroSection } from './components/heroSection/heroSection.component.tsx';


const router = createBrowserRouter([
	{
		path: "/",
		element: <AppWrapperComponent/>,
		children: [
			{
				path: "/",
				element: <HeroSection/>
			}
		]
	}
])

export function Router() {
	return (
		<RouterProvider router={ router }/>
	)
}