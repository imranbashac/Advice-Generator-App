const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const adviceBtn = document.querySelector('.dice-btn');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getAdvice() {
    adviceText.textContent = 'Loading...';
    await delay(500); // Optional delay for user experience
    try {
        // Add cache-control to bypass caching
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: "no-cache"
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
