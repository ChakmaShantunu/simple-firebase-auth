import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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

    const handleGithubSignIn = () => {
        console.log("github sign in");
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign Out done");
            setUser(null);
        }).catch((error) => { console.log(error); })
    }


    return (
        <div>
            <h2>Please log in</h2>


            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : <>
                    <button onClick={handleGoogleSignIn}>Sign in with google</button>
                    <button onClick={handleGithubSignIn}>Sign in with Github</button>
                </>
            }

            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <h3>{user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }


        </div>
    );
};

export default Login;