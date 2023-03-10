import { useState } from 'react';
import Rating from './lib/Rating';
import ThankYou from './lib/ThankYou';

export default function App() {
    const [thankYou, setThankYou] = useState(false);
    const [ratings, setRatings] = useState(0);

    function updateThankYou() {
        setThankYou(true);
    }

    function updateRatings(r) {
        setRatings(r);
    }

    return (
        <main class="wfa grid h-screen place-items-center">
            {thankYou ? (
                <ThankYou ratings={ratings} />
            ) : (
                <Rating
                    ratings={ratings}
                    updateThankYou={updateThankYou}
                    updateRatings={updateRatings}
                />
            )}
        </main>
    );
}
