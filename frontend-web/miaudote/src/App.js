import React from 'react';
import Routes from './routes'
import MaterialLayout from './components/Layout/MaterialLayout';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <MaterialLayout>
                    <Routes />
                </MaterialLayout>
            </BrowserRouter>
        </div>
    )
}
export default App;