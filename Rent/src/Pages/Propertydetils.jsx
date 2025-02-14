// // import React from 'react';
// // import Amenities from '../Component/Amenities';
// // import PropertyCard from '../Component/PropertyCard';
// // import DateRangePicker from "../Component/DateRangePicker";
// // import MapComponent from "../Component/MapComponent";

// // function PropertyDetails() {
// //   return (
// //     <div className="m-6"> {/* Margin من جميع الاتجاهات */}
// //       <PropertyCard />
// //       <Amenities  className="m-12"/>
// //       <DateRangePicker/>
// //       <MapComponent />
// //     </div>
// //   );
// // }

// // export default PropertyDetails;



// // import React from 'react';
// // import Amenities from '../Component/Amenities';
// // import PropertyCard from '../Component/PropertyCard';
// // import DateRangePicker from "../Component/DateRangePicker";
// // import MapComponent from "../Component/MapComponent";
// // import OffersList from "../Component/OffersList";


// // function PropertyDetails() {
// //   return (
// //     <div className="container mx-auto px-4 py-8 space-y-8">
// //       <PropertyCard />
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //         <Amenities />
// //         <DateRangePicker />
// //         <OffersList/>

// //       </div>
// //       <MapComponent />

 
// //     </div>
// //   );
// // }

// // export default PropertyDetails;
// import React from 'react';
// import PropertyCard from '../Component/PropertyCard';
// import Amenities from '../Component/Amenities';
// import DateRangePicker from "../Component/DateRangePicker";
// import OffersList from "../Component/OffersList";
// import MapComponent from "../Component/MapComponent";


// function PropertyDetails() {
//   return (
//     <div className="container mx-auto px-6 py-10 space-y-12 bg-gray-50 rounded-2xl shadow-lg">
      
//       {/* بطاقة العقار */}
//       <section>
//         <PropertyCard />
//       </section>

//       {/* الشبكة لعرض المرافق والتاريخ والعروض */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <section >
//           <Amenities />
//         </section>
//         <section className="bg-white p-6 rounded-2xl shadow-md">
//           <DateRangePicker />
//         </section>
//       </div>

//       {/* قسم العروض */}
//       <section >
//         <OffersList />
//       </section>

//       {/* خريطة الموقع */}
//       <section className="bg-white p-6 rounded-2xl shadow-md">
//         <MapComponent />
//       </section>
    
//     </div>

    
//   );
// }

// export default PropertyDetails;
import React from 'react';
import PropertyCard from '../Component/PropertyCard';
import Amenities from '../Component/Amenities';
import DateRangePicker from "../Component/DateRangePicker";
import OffersList from "../Component/OffersList";
import MapComponent from "../Component/MapComponent";
import PropertyBooking from "../Component/PropertyBooking";

function PropertyDetails() {
  return (
    <div className="flex">
      {/* المحتوى المتحرك على الشمال مع هامش منطقي */}
      <main className="w-[70%] ml-6 px-6 py-10 space-y-6 bg-gray-50 rounded-2xl shadow-lg overflow-y-auto">
        <section className="bg-white p-4 rounded-xl shadow-md">
          <PropertyCard />
        </section>
        <section className="bg-white p-4 rounded-xl shadow-md">
          <Amenities />
        </section>
        {/* DateRangePicker و OffersList بجانب بعض */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="bg-white p-4 rounded-xl shadow-md">
            <OffersList />
          </section>
          <section className="bg-white p-4 rounded-xl shadow-md">
            <DateRangePicker />
          </section>
         
        </div>
        <section className="bg-white p-4 rounded-xl shadow-md">
          <MapComponent />
        </section>
      </main>

      {/* الشريط الجانبي الثابت على اليمين مع هامش */}
      <aside className="w-[25%] 6 px-6 py-25 mr-6 h-[calc(150vh-10px)] p-4 fixed right-0 top-[0px] overflow-y-auto">
<PropertyBooking/>
      </aside>
    </div>
  );
}

export default PropertyDetails;
