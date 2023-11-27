import { admins } from '$lib/dummyDB/admins';

export async function load() {
    try {
        return { admins }
    } catch (error) {
        console.error(error);
    }
}
