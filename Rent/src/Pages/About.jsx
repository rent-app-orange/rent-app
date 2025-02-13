import { useSelector } from "react-redux";

export default function ShowData() {
  // Accessing formData from the Redux store
  const formData = useSelector((state) => state.showData.formData);

  return (
    <>ddd</>
    // <div className="flex justify-center items-center min-h-screen p-6">
    //   <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
    //     <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
    //       Property Details
    //     </h2>

    //     {/* Display the entire formData in one card */}
    //     <div className="space-y-4">
    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">Name:</h3>
    //         <p className="text-lg text-gray-700">{formData.name}</p>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">Description:</h3>
    //         <p className="text-lg text-gray-700">{formData.description}</p>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">Location:</h3>
    //         <p className="text-lg text-gray-700">{formData.location}</p>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">Price:</h3>
    //         <p className="text-lg text-gray-700">${formData.price}</p>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">Availability:</h3>
    //         <p className="text-lg text-gray-700">{formData.availability}</p>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">Approval:</h3>
    //         <p className="text-lg text-gray-700">{formData.approve}</p>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-medium text-blue-700">
    //           Payment Status:
    //         </h3>
    //         <p className="text-lg text-gray-700">{formData.payment}</p>
    //       </div>

    //       {/* Displaying images if available */}
    //       {formData.images && (
    //         <div className="mt-4 flex justify-center">
    //           <img
    //             src={formData.images}
    //             alt="Property"
    //             className="w-full h-64 object-cover rounded-lg shadow-md"
    //           />
    //         </div>
    //       )}

    //       {/* Display thumbnail image */}
    //       {formData.thumbnail && (
    //         <div className="mt-4 flex justify-center">
    //           <img
    //             src={formData.thumbnail}
    //             alt="Thumbnail"
    //             className="w-32 h-32 object-cover rounded-lg shadow-md"
    //           />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
