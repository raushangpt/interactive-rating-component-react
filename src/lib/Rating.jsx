export default function Rating({ ratings, updateThankYou, updateRatings }) {
    return (
        <div class="bg-primary text-primary-content w-80 space-y-4 rounded-xl p-4 md:w-96 md:space-y-6 md:p-6">
            <div class="circle grid place-items-center">
                <svg class="fill-accent" width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" />
                </svg>
            </div>
            <h2 class="text-2xl font-bold text-white md:text-3xl">How did we do?</h2>
            <p class="text-sm md:text-base">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <div class="flex justify-between">
                <button
                    class={`circle ratingBtn ${ratings === 1 ? 'active' : ''}`}
                    onClick={() => updateRatings(1)}>
                    1
                </button>
                <button
                    class={`circle ratingBtn ${ratings === 2 ? 'active' : ''}`}
                    onClick={() => updateRatings(2)}>
                    2
                </button>
                <button
                    class={`circle ratingBtn ${ratings === 3 ? 'active' : ''}`}
                    onClick={() => updateRatings(3)}>
                    3
                </button>
                <button
                    class={`circle ratingBtn ${ratings === 4 ? 'active' : ''}`}
                    onClick={() => updateRatings(4)}>
                    4
                </button>
                <button
                    class={`circle ratingBtn ${ratings === 5 ? 'active' : ''}`}
                    onClick={() => updateRatings(5)}>
                    5
                </button>
            </div>
            <button
                class="bg-accent text-accent-content hover:bg-accent-focus w-full rounded-full py-2 uppercase tracking-widest active:scale-[.98] md:py-3"
                onClick={updateThankYou}>
                Submit
            </button>
        </div>
    );
}
