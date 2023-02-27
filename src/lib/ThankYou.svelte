<script>
  import illustrationThankYou from '../assets/illustration-thank-you.svg';
  export let submited;
</script>

<div class="font-overpass relative flex w-80 flex-col items-center gap-y-6 rounded-lg bg-gray-800 p-6 sm:w-96 sm:gap-y-8 sm:p-8">
  <div>
    <img class="w-36" src={illustrationThankYou} alt="" />
  </div>

  <span class="rounded-full bg-gray-700 py-2 px-6 text-sm text-orange-500 sm:text-base">
    You selected {localStorage.getItem('rated')} out of 5
  </span>

  <h1 class="text-center text-2xl">Thank you!</h1>

  <p class="text-center text-xs text-gray-400 sm:text-sm">
    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
  </p>

  <button
    class="absolute top-0 right-2 active:scale-95"
    on:click={() => {
      submited = false;
    }}>
    <svg class="w-6 fill-gray-400" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
      <path
        d="M480 976q-75 0-140.5-28T225 871q-49-49-77-114.5T120 616h60q0 125 87.5 212.5T480 916q125 0 212.5-87.5T780 616q0-125-85-212.5T485 316h-23l73 73-41 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735 361q49 49 77 114.5T840 616q0 75-28 140.5T735 871q-49 49-114.5 77T480 976Z" />
    </svg>
  </button>
</div>
