import { admins } from '$lib/dummyDB/admins';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const admin = admins.find(i => i.id == params.adminId);
        return { admin };
    } catch (e) {
        throw error(420, 'Error loading admin');
    }
}
