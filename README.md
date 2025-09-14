
# React Calculator (js)

A simple, responsive calculator built with React. It supports basic arithmetic operations, keyboard input, and has a clean UI styled with CSS. 


## Features

- Basic operations: Addition, subtraction, multiplication, division

- Keyboard support: Type numbers and operators directly from your keyboard

- Clear & Delete: Reset all input or delete last entry

- Decimal support: Enter decimal numbers safely (only one decimal per number)

- Error handling: Displays Error for invalid expressions


## Demo

### App Screenshot
<img width="316" height="461" alt="image" src="https://github.com/user-attachments/assets/9b3f8556-6ecd-4bf4-91ab-5ead23a6bc81" />

### Link
[https://netocodez.github.io/JS_Calculator/](https://netocodez.github.io/JS_Calculator/)

## Prerequisites

- Node.js (v14 or later recommended)

- npm (comes with Node) or yarn
## Installation

### Clone the repository:

```
git clone https://github.com/Netocodez/JS_Calculator.git
cd react-calculator

```

### Install dependencies:
npm install
# or
yarn install

    
## App Logic

### The calculator’s behavior is managed entirely in React using state and handler functions:

#### State Management

- display (string): holds the current input or computed result.

#### Core Handlers

- handleNumber(digit): appends a number to the display.

- handleOperator(op): appends an operator (+, −, ×, ÷) to the display.

- handleDecimal(): adds a decimal point to the current number if not already present.

- handleDelete(): deletes the last character of the display.

- handleClear(): resets the display to 0.

- handleEqualTo(): evaluates the expression and updates the display with the result or “Error” on invalid input.

#### Keyboard Support
A useEffect hook registers a keydown event listener to allow typing numbers, operators, Enter/=, Escape, and Backspace directly from the keyboard.

#### Expression Evaluation
The eval function is used to evaluate arithmetic expressions built from the display string. Before evaluation, handlers ensure only valid expressions are passed.

#### Error Handling
If evaluation fails or results in invalid numbers (like division by zero), the display shows Error.

This logic makes the calculator interactive, predictable, and easy to extend with new operations.
## Running the App

```
npm start
# or
yarn start

```

This starts the development server at http://localhost:3000
## Building for Production

```
npm run build

```

This will create an optimized production build in the build folder.
## Usage/Examples

### Click the buttons or type numbers/operators on your keyboard

- A/C: resets the calculator

- Del: deletes the last input

- =: evaluates the expression


## Project Structure

```
src/
├── App.css          # Styles
├── App.js / App.jsx # Calculator component
└── index.js         # Entry point

```
## Customization

- Modify App.css to change styles

- Extend handleOperator and handleEqualTo to add more functions (like %, parentheses, etc.)
## License

This project is licensed under the MIT License.

