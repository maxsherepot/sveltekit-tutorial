<script>
    import { goto } from "$app/navigation";

    export let data = [];
    export let isRowClickable = false;

    function onRowSelect(id) {
        if (isRowClickable) {
            goto(`admins/${id}`);
        }
    }
</script>

{#if data.length}
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    {#each Object.keys(data[0]) as columnHeading}
                        <th scope="col" class="px-6 py-3">{columnHeading}</th>
                    {/each}
                </tr>
            </thead>

            <tbody>
                {#each Object.values(data) as row}
                    <tr
                        class="odd:bg-white even:bg-gray-50 border-b"
                        on:click={() => onRowSelect(row.id)}
                    >
                        {#each Object.values(row) as cell}
                            <td
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                {cell}
                            </td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    <span>No data</span>
{/if}
