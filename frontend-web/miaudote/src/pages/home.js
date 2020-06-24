import React, { Component } from 'react'
// function alertBtn() {
//     const [alert, setAlert] = useState(true)
//     return (
//         <>
//             <alert alert={ alert } >
//                 <h1>Something are wapenning!</h1>
//             </alert>
//             {!alert && <Button onClick={() => setAlert(false)}>CLose that</Button>}
//         </>
//     )
// }

export class Home extends Component {
    render() {
        return (
            <div>
                <header>Home page</header>
                <div>

                    <h1>Home page</h1>
                    <alertBtn/>
                </div>
                
            </div>
        )
    }
}

export default Home;