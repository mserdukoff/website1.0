const outputElement = document.getElementById("output");
const inputElement = document.getElementById("commandInput");

inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const command = inputElement.value.trim();
        inputElement.value = "";
        executeCommand(command);
    }
});

function executeCommand(command) {
    const commands = {
        "whoami": `hello, i'm matt serdukoff.\n` +
        `i am a 23 year old student at UMass Lowell pursuing a degree in Computer Science with a concentration in Data Science.\n` + 
        'currently i am interested in natural language processing and data structures such as neural networks.\n'+
        'non professional interests are linguistics and history',
        "socials": "<a href='https://twitter.com/vladimirserduko'>X</a> <a href='https://www.duolingo.com/profile/mserdukoff'>duolingo</a>",
        "projects": "<a href='https://github.com/mserdukoff'>my projects on GitHub</a>",
        "email": "<a href='mailto:m.serdukoff@gmail.com'>m.serdukoff@gmail.com</a>",
        "linkedin": "<a href='https://www.linkedin.com/in/matt-serdukoff-775030190/'>my linkedin</a>",
        "skills": "C/C++\nPython\nPandas\nOpenAI API\nNatural Language Toolkit\nNatural Language Processing\nPhotography",
        "photography": "most of my cool pictures are on <a href='https://prairie-draw-185.notion.site/Photography-15c93dc8d8f543e0a8779bb0c3ed372f?pvs=4'>this notion page",
        "help": "Available commands:\nwhoami\nsocial\nprojects\nemail\nlinkedin\nskills\nphotography\nhelp\nclear"
    };

    if (commands.hasOwnProperty(command)) {
        outputElement.innerHTML += `<p class="command">$ ${command}</p>`;
        const response = commands[command].replace(/\n/g, "<br>"); // Replace plain text line breaks with <br> tags
        outputElement.innerHTML += `<p class="response">${response}</p>`;
    } else if (command === "clear") {
        outputElement.innerHTML = "";
    } else if (command === "help") {
        const availableCommands = Object.keys(commands).join("\n"); // Join command names with line breaks
        outputElement.innerHTML += `<p class="command">$ ${command}</p>`;
        outputElement.innerHTML += `<p class="response">${availableCommands}</p>`;
    } else {
        outputElement.innerHTML += `<p class="command">$ ${command}</p>`;
        outputElement.innerHTML += `<p class="response error">Command not found. Type 'help' for a list of available commands.</p>`;
    }
    outputElement.scrollTop = outputElement.scrollHeight;
}
