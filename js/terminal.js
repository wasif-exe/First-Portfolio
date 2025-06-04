document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const terminalContainer = document.getElementById('terminal-container');
    const mainSite = document.getElementById('main-site');

    if (sessionStorage.getItem('skipAnimation') === 'true') {
        console.log("Skipping terminal animation...");
        sessionStorage.removeItem('skipAnimation'); 

       
        terminalContainer.style.display = 'none';
        mainSite.style.display = 'block';
        mainSite.style.opacity = 1;
        mainSite.style.transform = 'translateY(0)';
        return; 
    }


    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    const currentDate = getCurrentDate();
    const textParts = [
        `USER // SYED M WASIF\nSYS: 127.0.0.1\nDATE: ${currentDate}\n`,
        `// System check in progress...\n`,
        `// > All modules operational\n`,
        `// > No anomalies detected\n`,
        `// > Ready for deployment\n\n`,
        `ENCRYPTION LEVEL: MILITARY-GRADE\nFIREWALL INTEGRITY: 100%\nREAL-TIME RENDER: ACTIVE\nLATENCY: NEGLIGIBLE\nUPTIME: ∞\n\n`,
        `WELCOME TO MY PORTFOLIO\n> INITIATE BROWSING_\n`
    ];

    let partIndex = 0;
    let charIndex = 0;


    function type() {
        if (partIndex < textParts.length) {
            const currentPart = textParts[partIndex];
            if (partIndex >= 1 && partIndex <= 4) {
                output.innerHTML += '<span class="loader"></span>';
                setTimeout(() => {
                    output.innerHTML = output.innerHTML.replace('<span class="loader"></span>', currentPart);
                    partIndex++;
                    setTimeout(type, 500);
                }, 500);
            } else {
                if (charIndex < currentPart.length) {
                    output.innerHTML += currentPart.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 20);
                } else {
                    partIndex++;
                    charIndex = 0;
                    setTimeout(type, 500);
                }
            }
        } else {
            console.log('Starting transition to main site...');
            setTimeout(() => {
                console.log('Fading out terminal...');
                terminalContainer.style.opacity = 0;
                terminalContainer.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    console.log('Removing terminal and showing main site...');
                    terminalContainer.remove();
                    mainSite.style.display = 'block';
                    mainSite.style.opacity = 1;
                    mainSite.style.transform = 'translateY(0)';
                    console.log('Terminal container removed.');
                }, 1000);
            }, 1000);
        }
    }


    type();
});
