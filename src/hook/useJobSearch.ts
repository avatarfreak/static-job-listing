import React from "react";
import { JobContext } from "context/JobContext";
import dataJSON from "../data/data.json";

const useJobSearch = () => {
  const { dispatch, tags } = React.useContext(JobContext);

  // Return data filter by tags
  const jobs = dataJSON.filter((job) =>
    tags.every(
      (tag) =>
        job.level === tag ||
        job.role === tag ||
        job.languages.includes(tag) ||
        job.tools.includes(tag)
    )
  );

  return {
    jobs,
    dispatch,
    tags,
  };
};

export { useJobSearch };
