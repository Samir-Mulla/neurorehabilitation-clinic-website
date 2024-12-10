import React from 'react';

const CategoryButton = ({ category }) => {
  return (
    <span className="inline-block bg-[#81E5FB] text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
      {category}
    </span>
  );
};

export default CategoryButton;
