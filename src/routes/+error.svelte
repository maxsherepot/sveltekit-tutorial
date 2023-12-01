<script>
    import { page } from "$app/stores";
</script>

<h1 class="text-xl font-bold text-gray-800">Oh no, it's error!</h1>
<h1 class="text-xl text-gray-800">
    {#if $page.status === 404}
        This page doesn't exist
    {:else}
        {$page.error.message}
    {/if}
</h1>
<h1 class="text-xl text-gray-700">The status is: {$page.status}</h1>
