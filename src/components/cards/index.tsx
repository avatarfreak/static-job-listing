import React from "react";
import { Description } from "./Description";
import { Designation } from "./Designation";
import { Tags } from "./Tags";
import { Logo } from "./Logo";
import { Company } from "./Company";

interface Props {
  logo: string;
  alt: string;
  company: string;
  news: boolean;
  feature: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  level: string;
  role: string;
  languages: Array<string>;
  tools: Array<string>;
}

const Card: React.FC<Props> = ({
  logo,
  alt,
  company,
  news,
  feature,
  position,
  postedAt,
  contract,
  location,
  level,
  role,
  languages,
  tools,
}) => {
  const tags = [role, level, ...languages, ...tools];
  return (
    <>
      {/*-- Item Start --*/}
      <div
        className={`relative border-l-8 rounded-lg bg-white shadow-lg p-5 space-y-3 min-h-[16.25rem] w-full lg:flex lg:items-center lg:justify-between lg:min-h-0 lg:gap-4 ${
          feature === true ? "border-pri-clr-100" : "border-white"
        } `}
      >
        <div className="space-y-4 lg:flex-shrink-0 md:flex md:justify-start md:items-center md:space-x-5">
          <Logo logo={logo} alt={alt} />
          <div className="space-y-2">
            <Company company={company} news={news} feature={feature} />
            <Designation position={position} />
            <Description
              postedAt={postedAt}
              contract={contract}
              location={location}
            />
          </div>
        </div>

        {/*-- Filtered tag --*/}
        <div>
          <Tags tags={tags} />
        </div>
      </div>
    </>
  );
};

export default Card;
