import axios from "axios";
import { useEffect, useState } from "react";

export default function FindStay() {
  const url =
    "https://rent-app-a210b-default-rtdb.firebaseio.com/student_housing.json";
  const [housingData, setHousingData] = useState([]);
  const [filterType, setFilterType] = useState("all"); // حالة لتخزين نوع الفلتر

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        // تحويل البيانات إلى مصفوفة وتصفيتها بناءً على `approve`
        const formattedData = data
          ? Object.values(data).filter((item) => item.approve === true)
          : [];

        // تطبيق الفلترة بناءً على اسم الإقامة (شقة أو استوديو)
        const filteredData = formattedData.filter((item) => {
          if (filterType === "apartment") {
            return item.name.toLowerCase().includes("apartment"); // الفلترة حسب وجود كلمة "apartment" في الاسم
          } else if (filterType === "studio") {
            return item.name.toLowerCase().includes("studio"); // الفلترة حسب وجود كلمة "studio" في الاسم
          }
          return true; // إظهار جميع الإقامات إذا كان الفلتر هو "all"
        });

        setHousingData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filterType]); // التحديث عند تغيير الفلتر

  return (
    <div className="p-6">
      {/* إضافة قائمة منسدلة لاختيار نوع الإقامة */}
      <div className="mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="apartment">Apartment</option>
          <option value="studio">Studio</option>
        </select>
      </div>

      {/* عرض البيانات بعد التصفية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {housingData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <div className="relative">
              <img
                src={item.images || "https://via.placeholder.com/150"}
                alt={item.name || "No Name"}
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
              <h2 className="text-lg font-bold">
                {item.location || "No Location"}
              </h2>
              <p className="text-gray-500">{item.name || "No Name"}</p>
              <p className="text-gray-400 text-sm">
                {item.description || "No Description"}
              </p>
              <p className="text-xl font-bold mt-2">
                ${item.price || "N/A"}/night
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 text-gray-700 font-semibold">4.96</span>
                <span className="ml-2 text-green-500">Guest favorite</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
