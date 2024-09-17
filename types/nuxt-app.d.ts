import { Post } from '~/utils/posts';

declare module '#app' {
    interface NuxtApp {
        $getPosts: () => Promise<[Post[] | null, string | null]>;
    }
}