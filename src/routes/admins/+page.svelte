<script>
    import Table from "$lib/components/Table.svelte";
    import SvelteTable from "svelte-table";

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
            sortable: true,
            headerClass: "text-left",
        },
        {
            key: "edit_channels",
            title: "Edit Channels & Templates",
            value: (v) => v.edit_channels,
            sortable: true,
            headerClass: "text-left",
        },
    ];
</script>

<Table data={data.admins} isRowClickable />
<SvelteTable {columns} {rows} />
