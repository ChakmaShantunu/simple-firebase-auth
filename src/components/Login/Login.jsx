import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log("google sign in clicked");

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={handleGoogleSignIn}>Sign in with google</button>

            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <h3>{user.email}</h3>
                </div>
            }
        </div>
    );
};

export default Login;