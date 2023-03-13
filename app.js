const textArea = document.getElementById("text");
const charCountSpan = document.getElementById("charCount");
const wordCountSpan = document.getElementById("wordCount");

textArea.addEventListener("input", () => {
    const text = textArea.value;
    charCountSpan.textContent = text.length;

    const words = text.trim().split(/\s+/);
    wordCountSpan.textContent = words.length
})