const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const adviceBtn = document.querySelector('.dice-btn');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getAdvice() {
    adviceText.textContent = 'Loading...'
    await delay(500);
    try {
        const response = await fetch('https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}'{
                                    cache: "no-cache"
        });
        const data = await response.json();
        const { advice } = data.slip;

        adviceNumber.textContent = 'Advice #' + data.slip.id;
        adviceText.textContent = advice;
    } catch (error) {
        adviceText.textContent = 'Something went wrong';
    }
}

adviceBtn.addEventListener('click', getAdvice);
getAdvice();
