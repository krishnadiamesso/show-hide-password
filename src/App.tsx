import {useState} from 'react'
import './App.css'

function App() {
    const [password, setPassword] = useState<string>("")
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    function handlePasswordVisible() {
        setIsPasswordVisible(isPasswordVisible => !isPasswordVisible)
    }

    return (
        <main className="p-8">
            <div>
                <label htmlFor="password" className="block mb-2 text-3xl font-bold">Password</label>
                <input id="password" type={isPasswordVisible ? "text" : "password"} value={password}
                       className="rounded-md border border-blue-900 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                       onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className="mt-4">
                <button
                    aria-label={isPasswordVisible ? "Hide Password" : "Show Password"}
                    aria-controls="password"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-blue-800 disabled:pointer-events-none disabled:opacity-50"
                    onClick={handlePasswordVisible} type="button">{isPasswordVisible ? "Hide" : "Show"}</button>
            </div>
        </main>
    )
}

export default App
