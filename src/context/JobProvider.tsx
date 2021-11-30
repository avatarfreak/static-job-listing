import React from "react";
import { JobReducer } from "./JobReducer";
import { JobContext } from "./JobContext";

let initialValues = [];

const JobProvider: React.FC = ({ children }) => {
  const [tags, dispatch] = React.useReducer(JobReducer, initialValues);

  return (
    <JobContext.Provider value={{ tags, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};

export { JobProvider };
