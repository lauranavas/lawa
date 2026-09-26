async function copyCreatorCode(button) {
    copyCodeValue("LAWA", button);
}

async function copyCodeValue(code, button) {
    try {
        await navigator.clipboard.writeText(code);

        const original = button.textContent;
        button.textContent = "¡Copiado!";

        setTimeout(() => {
            button.textContent = original;
        }, 1400);
    } catch (error) {
        alert("Copia este código: " + code);
    }
}

function toggleCodeGuide(button) {
    const guide = document.getElementById("codesGuide");
    const open = guide.classList.toggle("is-open");

    button.textContent = open ? "✕ Cerrar guía" : "🎮 Cómo usarlo";
}