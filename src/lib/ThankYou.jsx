import illustration from '../assets/illustration-thank-you.svg';

export default function ThankYou({ ratings }) {
    return (
        <div class="bg-primary text-primary-content w-80 space-y-4 rounded-xl p-4 md:w-96 md:space-y-6 md:p-6">
            <div class="mx-auto w-fit">
                <img src={illustration} alt="" />
            </div>
            <div class="bg-secondary text-accent mx-auto w-fit rounded-full py-2 px-8">
                You selected <span>{ratings}</span> out of 5
            </div>
            <h2 class="text-center text-2xl font-bold text-white md:text-3xl">Thank you!</h2>
            <p class="text-center text-sm md:text-base">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </div>
    );
}
