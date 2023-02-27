<script>
  import iconStar from '../assets/icon-star.svg';
  export let submited;
  let active = null;
</script>

<div class="w-80 space-y-6 rounded-lg bg-gray-800 p-6 font-sans sm:w-96 sm:space-y-8 sm:p-8">
  <div class="text-light-grey grid h-10 w-10 place-items-center rounded-full bg-gray-700 sm:h-12 sm:w-12">
    <img src={iconStar} alt="" />
  </div>

  <h1 class="text-2xl font-bold sm:text-3xl">How did we do?</h1>

  <p class="text-xs text-gray-400 sm:text-sm">
    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
  </p>

  <div class="flex items-center justify-between">
    {#each [1, 2, 3, 4, 5] as i}
      <button
        class="h-10 w-10 rounded-full bg-gray-700 text-sm text-gray-400 hover:bg-orange-500 hover:text-white sm:h-12 sm:w-12 sm:text-base
        {i === active ? 'active' : null}"
        on:click={() => {
          active = i;
          localStorage.setItem('rated', String(i));
        }}>
        {i}
      </button>
    {/each}
  </div>

  <button
    class="w-full select-none rounded-full bg-orange-500 py-2 text-sm hover:bg-white hover:text-orange-500 sm:text-base"
    on:click={() => {
      localStorage.setItem('submited', 'true');
      submited = localStorage.getItem('submited') === 'true';
    }}>
    SUBMIT
  </button>
</div>

<style>
  .active {
    @apply bg-gray-500 text-white;
  }
</style>
