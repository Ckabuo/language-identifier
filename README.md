# Language Identifier

## Overview

This project is a simple web application that identifies the programming language based on the file extension entered by the user. It supports multiple programming languages and displays a corresponding message.

## Features

- Identifies programming languages by file extension.
- Displays a message indicating the type of file entered.
- Provides feedback for empty or invalid input.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript

## Getting Started

### Prerequisites

- A web browser
- VS Code

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/Ckabuo/language-identifier.git
    cd language-identifier
    ```

2. Open the `index.html` file in your preferred web browser.

### Usage

1. Enter the name of a file with an extension (e.g., `index.html`, `script.js`) into the input field.
2. Click the "Submit" button.
3. The application will display the programming language associated with the file extension.

### Supported File Extensions

- `.py` - Python
- `.html` - HTML
- `.css` - CSS
- `.js` - JavaScript
- `.php` - PHP
- `.java` - Java
- `.cpp` - C++
- `.rb` - Ruby
- `.cs` - C#
- `.go` - Go
- `.rs` - Rust
- `.swift` - Swift
- `.kt` - Kotlin
- `.ts` - TypeScript

## File Structure
```
language-identifier/
│
├── index.html
├── index.js
└── README.md
```

## Code Explanation

### index.html

This file contains the HTML structure of the application. It includes a form where users can input the file name, and a card to display the result.

### index.js

This file contains the JavaScript logic to handle the input and determine the programming language based on the file extension. It displays the result on the web page.

## Acknowledgements
- Bootstrap for styling
- StackOverflow and other online resources for code references
