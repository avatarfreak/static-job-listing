import React from "react";
import Card from "components/cards";
import { FilterTags } from "components/filterTag";
import { useJobSearch } from "hook/useJobSearch";

const Home = () => {
  const { jobs } = useJobSearch();

  return (
    <main className="px-6 m-auto md:px-20 lg:px-40 max-w-[90rem]">
      {/* --- Header FilterTag ---*/}
      <div className="-mt-8 px-4">
        <FilterTags />
      </div>

      {/* ---Job Details ---*/}
      <div className="p-6 space-y-16 mt-8 pt-14 md:pt-16 md:py-8 lg:py-[4.5rem]">
        {jobs.map((job) => {
          return (
            <Card
              key={job.id}
              logo={job.logo}
              alt={job.company}
              company={job.company}
              news={job.new}
              feature={job.featured}
              role={job.role}
              level={job.level}
              tools={job.tools}
              languages={job.languages}
              contract={job.contract}
              location={job.location}
              position={job.position}
              postedAt={job.postedAt}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
