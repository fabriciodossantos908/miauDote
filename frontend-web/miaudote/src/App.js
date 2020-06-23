import React from 'react';
import Routes from './routes'
import Navbar from './components/baseComponent/Navbar'
import Footer from './components/baseComponent/Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes />
            <Footer />
        </div>
    )
}
export default App;