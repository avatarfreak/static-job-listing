import React from "react";

interface Props {
  postedAt: string;
  location: string;
  contract: string;
}

const Description: React.FC<Props> = ({ postedAt, contract, location }) => {
  return (
    <div className="flex justify-start space-x-2 items-center text-fs-700 font-medium text-clr-120 pb-2">
      <p>{postedAt}</p>
      <span className="">•</span>
      <p>{contract}</p>
      <span>•</span>
      <p>{location}</p>
    </div>
  );
};

export { Description };
