// src/pages/Login.jsx
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from '../firebase.config'; // This line includes both `auth` and `provider`

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const GoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate('/');
      }
    } catch (error) {
      console.log("Error during sign-in:", error.message);
    }
  };

  return (
    <div className='loginPage'>
      <p>Sign in with Google</p>
      <button className="login-with-google-btn" onClick={GoogleSignUp}>Sign in with Google</button>
    </div>
  );
};

export default Login;
