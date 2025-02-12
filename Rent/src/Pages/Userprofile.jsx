import { useState, useEffect } from "react";
import { database } from "../Firebase/Configration";
import { ref, onValue, update, remove } from "firebase/database";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // استرداد بيانات المستخدم من Firebase
    const userRef = ref(database, "users/userId"); // استبدل userId بمعرف المستخدم الفعلي
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUser(data);
      }
    });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const userRef = ref(database, "users/userId"); // استبدل userId بمعرف المستخدم الفعلي
    update(userRef, user);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const userRef = ref(database, "users/userId"); // استبدل userId بمعرف المستخدم الفعلي
    remove(userRef);
    setUser({ name: "", email: "", phone: "" });
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <h2 className="text-xl font-bold">{user.name}</h2>
        </div>
        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {isEditing ? (
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : (
              <p>{user.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p>{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone number</label>
            {isEditing ? (
              <input
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : (
              <p>{user.phone ||"unavailable"}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
               Cancele
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;