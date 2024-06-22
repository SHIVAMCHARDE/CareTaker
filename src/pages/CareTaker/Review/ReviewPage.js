import React from "react";
import { review } from "../../../Data/Data";
export const ReviewPage = () => {
  return (
    <>
      {/* reviews */}
      <div className="m-9">
        <div className="  w-auto p-1 bg-gray-300 text-4xl text-center rounded-lg ">
          Reviews
        </div>
        <div className="flex justify-between mt-4 mx-2">
            <h3 className="text-lg">Avg Rating: 4.33/5</h3>
            <h3 className="text-lg">Total Review: 6 </h3>
        </div>
        <div className="mt-6 grid gap gap-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {review.map((data, index) => (
            <ReviewCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

const ReviewCard = ({ data }) => {
  return (
    <>
      <div className="bg-gray-200 rounded-lg p-1 ">
        {/* img & text */}
        <div className="flex justify-between mb-1 ">
          <div className="flex flex-col items-center">
            <img
              src={data.picture_url}
              alt="user"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-2 mix-blend-color-burn"
            />
            <h4 className="text-lg">{data.user_name}</h4>
          </div>

          <div className="mx-4 mt-4">
            <h4 className="text-xl">{data.descp}</h4>
          </div>
        </div>
        {/* stars */}
        <div className="flex ms-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-6 h-6 ${
                index < data.stars ? "text-yellow-400" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </>
  );
};
