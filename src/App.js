import "./App.css";
import { signInWithGoogle, auth } from "./firebase-config";
function App() {
    console.log(auth);
    return (
        <div className="App">
            <button type="button" onClick={signInWithGoogle}>
                Sign in with Gooogle
            </button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <img alt="description" src={localStorage.getItem("profilePic")} />
        </div>
    );
}

export default App;
