import { admins } from '$lib/dummyDB/admins';

export async function load({ params }) {
    try {
        const admin = admins.find(i => i.id == params.adminId)
        return { admin }
    } catch (error) {
        console.error(error);
    }
}
