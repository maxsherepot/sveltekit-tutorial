<script>
    export let comments = [];

  //  console.log(comments);
</script>

{#if comments.length}
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    {#each Object.keys(comments[0]) as columnHeading}
                        <th scope="col" class="px-6 py-3">{columnHeading}</th>
                    {/each}
                </tr>
            </thead>

            <tbody>
                {#each Object.values(comments) as row}
                    <tr
                        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                        {#each Object.values(row) as cell}
                        <td
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                                {cell}
                            </td>
                        {/each}
                    </tr>
                {/each}

                <!-- <tr
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4"> Silver </td>
                    <td class="px-6 py-4"> Laptop </td>
                    <td class="px-6 py-4"> $2999 </td>
                    <td class="px-6 py-4">
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr>

                <tr
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4"> White </td>
                    <td class="px-6 py-4"> Laptop PC </td>
                    <td class="px-6 py-4"> $1999 </td>
                    <td class="px-6 py-4">
                        <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
{:else}
    <h1>No tasks to do</h1>
{/if}
