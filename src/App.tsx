import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

import ThemeProvider from "@/providers/ThemeProvider"
import AuthProvider from "@/providers/Auth/AuthProvider";
import { store } from '@/store/root.store';
import { routes } from '@/pages/routes'

const App: React.FC = () => {

    const imgUrl = new URL(`${import.meta.env.VITE_BASENAME}/logo.png`, import.meta.url).href

    return <Provider store={store}>
        <ThemeProvider>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <link rel="icon" type="image/svg+xml" href={imgUrl} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Auth</title>
                </Helmet>
            </HelmetProvider>
            <AuthProvider>
                <RouterProvider router={createBrowserRouter(routes, {
                    basename: import.meta.env.VITE_BASENAME,
                    // https://reactrouter.com/en/main/routers/create-browser-router#optsfuture
                    future: {
                        v7_fetcherPersist: true,
                        v7_normalizeFormMethod: true,
                        v7_partialHydration: true,
                        v7_relativeSplatPath: true,
                        v7_skipActionErrorRevalidation: true,
                    },
                })} />
            </AuthProvider>
        </ThemeProvider>
    </Provider>
}

export default App;