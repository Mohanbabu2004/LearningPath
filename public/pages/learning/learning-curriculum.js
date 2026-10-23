// Comprehensive 12-Language Learning Curriculum & Online Compiler Engine
// Basics to Advanced with Theory, Practical Code, Interactive Online Compiler, 5 Practice Questions per lesson, and Playable Video Tutorials.

window.LEARNING_DATA = {
    "c": {
        "id": "c",
        "name": "C Programming",
        "symbol": "C",
        "icon": "⚡",
        "color": "#2563eb",
        "badge": "8 C Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction to C",
                "level": "Basics",
                "duration": "12:30",
                "theory": "C is a powerful, general-purpose procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It is considered the foundation of modern computing and operating systems like UNIX, Linux, and Windows. C provides low-level memory manipulation with a simple, high-performance syntax.",
                "practical": "#include <stdio.h>\n\nint main() {\n    // printf prints formatted text to standard output\n    printf(\"Welcome to LearningPath C Programming!\n\");\n    printf(\"C was created in 1972 at Bell Labs.\n\");\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World! Welcome to C Programming.\n\");\n    printf(\"Execution Successful!\n\");\n    return 0;\n}",
                "expectedOutput": "Hello, World! Welcome to C Programming.\nExecution Successful!",
                "questions": [
                    {
                        "q": "Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "<stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 2,
                "title": "2. Variables & Constants",
                "level": "Basics",
                "duration": "14:15",
                "theory": "A variable in C is a named memory location used to store values that can be changed during execution. Constants are values that cannot be modified once defined, declared using the 'const' keyword or '#define' preprocessor directive.",
                "practical": "#include <stdio.h>\n\nint main() {\n    int age = 22;\n    float pi = 3.14159;\n    char grade = 'A';\n    const int MAX_USERS = 1000;\n    \n    printf(\"Age: %d, PI: %.2f, Grade: %c\n\", age, pi, grade);\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    int score = 95;\n    const int PASS_MARK = 35;\n    printf(\"Student Score: %d | Pass Mark: %d\n\", score, PASS_MARK);\n    return 0;\n}",
                "expectedOutput": "Student Score: 95 | Pass Mark: 35",
                "questions": [
                    {
                        "q": "Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "'const' creates read-only variables in C."
                    },
                    {
                        "q": "Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "%d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 780,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 3,
                "title": "3. Data Types & Memory Sizes",
                "level": "Basics",
                "duration": "15:40",
                "theory": "C provides primary data types: int (integer, 4 bytes), float (single precision decimal, 4 bytes), double (double precision, 8 bytes), and char (character, 1 byte). The sizeof operator yields the exact memory size in bytes.",
                "practical": "#include <stdio.h>\n\nint main() {\n    printf(\"sizeof(int): %zu bytes\n\", sizeof(int));\n    printf(\"sizeof(float): %zu bytes\n\", sizeof(float));\n    printf(\"sizeof(double): %zu bytes\n\", sizeof(double));\n    printf(\"sizeof(char): %zu bytes\n\", sizeof(char));\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    int a = 42;\n    double d = 3.14159265;\n    printf(\"Int value: %d (Size: %zu bytes)\n\", a, sizeof(a));\n    printf(\"Double value: %lf (Size: %zu bytes)\n\", d, sizeof(d));\n    return 0;\n}",
                "expectedOutput": "Int value: 42 (Size: 4 bytes)\nDouble value: 3.141593 (Size: 8 bytes)",
                "questions": [
                    {
                        "q": "What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "%f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1500,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 4,
                "title": "4. Operators & Expressions",
                "level": "Basics",
                "duration": "13:20",
                "theory": "C supports Arithmetic (+, -, *, /, %), Relational (==, !=, <, >), Logical (&&, ||, !), Bitwise (&, |, ^, ~), and Assignment (=, +=, -=) operators. Precedence and associativity dictate the evaluation order of complex expressions.",
                "practical": "#include <stdio.h>\n\nint main() {\n    int x = 10, y = 3;\n    printf(\"Addition: %d\n\", x + y);\n    printf(\"Modulus (Remainder): %d\n\", x % y);\n    printf(\"Logical AND: %d\n\", (x > 5 && y < 5));\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4;\n    printf(\"Sum: %d\n\", a + b);\n    printf(\"Quotient: %d\n\", a / b);\n    printf(\"Remainder: %d\n\", a % b);\n    return 0;\n}",
                "expectedOutput": "Sum: 19\nQuotient: 3\nRemainder: 3",
                "questions": [
                    {
                        "q": "Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "% (modulus) returns the division remainder."
                    },
                    {
                        "q": "What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "x++ returns the current value before adding 1."
                    },
                    {
                        "q": "Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 2400,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 5,
                "title": "5. Input & Output (I/O)",
                "level": "Basics",
                "duration": "16:10",
                "theory": "Input in C is handled via scanf() and getchar(). Output is generated using printf() and putchar(). scanf reads user values into memory addresses using the address-of operator (&).",
                "practical": "#include <stdio.h>\n\nint main() {\n    int number = 10;\n    printf(\"Stored number: %d\n\", number);\n    printf(\"Memory address of number: %p\n\", (void*)&number);\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    char name[] = \"Mohan\";\n    int score = 98;\n    printf(\"Student Name: %s\nScore: %d / 100\n\", name, score);\n    return 0;\n}",
                "expectedOutput": "Student Name: Mohan\nScore: 98 / 100",
                "questions": [
                    {
                        "q": "Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "\n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "%s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 3600,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 6,
                "title": "6. Control Statements (If-Else & Switch)",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "Control statements alter program execution flow based on conditions. The if-else construct tests boolean logic, while switch-case provides multi-branch selection based on integral/character values with break statements preventing fall-through.",
                "practical": "#include <stdio.h>\n\nint main() {\n    int marks = 85;\n    if (marks >= 90) {\n        printf(\"Grade: A+\n\");\n    } else if (marks >= 75) {\n        printf(\"Grade: A (Passed)\n\");\n    } else {\n        printf(\"Grade: B\n\");\n    }\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    int day = 3;\n    switch(day) {\n        case 1: printf(\"Monday\n\"); break;\n        case 2: printf(\"Tuesday\n\"); break;\n        case 3: printf(\"Wednesday: Coding Day!\n\"); break;\n        default: printf(\"Other day\n\");\n    }\n    return 0;\n}",
                "expectedOutput": "Wednesday: Coding Day!",
                "questions": [
                    {
                        "q": "What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "'default' executes when no case matches."
                    },
                    {
                        "q": "What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 4800,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 7,
                "title": "7. Loops (For, While, Do-While)",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "Loops execute a block of statements repeatedly. 'for' loops are used when the iteration count is known beforehand; 'while' checks condition before execution; 'do-while' guarantees at least one execution before condition checking.",
                "practical": "#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n        sum += i;\n    }\n    printf(\"Sum of 1 to 5: %d\n\", sum);\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 4; i++) {\n        printf(\"Step %d: Learning Path Active\n\", i);\n    }\n    return 0;\n}",
                "expectedOutput": "Step 1: Learning Path Active\nStep 2: Learning Path Active\nStep 3: Learning Path Active\nStep 4: Learning Path Active",
                "questions": [
                    {
                        "q": "Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "Initialization executes strictly once at the start."
                    },
                    {
                        "q": "How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 6300,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 8,
                "title": "8. Functions & Scope",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "Functions are modular, reusable blocks of code that take parameters, perform operations, and return a result. C uses Call-by-Value by default. Recursive functions call themselves with a base case to prevent stack overflow.",
                "practical": "#include <stdio.h>\n\nint calculateFactorial(int n) {\n    if (n <= 1) return 1;\n    return n * calculateFactorial(n - 1);\n}\n\nint main() {\n    printf(\"Factorial of 5: %d\n\", calculateFactorial(5));\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int res = add(25, 75);\n    printf(\"Result of 25 + 75 = %d\n\", res);\n    return 0;\n}",
                "expectedOutput": "Result of 25 + 75 = 100",
                "questions": [
                    {
                        "q": "What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "void return type means the function returns no data."
                    },
                    {
                        "q": "Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 7800,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 9,
                "title": "9. Arrays & Data Structures",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "An array in C is a contiguous collection of elements of the same data type stored sequentially in memory. Array indices start at 0. Multi-dimensional arrays represent tabular matrices.",
                "practical": "#include <stdio.h>\n\nint main() {\n    int scores[5] = {90, 85, 78, 92, 88};\n    for(int i = 0; i < 5; i++) {\n        printf(\"Score[%d] = %d\n\", i, scores[i]);\n    }\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    int primes[] = {2, 3, 5, 7, 11};\n    printf(\"First prime: %d, Third prime: %d\n\", primes[0], primes[2]);\n    return 0;\n}",
                "expectedOutput": "First prime: 2, Third prime: 5",
                "questions": [
                    {
                        "q": "What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 9600,
                "videoId": "KJgsSFOSQv0"
            },
            {
                "id": 10,
                "title": "10. Pointers & Memory Management",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "Pointers are variables that store the memory address of another variable. The dereference operator (*) accesses the value at that address. Dynamic memory allocation functions malloc(), calloc(), realloc(), and free() allow manual heap management.",
                "practical": "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int num = 100;\n    int *ptr = &num; // ptr stores address of num\n    \n    printf(\"Value of num: %d\n\", num);\n    printf(\"Address of num: %p\n\", (void*)ptr);\n    printf(\"Value via dereference *ptr: %d\n\", *ptr);\n    \n    // Dynamic memory\n    int *dynArr = (int*)malloc(3 * sizeof(int));\n    dynArr[0] = 10; dynArr[1] = 20; dynArr[2] = 30;\n    free(dynArr);\n    return 0;\n}",
                "compilerCode": "#include <stdio.h>\n\nint main() {\n    int val = 500;\n    int *p = &val;\n    *p = 750; // Modify val via pointer\n    printf(\"Updated val through pointer: %d\n\", val);\n    return 0;\n}",
                "expectedOutput": "Updated val through pointer: 750",
                "questions": [
                    {
                        "q": "Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "& (address-of) returns variable memory address."
                    },
                    {
                        "q": "Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "* dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 11400,
                "videoId": "KJgsSFOSQv0"
            }
        ],
        "videoId": "KJgsSFOSQv0",
        "videoTitle": "C Programming Tutorial for Beginners",
        "videoDuration": "3:46:15"
    },
    "cpp": {
        "id": "cpp",
        "name": "C++ Programming",
        "symbol": "C++",
        "icon": "⚙️",
        "color": "#6366f1",
        "badge": "8 C++ Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "C++ Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering C++ Introduction & Setup');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "C++: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[C++ Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "C++: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[C++ Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "C++: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[C++ Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "C++: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[C++ Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "C++: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "C++ Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering C++ Variables & Types');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "C++: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[C++ Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "C++: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[C++ Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "C++: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[C++ Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "C++: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[C++ Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "C++: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 800,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "C++ Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering C++ Data Types & Structures');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "C++: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[C++ Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "C++: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[C++ Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "C++: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[C++ Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "C++: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[C++ Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "C++: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1600,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "C++ Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering C++ Operators & Logic');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "C++: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[C++ Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "C++: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[C++ Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "C++: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[C++ Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "C++: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[C++ Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "C++: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 2500,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "C++ Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering C++ Input & Output');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "C++: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[C++ Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "C++: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[C++ Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "C++: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[C++ Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "C++: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[C++ Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "C++: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 3800,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "C++ Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering C++ Control Statements');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "C++: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[C++ Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "C++: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[C++ Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "C++: 'default' executes when no case matches."
                    },
                    {
                        "q": "[C++ Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "C++: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[C++ Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "C++: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 5100,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "C++ Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering C++ Loops & Iterations');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "C++: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[C++ Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "C++: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[C++ Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "C++: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[C++ Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "C++: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[C++ Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "C++: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 6600,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "C++ Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering C++ Functions & Methods');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "C++: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[C++ Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "C++: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[C++ Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "C++: void return type means the function returns no data."
                    },
                    {
                        "q": "[C++ Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "C++: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[C++ Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "C++: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 8200,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "C++ Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering C++ Arrays & Collections');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "C++: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[C++ Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "C++: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[C++ Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "C++: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[C++ Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "C++: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[C++ Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "C++: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 10000,
                "videoId": "vLnPwxZdW4Y"
            },
            {
                "id": 10,
                "title": "10. Advanced C++ Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "C++ Advanced C++ Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in C++.",
                "practical": "// C++ Practical Implementation\n// Topic: Advanced C++ Concepts\nconsole.log('Mastering C++ Advanced C++ Concepts');",
                "compilerCode": "// C++ Interactive Compiler\n// Write and test your code below:\nprint('Welcome to C++! Code running successfully.');",
                "expectedOutput": "Welcome to C++! Code running successfully.",
                "questions": [
                    {
                        "q": "[C++ Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "C++: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[C++ Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "C++: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[C++ Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "C++: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[C++ Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "C++: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[C++ Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "C++: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 12000,
                "videoId": "vLnPwxZdW4Y"
            }
        ],
        "videoId": "vLnPwxZdW4Y",
        "videoTitle": "C++ Tutorial for Beginners - Full Course",
        "videoDuration": "4:01:19"
    },
    "python": {
        "id": "python",
        "name": "Python Programming",
        "symbol": "Py",
        "icon": "🐍",
        "color": "#eab308",
        "badge": "8 Python Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "Python Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering Python Introduction & Setup');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "Python: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[Python Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "Python: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[Python Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "Python: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[Python Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "Python: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[Python Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "Python: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "Python Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering Python Variables & Types');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "Python: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[Python Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "Python: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[Python Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "Python: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[Python Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "Python: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[Python Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Python: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 520,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "Python Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering Python Data Types & Structures');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "Python: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[Python Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "Python: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[Python Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "Python: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[Python Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "Python: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[Python Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "Python: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1150,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "Python Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering Python Operators & Logic');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "Python: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[Python Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "Python: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[Python Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "Python: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[Python Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "Python: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[Python Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "Python: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 1900,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "Python Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering Python Input & Output');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "Python: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[Python Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "Python: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[Python Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "Python: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[Python Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "Python: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[Python Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "Python: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 2750,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "Python Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering Python Control Statements');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "Python: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[Python Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "Python: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[Python Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "Python: 'default' executes when no case matches."
                    },
                    {
                        "q": "[Python Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "Python: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[Python Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "Python: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 3700,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "Python Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering Python Loops & Iterations');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "Python: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[Python Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "Python: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[Python Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "Python: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[Python Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Python: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[Python Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "Python: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 4900,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "Python Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering Python Functions & Methods');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "Python: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[Python Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "Python: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[Python Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "Python: void return type means the function returns no data."
                    },
                    {
                        "q": "[Python Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "Python: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[Python Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "Python: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 6200,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "Python Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering Python Arrays & Collections');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "Python: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[Python Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "Python: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[Python Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "Python: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[Python Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "Python: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[Python Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "Python: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 7700,
                "videoId": "_uQrJ0TkZlc"
            },
            {
                "id": 10,
                "title": "10. Advanced Python Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "Python Advanced Python Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in Python.",
                "practical": "// Python Practical Implementation\n// Topic: Advanced Python Concepts\nconsole.log('Mastering Python Advanced Python Concepts');",
                "compilerCode": "// Python Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Python! Code running successfully.');",
                "expectedOutput": "Welcome to Python! Code running successfully.",
                "questions": [
                    {
                        "q": "[Python Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "Python: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[Python Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "Python: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[Python Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "Python: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[Python Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "Python: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[Python Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "Python: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 9500,
                "videoId": "_uQrJ0TkZlc"
            }
        ],
        "videoId": "_uQrJ0TkZlc",
        "videoTitle": "Python Tutorial for Beginners [Full Course]",
        "videoDuration": "6:14:07"
    },
    "java": {
        "id": "java",
        "name": "Java Programming",
        "symbol": "Java",
        "icon": "☕",
        "color": "#ef4444",
        "badge": "8 Java Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "Java Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering Java Introduction & Setup');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "Java: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[Java Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "Java: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[Java Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "Java: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[Java Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "Java: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[Java Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "Java: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "Java Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering Java Variables & Types');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "Java: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[Java Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "Java: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[Java Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "Java: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[Java Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "Java: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[Java Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Java: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 600,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "Java Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering Java Data Types & Structures');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "Java: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[Java Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "Java: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[Java Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "Java: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[Java Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "Java: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[Java Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "Java: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1200,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "Java Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering Java Operators & Logic');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "Java: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[Java Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "Java: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[Java Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "Java: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[Java Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "Java: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[Java Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "Java: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 1900,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "Java Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering Java Input & Output');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "Java: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[Java Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "Java: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[Java Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "Java: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[Java Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "Java: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[Java Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "Java: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 2700,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "Java Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering Java Control Statements');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "Java: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[Java Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "Java: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[Java Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "Java: 'default' executes when no case matches."
                    },
                    {
                        "q": "[Java Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "Java: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[Java Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "Java: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 3600,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "Java Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering Java Loops & Iterations');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "Java: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[Java Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "Java: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[Java Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "Java: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[Java Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Java: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[Java Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "Java: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 4600,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "Java Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering Java Functions & Methods');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "Java: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[Java Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "Java: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[Java Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "Java: void return type means the function returns no data."
                    },
                    {
                        "q": "[Java Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "Java: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[Java Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "Java: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 5700,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "Java Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering Java Arrays & Collections');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "Java: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[Java Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "Java: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[Java Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "Java: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[Java Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "Java: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[Java Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "Java: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 6900,
                "videoId": "A74TOX803D0"
            },
            {
                "id": 10,
                "title": "10. Advanced Java Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "Java Advanced Java Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in Java.",
                "practical": "// Java Practical Implementation\n// Topic: Advanced Java Concepts\nconsole.log('Mastering Java Advanced Java Concepts');",
                "compilerCode": "// Java Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Java! Code running successfully.');",
                "expectedOutput": "Welcome to Java! Code running successfully.",
                "questions": [
                    {
                        "q": "[Java Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "Java: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[Java Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "Java: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[Java Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "Java: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[Java Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "Java: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[Java Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "Java: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 8100,
                "videoId": "A74TOX803D0"
            }
        ],
        "videoId": "A74TOX803D0",
        "videoTitle": "Java Tutorial for Beginners",
        "videoDuration": "2:31:00"
    },
    "javascript": {
        "id": "javascript",
        "name": "JavaScript Programming",
        "symbol": "JS",
        "icon": "🟨",
        "color": "#f59e0b",
        "badge": "8 JavaScript Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "JavaScript Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering JavaScript Introduction & Setup');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[JavaScript Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[JavaScript Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[JavaScript Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "JavaScript: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[JavaScript Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "JavaScript: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "JavaScript Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering JavaScript Variables & Types');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[JavaScript Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[JavaScript Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[JavaScript Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[JavaScript Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 240,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "JavaScript Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering JavaScript Data Types & Structures');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "JavaScript: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[JavaScript Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[JavaScript Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[JavaScript Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[JavaScript Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 540,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "JavaScript Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering JavaScript Operators & Logic');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[JavaScript Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[JavaScript Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "JavaScript: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[JavaScript Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[JavaScript Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 900,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "JavaScript Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering JavaScript Input & Output');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[JavaScript Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[JavaScript Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[JavaScript Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "JavaScript: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[JavaScript Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 1320,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "JavaScript Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering JavaScript Control Statements');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[JavaScript Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[JavaScript Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: 'default' executes when no case matches."
                    },
                    {
                        "q": "[JavaScript Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[JavaScript Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 1800,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "JavaScript Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering JavaScript Loops & Iterations');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[JavaScript Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "JavaScript: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[JavaScript Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "JavaScript: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[JavaScript Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[JavaScript Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "JavaScript: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 2280,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "JavaScript Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering JavaScript Functions & Methods');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[JavaScript Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[JavaScript Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: void return type means the function returns no data."
                    },
                    {
                        "q": "[JavaScript Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[JavaScript Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 2760,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "JavaScript Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering JavaScript Arrays & Collections');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[JavaScript Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[JavaScript Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "JavaScript: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[JavaScript Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[JavaScript Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 3180,
                "videoId": "W6NZfCO5SIk"
            },
            {
                "id": 10,
                "title": "10. Advanced JavaScript Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "JavaScript Advanced JavaScript Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in JavaScript.",
                "practical": "// JavaScript Practical Implementation\n// Topic: Advanced JavaScript Concepts\nconsole.log('Mastering JavaScript Advanced JavaScript Concepts');",
                "compilerCode": "// JavaScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to JavaScript! Code running successfully.');",
                "expectedOutput": "Welcome to JavaScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[JavaScript Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[JavaScript Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "JavaScript: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[JavaScript Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[JavaScript Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[JavaScript Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "JavaScript: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 3480,
                "videoId": "W6NZfCO5SIk"
            }
        ],
        "videoId": "W6NZfCO5SIk",
        "videoTitle": "JavaScript Tutorial for Beginners: Crash Course",
        "videoDuration": "1:00:00"
    },
    "typescript": {
        "id": "typescript",
        "name": "TypeScript Programming",
        "symbol": "TS",
        "icon": "📘",
        "color": "#3b82f6",
        "badge": "8 TypeScript Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "TypeScript Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering TypeScript Introduction & Setup');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[TypeScript Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[TypeScript Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[TypeScript Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "TypeScript: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[TypeScript Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "TypeScript: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "TypeScript Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering TypeScript Variables & Types');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[TypeScript Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[TypeScript Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[TypeScript Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[TypeScript Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 260,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "TypeScript Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering TypeScript Data Types & Structures');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "TypeScript: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[TypeScript Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[TypeScript Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[TypeScript Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[TypeScript Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 580,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "TypeScript Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering TypeScript Operators & Logic');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[TypeScript Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[TypeScript Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "TypeScript: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[TypeScript Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[TypeScript Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 960,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "TypeScript Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering TypeScript Input & Output');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[TypeScript Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[TypeScript Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[TypeScript Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "TypeScript: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[TypeScript Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 1380,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "TypeScript Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering TypeScript Control Statements');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[TypeScript Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[TypeScript Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: 'default' executes when no case matches."
                    },
                    {
                        "q": "[TypeScript Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[TypeScript Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 1860,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "TypeScript Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering TypeScript Loops & Iterations');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[TypeScript Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "TypeScript: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[TypeScript Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "TypeScript: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[TypeScript Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[TypeScript Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "TypeScript: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 2340,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "TypeScript Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering TypeScript Functions & Methods');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[TypeScript Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[TypeScript Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: void return type means the function returns no data."
                    },
                    {
                        "q": "[TypeScript Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[TypeScript Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 2760,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "TypeScript Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering TypeScript Arrays & Collections');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[TypeScript Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[TypeScript Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "TypeScript: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[TypeScript Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[TypeScript Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 3120,
                "videoId": "d56mG7DezGs"
            },
            {
                "id": 10,
                "title": "10. Advanced TypeScript Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "TypeScript Advanced TypeScript Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in TypeScript.",
                "practical": "// TypeScript Practical Implementation\n// Topic: Advanced TypeScript Concepts\nconsole.log('Mastering TypeScript Advanced TypeScript Concepts');",
                "compilerCode": "// TypeScript Interactive Compiler\n// Write and test your code below:\nprint('Welcome to TypeScript! Code running successfully.');",
                "expectedOutput": "Welcome to TypeScript! Code running successfully.",
                "questions": [
                    {
                        "q": "[TypeScript Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[TypeScript Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "TypeScript: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[TypeScript Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[TypeScript Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[TypeScript Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "TypeScript: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 3360,
                "videoId": "d56mG7DezGs"
            }
        ],
        "videoId": "d56mG7DezGs",
        "videoTitle": "TypeScript Tutorial for Beginners",
        "videoDuration": "58:00"
    },
    "r": {
        "id": "r",
        "name": "R Programming",
        "symbol": "R",
        "icon": "📊",
        "color": "#2563eb",
        "badge": "8 R Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "R Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering R Introduction & Setup');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "R: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[R Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "R: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[R Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "R: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[R Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "R: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[R Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "R: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "R Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering R Variables & Types');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "R: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[R Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "R: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[R Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "R: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[R Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "R: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[R Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "R: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 540,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "R Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering R Data Types & Structures');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "R: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[R Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "R: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[R Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "R: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[R Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "R: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[R Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "R: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1140,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "R Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering R Operators & Logic');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "R: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[R Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "R: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[R Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "R: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[R Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "R: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[R Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "R: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 1800,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "R Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering R Input & Output');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "R: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[R Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "R: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[R Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "R: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[R Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "R: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[R Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "R: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 2520,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "R Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering R Control Statements');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "R: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[R Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "R: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[R Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "R: 'default' executes when no case matches."
                    },
                    {
                        "q": "[R Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "R: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[R Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "R: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 3300,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "R Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering R Loops & Iterations');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "R: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[R Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "R: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[R Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "R: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[R Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "R: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[R Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "R: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 4140,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "R Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering R Functions & Methods');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "R: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[R Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "R: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[R Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "R: void return type means the function returns no data."
                    },
                    {
                        "q": "[R Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "R: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[R Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "R: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 5040,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "R Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering R Arrays & Collections');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "R: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[R Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "R: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[R Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "R: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[R Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "R: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[R Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "R: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 6000,
                "videoId": "_V8eKsto3Ug"
            },
            {
                "id": 10,
                "title": "10. Advanced R Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "R Advanced R Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in R.",
                "practical": "// R Practical Implementation\n// Topic: Advanced R Concepts\nconsole.log('Mastering R Advanced R Concepts');",
                "compilerCode": "// R Interactive Compiler\n// Write and test your code below:\nprint('Welcome to R! Code running successfully.');",
                "expectedOutput": "Welcome to R! Code running successfully.",
                "questions": [
                    {
                        "q": "[R Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "R: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[R Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "R: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[R Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "R: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[R Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "R: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[R Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "R: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 7020,
                "videoId": "_V8eKsto3Ug"
            }
        ],
        "videoId": "_V8eKsto3Ug",
        "videoTitle": "R Programming Tutorial - Learn the Basics",
        "videoDuration": "2:10:00"
    },
    "cuda": {
        "id": "cuda",
        "name": "CUDA Programming",
        "symbol": "CUDA",
        "icon": "🚀",
        "color": "#10b981",
        "badge": "8 CUDA Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "CUDA Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering CUDA Introduction & Setup');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[CUDA Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "CUDA: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[CUDA Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[CUDA Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "CUDA: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[CUDA Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "CUDA: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "CUDA Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering CUDA Variables & Types');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "CUDA: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[CUDA Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[CUDA Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "CUDA: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[CUDA Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[CUDA Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 600,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "CUDA Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering CUDA Data Types & Structures');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "CUDA: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[CUDA Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "CUDA: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[CUDA Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "CUDA: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[CUDA Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "CUDA: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[CUDA Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "CUDA: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1300,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "CUDA Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering CUDA Operators & Logic');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "CUDA: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[CUDA Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[CUDA Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "CUDA: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[CUDA Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "CUDA: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[CUDA Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "CUDA: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 2100,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "CUDA Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering CUDA Input & Output');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "CUDA: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[CUDA Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "CUDA: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[CUDA Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "CUDA: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[CUDA Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "CUDA: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[CUDA Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "CUDA: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 3000,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "CUDA Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering CUDA Control Statements');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "CUDA: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[CUDA Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[CUDA Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "CUDA: 'default' executes when no case matches."
                    },
                    {
                        "q": "[CUDA Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "CUDA: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[CUDA Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "CUDA: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 4000,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "CUDA Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering CUDA Loops & Iterations');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "CUDA: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[CUDA Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "CUDA: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[CUDA Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "CUDA: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[CUDA Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "CUDA: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[CUDA Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "CUDA: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 5100,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "CUDA Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering CUDA Functions & Methods');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[CUDA Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "CUDA: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[CUDA Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "CUDA: void return type means the function returns no data."
                    },
                    {
                        "q": "[CUDA Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "CUDA: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[CUDA Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 6300,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "CUDA Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering CUDA Arrays & Collections');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "CUDA: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[CUDA Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[CUDA Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "CUDA: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[CUDA Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[CUDA Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 7600,
                "videoId": "2NGT_2iBf1w"
            },
            {
                "id": 10,
                "title": "10. Advanced CUDA Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "CUDA Advanced CUDA Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in CUDA.",
                "practical": "// CUDA Practical Implementation\n// Topic: Advanced CUDA Concepts\nconsole.log('Mastering CUDA Advanced CUDA Concepts');",
                "compilerCode": "// CUDA Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CUDA! Code running successfully.');",
                "expectedOutput": "Welcome to CUDA! Code running successfully.",
                "questions": [
                    {
                        "q": "[CUDA Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "CUDA: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[CUDA Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "CUDA: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[CUDA Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "CUDA: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[CUDA Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "CUDA: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[CUDA Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "CUDA: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 9000,
                "videoId": "2NGT_2iBf1w"
            }
        ],
        "videoId": "2NGT_2iBf1w",
        "videoTitle": "CUDA Programming Course – High-Performance GPU Computing",
        "videoDuration": "2:40:00"
    },
    "ruby": {
        "id": "ruby",
        "name": "Ruby Programming",
        "symbol": "Ruby",
        "icon": "💎",
        "color": "#f43f5e",
        "badge": "8 Ruby Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "Ruby Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering Ruby Introduction & Setup');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[Ruby Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "Ruby: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[Ruby Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[Ruby Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "Ruby: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[Ruby Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "Ruby: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "Ruby Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering Ruby Variables & Types');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "Ruby: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[Ruby Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[Ruby Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "Ruby: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[Ruby Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[Ruby Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 800,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "Ruby Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering Ruby Data Types & Structures');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "Ruby: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[Ruby Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "Ruby: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[Ruby Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "Ruby: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[Ruby Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "Ruby: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[Ruby Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "Ruby: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1700,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "Ruby Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering Ruby Operators & Logic');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "Ruby: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[Ruby Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[Ruby Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "Ruby: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[Ruby Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "Ruby: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[Ruby Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "Ruby: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 2700,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "Ruby Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering Ruby Input & Output');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "Ruby: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[Ruby Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "Ruby: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[Ruby Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "Ruby: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[Ruby Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "Ruby: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[Ruby Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "Ruby: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 3800,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "Ruby Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering Ruby Control Statements');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "Ruby: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[Ruby Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[Ruby Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "Ruby: 'default' executes when no case matches."
                    },
                    {
                        "q": "[Ruby Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "Ruby: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[Ruby Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "Ruby: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 5000,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "Ruby Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering Ruby Loops & Iterations');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "Ruby: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[Ruby Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "Ruby: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[Ruby Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "Ruby: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[Ruby Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "Ruby: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[Ruby Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "Ruby: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 6400,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "Ruby Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering Ruby Functions & Methods');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[Ruby Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "Ruby: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[Ruby Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "Ruby: void return type means the function returns no data."
                    },
                    {
                        "q": "[Ruby Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "Ruby: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[Ruby Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 7900,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "Ruby Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering Ruby Arrays & Collections');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "Ruby: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[Ruby Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[Ruby Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "Ruby: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[Ruby Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[Ruby Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 9500,
                "videoId": "t_ispmWmdjY"
            },
            {
                "id": 10,
                "title": "10. Advanced Ruby Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "Ruby Advanced Ruby Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in Ruby.",
                "practical": "// Ruby Practical Implementation\n// Topic: Advanced Ruby Concepts\nconsole.log('Mastering Ruby Advanced Ruby Concepts');",
                "compilerCode": "// Ruby Interactive Compiler\n// Write and test your code below:\nprint('Welcome to Ruby! Code running successfully.');",
                "expectedOutput": "Welcome to Ruby! Code running successfully.",
                "questions": [
                    {
                        "q": "[Ruby Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "Ruby: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[Ruby Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "Ruby: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[Ruby Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "Ruby: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[Ruby Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "Ruby: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[Ruby Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "Ruby: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 11200,
                "videoId": "t_ispmWmdjY"
            }
        ],
        "videoId": "t_ispmWmdjY",
        "videoTitle": "Ruby Programming Language - Full Course",
        "videoDuration": "4:02:42"
    },
    "php": {
        "id": "php",
        "name": "PHP Programming",
        "symbol": "PHP",
        "icon": "🐘",
        "color": "#8b5cf6",
        "badge": "8 PHP Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "PHP Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering PHP Introduction & Setup');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "PHP: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[PHP Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "PHP: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[PHP Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "PHP: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[PHP Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "PHP: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[PHP Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "PHP: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "PHP Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering PHP Variables & Types');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "PHP: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[PHP Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "PHP: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[PHP Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "PHP: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[PHP Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "PHP: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[PHP Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "PHP: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 850,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "PHP Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering PHP Data Types & Structures');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "PHP: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[PHP Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "PHP: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[PHP Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "PHP: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[PHP Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "PHP: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[PHP Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "PHP: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1800,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "PHP Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering PHP Operators & Logic');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "PHP: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[PHP Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "PHP: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[PHP Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "PHP: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[PHP Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "PHP: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[PHP Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "PHP: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 2900,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "PHP Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering PHP Input & Output');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "PHP: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[PHP Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "PHP: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[PHP Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "PHP: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[PHP Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "PHP: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[PHP Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "PHP: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 4100,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "PHP Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering PHP Control Statements');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "PHP: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[PHP Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "PHP: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[PHP Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "PHP: 'default' executes when no case matches."
                    },
                    {
                        "q": "[PHP Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "PHP: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[PHP Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "PHP: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 5400,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "PHP Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering PHP Loops & Iterations');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "PHP: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[PHP Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "PHP: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[PHP Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "PHP: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[PHP Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "PHP: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[PHP Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "PHP: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 6800,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "PHP Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering PHP Functions & Methods');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "PHP: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[PHP Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "PHP: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[PHP Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "PHP: void return type means the function returns no data."
                    },
                    {
                        "q": "[PHP Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "PHP: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[PHP Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "PHP: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 8300,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "PHP Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering PHP Arrays & Collections');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "PHP: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[PHP Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "PHP: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[PHP Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "PHP: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[PHP Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "PHP: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[PHP Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "PHP: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 10000,
                "videoId": "OK_JCtrrv-c"
            },
            {
                "id": 10,
                "title": "10. Advanced PHP Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "PHP Advanced PHP Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in PHP.",
                "practical": "// PHP Practical Implementation\n// Topic: Advanced PHP Concepts\nconsole.log('Mastering PHP Advanced PHP Concepts');",
                "compilerCode": "// PHP Interactive Compiler\n// Write and test your code below:\nprint('Welcome to PHP! Code running successfully.');",
                "expectedOutput": "Welcome to PHP! Code running successfully.",
                "questions": [
                    {
                        "q": "[PHP Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "PHP: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[PHP Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "PHP: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[PHP Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "PHP: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[PHP Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "PHP: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[PHP Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "PHP: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 11800,
                "videoId": "OK_JCtrrv-c"
            }
        ],
        "videoId": "OK_JCtrrv-c",
        "videoTitle": "PHP for Beginners - Full Course",
        "videoDuration": "4:36:00"
    },
    "html": {
        "id": "html",
        "name": "HTML Programming",
        "symbol": "HTML",
        "icon": "🌐",
        "color": "#f97316",
        "badge": "8 HTML Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "HTML Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering HTML Introduction & Setup');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "HTML: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[HTML Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "HTML: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[HTML Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "HTML: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[HTML Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "HTML: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[HTML Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "HTML: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "HTML Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering HTML Variables & Types');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "HTML: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[HTML Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "HTML: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[HTML Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "HTML: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[HTML Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "HTML: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[HTML Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "HTML: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 500,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "HTML Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering HTML Data Types & Structures');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "HTML: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[HTML Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "HTML: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[HTML Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "HTML: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[HTML Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "HTML: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[HTML Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "HTML: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1100,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "HTML Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering HTML Operators & Logic');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "HTML: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[HTML Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "HTML: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[HTML Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "HTML: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[HTML Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "HTML: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[HTML Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "HTML: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 1750,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "HTML Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering HTML Input & Output');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "HTML: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[HTML Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "HTML: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[HTML Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "HTML: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[HTML Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "HTML: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[HTML Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "HTML: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 2450,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "HTML Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering HTML Control Statements');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "HTML: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[HTML Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "HTML: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[HTML Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "HTML: 'default' executes when no case matches."
                    },
                    {
                        "q": "[HTML Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "HTML: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[HTML Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "HTML: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 3200,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "HTML Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering HTML Loops & Iterations');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "HTML: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[HTML Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "HTML: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[HTML Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "HTML: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[HTML Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "HTML: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[HTML Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "HTML: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 4000,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "HTML Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering HTML Functions & Methods');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "HTML: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[HTML Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "HTML: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[HTML Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "HTML: void return type means the function returns no data."
                    },
                    {
                        "q": "[HTML Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "HTML: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[HTML Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "HTML: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 4850,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "HTML Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering HTML Arrays & Collections');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "HTML: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[HTML Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "HTML: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[HTML Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "HTML: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[HTML Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "HTML: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[HTML Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "HTML: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 5750,
                "videoId": "pQN-pnXPaVg"
            },
            {
                "id": 10,
                "title": "10. Advanced HTML Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "HTML Advanced HTML Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in HTML.",
                "practical": "// HTML Practical Implementation\n// Topic: Advanced HTML Concepts\nconsole.log('Mastering HTML Advanced HTML Concepts');",
                "compilerCode": "// HTML Interactive Compiler\n// Write and test your code below:\nprint('Welcome to HTML! Code running successfully.');",
                "expectedOutput": "Welcome to HTML! Code running successfully.",
                "questions": [
                    {
                        "q": "[HTML Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "HTML: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[HTML Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "HTML: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[HTML Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "HTML: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[HTML Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "HTML: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[HTML Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "HTML: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 6700,
                "videoId": "pQN-pnXPaVg"
            }
        ],
        "videoId": "pQN-pnXPaVg",
        "videoTitle": "HTML Full Course - Build a Website Tutorial",
        "videoDuration": "2:02:32"
    },
    "css": {
        "id": "css",
        "name": "CSS Programming",
        "symbol": "CSS",
        "icon": "🎨",
        "color": "#06b6d4",
        "badge": "8 CSS Language Learning",
        "totalTopics": 10,
        "lessons": [
            {
                "id": 1,
                "title": "1. Introduction & Setup",
                "level": "Basics",
                "duration": "12:30",
                "theory": "CSS Introduction & Setup: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Introduction & Setup\nconsole.log('Mastering CSS Introduction & Setup');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] Who developed the C programming language?",
                        "options": [
                            "James Gosling",
                            "Dennis Ritchie",
                            "Bjarne Stroustrup",
                            "Guido van Rossum"
                        ],
                        "ans": 1,
                        "explain": "CSS: Dennis Ritchie developed C at Bell Labs in 1972."
                    },
                    {
                        "q": "[CSS Question 2] Which header file is required for the printf() function?",
                        "options": [
                            "<conio.h>",
                            "<stdlib.h>",
                            "<stdio.h>",
                            "<string.h>"
                        ],
                        "ans": 2,
                        "explain": "CSS: <stdio.h> (Standard Input/Output) declares printf() and scanf()."
                    },
                    {
                        "q": "[CSS Question 3] What is the return type of the main() function in standard C?",
                        "options": [
                            "void",
                            "int",
                            "float",
                            "char"
                        ],
                        "ans": 1,
                        "explain": "CSS: Standard C specifies 'int main()' returning 0 on successful execution."
                    },
                    {
                        "q": "[CSS Question 4] Which symbol terminates every statement in C?",
                        "options": [
                            ":",
                            ".",
                            ";",
                            ","
                        ],
                        "ans": 2,
                        "explain": "CSS: Semicolon (;) terminates statements in C."
                    },
                    {
                        "q": "[CSS Question 5] C is primarily what paradigm of programming language?",
                        "options": [
                            "Procedural",
                            "Object-Oriented",
                            "Pure Functional",
                            "Declarative"
                        ],
                        "ans": 0,
                        "explain": "CSS: C is a structured, procedural programming language."
                    }
                ],
                "videoStart": 0,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 2,
                "title": "2. Variables & Types",
                "level": "Basics",
                "duration": "14:15",
                "theory": "CSS Variables & Types: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Variables & Types\nconsole.log('Mastering CSS Variables & Types');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] Which keyword makes a variable unchangeable in C?",
                        "options": [
                            "static",
                            "const",
                            "fixed",
                            "immutable"
                        ],
                        "ans": 1,
                        "explain": "CSS: 'const' creates read-only variables in C."
                    },
                    {
                        "q": "[CSS Question 2] Which of the following is a valid variable name in C?",
                        "options": [
                            "1total",
                            "total_sum",
                            "int",
                            "total$"
                        ],
                        "ans": 1,
                        "explain": "CSS: Variable names can include letters, digits, and underscores, but cannot start with a digit or be a keyword."
                    },
                    {
                        "q": "[CSS Question 3] What format specifier is used to print an integer in C?",
                        "options": [
                            "%f",
                            "%c",
                            "%d",
                            "%s"
                        ],
                        "ans": 2,
                        "explain": "CSS: %d (or %i) prints signed decimal integers."
                    },
                    {
                        "q": "[CSS Question 4] Where does variable memory get allocated by default in a function?",
                        "options": [
                            "Heap",
                            "Stack",
                            "ROM",
                            "Hard Disk"
                        ],
                        "ans": 1,
                        "explain": "CSS: Local variables are allocated on the function call stack."
                    },
                    {
                        "q": "[CSS Question 5] What is the scope of a local variable declared inside a function?",
                        "options": [
                            "Global",
                            "Function Block only",
                            "File wide",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "CSS: Local variables exist only within the enclosing block {}."
                    }
                ],
                "videoStart": 650,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 3,
                "title": "3. Data Types & Structures",
                "level": "Basics",
                "duration": "15:40",
                "theory": "CSS Data Types & Structures: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Data Types & Structures\nconsole.log('Mastering CSS Data Types & Structures');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] What is the size of a standard 'char' in C?",
                        "options": [
                            "1 byte",
                            "2 bytes",
                            "4 bytes",
                            "8 bytes"
                        ],
                        "ans": 0,
                        "explain": "CSS: A char in standard C is always guaranteed to be 1 byte (8 bits)."
                    },
                    {
                        "q": "[CSS Question 2] Which operator returns the memory size of a variable in bytes?",
                        "options": [
                            "size()",
                            "sizeof",
                            "length()",
                            "bytes()"
                        ],
                        "ans": 1,
                        "explain": "CSS: sizeof is a compile-time operator in C that returns size in bytes."
                    },
                    {
                        "q": "[CSS Question 3] What is the format specifier for a float in printf?",
                        "options": [
                            "%d",
                            "%f",
                            "%c",
                            "%lf"
                        ],
                        "ans": 1,
                        "explain": "CSS: %f is used for floats, and %lf for doubles in printf/scanf."
                    },
                    {
                        "q": "[CSS Question 4] Which data type stores true or false in C99 standard?",
                        "options": [
                            "boolean",
                            "_Bool",
                            "bit",
                            "flag"
                        ],
                        "ans": 1,
                        "explain": "CSS: C99 introduced _Bool, typically used via <stdbool.h> as 'bool'."
                    },
                    {
                        "q": "[CSS Question 5] Which data type has the largest numeric range?",
                        "options": [
                            "short int",
                            "int",
                            "long double",
                            "float"
                        ],
                        "ans": 2,
                        "explain": "CSS: long double offers the highest precision and largest range (often 12 or 16 bytes)."
                    }
                ],
                "videoStart": 1400,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 4,
                "title": "4. Operators & Logic",
                "level": "Basics",
                "duration": "13:20",
                "theory": "CSS Operators & Logic: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Operators & Logic\nconsole.log('Mastering CSS Operators & Logic');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] Which operator yields the remainder of integer division?",
                        "options": [
                            "/",
                            "%",
                            "#",
                            "&"
                        ],
                        "ans": 1,
                        "explain": "CSS: % (modulus) returns the division remainder."
                    },
                    {
                        "q": "[CSS Question 2] What is the result of expression 5 + 2 * 3 in C?",
                        "options": [
                            "21",
                            "11",
                            "16",
                            "10"
                        ],
                        "ans": 1,
                        "explain": "CSS: Multiplication has higher precedence than addition: 2 * 3 = 6, 5 + 6 = 11."
                    },
                    {
                        "q": "[CSS Question 3] Which operator performs logical NOT?",
                        "options": [
                            "~",
                            "!",
                            "^",
                            "!="
                        ],
                        "ans": 1,
                        "explain": "CSS: ! is logical NOT; ~ is bitwise NOT."
                    },
                    {
                        "q": "[CSS Question 4] What does the post-increment operator (x++) do?",
                        "options": [
                            "Increments then uses value",
                            "Uses current value then increments",
                            "Multiplies by 2",
                            "Adds 2"
                        ],
                        "ans": 1,
                        "explain": "CSS: x++ returns the current value before adding 1."
                    },
                    {
                        "q": "[CSS Question 5] Which operator is the ternary conditional operator in C?",
                        "options": [
                            "??",
                            "? :",
                            "if-else",
                            "&&"
                        ],
                        "ans": 1,
                        "explain": "CSS: ? : is the ternary conditional operator (cond ? val1 : val2)."
                    }
                ],
                "videoStart": 2250,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 5,
                "title": "5. Input & Output",
                "level": "Basics",
                "duration": "16:10",
                "theory": "CSS Input & Output: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Input & Output\nconsole.log('Mastering CSS Input & Output');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] Why is the '&' symbol used before variable name in scanf()?",
                        "options": [
                            "To format string",
                            "To pass the memory address",
                            "To clear buffer",
                            "To encrypt input"
                        ],
                        "ans": 1,
                        "explain": "CSS: scanf requires pointer addresses (&) to write values directly into variable memory."
                    },
                    {
                        "q": "[CSS Question 2] Which function reads a single character from standard input?",
                        "options": [
                            "putchar()",
                            "getchar()",
                            "read()",
                            "cin()"
                        ],
                        "ans": 1,
                        "explain": "CSS: getchar() reads the next available character from stdin."
                    },
                    {
                        "q": "[CSS Question 3] What does '\n' represent in a printf statement?",
                        "options": [
                            "Null byte",
                            "Newline character",
                            "Tab space",
                            "Carriage return"
                        ],
                        "ans": 1,
                        "explain": "CSS: \n prints a newline and moves cursor to the next line."
                    },
                    {
                        "q": "[CSS Question 4] Which format specifier reads a string up to whitespace?",
                        "options": [
                            "%s",
                            "%c",
                            "%str",
                            "%txt"
                        ],
                        "ans": 0,
                        "explain": "CSS: %s reads a continuous sequence of characters until whitespace."
                    },
                    {
                        "q": "[CSS Question 5] What is standard error stream in C?",
                        "options": [
                            "stdout",
                            "stdin",
                            "stderr",
                            "stdlog"
                        ],
                        "ans": 2,
                        "explain": "CSS: stderr is the predefined standard error stream in C."
                    }
                ],
                "videoStart": 3200,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 6,
                "title": "6. Control Statements",
                "level": "Intermediate",
                "duration": "17:30",
                "theory": "CSS Control Statements: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Control Statements\nconsole.log('Mastering CSS Control Statements');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] What keyword stops execution inside a switch case from falling through?",
                        "options": [
                            "stop",
                            "break",
                            "exit",
                            "return"
                        ],
                        "ans": 1,
                        "explain": "CSS: 'break' exits the switch block, preventing fall-through to lower cases."
                    },
                    {
                        "q": "[CSS Question 2] Can a switch statement evaluate a float or double in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only if cast",
                            "In C11"
                        ],
                        "ans": 1,
                        "explain": "CSS: Switch cases in C only accept integral constants (int, char, enum)."
                    },
                    {
                        "q": "[CSS Question 3] What case executes when no other switch cases match?",
                        "options": [
                            "catch",
                            "finally",
                            "default",
                            "else"
                        ],
                        "ans": 2,
                        "explain": "CSS: 'default' executes when no case matches."
                    },
                    {
                        "q": "[CSS Question 4] What is the truth value of integer 0 in a C if condition?",
                        "options": [
                            "True",
                            "False",
                            "Compilation error",
                            "Undefined"
                        ],
                        "ans": 1,
                        "explain": "CSS: In C, 0 represents False, and any non-zero value represents True."
                    },
                    {
                        "q": "[CSS Question 5] Which statement skips remaining loop body and proceeds to next iteration?",
                        "options": [
                            "break",
                            "continue",
                            "goto",
                            "skip"
                        ],
                        "ans": 1,
                        "explain": "CSS: 'continue' jumps straight to the next iteration."
                    }
                ],
                "videoStart": 4250,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 7,
                "title": "7. Loops & Iterations",
                "level": "Intermediate",
                "duration": "18:00",
                "theory": "CSS Loops & Iterations: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Loops & Iterations\nconsole.log('Mastering CSS Loops & Iterations');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] Which loop guarantees execution at least once regardless of condition?",
                        "options": [
                            "for",
                            "while",
                            "do-while",
                            "nested for"
                        ],
                        "ans": 2,
                        "explain": "CSS: do-while is post-test; its body executes before the condition is checked."
                    },
                    {
                        "q": "[CSS Question 2] What causes an infinite loop in a for statement?",
                        "options": [
                            "Omitting condition like for(;;)",
                            "Using negative numbers",
                            "Using float counter",
                            "Having 2 statements"
                        ],
                        "ans": 0,
                        "explain": "CSS: for(;;) has no termination condition and runs indefinitely unless broken."
                    },
                    {
                        "q": "[CSS Question 3] Which part of for(int i=0; i<n; i++) runs only once?",
                        "options": [
                            "Initialization (int i=0)",
                            "Condition (i<n)",
                            "Update (i++)",
                            "Body"
                        ],
                        "ans": 0,
                        "explain": "CSS: Initialization executes strictly once at the start."
                    },
                    {
                        "q": "[CSS Question 4] How many times will: int i=0; while(i<3){i++;} execute the body?",
                        "options": [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite"
                        ],
                        "ans": 1,
                        "explain": "CSS: i starts at 0, executes for i=0, i=1, i=2 (3 times total)."
                    },
                    {
                        "q": "[CSS Question 5] Can loops be nested inside another loop in C?",
                        "options": [
                            "Yes",
                            "No",
                            "Only up to 2 levels",
                            "Only while loops"
                        ],
                        "ans": 0,
                        "explain": "CSS: Loops can be nested to arbitrary depths allowed by compiler resources."
                    }
                ],
                "videoStart": 5400,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 8,
                "title": "8. Functions & Methods",
                "level": "Intermediate",
                "duration": "19:15",
                "theory": "CSS Functions & Methods: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Functions & Methods\nconsole.log('Mastering CSS Functions & Methods');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] What is call-by-value in C functions?",
                        "options": [
                            "Original variable is modified",
                            "A copy of argument value is passed",
                            "Addresses are passed",
                            "Values are saved to disk"
                        ],
                        "ans": 1,
                        "explain": "CSS: Call-by-value copies the argument value; changes inside function do not affect caller."
                    },
                    {
                        "q": "[CSS Question 2] What must every recursive function have to stop infinite recursion?",
                        "options": [
                            "Pointer",
                            "Base case",
                            "Global variable",
                            "Loop"
                        ],
                        "ans": 1,
                        "explain": "CSS: A base condition halts recursive calls and prevents stack overflow."
                    },
                    {
                        "q": "[CSS Question 3] What does the 'void' return type signify for a function?",
                        "options": [
                            "Returns 0",
                            "Returns NULL",
                            "Does not return any value",
                            "Returns empty string"
                        ],
                        "ans": 2,
                        "explain": "CSS: void return type means the function returns no data."
                    },
                    {
                        "q": "[CSS Question 4] Where can a static local variable retain its value across calls?",
                        "options": [
                            "Stack",
                            "Data segment memory",
                            "CPU Cache",
                            "ROM"
                        ],
                        "ans": 1,
                        "explain": "CSS: static variables persist in the data segment across function invocations."
                    },
                    {
                        "q": "[CSS Question 5] What is function prototyping?",
                        "options": [
                            "Executing function early",
                            "Declaring return type and parameter types before definition",
                            "Deleting function",
                            "Inlining code"
                        ],
                        "ans": 1,
                        "explain": "CSS: Prototypes notify compiler of function signature before full definition."
                    }
                ],
                "videoStart": 6650,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 9,
                "title": "9. Arrays & Collections",
                "level": "Advanced",
                "duration": "20:30",
                "theory": "CSS Arrays & Collections: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Arrays & Collections\nconsole.log('Mastering CSS Arrays & Collections');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] What is the index of the first element in a C array?",
                        "options": [
                            "1",
                            "-1",
                            "0",
                            "Undefined"
                        ],
                        "ans": 2,
                        "explain": "CSS: C arrays are zero-indexed; the first element is at index 0."
                    },
                    {
                        "q": "[CSS Question 2] How are array elements stored in computer memory?",
                        "options": [
                            "Random locations",
                            "Contiguous (consecutive) memory blocks",
                            "Linked nodes",
                            "In ROM"
                        ],
                        "ans": 1,
                        "explain": "CSS: Array elements reside in contiguous memory locations."
                    },
                    {
                        "q": "[CSS Question 3] What happens if you access an array index beyond its declared bound in C?",
                        "options": [
                            "Compilation error",
                            "BoundsException",
                            "Undefined behavior (memory corruption)",
                            "Returns 0"
                        ],
                        "ans": 2,
                        "explain": "CSS: C does not perform bounds checking; out-of-bounds access is undefined behavior."
                    },
                    {
                        "q": "[CSS Question 4] What is the name of an array variable without brackets equivalent to?",
                        "options": [
                            "Array length",
                            "Pointer to first element (&arr[0])",
                            "Null pointer",
                            "Last element"
                        ],
                        "ans": 1,
                        "explain": "CSS: Array name decays into a pointer pointing to its first element."
                    },
                    {
                        "q": "[CSS Question 5] How do you calculate number of elements in array 'arr' of integers?",
                        "options": [
                            "sizeof(arr)",
                            "sizeof(arr) / sizeof(arr[0])",
                            "length(arr)",
                            "count(arr)"
                        ],
                        "ans": 1,
                        "explain": "CSS: Total array byte size divided by size of single element yields element count."
                    }
                ],
                "videoStart": 8000,
                "videoId": "1PnVor36_40"
            },
            {
                "id": 10,
                "title": "10. Advanced CSS Concepts",
                "level": "Advanced",
                "duration": "22:15",
                "theory": "CSS Advanced CSS Concepts: Learn core concepts, architectural best practices, syntax patterns, and production usage in CSS.",
                "practical": "// CSS Practical Implementation\n// Topic: Advanced CSS Concepts\nconsole.log('Mastering CSS Advanced CSS Concepts');",
                "compilerCode": "// CSS Interactive Compiler\n// Write and test your code below:\nprint('Welcome to CSS! Code running successfully.');",
                "expectedOutput": "Welcome to CSS! Code running successfully.",
                "questions": [
                    {
                        "q": "[CSS Question 1] Which operator is used to obtain the memory address of a variable?",
                        "options": [
                            "*",
                            "&",
                            "#",
                            "%"
                        ],
                        "ans": 1,
                        "explain": "CSS: & (address-of) returns variable memory address."
                    },
                    {
                        "q": "[CSS Question 2] Which operator dereferences a pointer to access the target value?",
                        "options": [
                            "&",
                            "*",
                            "->",
                            "."
                        ],
                        "ans": 1,
                        "explain": "CSS: * dereferences pointer to inspect or alter target memory."
                    },
                    {
                        "q": "[CSS Question 3] Which function deallocates memory allocated by malloc()?",
                        "options": [
                            "delete()",
                            "free()",
                            "clear()",
                            "release()"
                        ],
                        "ans": 1,
                        "explain": "CSS: free() returns dynamically allocated heap memory back to OS."
                    },
                    {
                        "q": "[CSS Question 4] What is a pointer that points to no valid memory address called?",
                        "options": [
                            "Dangling pointer",
                            "NULL pointer",
                            "Void pointer",
                            "Wild pointer"
                        ],
                        "ans": 1,
                        "explain": "CSS: A NULL pointer holds value 0 or ((void*)0), indicating it points nowhere."
                    },
                    {
                        "q": "[CSS Question 5] What is a memory leak in C?",
                        "options": [
                            "Stack overflow",
                            "Allocated heap memory not freed before pointers are lost",
                            "Segmentation fault",
                            "Syntax error"
                        ],
                        "ans": 1,
                        "explain": "CSS: Memory leak occurs when heap memory is allocated with malloc but never freed."
                    }
                ],
                "videoStart": 9500,
                "videoId": "1PnVor36_40"
            }
        ],
        "videoId": "1PnVor36_40",
        "videoTitle": "CSS Tutorial - Zero to Hero (Complete Course)",
        "videoDuration": "6:18:37"
    }
};
