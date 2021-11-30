import React from "react";

interface Props {
  company: string;
  news: boolean;
  feature: boolean;
}

const Company: React.FC<Props> = ({ company, news, feature }) => {
  return (
    <div className="flex items-center w-full space-x-5">
      <h1 className="text-fs-800 font-bold text-pri-clr-100">{company}</h1>

      <div className="text-fs-500 font-bold text-center text-white w-full flex space-x-3">
        {/* --- Dislay new if truty */}
        {news && (
          <h1 className="uppercase rounded-3xl bg-pri-clr-100 px-3 pt-2 pb-1">
            New!
          </h1>
        )}

        {/* --- Dislay feature if true --- */}
        {feature && (
          <h1 className="uppercase rounded-3xl bg-clr-130 px-3 pt-2 pb-1">
            Feature
          </h1>
        )}
      </div>
    </div>
  );
};

export { Company };
