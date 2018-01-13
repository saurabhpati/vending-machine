# vending-machine
A vending machine simulator application using TypeScript

For the type script build task install typescript globally by running the command 'npm install -g typescript'

If using Visual Studio Code, configure the task runner to set up a task for compiling the typescript code.

You can do that by following these steps.

1. Press 'ctrl+shift+B' or 'cmd+shit+B' and if you have no tasks configured, there will be a toaster to configure the tasks, click on configure and select the 'Others' option if you do not get any options for configuring a typescript application.
As per VS Code v1.19.2, there wasn't any.

2. It is going to create a tasks.json file inside the .vscode directory, fill it with the information below:

{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "echo",
            "type": "shell",
            "command": "tsc",
            "args": ["-p", "ts"],
            "presentation": {
                "echo": true,
                "reveal": "silent",
                "focus": false,
                "panel": "shared"
            },
            "problemMatcher":"$tsc"
        }
    ]
}

3. This is the minimum 'tsconfig.json' file that will be needed to get started with this repository.

{
    "compilerOptions": {
        "target": "es5",
        "outFile": "../js/app.js", // All of the application's type script code will be transpiled in this js file.
        "sourceMap": true // Helps in debugging when individual ts code will mapped to their corresponding part in transpiled js code.
    }
}

4. If you are using any other editor, the 'tsconfig.json' file remains the same while you need to figure out configuring the build operation provided by the editor.
