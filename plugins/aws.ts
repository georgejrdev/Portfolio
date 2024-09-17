import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { Buffer } from "buffer";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const client = new LambdaClient({
        region: "sa-east-1",
        credentials: {
            accessKeyId: config.public.accessKey || "",
            secretAccessKey: config.public.secretKey || "",
        },
    });

    const getPosts = async (): Promise<[Post[] | null, string | null]> => {
        try {
            const params = {
                FunctionName: "getPosts",
                Payload: JSON.stringify({}),
            };

            const command = new InvokeCommand(params);
            const response = await client.send(command);

            const responseData = response.Payload
                ? JSON.parse(Buffer.from(response.Payload).toString())
                : {};

            const posts: Post[] = JSON.parse(responseData.body);

            return [posts, null];
        } 
        
        catch (err) {
            return [null, (err as Error).message];
        }
    };

    nuxtApp.provide('getPosts', getPosts);
});