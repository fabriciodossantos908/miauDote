import React from 'react';
import Routes from './routes'
import MaterialLayout from './components/Layout/MaterialLayout';

const App = () => {
    return (
        <div>
            <MaterialLayout>
            <Routes />
            </MaterialLayout>
        </div>
    )
}
export default App;