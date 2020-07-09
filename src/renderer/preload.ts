window.addEventListener("DOMContentLoaded", () => {
    let introSentence: string;
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    introSentence = "this software is written by raiga0310, made of Electron, Chromium, Node.js.";

    replaceText("intro", introSentence);
});
