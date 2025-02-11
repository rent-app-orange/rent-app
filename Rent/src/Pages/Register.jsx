import { useState } from "react";
import { auth, database } from "../Firebase/Configration";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // التحقق من أن جميع الحقول مملوءة
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // إنشاء حساب جديد باستخدام Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // تخزين بيانات المستخدم في Firebase Realtime Database
      await set(ref(database, "users/" + user.uid), {
        name,
        email,
        id: user.uid, // إضافة ID الخاص بالمستخدم
      });

      // تحديث حالة Redux وتخزين بيانات المستخدم
      dispatch(setUser({ uid: user.uid, email, name }));

      // إعادة توجيه المستخدم إلى الصفحة الرئيسية
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div>
      <div className="h-screen flex">
        {/* الجانب الأيسر: الخلفية الزرقاء */}
        <div className="relative overflow-hidden flex w-1/2 bg-gradient-to-tr from-pink-500 to-pink-300 justify-center items-center hidden md:flex">
          <div className="text-center">
            <h1 className="text-white font-bold text-4xl">RentEase</h1>
            <p className="text-white mt-2">
              A web application that allows users to explore and rent residential properties.
            </p>
          </div>
          {/* العناصر الزخرفية (دوائر) */}
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>

        {/* الجانب الأيمن: نموذج التسجيل */}
        <div className="flex w-full md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="w-full max-w-md" onSubmit={handleRegister}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Create a Free Account</h1>
            <p className="text-sm text-gray-600 mb-7">Join us and start your journey today!</p>

            {/* حقل الاسم الكامل */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* حقل كلمة المرور */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* زر التسجيل */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-300 mt-4 py-2 rounded-full text-white font-semibold hover:from-pink-600 hover:to-pink-400 transition-all"
            >
              Register
            </button>
            <br />
            <br />
            <span className="block text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Log in
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;