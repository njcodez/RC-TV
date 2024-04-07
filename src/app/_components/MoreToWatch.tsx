import React from 'react';

interface MoreToWatchCardProps {
  title: string;
  imageUrl: string;
  url: string;
}

const MoreToWatchCard: React.FC<MoreToWatchCardProps> = ({
  title,
  imageUrl,
  url,
}) => {
  return (
    <a href={url} className="group w-64 h-40 overflow-hidden rounded-lg mr-4 hover:scale-105 transition duration-300 flex-shrink-0">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="p-2 text-white bg-black bg-opacity-50">
        <h3 className="text-lg truncate">{title}</h3>
      </div>
    </a>
  );
};

export default MoreToWatchCard;
