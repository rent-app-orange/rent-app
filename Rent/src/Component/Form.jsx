import { getDatabase } from "firebase/database";

import { useState } from "react";

export default function PropertyList() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    images: [],
    video: null,
    thumbnail: null,
  });

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#091057" }}
        >
          Add New PropertyList
        </h2>

        <div className="space-y-4">
          <div className="col-span-2">
            <label
              className="block font-medium mb-1"
              style={{ color: "#091057" }}
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              //   onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              style={{ borderColor: "#EC8305" }}
            />
          </div>

          <div className="col-span-2">
            <label
              className="block font-medium mb-1"
              style={{ color: "#091057" }}
            >
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              //   onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              style={{ borderColor: "#EC8305" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label
              className="block font-medium mb-1"
              style={{ color: "#091057" }}
            >
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              //   onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              style={{ borderColor: "#EC8305" }}
            />
          </div>
          <div>
            <label
              className="block font-medium mb-1"
              style={{ color: "#091057" }}
            >
              Price *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              //   onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              style={{ borderColor: "#EC8305" }}
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            className="block font-medium mb-1"
            style={{ color: "#091057" }}
          >
            Upload Property Images *
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            // onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            style={{ borderColor: "#EC8305" }}
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-medium mb-1"
            style={{ color: "#091057" }}
          >
            Upload Video *
          </label>
          <input
            type="file"
            accept="video/*"
            // onChange={handleVideoChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            style={{ borderColor: "#EC8305" }}
          />
        </div>

        {/* Input for ownership document */}
        <div className="mt-4">
          <label
            className="block font-medium mb-1"
            style={{ color: "#091057" }}
          >
            Upload Ownership Document *
          </label>
          <input
            type="file"
            accept="image/*"
            // onChange={handleThumbnailChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            style={{ borderColor: "#EC8305" }}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#EC8305" }}
          >
            SUBMIT YOUR REQUEST
          </button>
        </div>
      </form>
    </div>
  );
}
