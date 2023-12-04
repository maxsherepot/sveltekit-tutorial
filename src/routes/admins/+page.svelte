<script>
    import SvelteTable from "svelte-table";
    import Switcher from "$lib/components/Switcher.svelte";
    import { getEnabledKeysfromObj } from "$lib/helpers/functions";
    import RightIcon from "../../lib/components/icons/RightIcon.svelte";
    import { goto } from "$app/navigation";

    export let data;
    const unknown = "-";
    const rows = data.admins;

    const columns = [
        {
            key: "name",
            title: "Admins",
            value: (v) =>
                `${
                    (v.profile.first_name || "") +
                    " " +
                    (v.profile.last_name || "")
                }` || unknown,
            sortable: true,
            headerClass: "text-left",
        },
        {
            key: "cipn",
            title: "<<Certified Integration Partner Name>> ID",
            value: (v) => v.profile.cipn || unknown,
            sortable: true,
            headerClass: "text-left",
        },
        {
            key: "channel_publish_rights",
            title: "Channel publish rights",
            value: (v) => v.channel_publish_rights,
            renderValue: (v) => getEnabledKeysfromObj(v.channel_publish_rights),
            headerClass: "text-left",
        },
        {
            key: "edit_rights",
            title: "Edit rights",
            value: (v) => v.admin_rights,
            renderComponent: {
                component: Switcher,
                props: {
                    column: "admin_rights",
                    key: "edit_rights",
                },
            },
            headerClass: "text-left",
        },
        {
            key: "edit_channels",
            title: "Edit Channels & Templates",
            value: (v) => v.admin_rights,
            renderComponent: {
                component: Switcher,
                props: {
                    column: "admin_rights",
                    key: "edit_channels",
                },
            },
            headerClass: "text-left",
        },
        {
            key: "edit_admin",
            title: "",
            renderComponent: {
                component: RightIcon,
            },
            headerClass: "text-left",
        },
    ];

    const onCellSelect = ({ detail }) => {
        const adminId = detail.row.id;
        if (detail.key === "edit_admin" && adminId) {
            goto(`admins/${adminId}`);
        }
    };
</script>

{#if rows.length}
    <SvelteTable
        {columns}
        {rows}
        classNameTable={"text-gray-600"}
        classNameThead={"text-gray-700 border-b-2"}
        classNameRow={"odd:bg-white even:bg-gray-100 border-b-2"}
        classNameCell={"p-4"}
        on:clickCell={onCellSelect}
    />
{:else}
    <span>No admins data</span>
{/if}
