
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaBed, FaCheckCircle, FaTag, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import calendarIcon from "../assets/calendar.png";
import calendarIconAlt from "../assets/diskette (1).png";



  const universities = [
    { 
        name: 'الجامعة الأردنية', 
        logo: 'https://9afi.com/thumb/360x210/storage/blogs/9vqBnykrGUtKZhVY5BAg4PoEJS6jsx3XzKo8MeRV.png', 
        src: 'https://www.booking.com/hotel/jo/amman-west-apartments.ar.html' 
    },
    { 
        name: 'جامعة الأميرة سمية للتكنولوجيا', 
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouO-45bF95FjOEx4RFaZek5ubrRAKenzh5vYwIh4oGBu2fy4K46DAyeXUdEjfFVY7700&usqp=CAU', 
    },
    { 
      name: 'جامعة الهاشمية  ', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXJCb_t4c-riOfF2GfOvOrEL0sbSePC6owqWt112d6UbQojSlPy_Y3zLCdLiYbh36sl8&usqp=CAU', 
  },
    { 
        name: 'جامعة البلقاء التطبيقية', 
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORbI7WbEf6dw82jLFf_aIGm9ZW-g4EkAoEg&s', 
    },
    { 
        name: 'جامعة اليرموك', 
        logo: 'https://www.mohe.gov.jo/ebv4.0/root_storage/ar/eb_list_page/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%8A%D8%B1%D9%85%D9%88%D9%83-1.jpg', 
    },
    { 
        name: 'جامعة العلوم والتكنولوجيا الأردنية', 
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_HWAly-yqWL-14fQFbbj2LnP_HSdxg2nrw&sg', 
    },
    { 
        name: 'جامعة الزيتونة الأردنية', 
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR-1o5Di8nEfo1nGIjQ223wO25ozHhqDjtA&s', 
    },
    { 
        name: 'جامعة مؤتة', 
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnJ5XLNW1AD9-tBhfazUWphw7-pFNzSURew&s', 
    },
    { 
        name: 'جامعة الحسين بن طلال', 
        logo: 'https://9afi.com/thumb/1130x636/storage/blogs/8bwQ4savP1Du4iRNIj8yxAD11URrIwGNwMwOPQIi.png'    },
    { 
      name: 'الجامعة الأردنية', 
      logo: 'https://9afi.com/thumb/360x210/storage/blogs/9vqBnykrGUtKZhVY5BAg4PoEJS6jsx3XzKo8MeRV.png', 
  },
  { 
      name: 'جامعة الأميرة سمية للتكنولوجيا', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouO-45bF95FjOEx4RFaZek5ubrRAKenzh5vYwIh4oGBu2fy4K46DAyeXUdEjfFVY7700&usqp=CAU', 
  },
  { 
    name: 'جامعة الهاشمية  ', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXJCb_t4c-riOfF2GfOvOrEL0sbSePC6owqWt112d6UbQojSlPy_Y3zLCdLiYbh36sl8&usqp=CAU', 
},
  { 
      name: 'جامعة البلقاء التطبيقية', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORbI7WbEf6dw82jLFf_aIGm9ZW-g4EkAoEg&s', 
  },
  { 
      name: 'جامعة اليرموك', 
      logo: 'https://www.mohe.gov.jo/ebv4.0/root_storage/ar/eb_list_page/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%8A%D8%B1%D9%85%D9%88%D9%83-1.jpg', 
  }

];

// const images = [
//   "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
//   "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
//   "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg"
// ];

const properties = [
  {
    id: 1,
    location: "København, Denmark",
    host: "Stay with Ole - Consultant",
    date: "Feb 19 - 24",
    price: 250,
    rating: 4.96,
    isBooked: false,
    images: [
     "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
  "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
  "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg"
    ],
  },
  {
    id: 2,
    location: "Amsterdam, Netherlands",
    host: "Stay with Eva - Consultant",
    date: "Mar 1 - 5",
    price: 300,
    rating: 4.8,
    isBooked: true,
    images: [
     "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
  "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
  "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg"
    ],
  },
  {
    id: 2,
    location: "Amsterdam, Netherlands",
    host: "Stay with Eva - Consultant",
    date: "Mar 1 - 5",
    price: 300,
    rating: 4.8,
    isBooked: true,
    images: [
     "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
  "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
  "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg"
    ],
  },
  {
    id: 4,
    location: "Amsterdam, Netherlands",
    host: "Stay with Eva - Consultant",
    date: "Mar 1 - 5",
    price: 300,
    rating: 4.8,
    isBooked: true,
    images: [
     "https://i.pinimg.com/236x/42/68/7e/42687ecaff8894e645787675b75790aa.jpg",
  "https://i.pinimg.com/236x/99/fb/9f/99fb9f77d93878dcf4dc7eccd2056aba.jpg",
  "https://i.pinimg.com/236x/a7/b6/76/a7b6760d51e44fc301c8dfc081abd818.jpg"
    ],
  },
  // أضف المزيد من العقارات كما تريد
];



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isBooked = true; // غيّر هذه القيمة إلى false إذا كان العقار متاحًا



  // حالة الصور لكل بطاقة
  const [currentIndices, setCurrentIndices] = useState(Array(properties.length).fill(0));

  const nextSlide = (index) => {
    setCurrentIndices((prev) =>
      prev.map((currentIndex, i) => (i === index ? (currentIndex + 1) % properties[i].images.length : currentIndex))
    );
  };

  const prevSlide = (index) => {
    setCurrentIndices((prev) =>
      prev.map((currentIndex, i) => (i === index ? (currentIndex - 1 + properties[i].images.length) % properties[i].images.length : currentIndex))
    );
  };




  return (
    <>
 {/*  hero section strat */}
 <section className="relative flex flex-col items-center justify-center bg-[#F7F7F7] py-16">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-6xl px-6">
                
                {/* Left Side (Text) */}
                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-[#091057] leading-tight">
                        Find, Explore & <span className="text-[#EC8305]">Book Your Perfect Room!</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Discover a variety of student housing options near universities and workplaces.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center bg- bg-white shadow-lg rounded-lg p-3">
                        <input
                            type="text"
                            placeholder="Search by city, university, or property"
                            className="w-full p-3 border-none focus:outline-none"
                        />
                        <button className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center bg-[#EC8305] text-white px-5 py-3 rounded-lg hover:bg-[#d97305] transition duration-200">
                            <FaSearch className="mr-2" /> Search
                        </button>
                    </div>
                </div>

                {/* Right Side (Image with Animation) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-md md:max-w-lg"
                >
                    <img 
                        src="https://cdn.pixabay.com/photo/2024/03/29/17/43/ai-generated-8663299_1280.png" 
                        alt="Student Accommodation"
                        className="rounded-lg shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
                {[
                    { title: "10+ Years", subtitle: "In Business" },
                    { title: "2M+", subtitle: "Beds Available" },
                    { title: "1,000+", subtitle: "Universities" },
                    { title: "400+", subtitle: "Cities" }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white shadow-lg rounded-lg p-6 text-center"
                    >
                        <h3 className="text-3xl font-bold text-[#091057]">{item.title}</h3>
                        <p className="text-gray-700">{item.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </section>
 {/*  hero section end */}







 {/*  Cards Section Start */}
<h2 className="text-4xl font-bold text-[#091057] mb-6 text-center tracking-wide ">
  ✨ Student Accommodation Students Love in Jordan ✨
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[90%]">
  {properties.map((property, index) => (
    <div key={property.id} className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 h-[550px]">
      <div className="relative">
        <div className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white uppercase rounded-lg ${property.isBooked ? "bg-red-500" : "bg-green-500"} bg-opacity-90 shadow-md`}>
          {property.isBooked ? "Booked" : "Available"}
        </div>

        <img
          src={property.images[currentIndices[index]]}
          alt="Property"
          className="w-full h-[300px] object-cover transition-opacity duration-500"
        />

        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 p-2 rounded-full hover:bg-opacity-100"
          onClick={() => prevSlide(index)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 p-2 rounded-full hover:bg-opacity-100"
          onClick={() => nextSlide(index)}
        >
          <ChevronRight size={24} />
        </button>

        <button className="absolute top-4 right-4 bg-white  rounded-full p-2 shadow-md">
          <img src={property.isBooked ? calendarIcon : calendarIconAlt} alt="Calendar Icon" className="w-6 h-6" />
        </button>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {property.images.map((_, imgIndex) => (
            <button
              key={imgIndex}
              onClick={() => setCurrentIndices((prev) => prev.map((currentIndex, i) => (i === index ? imgIndex : currentIndex)))}
              className={`w-3 h-3 rounded-full transition-all ${currentIndices[index] === imgIndex ? "bg-white" : "bg-gray-400 opacity-50"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.location}</h3>
        <p className="text-gray-600">{property.host}</p>
        <p className="mt-2 text-gray-800 text-sm">{property.date}</p>
        <p className="mt-4 text-xl font-bold">${property.price}/night</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐ {property.rating}</span>
          <span className="ml-2 text-green-500">Guest favorite</span>
        </div>
      </div>
    </div>
  ))}
</div>
{/*  Cards Section End */}



 {/*  ACCOMMODATION way section end */}

 <section className="container mx-auto my-12 px-6 text-center">
            <h2 className="text-3xl font-extrabold text-[#091057] mb-2">HabiRent – Find Your Ideal Student & Professional Housing in Jordan</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Looking for a <span className="font-semibold text-[#EC8305]">comfortable and convenient</span> place to stay near your <span className="font-semibold text-[#091057]">university or workplace</span>?  
                HabiRent offers <span className="font-semibold text-[#EC8305]">verified accommodations</span> across Jordan, ensuring <span className="font-semibold text-[#091057]">affordable, safe, and hassle-free housing</span> for students and professionals.  
                <span className="text-[#EC8305] font-bold">Book with confidence today!</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Floor Plan & Room Details */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#EC8305] text-white rounded-full mx-auto mb-4">
                        <FaBed size={30} />
                    </div>
                    <h3 className="font-semibold text-[#EC8305] text-lg">Floor Plan & Room Details</h3>
                    <p className="text-gray-600 mt-2">Get to know room number, orientation for floor plans, and roommates.</p>
                </div>

                {/* 100% Verified Properties */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#EC8305] text-white rounded-full mx-auto mb-4">
                        <FaCheckCircle size={30} />
                    </div>
                    <h3 className="font-semibold text-[#EC8305] text-lg">100% Verified Properties</h3>
                    <p className="text-gray-600 mt-2">Verified for a safe stay.</p>
                </div>

                {/* Price-Match Guarantee */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#EC8305] text-white rounded-full mx-auto mb-4">
                        <FaTag size={30} />
                    </div>
                    <h3 className="font-semibold text-[#EC8305] text-lg">Price-Match Guarantee</h3>
                    <p className="text-gray-600 mt-2">Find a lower price and we will match it.</p>
                </div>

                {/* 1-on-1 Professional Support */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#EC8305] text-white rounded-full mx-auto mb-4">
                        <FaHeadset size={30} />
                    </div>
                    <h3 className="font-semibold text-[#EC8305] text-lg">1-on-1 Professional Support</h3>
                    <p className="text-gray-600 mt-2">Just one call away, we’ll be there for you around the clock.</p>
                </div>
            </div>
        </section>
 
 {/*  ACCOMMODATION way section end */}




 {/*  Cards Section Start */}
 <h2 className="text-4xl font-bold text-[#091057] mb-6 text-center tracking-wide ">
  ✨💼 Stylish & Budget-Friendly Student Apartments
  ✨
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[90%]">
  {properties.map((property, index) => (
    <div key={property.id} className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 h-[550px]">
      <div className="relative">
        <div className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white uppercase rounded-lg ${property.isBooked ? "bg-red-500" : "bg-green-500"} bg-opacity-90 shadow-md`}>
          {property.isBooked ? "Booked" : "Available"}
        </div>

        <img
          src={property.images[currentIndices[index]]}
          alt="Property"
          className="w-full h-[300px] object-cover transition-opacity duration-500"
        />

        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 p-2 rounded-full hover:bg-opacity-100"
          onClick={() => prevSlide(index)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 p-2 rounded-full hover:bg-opacity-100"
          onClick={() => nextSlide(index)}
        >
          <ChevronRight size={24} />
        </button>

        <button className="absolute top-4 right-4 bg- bg-white rounded-full p-2 shadow-md">
          <img src={property.isBooked ? calendarIcon : calendarIconAlt} alt="Calendar Icon" className="w-6 h-6" />
        </button>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {property.images.map((_, imgIndex) => (
            <button
              key={imgIndex}
              onClick={() => setCurrentIndices((prev) => prev.map((currentIndex, i) => (i === index ? imgIndex : currentIndex)))}
              className={`w-3 h-3 rounded-full transition-all ${currentIndices[index] === imgIndex ? "bg-white" : "bg-gray-400 opacity-50"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.location}</h3>
        <p className="text-gray-600">{property.host}</p>
        <p className="mt-2 text-gray-800 text-sm">{property.date}</p>
        <p className="mt-4 text-xl font-bold">${property.price}/night</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐ {property.rating}</span>
          <span className="ml-2 text-green-500">Guest favorite</span>
        </div>
      </div>
    </div>
  ))}
</div>
{/*  Cards Section End */}














{/*   way to rent house  */}

<section className="bg-gradient-to-b from-[#F7F7F7] to-[#091057] py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#091057] mb-12">How to Rent a Home</h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      
      {/* Step 1 */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-80 text-center transition-transform transform hover:scale-105">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-[#5C6BC0] text-white text-xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-md">
          1
        </div>
        <div className="text-[#5C6BC0] text-5xl mb-4">🌍</div>
        <h3 className="text-2xl font-semibold text-[#091057]">Explore Your City</h3>
        <p className="mt-3 text-gray-600">Find the best accommodations near your university or workplace.</p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-80 text-center transition-transform transform hover:scale-105">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-[#5C6BC0] text-white text-xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-md">
          2
        </div>
        <div className="text-[#5C6BC0] text-5xl mb-4">📝</div>
        <h3 className="text-2xl font-semibold text-[#091057]">Submit Your Application</h3>
        <p className="mt-3 text-gray-600">Apply for properties that match your needs, and we’ll guide you through the process.</p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-80 text-center transition-transform transform hover:scale-105">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-[#5C6BC0] text-white text-xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-md">
          3
        </div>
        <div className="text-[#5C6BC0] text-5xl mb-4">🏡</div>
        <h3 className="text-2xl font-semibold text-[#091057]">Confirm Your Booking</h3>
        <p className="mt-3 text-gray-600">Sign the lease and make your payment to secure your new home!</p>
      </div>
    </div>

    <div className="mt-12">
      <a href="#" className="bg-[#EC8305] text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-[#d97305] transition duration-300 shadow-lg transform hover:scale-105">
        Start Now
      </a>
    </div>
  </div>
</section>

{/*   way to rent house  */}




{/* final scroll section  */}

<div className="relative bg-[#091057] py-12 overflow-hidden">
  <h2 className="text-center text-3xl font-bold text-white mb-6 tracking-wide">
    University Partners
  </h2>
  <div className="overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {universities.map((university, index) => (
        <div key={index} className="mx-8 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg flex items-center justify-center">
          <img src={university.logo} alt={university.name} className="h-16 transition-transform hover:scale-110 duration-300" />
        </div>
      ))}
    </div>
  </div>
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      display: flex;
      animation: marquee 20s linear infinite;
      width: max-content;
    }
  `}</style>
</div>


{/* final scroll section  */}










  </>
  );
};

export default Home;



