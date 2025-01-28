const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const adviceBtn = document.querySelector('.dice-btn');

async function getAdvice() {
    adviceText.textContent = 'Loading...';

    try {
        const response = await fetch(`https://api.adviceslip.com/advice?random=${Math.random()}`, {
    method: 'GET',
    headers: {
        'Cache-Control': 'no-cache',
    },
});

        const data = await response.json();
        const { advice } = data.slip;

        adviceNumber.textContent = 'Advice #' + data.slip.id;
        adviceText.textContent = advice;
    } catch (error) {
        adviceText.textContent = 'Something went wrong';
        console.error('Error:', error);
    }
}



adviceBtn.addEventListener('click', getAdvice);
getAdvice();
