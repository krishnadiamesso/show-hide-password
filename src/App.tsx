import {useState} from 'react'
import './App.css'

function App() {
    const [password, setPassword] = useState<string>("")

    return (
        <main>
            <div>
                <label htmlFor="password" className="p-8 text-3xl font-bold">Password</label>
                <input id="password" type="password" value={password} className="border border-blue-900"
                       onChange={event => setPassword(event.target.value)}/>
            </div>
            {/*<p className="p-8 ">Typed password: {password}</p>*/}
        </main>
    )
}

export default App
