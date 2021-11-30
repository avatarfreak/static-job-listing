import dataJSON from "../data/data.json";

type JobType = typeof dataJSON[number];

// Jobs Array
export interface IJob {
   jobs: JobType[]
}


// Jobs Details
export interface IJobData {
   jobs: JobType
}
