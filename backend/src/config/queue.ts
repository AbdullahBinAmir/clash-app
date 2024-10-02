import { ConnectionOptions, DefaultJobOptions } from "bullmq";

export const redisConnection: ConnectionOptions = {
    host:process.env.REDIS_HOST,
    port:13918,
    password:"xz05II5xYImkAvBeQ4Zk1dyDAzTio1VC"
}

export const defaultQueueOptions:DefaultJobOptions = {
    removeOnComplete:{
        count:20,
        age: 60 * 60
    },
    attempts:3,
    backoff:{
        type:'exponential',
        delay:1000
    }
}