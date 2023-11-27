<script>
    import Table from "$lib/components/Table.svelte";

    export let data;
</script>

<div class="grid md:grid-cols-2 gap-5">
    <div class="text-center">
        <div class="flex gap-5 mb-5">
            <a
                href="contentCreator"
                class="bg-neutral-700 flex-1 py-5 cursor-pointer hover:ring-2 text-white"
            >
                Content Creator
            </a>
            <a
                href="admins"
                class="bg-neutral-500 flex-1 py-5 cursor-pointer hover:ring-2 text-white"
            >
                Admins
            </a>
        </div>

        <a
            href="publications"
            class="block bg-neutral-400 mb-5 py-5 cursor-pointer hover:ring-2 text-white"
        >
            Publications
        </a>

        <div class="flex gap-5">
            <a
                href="chanels&templates"
                class="bg-neutral-200 w-2/3 py-5 cursor-pointer hover:ring-2 border"
            >
                Chanels & Templates
            </a>
            <a
                href="chatbox"
                class="bg-neutral-100 w-1/3 py-5 cursor-pointer hover:ring-2 border"
            >
                Chatbox
            </a>
        </div>
    </div>

    <div class="bg-neutral-200">
        <Table comments={data.comments} />
    </div>
</div>
