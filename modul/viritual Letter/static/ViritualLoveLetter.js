
    function renderLetters() {
        const lettersContainer = document.getElementById('letters');
        lettersContainer.innerHTML = '';
        const letters = JSON.parse(localStorage.getItem('letters') || '[]');

        letters.forEach((letter, index) => {
            const letterDiv = document.createElement('div');
            letterDiv.className = 'letter-item mb-4 p-4 bg-white text-black rounded-md';
            letterDiv.innerHTML = `
                <p>${letter}</p>
                <button class="delete-letter bg-red-500 text-white rounded-md px-4 py-1 mt-2" data-index="${index}">Delete</button>
            `;
            lettersContainer.appendChild(letterDiv);
        });
    }

    document.getElementById('post-letter').addEventListener('click', () => {
        const newLetter = document.getElementById('new-letter').value;
        if (newLetter.trim() !== '') {
            let letters = JSON.parse(localStorage.getItem('letters') || '[]');
            letters.push(newLetter);
            localStorage.setItem('letters', JSON.stringify(letters));
            document.getElementById('new-letter').value = '';
            renderLetters();
        }
    });

    document.getElementById('letters').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-letter')) {
            const index = e.target.getAttribute('data-index');
            let letters = JSON.parse(localStorage.getItem('letters') || '[]');
            letters.splice(index, 1);
            localStorage.setItem('letters', JSON.stringify(letters));
            renderLetters();
        }
    });

    // Initial render
    window.addEventListener('load', () => {
        renderLetters();
    });
