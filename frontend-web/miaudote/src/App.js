import React from 'react';
import Routes from './routes'
import MaterialLayout from './components/Layout/MaterialLayout';
<<<<<<< HEAD
<<<<<<< HEAD
const App = () => {
    return (
        <div>
            <MaterialLayout>
            <Routes />
            </MaterialLayout>
=======
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
import { BrowserRouter } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <MaterialLayout>
                    <Routes />
                </MaterialLayout>
            </BrowserRouter>
<<<<<<< HEAD
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
        </div>
    )
}
export default App;