import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const LogIn = () => {
  //   const auth = getAuth(app);
  //   const provider = GoogleAuthProvider();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleSignIn}>google</button>
    </div>
  );
};

export default LogIn;
