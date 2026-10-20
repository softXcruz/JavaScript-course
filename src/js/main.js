// Initialice the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', app());

// Function main
function app() {
    // Inicializamos las consolas de nuestras secciones
    setupMacConsole("string-run-btn", "string-code-input", "string-console-output");
    setupMacConsole("number-run-btn", "number-code-input", "number-console-output");
    setupMacConsole("operators-run-btn", "operators-code-input", "operators-console-output");
    setupMacConsole("booleans-run-btn", "booleans-code-input", "booleans-console-output");
    setupMacConsole("objects-run-btn", "objects-code-input", "objects-console-output");
    setupMacConsole("arrays-run-btn", "arrays-code-input", "arrays-console-output");
    setupMacConsole("functions-run-btn", "functions-code-input", "functions-console-output");
    setupMacConsole("iterators-run-btn", "iterators-code-input", "iterators-console-output");
    setupMacConsole("array-methods-run-btn", "array-methods-code-input", "array-methods-console-output");
    setupMacConsole("dom-run-btn", "dom-code-input", "dom-console-output");
}

// Funtion to handle all the sections of the course
function setupMacConsole(runBtnId, inputId, outputId) {
    const runBtn = document.getElementById(runBtnId);
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    // If all elements exist, we add the event listener to the run button
    if (runBtn && input && output) {
        // Add event listener to the run button
        runBtn.addEventListener("click", () => {
            // Get the code from the input and prepare an array to store logs
            const code = input.value;
            // Array to store console.log outputs
            let logs = [];

            // Sobrescribimos temporalmente console.log para capturar los mensajes
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                logs.push(args.map(arg =>
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(" "));
            };

            try {
                // Ejecutamos el código del usuario de manera segura
                // eslint-disable-next-line no-eval
                const result = eval(code);

                // If the user code has a return value, we add it to the logs
                if (logs.length === 0 && result !== undefined) {
                    logs.push(String(result));
                }

                // Return the logs
                output.textContent = logs.length > 0 ? logs.join("\n") : "Código ejecutado sin salida (sin console.log).";
                output.className = "text-blue-600 dark:text-emerald-400 whitespace-pre-wrap font-mono";
            } catch (error) {
                output.textContent = `Error: ${error.message}`;
                output.className = "text-rose-400 whitespace-pre-wrap font-mono";
            } finally {
                // Restauramos el console.log original del navegador
                console.log = originalConsoleLog;
            }
        });
    }
}