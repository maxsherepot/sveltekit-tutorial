import { admins } from '$lib/dummyDB/admins';
import { error } from '@sveltejs/kit';

export async function load() {
    try {
        return { admins }
    } catch (e) {
        throw error(420, 'Error loading admins');
    }
}
