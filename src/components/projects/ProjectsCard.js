import React from "react";

const ProjectsCard = ({ title, category, image, imageClass }) => {
  return (
    <div className="relative group rounded-lg shadow-cardShadow overflow-visible">
      {/* IMAGE */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className={`w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110 ${imageClass ?? ""}`}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <p className="text-xs text-designColor font-medium">{category}</p>
        <h3 className="text-sm font-semibold text-white mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectsCard;