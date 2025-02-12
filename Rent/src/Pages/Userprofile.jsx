import { useState, useEffect } from "react";
import axios from "axios";
import { auth, onAuthStateChanged } from "../Firebase/Configration";

const UserProfile = () => {
    const [formData, setFormData] = useState({
        Username: "",
        email: "",
        birthdate: "",
        phoneNumber: "",
        gender: "male",
    });

    const [userId, setUserId] = useState(null);

    // عند تحميل الصفحة، جلب بيانات المستخدم
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                fetchUserData(user.uid);
            }
        });
    }, []);

    // جلب بيانات المستخدم من Firebase باستخدام Axios
    const fetchUserData = async (uid) => {
        try {
            const response = await axios.get(
                `https://rent-app-a210b-default-rtdb.firebaseio.com/users/${uid}.json`
            );
            if (response.data) {
                setFormData(response.data);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    // تحديث البيانات عند إدخال المستخدم لمعلومات جديدة
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // تحديث `gender` مباشرة في Firebase عند تغييره
        if (name === "gender" && userId) {
            try {
                await axios.patch(
                    `https://rent-app-a210b-default-rtdb.firebaseio.com/users/${userId}.json`,
                    { gender: value }
                );
            } catch (error) {
                console.error("Error updating gender in Firebase:", error);
            }
        }
    };

    // تحديث البيانات في Firebase باستخدام Axios عند حفظ التعديلات
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userId) {
            try {
                await axios.put(
                    `https://rent-app-a210b-default-rtdb.firebaseio.com/users/${userId}.json`,
                    formData
                );
                alert("Profile updated successfully!");
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        }
    };

    return (
        
        <div className="bg-gradient-to-b from-[#F7F7F7] to-[#EDE7FD] min-h-screen py-10 flex flex-col items-center">
            
            {/* Profile Picture Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-5xl mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Profile Picture</h2>
                <img
    className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
    src={formData.gender === "female"
        ? "https://i.pinimg.com/736x/f4/fa/fa/f4fafaf122d00f0775aa586b8a061d0b.jpg" // صورة الأنثى
        : "https://i.pinimg.com/736x/1a/5c/27/1a5c272b9fbd51bf655c44e1c5c2fb7f.jpg"} // صورة الذكر (الافتراضية)
    alt="Profile Picture"
/>
                <select
                    name="gender"
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            {/* Sections Grid */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                {/* Account Details */}
                <div className="bg-white shadow-lg rounded-lg p-6 min-h-[400px] flex flex-col justify-between">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Account Details</h2>
                    <hr />

                    <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
                        <div>
                            <div className="mt-4">
                                <label className="block text-gray-600 font-medium">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-600 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-600 font-medium">Date of Birth</label>
                                <input
                                    type="date"
                                    name="birthdate"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={formData.birthdate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-600 font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="mt-6 w-full bg-[#EC8305] hover:bg-[#d97305] text-white font-bold py-2 px-4 rounded">
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* Show Your Properties */}
                <div className="bg-white shadow-lg rounded-lg p-6 min-h-[400px] flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Show Your Properties</h2>
                    <hr />
                    {/* يمكنك إضافة محتوى هنا */}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
