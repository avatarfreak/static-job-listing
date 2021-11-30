import { Action } from "./constant";

type JobList = string;
type JobState = Array<string>;

export type JobAction =
  | { type: Action.addTag | Action.removeFilter; payload: { tag: JobList } }
  | { type: Action.clearAll };

// Reducer
const JobReducer = (state: JobState, action: JobAction): JobState => {
  switch (action.type) {
    case Action.addTag:
      const tag = action.payload.tag;
      return state.includes(tag) ? state : [...state, tag];

    case Action.removeFilter:
      return state.filter((tag) => tag !== action.payload.tag);

    case Action.clearAll:
      return [];

    default:
      return state;
  }
};

export { JobReducer };
