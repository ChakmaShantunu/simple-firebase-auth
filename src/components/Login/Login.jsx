import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Firebase Auth
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Login with Google or GitHub
                    </p>
                </div>

                {!user ? (
                    <div className="mt-8 space-y-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn w-full btn-outline btn-primary"
                        >
                            Continue with Google
                        </button>

                        <button
                            onClick={handleGithubSignIn}
                            className="btn w-full btn-neutral"
                        >
                            Continue with GitHub
                        </button>
                    </div>
                ) : (
                    <div className="mt-8 text-center">
                        <div className="avatar">
                            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src={
                                        user.photoURL ||
                                        "https://i.ibb.co/4pDNDk1/avatar.png"
                                    }
                                    alt={user.displayName}
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-4">
                            {user.displayName || "No Name"}
                        </h2>

                        <p className="text-gray-500 mt-1">
                            {user?.email || "Email not available"}
                        </p>

                        <div className="alert alert-success mt-5">
                            <span>Successfully Logged In 🎉</span>
                        </div>

                        <button
                            onClick={handleSignOut}
                            className="btn btn-error w-full mt-5"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;