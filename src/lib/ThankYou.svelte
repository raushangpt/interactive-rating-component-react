<script>
  export let rate;
</script>

<div
  class="bg-dark-blue font-overpass flex max-w-xs select-none flex-col items-center gap-y-4 rounded-lg p-4 sm:max-w-sm sm:p-8">
  <!-- class="bg-dark-blue font-overpass h-96 w-96 max-w-xs select-none space-y-4 rounded-lg p-4 sm:max-w-sm sm:space-y-6 sm:p-8"> -->
  <img src="./images/illustration-thank-you.svg" alt="" />

  <span class="text-orange bg-medium-grey rounded-full py-2 px-4">
    You selected {rate} out of 5
  </span>

  <h1 class="text-center text-3xl text-white">Thank you!</h1>

  <p class="text-light-grey text-center">
    We appreciate you taking the time to give a rating. If you ever need more
    support, don’t hesitate to get in touch!
  </p>
</div>
