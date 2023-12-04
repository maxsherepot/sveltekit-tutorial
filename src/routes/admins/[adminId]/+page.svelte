<script>
    import InfoIcon from "$lib/components/icons/InfoIcon.svelte";
    import CheckboxItem from "../../../lib/components/CheckboxItem.svelte";
    import GroupIcon from "../../../lib/components/icons/GroupIcon.svelte";

    export let data = [];
    const { admin } = data;
    console.log(data);
</script>

<h1 class="mb-8">Edit Admin</h1>

<div class="grid md:grid-cols-2 md:gap-6 gap-0">
    <div>
        <form>
            <h2 class="font-bold mb-2">Profile</h2>
            <div class="mb-5">
                <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900"
                    >Firstname</label
                >
                <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Firstname"
                    required
                />
            </div>
            <div class="mb-5">
                <label
                    for="last_name"
                    class="block text-sm font-medium text-gray-900"
                    >Lastname</label
                >
                <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Lastname"
                    required
                />
            </div>

            <label for="cipn" class="block text-sm font-medium text-gray-900"
                >Certified Integration Partner Name ID</label
            >
            <div class="flex mb-5">
                <input
                    type="text"
                    id="cipn"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-3"
                    placeholder="XX-XXXX"
                    required
                />
                <InfoIcon />
            </div>

            <div class="grid gap-5 mb-5 md:grid-cols-2">
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-900"
                        >E-mail</label
                    >
                    <input
                        type="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="email@email.com"
                        required
                    />
                </div>
                <div>
                    <label
                        for="phone"
                        class="block text-sm font-medium text-gray-900"
                        >Mobile</label
                    >
                    <input
                        type="tel"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="+45 12 34 56 78"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                    />
                </div>
            </div>

            <div class="grid gap-5 mb-5 md:grid-cols-3">
                <div>
                    <label
                        for="birthday"
                        class="block text-sm font-medium text-gray-900"
                        >Birthday</label
                    >
                    <input
                        type="date"
                        id="birthday"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="email@email.com"
                        required
                    />
                </div>
                <div>
                    <label
                        for="gender"
                        class="block text-sm font-medium text-gray-900"
                        >Gender</label
                    >
                    <input
                        type="select"
                        id="gender"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Gender"
                        required
                    />
                </div>
                <div>
                    <label
                        for="pronoun"
                        class="block text-sm font-medium text-gray-900"
                        >Pronoun</label
                    >
                    <input
                        type="pronoun"
                        id="pronoun"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Pronoun"
                        required
                    />
                </div>
            </div>
        </form>

        <h2 class="font-bold mb-2 my-5">Groups</h2>
        {#each admin.groups as group}
            <div class="border p-4 flex">
                <GroupIcon />
                {group}
            </div>
        {:else}
            <span>No groups</span>
        {/each}

        <h2 class="font-bold mb-2 my-5">Channel preferences (as a user)</h2>
        {#each Object.entries(admin.channel_preferences) as item}
            <div class="flex items-center">
                <CheckboxItem {item} />
            </div>
        {:else}
            <span>No channel preferences</span>
        {/each}
    </div>

    <div>
        <h2 class="font-bold mb-2 my-5 md:my-0">Admin rights</h2>
        {#each Object.entries(admin.admin_rights) as item}
            <CheckboxItem {item} />
        {:else}
            <span>No channel preferences</span>
        {/each}

        <h2 class="font-bold mb-2 my-5">Channel publish rights</h2>
        {#each Object.entries(admin.channel_publish_rights) as item}
            <div class="flex items-center">
                <CheckboxItem {item} />
            </div>
        {:else}
            <span>No channel preferences</span>
        {/each}
    </div>
</div>
