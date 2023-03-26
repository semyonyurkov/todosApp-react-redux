import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

export const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path=":filter" element={<App />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
