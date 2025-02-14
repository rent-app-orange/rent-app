import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import vedio from "../assets/clock.png"
import calendarIcon from "../assets/clock.png";
import calendarIconAlt from "../assets/clock.png";
import heartFilledIcon from "../assets/clock.png"; // استبدل هذا بمسار الأيقونة



const PropertyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

    // تعريف حالة لتمثيل property
    const [property, setProperty] = useState({
      isBooked: false, // أو true بناءً على الحالة
    });


  const images = [
    "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
    "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
    "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg",
    "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
    "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
    "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg"
 
  ];

  const additionalImages = [
    { src: "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg", alt: "Kitchen" },
    { src: "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg", alt: "Bedroom" },
    { src: "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg", alt: "Living Room" },
 
 
 
  ];

  const [modalOpen, setModalOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [videoOpen, setVideoOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };


  const [isOpen, setIsOpen] = useState(false);

  
  const closeModal = () => {
    setModalOpen(false);
    setVideoOpen(false);
  };


  return (

    <div className="max-w-15xl mx-auto mt-16 flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden p-6 space-y-6 md:space-y-0 md:space-x-6">

    <div className="max-w-5xl mx-auto bg-white  shadow-lg rounded-2xl overflow-hidden p-4">
    <div className="md:flex">
  {/* الصورة الكبيرة */}
  <div className="md:w-2/3">
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[373px] rounded-lg overflow-hidden" // يمكنك تغيير 400px لأي قيمة مناسبة
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt="Property Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>


       {/* الفيديو والصور الجانبية */}
<div className="md:w-1/5 flex flex-col space-y-2 ml-2 mt-4 md:mt-0">
<div
      className={`relative border rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${
        isExpanded ? "w-full h-[400px]" : "w-full h-30"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <iframe
        className={`w-full ${isExpanded ? "h-full" : "h-30"} transition-all duration-300`}
        src={vedio}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
 {/* الصور الجانبية */}
 <div className="flex flex-col space-y-2">
            {/* صورة 360 درجة */}
            <div
              className="relative w-full h-[120px] bg-cover rounded-lg cursor-pointer hover:scale-105 transition-transform border shadow-md"
              style={{ backgroundImage: "url('https://source.unsplash.com/800x600/?livingroom')" }} // استبدل برابط صورة 360 الخاصة بك
              // onClick={() => openModal('https://source.unsplash.com/800x600/?livingroom')} // استبدل برابط الصورة 360 الخاصة بك
            >
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-2xl font-bold">
                360°
              </div>
            </div>

            {/* صورة مع عدد أكبر من الصور */}
            <div className="flex flex-col space-y-4">
      {/* الصورة التي تظهر كخلفية لمعرض الصور */}
      <div
        className="relative w-full h-[120px] bg-cover rounded-lg cursor-pointer hover:scale-105 transition-transform border shadow-md"
        style={{ backgroundImage: `url(${images[0]})` }} // الصورة الأولى كخلفية
        onClick={() => setIsOpen(true)} // عند النقر يفتح المعرض
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold rounded-lg">
    +{images.length - 1}
  </div>
</div>

      {/* نافذة المعرض (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-full h-auto">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <div className="grid grid-cols-2 gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-50 object-cover rounded-lg border shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
          </div>
        </div>
      </div>
     

      {/* أزرار الصور والفيديوهات */}
      <div className="flex gap-4 mt-2">
        <button className="flex items-center space-x-2 border rounded-lg px-3 py-2 hover:bg-orange-200 transition">
          <img src="https://img.icons8.com/material-outlined/24/000000/camera.png" alt="Photos" />
          <span className="text-gray-800">Photos</span>
        </button>
        <button className="flex items-center space-x-2 border rounded-lg px-3 py-2 hover:bg-orange-200 transition">
          <img src="https://img.icons8.com/material-outlined/24/000000/play.png" alt="Videos" />
          <span className="text-gray-800">Videos</span>
        </button>
        <button className="flex items-center space-x-2 border rounded-lg px-3 py-2 hover:bg-orange-200 transition">
          <img src="https://img.icons8.com/material-outlined/24/000000/cube.png" alt="3D Views" />
          <span className="text-gray-800">3D Views</span>
        </button>
        <button className="flex items-center space-x-2 border rounded-lg px-3 py-2 hover:bg-orange-200 transition">
          <img src="https://img.icons8.com/material-outlined/24/000000/map.png" alt="Map View" />
          <span className="text-gray-800">Map View</span>
        </button>
      </div>

      {/* معلومات العقار */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold">iQ Great Newton House, Liverpool</h2>
        <p className="text-gray-500 mt-2">Lower Gill St, Liverpool, UK</p>
        <div className="flex items-center mt-3 text-gray-600">
          <span className="mr-2">⭐ 4.9 (8 reviews)</span>
          <span className="ml-auto font-bold text-lg text-indigo-600">£143/week</span>
        </div>

        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-2">
            <img src="https://img.icons8.com/material-outlined/24/000000/marker.png" alt="Location" />
          </span>
          <span className="mr-1">1.0 mi from Liverpool</span>
          <span className="text-red-500 cursor-pointer">View map</span>
        </div>

        <div className="flex space-x-4 mt-2">
          <span className="bg-gray-200 px-2 py-1 rounded-full">Liverpool School Of Tropical Med...</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">University Of Liverpool | 0.31 Mi</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-700">
          <span className="bg-gray-200 px-2 py-1 rounded-full">Pay in Installments</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">Bills Included</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">No Visa No Pay</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">24/7 Staff Presence</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">Laundry Facility</span>
          <a href="#" style={{color:"orange",marginBottom:"15px" } }>View Details</a>
        </div>

      </div>


      {/* Modal لعرض الفيديو */}
      {videoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-2xl flex flex-col items-center">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/your-video-id"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={() => setVideoOpen(false)} className="absolute top-2 right-2 text-gray-800 text-3xl">&times;</button>
          </div>
        </div>
      )}
    </div>



  </div>
  );
};

export default PropertyCard ;
