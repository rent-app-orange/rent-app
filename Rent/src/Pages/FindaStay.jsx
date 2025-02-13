import axios from "axios";
import { useEffect, useState } from "react";

export default function FindStay() {
  const url =
    "https://rent-app-a210b-default-rtdb.firebaseio.com/student_housing.json";
  const [housingData, setHousingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        // Convert object data to array if needed
        const formattedData = data ? Object.values(data) : [];
        setHousingData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {housingData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-lg overflow-hidden bg-white"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              AVAILABLE
            </span>
            <span className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full">
              📅
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold">{item.location}</h2>
            <p className="text-gray-500">{item.name}</p>
            <p className="text-gray-400 text-sm">{item.description}</p>
            <p className="text-xl font-bold mt-2">${item.price}/night</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1 text-gray-700 font-semibold">4.96</span>
              <span className="ml-2 text-green-500">Guest favorite</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
