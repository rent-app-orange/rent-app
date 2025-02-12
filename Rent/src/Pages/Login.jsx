import { useState, useEffect } from "react";
import { auth, database } from "../Firebase/Configration";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigate("/");
  //     }
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);   

  const handleLogin = async (e) => {
    e.preventDefault();
    // التحقق من أن جميع الحقول مملوءة
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      // تسجيل الدخول باستخدام Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // تحديث حالة Redux وتخزين بيانات المستخدم
      dispatch(setUser({ uid: user.uid, email: user.email }));
  
      // إعادة توجيه المستخدم إلى الصفحة الرئيسية
      navigate("/");
    } catch (error) {
      console.error("Error login in:", error.message);
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      // تخزين بيانات المستخدم في Firebase Realtime Database
      await set(ref(database, "users/" + user.uid), {
        name: user.displayName,
        email: user.email,
        id: user.uid,
      });
  
      // تحديث حالة Redux وتخزين بيانات المستخدم
      dispatch(setUser({ uid: user.uid, email: user.email }));
  
      // إعادة توجيه المستخدم إلى الصفحة الرئيسية
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      alert("An error occurred during Google login. Please try again.");
    }
  };

  return (
<<<<<<< HEAD
  <>
  <section className="bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-2">
  <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
  <div className="absolute inset-0">
    <img
      className="object-cover w-full h-full"
      src="https://i.pinimg.com/736x/21/b4/ab/21b4ab78190743312c8406486e44b5dc.jpg" 
      alt="Modern apartment building with green surroundings"
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
  <div className="relative">
    <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
      <h3 className="text-4xl font-bold text-white">
        Find Your Perfect Home & <br className="hidden xl:block" />
        Rent It Online Today!
      </h3>
      <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
        <li className="flex items-center space-x-3">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
            <svg
              className="w-3.5 h-3.5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            Browse Thousands of Properties
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
            <svg
              className="w-3.5 h-3.5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            Virtual Tours for Every Property
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
            <svg
              className="w-3.5 h-3.5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            Secure Online Rental Process
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
            <svg
              className="w-3.5 h-3.5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-lg font-medium text-white">
            Dedicated Support for Landlords & Renters
          </span>
        </li>
      </ul>
=======
    <div>
      Login
>>>>>>> 09c38b502bc314af13cf507649d557d44958b1d2
    </div>
  </div>
</div>
    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
      <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
      <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login to <span className="text-red-500  font-bold">HabiRent</span></h1>
        <p className="mt-2 text-base text-gray-600">
  Don't have an account?{" "}
  <Link
    to="/Register"
    className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
  >
    Register Now
  </Link>
</p>
        <form action="#" method="POST" className="mt-8" onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email to get started"
                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
              >
                Login
              </button>
            
            </div>
          </div>
        </form>
        <div className="mt-3 space-y-3">
          <button
            type="button"
            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
            onClick={handleGoogleLogin}
          >
            <div className="absolute inset-y-0 left-0 p-4">
              <svg
                className="w-6 h-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
              </svg>
            </div>
            Log in with Google
          </button>
        </div>
        <p className="mt-5 text-sm text-gray-600">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://www.realpage.com/legal/privacy-policy/"
            title=""
            className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
          >
            Privacy Policy
          </a>{" "}
          &amp;
          <a
            href="https://istd.gov.jo/ebv4.0/root_storage/en/eb_list_page/general_sales_tax_law_and_its_amendments_2023-1.pdf"
            title=""
            className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

  </>
  );
};

export default Login;


