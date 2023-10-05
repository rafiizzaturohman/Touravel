import React from "react";

interface DestinationListProps {
  image: string;
  name: string;
  location: string;
  type: string;
  cost: number;
  rating: string;
  description: string;
}

const DestinationCard: React.FC<DestinationListProps> = ({
  image,
  name,
  location,
  type,
  rating,
  cost,
  description,
}) => {
  return (
    <div className="container py-8 px-2">
      <div className="relative">
        <img src={`/images/destinationImg/${image}.png`} alt={image} />

        <div className="absolute z-0 -bottom-5">
          <div className="bg-gray-50/5 backdrop-blur-[5px] backdrop-filter p-4 rounded-lg border border-slate-800">
            <div className="capitalize text-white">
              <div className="flex flex-row items-center space-x-10">
                <div className="space-y-2">
                  <h4 className="bg-[#FE9432] text-sm p-1 ">{type}</h4>

                  <h4 className="font-semibold text-[#4A4A4A] text-sm">
                    {name}, {location}
                  </h4>
                </div>

                <h5 className="bg-[#1F4590] px-2 py-4 rounded-full text-xs">
                  ${cost}
                </h5>
              </div>
              <div>
                <div className="flex flex-row">
                  <h4 className="font-semibold text-sm">{rating}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
