import React from "react";

interface EmployeeCardProps {
  name: string;
  position: string;
  imageUrl: string;
  url?: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  position,
  imageUrl,
  url,
}) => {
  return (
    <a
      href={url}
      className="relative w-48 h-64 bg-white bg-opacity-25 rounded-lg shadow-md mb-8 overflow-hidden hover:shadow-lg hover:scale-105 transition duration-200 "
      style={{ margin: "0 auto", marginBottom: "24px" }}
    >
      <div className="w-full h-24 flex justify-center items-center overflow-hidden rounded-full mx-auto mt-4 backdrop-filter backdrop-blur-lg bg-opacity-75 ">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover rounded-full "
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center p-4 backdrop-filter backdrop-blur-lg bg-opacity-75">
        <h4 className="text-lg font-bold mb-2 text-white">{name}</h4>
        <p className="text-gray-100">{position}</p>
      </div>
    </a>
  );
};

export default EmployeeCard;
