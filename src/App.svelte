<script>
  import Rating from './lib/Rating.svelte';
  import ThankYou from './lib/ThankYou.svelte';

  let submit = false;
  let rate = 0;
</script>

<div class="bg-very-dark-blue grid h-screen w-screen place-items-center">
  {#if !submit}
    <Rating bind:submit bind:rate />
  {:else}
    <ThankYou {rate} />
  {/if}
</div>
