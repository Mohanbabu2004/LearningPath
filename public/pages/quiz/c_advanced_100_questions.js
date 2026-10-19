window.questionBank = window.questionBank || {};
window.questionBank.C = window.questionBank.C || {};

window.questionBank.C.Advanced = [
    {
        "question": "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "answer": "O(log n)"
    },
    {
        "question": "In a singly linked list node structure (struct Node { int data; struct Node *next; });, how do you free all nodes safely?",
        "options": [
            "free(head);",
            "Iterate through nodes saving the next pointer before freeing current node",
            "delete head;",
            "free(head->next);"
        ],
        "answer": "Iterate through nodes saving the next pointer before freeing current node"
    },
    {
        "question": "Which data structure follows LIFO (Last In First Out) principle?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Tree"
        ],
        "answer": "Stack"
    },
    {
        "question": "Which data structure follows FIFO (First In First Out) principle?",
        "options": [
            "Stack",
            "Queue",
            "Priority Queue",
            "Binary Tree"
        ],
        "answer": "Queue"
    },
    {
        "question": "What is the worst-case time complexity of inserting a node at the head of a singly linked list?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        "answer": "O(1)"
    },
    {
        "question": "What distinguishes a doubly linked list from a singly linked list?",
        "options": [
            "Doubly linked list nodes contain pointers to both next and previous nodes",
            "Doubly linked list contains two data fields",
            "Doubly linked list uses double precision floats",
            "Doubly linked list cannot be freed"
        ],
        "answer": "Doubly linked list nodes contain pointers to both next and previous nodes"
    },
    {
        "question": "What is a circular linked list in C?",
        "options": [
            "A linked list where the last node points back to the first node (head)",
            "A linked list shaped like a square",
            "A list with 3 pointers per node",
            "A list stored in circular heap buffer"
        ],
        "answer": "A linked list where the last node points back to the first node (head)"
    },
    {
        "question": "How is a Hash Table collision resolved using chaining in C?",
        "options": [
            "Storing colliding items in a linked list at the same bucket index",
            "Overwriting existing data",
            "Re-allocating heap memory",
            "Throwing stack overflow"
        ],
        "answer": "Storing colliding items in a linked list at the same bucket index"
    },
    {
        "question": "Which data structure is typically used to implement a Priority Queue efficiently?",
        "options": [
            "Array",
            "Heap (Min-Heap / Max-Heap)",
            "Singly Linked List",
            "Stack"
        ],
        "answer": "Heap (Min-Heap / Max-Heap)"
    },
    {
        "question": "What is the worst-case time complexity of Quick Sort algorithm?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(n^2)",
            "O(log n)"
        ],
        "answer": "O(n^2)"
    },
    {
        "question": "What is the average-case time complexity of Quick Sort algorithm?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "question": "Which sorting algorithm guarantees O(n log n) worst-case time complexity and is stable?",
        "options": [
            "Quick Sort",
            "Merge Sort",
            "Bubble Sort",
            "Insertion Sort"
        ],
        "answer": "Merge Sort"
    },
    {
        "question": "What is a sentinel node in linked list data structures?",
        "options": [
            "A dummy node used to simplify boundary conditions during insertion/deletion",
            "The tail node",
            "A NULL pointer",
            "A encrypted node"
        ],
        "answer": "A dummy node used to simplify boundary conditions during insertion/deletion"
    },
    {
        "question": "What is the result of attempting to pop from an empty stack implementation in C?",
        "options": [
            "Stack Overflow",
            "Stack Underflow",
            "Memory Leak",
            "Buffer Overrun"
        ],
        "answer": "Stack Underflow"
    },
    {
        "question": "What is the in-order traversal of a Binary Search Tree (BST)?",
        "options": [
            "Root, Left, Right",
            "Left, Root, Right (yields sorted order)",
            "Left, Right, Root",
            "Right, Left, Root"
        ],
        "answer": "Left, Root, Right (yields sorted order)"
    },
    {
        "question": "What is the difference between 'int *arr[5]' and 'int (*arr)[5]' in C?",
        "options": [
            "int *arr[5] is an array of 5 integer pointers; int (*arr)[5] is a pointer to an array of 5 integers",
            "They are identical",
            "int (*arr)[5] is illegal syntax",
            "int *arr[5] allocates 25 bytes"
        ],
        "answer": "int *arr[5] is an array of 5 integer pointers; int (*arr)[5] is a pointer to an array of 5 integers"
    },
    {
        "question": "What is a jump table in C?",
        "options": [
            "An array of function pointers used for rapid O(1) branch dispatch",
            "A assembly instruction",
            "A recursive loop",
            "A heap allocation table"
        ],
        "answer": "An array of function pointers used for rapid O(1) branch dispatch"
    },
    {
        "question": "Which C memory segment stores uninitialized global and static variables?",
        "options": [
            "Text Segment",
            "Data Segment (Initialized)",
            "BSS Segment (Block Started by Symbol)",
            "Stack Segment"
        ],
        "answer": "BSS Segment (Block Started by Symbol)"
    },
    {
        "question": "Which C memory segment stores compiled machine instructions / CPU code?",
        "options": [
            "BSS Segment",
            "Heap Segment",
            "Text / Code Segment",
            "Stack Segment"
        ],
        "answer": "Text / Code Segment"
    },
    {
        "question": "Which C memory segment stores initialized global and static variables?",
        "options": [
            "Text Segment",
            "Initialized Data Segment",
            "BSS Segment",
            "Stack Segment"
        ],
        "answer": "Initialized Data Segment"
    },
    {
        "question": "What is the direction of growth for Stack memory on most x86/x64 architectures?",
        "options": [
            "Grows upwards (towards higher memory addresses)",
            "Grows downwards (towards lower memory addresses)",
            "Does not change address",
            "Random allocation"
        ],
        "answer": "Grows downwards (towards lower memory addresses)"
    },
    {
        "question": "What is memory aliasing in C?",
        "options": [
            "When two or more pointers reference the same memory location",
            "Renaming variables with typedef",
            "Converting char to int",
            "Stack corruption"
        ],
        "answer": "When two or more pointers reference the same memory location"
    },
    {
        "question": "Which C99 keyword informs the compiler that a pointer is the sole access mechanism for an object, enabling aggressive optimization?",
        "options": [
            "const",
            "volatile",
            "restrict",
            "inline"
        ],
        "answer": "restrict"
    },
    {
        "question": "What is strict aliasing rule in C?",
        "options": [
            "Rule stating that pointers of different types (except char*) cannot point to the same memory location",
            "Rule for structure alignment",
            "Rule for array sizing",
            "Rule for function return types"
        ],
        "answer": "Rule stating that pointers of different types (except char*) cannot point to the same memory location"
    },
    {
        "question": "What is a sequence point in C expression evaluation?",
        "options": [
            "A point in execution where all side effects of previous evaluations are guaranteed to be complete",
            "A semicolon only",
            "A function call return",
            "A memory alignment boundary"
        ],
        "answer": "A point in execution where all side effects of previous evaluations are guaranteed to be complete"
    },
    {
        "question": "What is the evaluation result of 'i = i++' in C?",
        "options": [
            "i + 1",
            "i",
            "Undefined Behavior (modifying a scalar twice between sequence points)",
            "Syntax Error"
        ],
        "answer": "Undefined Behavior (modifying a scalar twice between sequence points)"
    },
    {
        "question": "What is opaque pointer (pimpl pattern) in C API design?",
        "options": [
            "A pointer to an incomplete structure type whose internal implementation details are hidden from public header",
            "A NULL pointer",
            "A void** pointer",
            "A pointer in ROM"
        ],
        "answer": "A pointer to an incomplete structure type whose internal implementation details are hidden from public header"
    },
    {
        "question": "What is offsetof macro used for in stddef.h?",
        "options": [
            "Calculates the byte offset of a structure member from the beginning of the structure",
            "Calculates array length",
            "Calculates pointer size",
            "Calculates stack depth"
        ],
        "answer": "Calculates the byte offset of a structure member from the beginning of the structure"
    },
    {
        "question": "What is the container_of macro commonly used for in Linux kernel C programming?",
        "options": [
            "Determines the parent structure address given a pointer to one of its internal members",
            "Allocates container heap",
            "Frees linked list",
            "Calculates struct array length"
        ],
        "answer": "Determines the parent structure address given a pointer to one of its internal members"
    },
    {
        "question": "What is stack frame in C function execution?",
        "options": [
            "A region of stack memory allocated for a single function call storing arguments, return address, and local variables",
            "A global data structure",
            "A register block",
            "A thread pool"
        ],
        "answer": "A region of stack memory allocated for a single function call storing arguments, return address, and local variables"
    },
    {
        "question": "How do you SET the n-th bit of an integer 'x' to 1 in C?",
        "options": [
            "x = x | (1 << n)",
            "x = x & ~(1 << n)",
            "x = x ^ (1 << n)",
            "x = x >> n"
        ],
        "answer": "x = x | (1 << n)"
    },
    {
        "question": "How do you CLEAR the n-th bit of an integer 'x' to 0 in C?",
        "options": [
            "x = x | (1 << n)",
            "x = x & ~(1 << n)",
            "x = x ^ (1 << n)",
            "x = x << n"
        ],
        "answer": "x = x & ~(1 << n)"
    },
    {
        "question": "How do you TOGGLE / FLIP the n-th bit of an integer 'x' in C?",
        "options": [
            "x = x | (1 << n)",
            "x = x & ~(1 << n)",
            "x = x ^ (1 << n)",
            "x = ~x"
        ],
        "answer": "x = x ^ (1 << n)"
    },
    {
        "question": "How do you CHECK if the n-th bit of an integer 'x' is set (1)?",
        "options": [
            "(x & (1 << n)) != 0",
            "(x | (1 << n)) == 0",
            "(x ^ (1 << n)) == 0",
            "(x >> n) == 0"
        ],
        "answer": "(x & (1 << n)) != 0"
    },
    {
        "question": "What does the bitwise trick '(x & (x - 1)) == 0' test for a positive integer x?",
        "options": [
            "Tests if x is an even number",
            "Tests if x is a power of 2",
            "Tests if x is a prime number",
            "Tests if x is negative"
        ],
        "answer": "Tests if x is a power of 2"
    },
    {
        "question": "What does 'x = x & (x - 1)' perform on an integer x?",
        "options": [
            "Sets all bits to 1",
            "Clears the lowest set bit of x",
            "Doubles x",
            "Inverts x"
        ],
        "answer": "Clears the lowest set bit of x"
    },
    {
        "question": "What is Little-Endian byte order?",
        "options": [
            "Least Significant Byte (LSB) is stored at the lowest memory address",
            "Most Significant Byte (MSB) is stored at lowest memory address",
            "Bytes are stored in random order",
            "Bytes are compressed"
        ],
        "answer": "Least Significant Byte (LSB) is stored at the lowest memory address"
    },
    {
        "question": "What is Big-Endian byte order?",
        "options": [
            "Least Significant Byte is stored at lowest address",
            "Most Significant Byte (MSB) is stored at the lowest memory address (network byte order)",
            "Bitwise reverse order",
            "Floating point format"
        ],
        "answer": "Most Significant Byte (MSB) is stored at the lowest memory address (network byte order)"
    },
    {
        "question": "How can you check system endianness programmatically in C?",
        "options": [
            "Cast int x = 1 to char* pointer and inspect the first byte (*(char*)&x)",
            "Check sizeof(int)",
            "Check __LINE__",
            "Call malloc(1)"
        ],
        "answer": "Cast int x = 1 to char* pointer and inspect the first byte (*(char*)&x)"
    },
    {
        "question": "What does 'htons()' function in sockets network programming do?",
        "options": [
            "Converts host short integer to network byte order (Big-Endian)",
            "Converts string to int",
            "Frees socket",
            "Computes hash"
        ],
        "answer": "Converts host short integer to network byte order (Big-Endian)"
    },
    {
        "question": "What is sign extension when right shifting a signed negative integer in C?",
        "options": [
            "The sign bit (1) is replicated into the high-order empty bits",
            "Zeros are inserted",
            "Value becomes positive",
            "Causes overflow exception"
        ],
        "answer": "The sign bit (1) is replicated into the high-order empty bits"
    },
    {
        "question": "What is logical right shift vs arithmetic right shift?",
        "options": [
            "Logical shift fills high-order bits with 0s; Arithmetic shift preserves sign bit for signed numbers",
            "Logical shift uses 64-bit; Arithmetic uses 32-bit",
            "They are identical in C",
            "Arithmetic shift works on floats"
        ],
        "answer": "Logical shift fills high-order bits with 0s; Arithmetic shift preserves sign bit for signed numbers"
    },
    {
        "question": "What is the result of ~0 (bitwise NOT on 0) assuming 32-bit signed int?",
        "options": [
            "0",
            "-1 (0xFFFFFFFF)",
            "1",
            "2147483647"
        ],
        "answer": "-1 (0xFFFFFFFF)"
    },
    {
        "question": "What bitwise operation swaps two integer variables a and b without using a temporary variable?",
        "options": [
            "a = a ^ b; b = a ^ b; a = a ^ b;",
            "a = a & b; b = a | b; a = a & b;",
            "a = ~a; b = ~b;",
            "a = a << b; b = b >> a;"
        ],
        "answer": "a = a ^ b; b = a ^ b; a = a ^ b;"
    },
    {
        "question": "What is bit-masking in low-level C development?",
        "options": [
            "Using bitwise AND/OR/XOR operators with a mask pattern to isolate or modify specific bits",
            "Encrypting passwords",
            "Hiding structure names",
            "Formatting printf outputs"
        ],
        "answer": "Using bitwise AND/OR/XOR operators with a mask pattern to isolate or modify specific bits"
    },
    {
        "question": "Which standard header file provides support for variadic functions (functions taking variable arguments)?",
        "options": [
            "<stdarg.h>",
            "<stdlib.h>",
            "<stdio.h>",
            "<varargs.h>"
        ],
        "answer": "<stdarg.h>"
    },
    {
        "question": "Which macro initializes a va_list object to iterate over variadic arguments?",
        "options": [
            "va_start",
            "va_init",
            "va_begin",
            "va_open"
        ],
        "answer": "va_start"
    },
    {
        "question": "Which macro fetches the next argument of specified type from va_list?",
        "options": [
            "va_arg",
            "va_get",
            "va_next",
            "va_fetch"
        ],
        "answer": "va_arg"
    },
    {
        "question": "Which macro cleans up memory associated with a va_list object before function return?",
        "options": [
            "va_end",
            "va_close",
            "va_free",
            "va_clean"
        ],
        "answer": "va_end"
    },
    {
        "question": "How do you declare a variadic function signature in C?",
        "options": [
            "void print_values(int count, ...);",
            "void print_values(int count, args[]);",
            "void print_values(var count);",
            "void print_values(...)"
        ],
        "answer": "void print_values(int count, ...);"
    },
    {
        "question": "Which C11 feature allows type-generic macro selection based on argument type?",
        "options": [
            "_Generic",
            "_Typeof",
            "template",
            "_Poly"
        ],
        "answer": "_Generic"
    },
    {
        "question": "Which C11 keyword performs compile-time assertion testing?",
        "options": [
            "_Static_assert",
            "assert",
            "_Compile_assert",
            "pragma assert"
        ],
        "answer": "_Static_assert"
    },
    {
        "question": "What parameters does _Static_assert take in C11?",
        "options": [
            "(constant_expression, \"error_message_string\")",
            "(variable, min_value)",
            "(type, size)",
            "(bool_condition)"
        ],
        "answer": "(constant_expression, \"error_message_string\")"
    },
    {
        "question": "Which C11 operator queries the alignment requirement of a specified type in bytes?",
        "options": [
            "_Alignof",
            "alignof",
            "sizeof_align",
            "offsetof"
        ],
        "answer": "_Alignof"
    },
    {
        "question": "Which C99 feature allows defining inline functions to reduce function call overhead?",
        "options": [
            "inline",
            "fastcall",
            "__inline__",
            "macro_fn"
        ],
        "answer": "inline"
    },
    {
        "question": "What is a Variable Length Array (VLA) in C99?",
        "options": [
            "An automatic stack array whose size is determined at runtime via variable",
            "An array on heap created with malloc",
            "A vector class",
            "A reallocable array"
        ],
        "answer": "An automatic stack array whose size is determined at runtime via variable"
    },
    {
        "question": "Where is a Variable Length Array (VLA) allocated in memory?",
        "options": [
            "Stack Memory",
            "Heap Memory",
            "BSS Segment",
            "Text Segment"
        ],
        "answer": "Stack Memory"
    },
    {
        "question": "What is designated initializer syntax in C99 for structures?",
        "options": [
            "struct Point p = {.x = 10, .y = 20};",
            "struct Point p = (x: 10, y: 20);",
            "struct Point p = {x->10, y->20};",
            "struct Point p = set(10, 20);"
        ],
        "answer": "struct Point p = {.x = 10, .y = 20};"
    },
    {
        "question": "What is designated initializer syntax in C99 for arrays?",
        "options": [
            "int arr[10] = {[2] = 5, [7] = 9};",
            "int arr[10] = {index 2: 5};",
            "int arr[10] = (2=>5, 7=>9);",
            "int arr = [2:5];"
        ],
        "answer": "int arr[10] = {[2] = 5, [7] = 9};"
    },
    {
        "question": "What is a compound literal in C99?",
        "options": [
            "An unnamed temporary object created on the fly like (int[]){1, 2, 3}",
            "A multi-line macro",
            "A float array",
            "A combined string"
        ],
        "answer": "An unnamed temporary object created on the fly like (int[]){1, 2, 3}"
    },
    {
        "question": "Which standard header file provides facilities for handling asynchronous signal signals?",
        "options": [
            "<signal.h>",
            "<sys/signal.h>",
            "<process.h>",
            "<setjmp.h>"
        ],
        "answer": "<signal.h>"
    },
    {
        "question": "Which signal is sent to a process when Ctrl+C is pressed in terminal?",
        "options": [
            "SIGINT",
            "SIGTERM",
            "SIGKILL",
            "SIGSEGV"
        ],
        "answer": "SIGINT"
    },
    {
        "question": "Which signal indicates an illegal memory reference / Segmentation Fault?",
        "options": [
            "SIGSEGV",
            "SIGFPE",
            "SIGILL",
            "SIGABRT"
        ],
        "answer": "SIGSEGV"
    },
    {
        "question": "Which signal represents a floating point exception (e.g. division by zero)?",
        "options": [
            "SIGFPE",
            "SIGSEGV",
            "SIGINT",
            "SIGTRAP"
        ],
        "answer": "SIGFPE"
    },
    {
        "question": "Which signal CANNOT be caught, ignored, or blocked by a C application?",
        "options": [
            "SIGKILL",
            "SIGINT",
            "SIGTERM",
            "SIGUSR1"
        ],
        "answer": "SIGKILL"
    },
    {
        "question": "Which function raises / sends a signal to the current running process?",
        "options": [
            "raise()",
            "kill()",
            "send_signal()",
            "throw()"
        ],
        "answer": "raise()"
    },
    {
        "question": "Which function sets up a custom signal handler function for a specific signal?",
        "options": [
            "signal()",
            "set_signal()",
            "register_signal()",
            "handle_signal()"
        ],
        "answer": "signal()"
    },
    {
        "question": "Which header file provides setjmp() and longjmp() functions for non-local jumps?",
        "options": [
            "<setjmp.h>",
            "<signal.h>",
            "<stdlib.h>",
            "<goto.h>"
        ],
        "answer": "<setjmp.h>"
    },
    {
        "question": "What do setjmp() and longjmp() provide in C programming?",
        "options": [
            "Non-local goto mechanism to jump across function stack call boundaries (exception handling)",
            "Thread creation",
            "Heap allocation",
            "File locking"
        ],
        "answer": "Non-local goto mechanism to jump across function stack call boundaries (exception handling)"
    },
    {
        "question": "What is the return value of setjmp(env) when initially called to set the jump point?",
        "options": [
            "0",
            "1",
            "-1",
            "NULL"
        ],
        "answer": "0"
    },
    {
        "question": "Which library function retrieves the value of an environment variable in C?",
        "options": [
            "getenv()",
            "setenv()",
            "env_get()",
            "read_env()"
        ],
        "answer": "getenv()"
    },
    {
        "question": "Which function terminates process execution immediately and returns status to OS?",
        "options": [
            "exit()",
            "abort()",
            "stop()",
            "halt()"
        ],
        "answer": "exit()"
    },
    {
        "question": "What is the difference between exit() and _Exit() / _exit() in C?",
        "options": [
            "exit() performs cleanup (flushes buffers, calls atexit handlers); _Exit() terminates process immediately without buffer cleanup",
            "exit() is for C++; _Exit() is for C",
            "_Exit() restarts main",
            "No difference"
        ],
        "answer": "exit() performs cleanup (flushes buffers, calls atexit handlers); _Exit() terminates process immediately without buffer cleanup"
    },
    {
        "question": "Which function registers a cleanup function to be executed automatically when main() exits cleanly?",
        "options": [
            "atexit()",
            "on_exit()",
            "cleanup_register()",
            "exit_hook()"
        ],
        "answer": "atexit()"
    },
    {
        "question": "Which function generates an abnormal process termination signal (SIGABRT)?",
        "options": [
            "abort()",
            "exit()",
            "crash()",
            "terminate()"
        ],
        "answer": "abort()"
    },
    {
        "question": "Which standard macro/variable in errno.h stores the error code set by system library functions?",
        "options": [
            "errno",
            "error_code",
            "sys_err",
            "err_no"
        ],
        "answer": "errno"
    },
    {
        "question": "Which function prints a descriptive error message to stderr corresponding to current errno?",
        "options": [
            "perror()",
            "strerror()",
            "ferror()",
            "eprintf()"
        ],
        "answer": "perror()"
    },
    {
        "question": "Which function returns a pointer to the textual description string of a given error code 'errnum'?",
        "options": [
            "strerror()",
            "perror()",
            "err_string()",
            "get_error()"
        ],
        "answer": "strerror()"
    },
    {
        "question": "Which header file provides the diagnostic assert() macro?",
        "options": [
            "<assert.h>",
            "<debug.h>",
            "<stdlib.h>",
            "<test.h>"
        ],
        "answer": "<assert.h>"
    },
    {
        "question": "What happens when assert(expression) evaluates to false (0) at runtime?",
        "options": [
            "Prints expression, file name, line number to stderr and calls abort()",
            "Prints warning and continues",
            "Returns NULL",
            "Throws C++ exception"
        ],
        "answer": "Prints expression, file name, line number to stderr and calls abort()"
    },
    {
        "question": "Which macro definition disables all assert() macro statements in C during release compilation?",
        "options": [
            "#define NDEBUG",
            "#define DISABLE_ASSERT",
            "#define RELEASE_BUILD",
            "#define NO_DEBUG"
        ],
        "answer": "#define NDEBUG"
    },
    {
        "question": "Which open-source memory debugging tool is widely used to detect memory leaks and buffer overruns in compiled C binaries?",
        "options": [
            "Valgrind",
            "GDB",
            "Make",
            "GCC"
        ],
        "answer": "Valgrind"
    },
    {
        "question": "What compiler flag in GCC enables all standard warnings during compilation?",
        "options": [
            "-Wall",
            "-Wextra",
            "-g",
            "-O2"
        ],
        "answer": "-Wall"
    },
    {
        "question": "What compiler flag in GCC includes debugging symbols in compiled binary for debugging with GDB?",
        "options": [
            "-g",
            "-Wall",
            "-o",
            "-c"
        ],
        "answer": "-g"
    },
    {
        "question": "What is a Stack Overflow in C?",
        "options": [
            "When call stack memory limit is exceeded, typically caused by infinite recursion or excessively large local stack variables",
            "Allocating too much heap with malloc",
            "Overwriting string null terminator",
            "Bitwise overflow"
        ],
        "answer": "When call stack memory limit is exceeded, typically caused by infinite recursion or excessively large local stack variables"
    },
    {
        "question": "What is a Buffer Overflow / Buffer Overrun vulnerability?",
        "options": [
            "Writing data beyond the allocated boundary of a memory buffer, potentially overwriting adjacent stack return addresses",
            "Filling disk memory",
            "Reading file past EOF",
            "Stack leak"
        ],
        "answer": "Writing data beyond the allocated boundary of a memory buffer, potentially overwriting adjacent stack return addresses"
    },
    {
        "question": "Why is the standard library function gets() deprecated and removed from C11?",
        "options": [
            "Because it does not perform boundary checking on input length, leading to severe buffer overflow security flaws",
            "Because it is slow",
            "Because it returns float",
            "Because scanf replaced it"
        ],
        "answer": "Because it does not perform boundary checking on input length, leading to severe buffer overflow security flaws"
    },
    {
        "question": "Which safer alternative function should be used instead of gets()?",
        "options": [
            "fgets()",
            "scanf()",
            "fgetc()",
            "readline()"
        ],
        "answer": "fgets()"
    },
    {
        "question": "What is defensive programming in C?",
        "options": [
            "Designing code to handle unexpected input and invalid states gracefully (e.g., checking NULL pointers before dereferencing)",
            "Using firewall",
            "Compiling with -O3",
            "Encrypting binaries"
        ],
        "answer": "Designing code to handle unexpected input and invalid states gracefully (e.g., checking NULL pointers before dereferencing)"
    },
    {
        "question": "What is the result of dereferencing an uninitialized wild pointer in C?",
        "options": [
            "Undefined Behavior (crash, memory corruption, or subtle bugs)",
            "Always 0",
            "Automatic allocation",
            "Compiler error"
        ],
        "answer": "Undefined Behavior (crash, memory corruption, or subtle bugs)"
    },
    {
        "question": "What does compiler flag '-O2' or '-O3' in GCC specify?",
        "options": [
            "Optimization level for compiler performance tuning",
            "Output file version",
            "Object file level",
            "Operating system target"
        ],
        "answer": "Optimization level for compiler performance tuning"
    },
    {
        "question": "What is loop unrolling in compiler optimization?",
        "options": [
            "Replicating loop body multiple times to reduce loop control branch overhead",
            "Converting for loop to while loop",
            "Removing loop completely",
            "Flattening 2D array"
        ],
        "answer": "Replicating loop body multiple times to reduce loop control branch overhead"
    },
    {
        "question": "What is cache spatial locality in C memory access?",
        "options": [
            "Accessing memory locations that are close to each other in memory (e.g. row-major 2D array iteration)",
            "Accessing heap repeatedly",
            "Accessing global variables",
            "Random pointer jumps"
        ],
        "answer": "Accessing memory locations that are close to each other in memory (e.g. row-major 2D array iteration)"
    },
    {
        "question": "How are 2D arrays stored in memory in standard C?",
        "options": [
            "Row-Major order (elements of same row stored contiguously in memory)",
            "Column-Major order",
            "Diagonal order",
            "Linked blocks"
        ],
        "answer": "Row-Major order (elements of same row stored contiguously in memory)"
    },
    {
        "question": "Why is iterating a 2D array row by row faster than column by column in C?",
        "options": [
            "Row-major layout matches CPU cache lines, improving spatial locality and reducing cache misses",
            "Column iteration is illegal",
            "Row iteration uses fewer registers",
            "C compiler blocks column loops"
        ],
        "answer": "Row-major layout matches CPU cache lines, improving spatial locality and reducing cache misses"
    },
    {
        "question": "What is inline assembly in C compilers (e.g. __asm__ or asm)?",
        "options": [
            "Embedding raw assembly language instructions directly inside C source code",
            "Assembly output files",
            "Linker directives",
            "Macro functions"
        ],
        "answer": "Embedding raw assembly language instructions directly inside C source code"
    },
    {
        "question": "What is an ABI (Application Binary Interface)?",
        "options": [
            "Low-level binary interface defining calling conventions, alignment, and data type representations between compiled modules",
            "A high-level API",
            "A database protocol",
            "A preprocessor flag"
        ],
        "answer": "Low-level binary interface defining calling conventions, alignment, and data type representations between compiled modules"
    },
    {
        "question": "What is calling convention in C (e.g. cdecl vs stdcall)?",
        "options": [
            "Rules governing how function parameters are passed (registers vs stack) and who cleans up the stack",
            "Function naming rules",
            "Header inclusion rules",
            "Compiler installation guide"
        ],
        "answer": "Rules governing how function parameters are passed (registers vs stack) and who cleans up the stack"
    },
    {
        "question": "What does volatile keyword prevent the C compiler optimizer from doing?",
        "options": [
            "Caching variable values in registers or optimizing away repeated reads/writes to hardware addresses",
            "Modifying string literals",
            "Deleting pointers",
            "Exporting symbols"
        ],
        "answer": "Caching variable values in registers or optimizing away repeated reads/writes to hardware addresses"
    },
    {
        "question": "What is the ultimate goal of mastering C programming language?",
        "options": [
            "Building system software, operating systems, embedded systems, databases, high-performance engines, and gaining deep understanding of memory & hardware",
            "Writing HTML web pages",
            "Designing mobile app icons",
            "Creating CSS animations"
        ],
        "answer": "Building system software, operating systems, embedded systems, databases, high-performance engines, and gaining deep understanding of memory & hardware"
    }
];
