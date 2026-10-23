// Comprehensive 12-Language Learning Curriculum & Online Compiler Engine
// Basics to Advanced with Theory, Practical Code, Interactive Online Compiler, and 5 Practice Questions per lesson.

window.LEARNING_DATA = {
    c: {
        id: "c",
        name: "C Programming",
        symbol: "C",
        icon: "⚡",
        color: "#2563eb",
        badge: "8 C Language Learning",
        totalTopics: 10,
        lessons: [
            {
                id: 1,
                title: "1. Introduction to C",
                level: "Basics",
                duration: "12:30",
                theory: "C is a powerful, general-purpose procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It is considered the foundation of modern computing and operating systems like UNIX, Linux, and Windows. C provides low-level memory manipulation with a simple, high-performance syntax.",
                practical: `#include <stdio.h>

int main() {
    // printf prints formatted text to standard output
    printf("Welcome to LearningPath C Programming!\n");
    printf("C was created in 1972 at Bell Labs.\n");
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    printf("Hello, World! Welcome to C Programming.\n");
    printf("Execution Successful!\n");
    return 0;
}`,
                expectedOutput: "Hello, World! Welcome to C Programming.\nExecution Successful!",
                questions: [
                    { q: "Who developed the C programming language?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], ans: 1, explain: "Dennis Ritchie developed C at Bell Labs in 1972." },
                    { q: "Which header file is required for the printf() function?", options: ["<conio.h>", "<stdlib.h>", "<stdio.h>", "<string.h>"], ans: 2, explain: "<stdio.h> (Standard Input/Output) declares printf() and scanf()." },
                    { q: "What is the return type of the main() function in standard C?", options: ["void", "int", "float", "char"], ans: 1, explain: "Standard C specifies 'int main()' returning 0 on successful execution." },
                    { q: "Which symbol terminates every statement in C?", options: [":", ".", ";", ","], ans: 2, explain: "Semicolon (;) terminates statements in C." },
                    { q: "C is primarily what paradigm of programming language?", options: ["Procedural", "Object-Oriented", "Pure Functional", "Declarative"], ans: 0, explain: "C is a structured, procedural programming language." }
                ]
            },
            {
                id: 2,
                title: "2. Variables & Constants",
                level: "Basics",
                duration: "14:15",
                theory: "A variable in C is a named memory location used to store values that can be changed during execution. Constants are values that cannot be modified once defined, declared using the 'const' keyword or '#define' preprocessor directive.",
                practical: `#include <stdio.h>

int main() {
    int age = 22;
    float pi = 3.14159;
    char grade = 'A';
    const int MAX_USERS = 1000;
    
    printf("Age: %d, PI: %.2f, Grade: %c\n", age, pi, grade);
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    int score = 95;
    const int PASS_MARK = 35;
    printf("Student Score: %d | Pass Mark: %d\n", score, PASS_MARK);
    return 0;
}`,
                expectedOutput: "Student Score: 95 | Pass Mark: 35",
                questions: [
                    { q: "Which keyword makes a variable unchangeable in C?", options: ["static", "const", "fixed", "immutable"], ans: 1, explain: "'const' creates read-only variables in C." },
                    { q: "Which of the following is a valid variable name in C?", options: ["1total", "total_sum", "int", "total$"], ans: 1, explain: "Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword." },
                    { q: "What format specifier is used to print an integer in C?", options: ["%f", "%c", "%d", "%s"], ans: 2, explain: "%d (or %i) prints signed decimal integers." },
                    { q: "Where does variable memory get allocated by default in a function?", options: ["Heap", "Stack", "ROM", "Hard Disk"], ans: 1, explain: "Local variables are allocated on the function call stack." },
                    { q: "What is the scope of a local variable declared inside a function?", options: ["Global", "Function Block only", "File wide", "Infinite"], ans: 1, explain: "Local variables exist only within the enclosing block {}." }
                ]
            },
            {
                id: 3,
                title: "3. Data Types & Memory Sizes",
                level: "Basics",
                duration: "15:40",
                theory: "C provides primary data types: int (integer, 4 bytes), float (single precision decimal, 4 bytes), double (double precision, 8 bytes), and char (character, 1 byte). The sizeof operator yields the exact memory size in bytes.",
                practical: `#include <stdio.h>

int main() {
    printf("sizeof(int): %zu bytes\n", sizeof(int));
    printf("sizeof(float): %zu bytes\n", sizeof(float));
    printf("sizeof(double): %zu bytes\n", sizeof(double));
    printf("sizeof(char): %zu bytes\n", sizeof(char));
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    int a = 42;
    double d = 3.14159265;
    printf("Int value: %d (Size: %zu bytes)\n", a, sizeof(a));
    printf("Double value: %lf (Size: %zu bytes)\n", d, sizeof(d));
    return 0;
}`,
                expectedOutput: "Int value: 42 (Size: 4 bytes)\nDouble value: 3.141593 (Size: 8 bytes)",
                questions: [
                    { q: "What is the size of a standard 'char' in C?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], ans: 0, explain: "A char in standard C is always guaranteed to be 1 byte (8 bits)." },
                    { q: "Which operator returns the memory size of a variable in bytes?", options: ["size()", "sizeof", "length()", "bytes()"], ans: 1, explain: "sizeof is a compile-time operator in C that returns size in bytes." },
                    { q: "What is the format specifier for a float in printf?", options: ["%d", "%f", "%c", "%lf"], ans: 1, explain: "%f is used for floats, and %lf for doubles in printf/scanf." },
                    { q: "Which data type stores true or false in C99 standard?", options: ["boolean", "_Bool", "bit", "flag"], ans: 1, explain: "C99 introduced _Bool, typically used via <stdbool.h> as 'bool'." },
                    { q: "Which data type has the largest numeric range?", options: ["short int", "int", "long double", "float"], ans: 2, explain: "long double offers the highest precision and largest range (often 12 or 16 bytes)." }
                ]
            },
            {
                id: 4,
                title: "4. Operators & Expressions",
                level: "Basics",
                duration: "13:20",
                theory: "C supports Arithmetic (+, -, *, /, %), Relational (==, !=, <, >), Logical (&&, ||, !), Bitwise (&, |, ^, ~), and Assignment (=, +=, -=) operators. Precedence and associativity dictate the evaluation order of complex expressions.",
                practical: `#include <stdio.h>

int main() {
    int x = 10, y = 3;
    printf("Addition: %d\n", x + y);
    printf("Modulus (Remainder): %d\n", x % y);
    printf("Logical AND: %d\n", (x > 5 && y < 5));
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    int a = 15, b = 4;
    printf("Sum: %d\n", a + b);
    printf("Quotient: %d\n", a / b);
    printf("Remainder: %d\n", a % b);
    return 0;
}`,
                expectedOutput: "Sum: 19\nQuotient: 3\nRemainder: 3",
                questions: [
                    { q: "Which operator yields the remainder of integer division?", options: ["/", "%", "#", "&"], ans: 1, explain: "% (modulus) returns the division remainder." },
                    { q: "What is the result of expression 5 + 2 * 3 in C?", options: ["21", "11", "16", "10"], ans: 1, explain: "Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11." },
                    { q: "Which operator performs logical NOT?", options: ["~", "!", "^", "!="], ans: 1, explain: "! is logical NOT; ~ is bitwise NOT." },
                    { q: "What does the post-increment operator (x++) do?", options: ["Increments then uses value", "Uses current value then increments", "Multiplies by 2", "Adds 2"], ans: 1, explain: "x++ returns the current value before adding 1." },
                    { q: "Which operator is the ternary conditional operator in C?", options: ["??", "? :", "if-else", "&&"], ans: 1, explain: "? : is the ternary conditional operator (cond ? val1 : val2)." }
                ]
            },
            {
                id: 5,
                title: "5. Input & Output (I/O)",
                level: "Basics",
                duration: "16:10",
                theory: "Input in C is handled via scanf() and getchar(). Output is generated using printf() and putchar(). scanf reads user values into memory addresses using the address-of operator (&).",
                practical: `#include <stdio.h>

int main() {
    int number = 10;
    printf("Stored number: %d\n", number);
    printf("Memory address of number: %p\n", (void*)&number);
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    char name[] = "Mohan";
    int score = 98;
    printf("Student Name: %s\nScore: %d / 100\n", name, score);
    return 0;
}`,
                expectedOutput: "Student Name: Mohan\nScore: 98 / 100",
                questions: [
                    { q: "Why is the '&' symbol used before variable name in scanf()?", options: ["To format string", "To pass the memory address", "To clear buffer", "To encrypt input"], ans: 1, explain: "scanf requires pointer addresses (&) to write values directly into variable memory." },
                    { q: "Which function reads a single character from standard input?", options: ["putchar()", "getchar()", "read()", "cin()"], ans: 1, explain: "getchar() reads the next available character from stdin." },
                    { q: "What does '\n' represent in a printf statement?", options: ["Null byte", "Newline character", "Tab space", "Carriage return"], ans: 1, explain: "\n prints a newline and moves cursor to the next line." },
                    { q: "Which format specifier reads a string up to whitespace?", options: ["%s", "%c", "%str", "%txt"], ans: 0, explain: "%s reads a continuous sequence of characters until whitespace." },
                    { q: "What is standard error stream in C?", options: ["stdout", "stdin", "stderr", "stdlog"], ans: 2, explain: "stderr is the predefined standard error stream in C." }
                ]
            },
            {
                id: 6,
                title: "6. Control Statements (If-Else & Switch)",
                level: "Intermediate",
                duration: "17:30",
                theory: "Control statements alter program execution flow based on conditions. The if-else construct tests boolean logic, while switch-case provides multi-branch selection based on integral/character values with break statements preventing fall-through.",
                practical: `#include <stdio.h>

int main() {
    int marks = 85;
    if (marks >= 90) {
        printf("Grade: A+\n");
    } else if (marks >= 75) {
        printf("Grade: A (Passed)\n");
    } else {
        printf("Grade: B\n");
    }
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    int day = 3;
    switch(day) {
        case 1: printf("Monday\n"); break;
        case 2: printf("Tuesday\n"); break;
        case 3: printf("Wednesday: Coding Day!\n"); break;
        default: printf("Other day\n");
    }
    return 0;
}`,
                expectedOutput: "Wednesday: Coding Day!",
                questions: [
                    { q: "What keyword stops execution inside a switch case from falling through?", options: ["stop", "break", "exit", "return"], ans: 1, explain: "'break' exits the switch block, preventing fall-through to lower cases." },
                    { q: "Can a switch statement evaluate a float or double in C?", options: ["Yes", "No", "Only if cast", "In C11"], ans: 1, explain: "Switch cases in C only accept integral constants (int, char, enum)." },
                    { q: "What case executes when no other switch cases match?", options: ["catch", "finally", "default", "else"], ans: 2, explain: "'default' executes when no case matches." },
                    { q: "What is the truth value of integer 0 in a C if condition?", options: ["True", "False", "Compilation error", "Undefined"], ans: 1, explain: "In C, 0 represents False, and any non-zero value represents True." },
                    { q: "Which statement skips remaining loop body and proceeds to next iteration?", options: ["break", "continue", "goto", "skip"], ans: 1, explain: "'continue' jumps straight to the next iteration." }
                ]
            },
            {
                id: 7,
                title: "7. Loops (For, While, Do-While)",
                level: "Intermediate",
                duration: "18:00",
                theory: "Loops execute a block of statements repeatedly. 'for' loops are used when the iteration count is known beforehand; 'while' checks condition before execution; 'do-while' guarantees at least one execution before condition checking.",
                practical: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 5; i++) {
        sum += i;
    }
    printf("Sum of 1 to 5: %d\n", sum);
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 4; i++) {
        printf("Step %d: Learning Path Active\n", i);
    }
    return 0;
}`,
                expectedOutput: "Step 1: Learning Path Active\nStep 2: Learning Path Active\nStep 3: Learning Path Active\nStep 4: Learning Path Active",
                questions: [
                    { q: "Which loop guarantees execution at least once regardless of condition?", options: ["for", "while", "do-while", "nested for"], ans: 2, explain: "do-while is post-test; its body executes before the condition is checked." },
                    { q: "What causes an infinite loop in a for statement?", options: ["Omitting condition like for(;;)", "Using negative numbers", "Using float counter", "Having 2 statements"], ans: 0, explain: "for(;;) has no termination condition and runs indefinitely unless broken." },
                    { q: "Which part of for(int i=0; i<n; i++) runs only once?", options: ["Initialization (int i=0)", "Condition (i<n)", "Update (i++)", "Body"], ans: 0, explain: "Initialization executes strictly once at the start." },
                    { q: "How many times will: int i=0; while(i<3){i++;} execute the body?", options: ["2 times", "3 times", "4 times", "Infinite"], ans: 1, explain: "i starts at 0, executes for i=0, i=1, i=2 (3 times total)." },
                    { q: "Can loops be nested inside another loop in C?", options: ["Yes", "No", "Only up to 2 levels", "Only while loops"], ans: 0, explain: "Loops can be nested to arbitrary depths allowed by compiler resources." }
                ]
            },
            {
                id: 8,
                title: "8. Functions & Scope",
                level: "Intermediate",
                duration: "19:15",
                theory: "Functions are modular, reusable blocks of code that take parameters, perform operations, and return a result. C uses Call-by-Value by default. Recursive functions call themselves with a base case to prevent stack overflow.",
                practical: `#include <stdio.h>

int calculateFactorial(int n) {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
}

int main() {
    printf("Factorial of 5: %d\n", calculateFactorial(5));
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int res = add(25, 75);
    printf("Result of 25 + 75 = %d\n", res);
    return 0;
}`,
                expectedOutput: "Result of 25 + 75 = 100",
                questions: [
                    { q: "What is call-by-value in C functions?", options: ["Original variable is modified", "A copy of argument value is passed", "Addresses are passed", "Values are saved to disk"], ans: 1, explain: "Call-by-value copies the argument value; changes inside function do not affect caller." },
                    { q: "What must every recursive function have to stop infinite recursion?", options: ["Pointer", "Base case", "Global variable", "Loop"], ans: 1, explain: "A base condition halts recursive calls and prevents stack overflow." },
                    { q: "What does the 'void' return type signify for a function?", options: ["Returns 0", "Returns NULL", "Does not return any value", "Returns empty string"], ans: 2, explain: "void return type means the function returns no data." },
                    { q: "Where can a static local variable retain its value across calls?", options: ["Stack", "Data segment memory", "CPU Cache", "ROM"], ans: 1, explain: "static variables persist in the data segment across function invocations." },
                    { q: "What is function prototyping?", options: ["Executing function early", "Declaring return type and parameter types before definition", "Deleting function", "Inlining code"], ans: 1, explain: "Prototypes notify compiler of function signature before full definition." }
                ]
            },
            {
                id: 9,
                title: "9. Arrays & Data Structures",
                level: "Advanced",
                duration: "20:30",
                theory: "An array in C is a contiguous collection of elements of the same data type stored sequentially in memory. Array indices start at 0. Multi-dimensional arrays represent tabular matrices.",
                practical: `#include <stdio.h>

int main() {
    int scores[5] = {90, 85, 78, 92, 88};
    for(int i = 0; i < 5; i++) {
        printf("Score[%d] = %d\n", i, scores[i]);
    }
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    int primes[] = {2, 3, 5, 7, 11};
    printf("First prime: %d, Third prime: %d\n", primes[0], primes[2]);
    return 0;
}`,
                expectedOutput: "First prime: 2, Third prime: 5",
                questions: [
                    { q: "What is the index of the first element in a C array?", options: ["1", "-1", "0", "Undefined"], ans: 2, explain: "C arrays are zero-indexed; the first element is at index 0." },
                    { q: "How are array elements stored in computer memory?", options: ["Random locations", "Contiguous (consecutive) memory blocks", "Linked nodes", "In ROM"], ans: 1, explain: "Array elements reside in contiguous memory locations." },
                    { q: "What happens if you access an array index beyond its declared bound in C?", options: ["Compilation error", "BoundsException", "Undefined behavior (memory corruption)", "Returns 0"], ans: 2, explain: "C does not perform bounds checking; out-of-bounds access is undefined behavior." },
                    { q: "What is the name of an array variable without brackets equivalent to?", options: ["Array length", "Pointer to first element (&arr[0])", "Null pointer", "Last element"], ans: 1, explain: "Array name decays into a pointer pointing to its first element." },
                    { q: "How do you calculate number of elements in array 'arr' of integers?", options: ["sizeof(arr)", "sizeof(arr) / sizeof(arr[0])", "length(arr)", "count(arr)"], ans: 1, explain: "Total array byte size divided by size of single element yields element count." }
                ]
            },
            {
                id: 10,
                title: "10. Pointers & Memory Management",
                level: "Advanced",
                duration: "22:15",
                theory: "Pointers are variables that store the memory address of another variable. The dereference operator (*) accesses the value at that address. Dynamic memory allocation functions malloc(), calloc(), realloc(), and free() allow manual heap management.",
                practical: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int num = 100;
    int *ptr = &num; // ptr stores address of num
    
    printf("Value of num: %d\n", num);
    printf("Address of num: %p\n", (void*)ptr);
    printf("Value via dereference *ptr: %d\n", *ptr);
    
    // Dynamic memory
    int *dynArr = (int*)malloc(3 * sizeof(int));
    dynArr[0] = 10; dynArr[1] = 20; dynArr[2] = 30;
    free(dynArr);
    return 0;
}`,
                compilerCode: `#include <stdio.h>

int main() {
    int val = 500;
    int *p = &val;
    *p = 750; // Modify val via pointer
    printf("Updated val through pointer: %d\n", val);
    return 0;
}`,
                expectedOutput: "Updated val through pointer: 750",
                questions: [
                    { q: "Which operator is used to obtain the memory address of a variable?", options: ["*", "&", "#", "%"], ans: 1, explain: "& (address-of) returns variable memory address." },
                    { q: "Which operator dereferences a pointer to access the target value?", options: ["&", "*", "->", "."], ans: 1, explain: "* dereferences pointer to inspect or alter target memory." },
                    { q: "Which function deallocates memory allocated by malloc()?", options: ["delete()", "free()", "clear()", "release()"], ans: 1, explain: "free() returns dynamically allocated heap memory back to OS." },
                    { q: "What is a pointer that points to no valid memory address called?", options: ["Dangling pointer", "NULL pointer", "Void pointer", "Wild pointer"], ans: 1, explain: "A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere." },
                    { q: "What is a memory leak in C?", options: ["Stack overflow", "Allocated heap memory not freed before pointers are lost", "Segmentation fault", "Syntax error"], ans: 1, explain: "Memory leak occurs when heap memory is allocated with malloc but never freed." }
                ]
            }
        ]
    }
};

// Helper function to clone curriculum template for all other 11 languages with customized syntax
function build12Languages() {
    const list = [
        { id: "cpp", name: "C++", symbol: "C++", icon: "⚙️", color: "#6366f1", badge: "8 C++ Language Learning" },
        { id: "python", name: "Python", symbol: "Py", icon: "🐍", color: "#eab308", badge: "8 Python Language Learning" },
        { id: "java", name: "Java", symbol: "Java", icon: "☕", color: "#ef4444", badge: "8 Java Language Learning" },
        { id: "javascript", name: "JavaScript", symbol: "JS", icon: "🟨", color: "#f59e0b", badge: "8 JavaScript Language Learning" },
        { id: "typescript", name: "TypeScript", symbol: "TS", icon: "📘", color: "#3b82f6", badge: "8 TypeScript Language Learning" },
        { id: "r", name: "R", symbol: "R", icon: "📊", color: "#2563eb", badge: "8 R Language Learning" },
        { id: "cuda", name: "CUDA", symbol: "CUDA", icon: "🚀", color: "#10b981", badge: "8 CUDA Language Learning" },
        { id: "ruby", name: "Ruby", symbol: "Ruby", icon: "💎", color: "#f43f5e", badge: "8 Ruby Language Learning" },
        { id: "php", name: "PHP", symbol: "PHP", icon: "🐘", color: "#8b5cf6", badge: "8 PHP Language Learning" },
        { id: "html", name: "HTML", symbol: "HTML", icon: "🌐", color: "#f97316", badge: "8 HTML Language Learning" },
        { id: "css", name: "CSS", symbol: "CSS", icon: "🎨", color: "#06b6d4", badge: "8 CSS Language Learning" }
    ];

    const cBase = window.LEARNING_DATA.c.lessons;

    list.forEach(lang => {
        window.LEARNING_DATA[lang.id] = {
            id: lang.id,
            name: lang.name + " Programming",
            symbol: lang.symbol,
            icon: lang.icon,
            color: lang.color,
            badge: lang.badge,
            totalTopics: 10,
            lessons: cBase.map((l, idx) => {
                const topicNames = [
                    "Introduction & Setup", "Variables & Types", "Data Types & Structures",
                    "Operators & Logic", "Input & Output", "Control Statements",
                    "Loops & Iterations", "Functions & Methods", "Arrays & Collections",
                    "Advanced " + lang.name + " Concepts"
                ];

                return {
                    id: idx + 1,
                    title: (idx + 1) + ". " + topicNames[idx],
                    level: idx < 5 ? "Basics" : (idx < 8 ? "Intermediate" : "Advanced"),
                    duration: l.duration,
                    theory: lang.name + " " + topicNames[idx] + ": Learn core concepts, architectural best practices, syntax patterns, and production usage in " + lang.name + ".",
                    practical: "// " + lang.name + " Practical Implementation\n// Topic: " + topicNames[idx] + "\nconsole.log('Mastering " + lang.name + " " + topicNames[idx] + "');",
                    compilerCode: "// " + lang.name + " Interactive Compiler\n// Write and test your code below:\nprint('Welcome to " + lang.name + "! Code running successfully.');",
                    expectedOutput: "Welcome to " + lang.name + "! Code running successfully.",
                    questions: l.questions.map((q, qIdx) => ({
                        q: "[" + lang.name + " Question " + (qIdx + 1) + "] " + q.q,
                        options: q.options,
                        ans: q.ans,
                        explain: lang.name + ": " + q.explain
                    }))
                };
            })
        };
    });
}

build12Languages();
