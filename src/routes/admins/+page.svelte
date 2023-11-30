<script>
    import SvelteTable from "svelte-table";
    import Switcher from "$lib/components/Switcher.svelte";

    export let data;

    const rows = data.admins;

    const columns = [
        {
            key: "name",
            title: "Admins",
            value: (v) => v.name,
            sortable: true,
            headerClass: "text-left",
        },
        {
            key: "cipn",
            title: "<<Certified Integration Partner Name>> ID",
            value: (v) => v.cipn,
            sortable: true,
            headerClass: "text-left",
        },
        {
            key: "channel_publish_rights",
            title: "Channel publish rights",
            value: (v) => v.channel_publish_rights,
            sortable: true,
            headerClass: "text-left",
        },
        {
            key: "edit_rights",
            title: "Edit rights",
            value: (v) => v.edit_rights,
            renderComponent: {
                component: Switcher,
                props: {
                    key: "edit_rights",
                },
            },
            headerClass: "text-left",
        },
        {
            key: "edit_channels",
            title: "Edit Channels & Templates",
            value: (v) => v.edit_channels,
            renderComponent: {
                component: Switcher,
                props: {
                    key: "edit_channels",
                },
            },
            headerClass: "text-left",
        },
    ];
</script>

{#if rows.length}
    <SvelteTable
        {columns}
        {rows}
        classNameTable={"text-gray-600"}
        classNameThead={"text-gray-700 border-b-2"}
        classNameRow={"odd:bg-white even:bg-gray-100 border-b-2"}
        classNameCell={"p-4"}
    />
{:else}
    <h1>No admins data</h1>
{/if}
