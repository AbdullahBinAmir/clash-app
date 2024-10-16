import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { sendEmail } from "../config/config.js";

export const emailQueueName = "emailQueue";

interface QueueJobDataType {
  to:string
  subject:string
  body:string
}

export const emailQueue = new Queue(emailQueueName, {
  connection: redisConnection,
  defaultJobOptions: defaultQueueOptions,
});

// *Worker

export const queueWorker = new Worker(
  emailQueueName,
  async (job: Job) => {
    const data:QueueJobDataType = job.data;
    await sendEmail(data.to,data.subject,data.body)
  },
  {
    connection: redisConnection,
  }
);
