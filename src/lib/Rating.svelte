<script>
  let active = null;
  export let submit, rate;
</script>

<div
  class="bg-dark-blue font-overpass max-w-xs select-none space-y-4 rounded-lg p-4 sm:max-w-sm sm:space-y-6 sm:p-8">
  <span
    class="bg-medium-grey text-light-grey grid h-12 w-12 place-items-center rounded-full">
    <img src="./images/icon-star.svg" alt="" />
  </span>

  <h1 class="text-2xl font-bold text-white">How did we do?</h1>

  <p class="text-light-grey text-sm">
    Please let us know how we did with your support request. All feedback is
    appreciated to help us improve our offering!
  </p>

  <div class="flex items-center justify-between">
    {#each [1, 2, 3, 4, 5] as number}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        class="bg-medium-grey text-light-grey hover:bg-orange grid h-12 w-12 cursor-pointer place-items-center rounded-full hover:text-white
            {number === active ? 'active' : ''}"
        on:click={() => {
          active = number;
          rate = number;
        }}>
        {number}
      </span>
    {/each}
  </div>

  <button
    class="bg-orange hover:text-orange w-full rounded-full py-2 uppercase text-white hover:bg-white"
    on:click={() => (submit = true)}>
    Submit
  </button>
</div>

<style>
  .active {
    @apply bg-light-grey text-white;
  }
</style>
