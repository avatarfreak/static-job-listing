import React from "react";
import { JobAction } from "./JobReducer";

interface IJobContext {
  tags: Array<string>;
  dispatch: React.Dispatch<JobAction>;
}

export const JobContext = React.createContext<IJobContext>({
  tags: [],
  dispatch: () => {},
});
