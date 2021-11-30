import { Action } from "context/constant";
import { useJobSearch } from "hook/useJobSearch";
import React from "react";

interface Props {
  tags: Array<string>;
}

const Tags: React.FC<Props> = ({ tags }) => {
  const { dispatch } = useJobSearch();

  return (
    <div
      className="border-t-2 border-clr-120 text-fs-600 text-pri-clr-100 text-center flex flex-wrap  space-y-4
      lg:border-t-0  lg:space-y-0  lg:gap-y-4 lg:justify-end
      "
    >
      {/*--- Display all the keywords --*/}
      {tags.map((tag, idx) => (
        <button
          key={idx}
          onClick={() => dispatch({ type: Action.addTag, payload: { tag } })}
          className="font-bold p-2 bg-clr-110 rounded-md mr-4 mt-4 lg:mt-0 lg:hover:bg-pri-clr-100 lg:hover:text-white"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export { Tags };
