<!-- TODO Add image and correct title  -->
<script>
    export let item;
</script>

<div class="flex w-full justify-between items-center border-y-2 p-4">
    <label for={item[0]}>{item[0]}</label>
    <input
        id={item[0]}
        type="checkbox"
        checked={item[1]}
        value=""
        name="bordered-checkbox"
        class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-5"
    />
</div>
