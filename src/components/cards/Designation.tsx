import React from "react";

interface Props {
  position: string;
}

const Designation: React.FC<Props> = ({ position }) => {
  return (
    <h2 className="text-fs-900 text-clr-130 font-bold tracking-t-0 lg:hover:text-pri-clr-100">
      {position}
    </h2>
  );
};

export { Designation };
