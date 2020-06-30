import React from 'react';
import Routes from './routes'
import MaterialLayout from './components/Layout/MaterialLayout';
import ProgressBar from '../src/components/statusBar/statusBar'
const App = () => {
    return (
        <div>
            <ProgressBar>
            <MaterialLayout>
            <Routes />
            </MaterialLayout>
            </ProgressBar>
        </div>
    )
}
export default App;