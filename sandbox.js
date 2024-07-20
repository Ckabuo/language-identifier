function languageCheck() {
    let demo = document.getElementById("display");
    let show = document.getElementById('language').value.trim();

    if (show === '') {
        alert("You submitted an empty form, please enter a code extension");
        return;
    }

    let dotIndex = show.lastIndexOf(".");
    let extension = show.slice(dotIndex).toLowerCase();

    if (dotIndex === -1) {
        alert("Please enter a code extension");
    } else {
        switch (extension) {
            case '.py':
                //alert(`You've entered a PHYTON file`);
                demo.innerHTML = `You've entered a PHYTON file`;
                break;
            case '.html':
                //alert(`You've entered an HTML file`);
                demo.innerHTML = `You've entered an HTML file`;
                break;
            case '.css':
                //alert(`You've entered a CSS file`);
                demo.innerHTML = `You've entered a CSS file`;
                break;
            case '.js':
                //alert(`You've entered a JavaScript file`);
                demo.innerHTML = `You've entered a JavaScript file`;
                break;
            case '.php':
                //alert(`You've entered a PHP file`);
                demo.innerHTML = `You've entered a PHP file`;
                break;
            case '.java':
                //alert(`You've entered a java file`);
                demo.innerHTML = `You've entered a java file`;
                break;
            case '.cpp':
                //alert(`You've entered a C++ file`);
                demo.innerHTML = `You've entered a C++ file`;
                break;
            case '.rb':
                //alert(`You've entered a Ruby file`);
                demo.innerHTML = `You've entered a Ruby file`;
                break;
            case '.cs':
                //alert(`You've entered a C# file`);
                demo.innerHTML = `You've entered a C# file`;
                break;
            case '.go':
                //alert(`You've entered a Go file`);
                demo.innerHTML = `You've entered a Go file`;
                break;
            case '.rs':
                //alert(`You've entered a Rust file`);
                demo.innerHTML = `You've entered a Rust file`;
                break;
            case '.swift':
                //alert(`You've entered a Swift file`);
                demo.innerHTML = `You've entered a Swift file`;
                break;
            case '.kt':
                //alert(`You've entered a Kotlin file`);
                demo.innerHTML = `You've entered a Kotlin file`;
                break;
            case '.ts':
                //alert(`You've entered a TypeScript file`);
                demo.innerHTML = `You've entered a TypeScript file`;
                break;
            case '.':
                alert("Please enter a code extension");
                break;
            default:
                demo.innerHTML = `Unknown language`;
                break;
        }
    }
}