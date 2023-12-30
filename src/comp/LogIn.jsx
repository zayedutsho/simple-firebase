import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {
  const auth = getAuth(app);

  const [user, setUser] = useState([]);
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;

        setUser(loggedUser);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>SignOut</button>
      ) : (
        <button onClick={handleSignIn}>google</button>
      )}

      {user && (
        <div>
          <h1>{user.displayName}</h1>
        </div>
      )}
    </div>
  );
};

export default LogIn;
