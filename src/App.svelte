<script>
  import Rating from './lib/Rating.svelte';
  import ThankYou from './lib/ThankYou.svelte';

  let submited = localStorage.getItem('submited') === 'true';
</script>

<div class="mx-auto grid h-screen w-screen max-w-[1440px] select-none place-items-center text-white">
  {#if !submited}
    <Rating bind:submited />
  {:else}
    <ThankYou bind:submited />
  {/if}
</div>

<style>
  :global(body) {
    @apply bg-gray-900;
  }
</style>
