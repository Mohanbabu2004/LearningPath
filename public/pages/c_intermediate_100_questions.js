window.questionBank = window.questionBank || {};
window.questionBank.C = window.questionBank.C || {};

window.questionBank.C.Intermediate = [
    {
        "question": "What is pointer arithmetic in C primarily based on?",
        "options": [
            "1 byte constant jumps",
            "The size of the data type the pointer points to",
            "Bitwise operations",
            "The CPU architecture clock speed"
        ],
        "answer": "The size of the data type the pointer points to"
    },
    {
        "question": "If 'ptr' is an int pointer pointing to memory location 1000 (assuming 4-byte int), what location does 'ptr + 1' point to?",
        "options": [
            "1001",
            "1002",
            "1004",
            "1008"
        ],
        "answer": "1004"
    },
    {
        "question": "What does a 'void*' pointer represent in C?",
        "options": [
            "A pointer that points to nothing (NULL)",
            "A generic pointer that can point to data of any type",
            "An invalid pointer that causes segfaults",
            "A pointer that returns void"
        ],
        "answer": "A generic pointer that can point to data of any type"
    },
    {
        "question": "What is a dangling pointer in C?",
        "options": [
            "A pointer initialized to NULL",
            "A pointer pointing to a memory location that has been freed",
            "A pointer pointing to constant memory",
            "A pointer pointing to the main function"
        ],
        "answer": "A pointer pointing to a memory location that has been freed"
    },
    {
        "question": "What is a NULL pointer in C?",
        "options": [
            "A pointer assigned address 0 indicating it points to no valid memory",
            "A pointer that contains garbage address",
            "A pointer pointing to a void function",
            "A pointer created without a type"
        ],
        "answer": "A pointer assigned address 0 indicating it points to no valid memory"
    },
    {
        "question": "What does the declaration 'const int *ptr' mean?",
        "options": [
            "ptr is a constant pointer to a variable int",
            "ptr is a pointer to a constant int (the integer value cannot be modified through ptr)",
            "ptr is a constant pointer to a constant int",
            "ptr cannot be changed to point to another memory address"
        ],
        "answer": "ptr is a pointer to a constant int (the integer value cannot be modified through ptr)"
    },
    {
        "question": "What does the declaration 'int * const ptr' mean?",
        "options": [
            "ptr is a pointer to a constant int",
            "ptr is a constant pointer to an int (ptr address cannot be changed)",
            "ptr is a void pointer",
            "ptr points to a constant array"
        ],
        "answer": "ptr is a constant pointer to an int (ptr address cannot be changed)"
    },
    {
        "question": "What is a function pointer in C?",
        "options": [
            "A function that returns a pointer",
            "A pointer variable that stores the address of an executable function",
            "A pointer declared inside a function body",
            "A pointer passed as an array to main"
        ],
        "answer": "A pointer variable that stores the address of an executable function"
    },
    {
        "question": "How do you declare a function pointer 'fp' for a function returning void and taking an int argument?",
        "options": [
            "void *fp(int);",
            "void (*fp)(int);",
            "void fp*(int);",
            "int (*fp)(void);"
        ],
        "answer": "void (*fp)(int);"
    },
    {
        "question": "What does subtracting two pointers of the same type (ptr1 - ptr2) yield in C?",
        "options": [
            "The total byte offset",
            "The number of elements between the two memory addresses",
            "A NULL pointer",
            "A float value"
        ],
        "answer": "The number of elements between the two memory addresses"
    },
    {
        "question": "What happens if you dereference a NULL pointer in C?",
        "options": [
            "Returns 0",
            "Returns garbage value",
            "Causes a runtime Segmentation Fault / Crash",
            "Compiler warning only"
        ],
        "answer": "Causes a runtime Segmentation Fault / Crash"
    },
    {
        "question": "If 'arr' is an array name (int arr[5]), what is equivalent to 'arr[i]'?",
        "options": [
            "*(arr + i)",
            "&arr[i]",
            "*arr + i",
            "arr + *i"
        ],
        "answer": "*(arr + i)"
    },
    {
        "question": "What is double indirection / pointer to pointer in C?",
        "options": [
            "A pointer storing 64-bit float",
            "A pointer that stores the memory address of another pointer variable",
            "A pointer initialized twice",
            "A pointer to an array of size 2"
        ],
        "answer": "A pointer that stores the memory address of another pointer variable"
    },
    {
        "question": "How do you declare a pointer to a pointer to an integer?",
        "options": [
            "int *ptr;",
            "int **ptr;",
            "int &&ptr;",
            "int ptr**;"
        ],
        "answer": "int **ptr;"
    },
    {
        "question": "What is wild pointer in C?",
        "options": [
            "A pointer that has not been initialized to any valid memory address or NULL",
            "A pointer pointing to string literals",
            "A pointer used in dynamic allocation",
            "A global pointer"
        ],
        "answer": "A pointer that has not been initialized to any valid memory address or NULL"
    },
    {
        "question": "Which function allocates requested bytes of uninitialized memory dynamically on heap?",
        "options": [
            "calloc()",
            "malloc()",
            "realloc()",
            "alloc()"
        ],
        "answer": "malloc()"
    },
    {
        "question": "Which dynamic memory allocation function initializes all allocated bytes to zero?",
        "options": [
            "malloc()",
            "calloc()",
            "realloc()",
            "free()"
        ],
        "answer": "calloc()"
    },
    {
        "question": "What parameters does calloc() take?",
        "options": [
            "(size_t total_bytes)",
            "(size_t num_elements, size_t element_size)",
            "(void *ptr, size_t new_size)",
            "(int type, int size)"
        ],
        "answer": "(size_t num_elements, size_t element_size)"
    },
    {
        "question": "What does malloc() return if memory allocation fails due to insufficient heap space?",
        "options": [
            "0",
            "-1",
            "NULL",
            "Segmentation Fault"
        ],
        "answer": "NULL"
    },
    {
        "question": "Which function releases dynamically allocated heap memory back to system?",
        "options": [
            "delete()",
            "free()",
            "release()",
            "dealloc()"
        ],
        "answer": "free()"
    },
    {
        "question": "Which function resizes previously allocated dynamic memory space?",
        "options": [
            "malloc()",
            "realloc()",
            "resize()",
            "calloc()"
        ],
        "answer": "realloc()"
    },
    {
        "question": "What is a memory leak in C?",
        "options": [
            "Accessing out of bounds array indices",
            "Dynamically allocated memory that is no longer freed using free() before pointer loses reference",
            "Reading uninitialized variables",
            "Stack overflow due to deep recursion"
        ],
        "answer": "Dynamically allocated memory that is no longer freed using free() before pointer loses reference"
    },
    {
        "question": "What happens if you call free() on a NULL pointer?",
        "options": [
            "Program crashes with Segmentation Fault",
            "No operation is performed (safe operation)",
            "Compiler throws warning",
            "Re-allocates memory"
        ],
        "answer": "No operation is performed (safe operation)"
    },
    {
        "question": "Where is dynamically allocated memory stored during program execution?",
        "options": [
            "Stack Memory",
            "Heap Memory",
            "Code/Text Segment",
            "Data Segment"
        ],
        "answer": "Heap Memory"
    },
    {
        "question": "Where are local function parameters and variables allocated?",
        "options": [
            "Heap Memory",
            "Stack Memory",
            "BSS Segment",
            "Disk Cache"
        ],
        "answer": "Stack Memory"
    },
    {
        "question": "What is the return type of malloc() and calloc()?",
        "options": [
            "int*",
            "char*",
            "void*",
            "size_t"
        ],
        "answer": "void*"
    },
    {
        "question": "What does 'realloc(ptr, 0)' effectively act like in standard C?",
        "options": [
            "Frees memory (equivalent to free(ptr))",
            "Allocates 1GB memory",
            "Duplicates ptr",
            "Clears stack"
        ],
        "answer": "Frees memory (equivalent to free(ptr))"
    },
    {
        "question": "What happens if realloc(NULL, size) is called?",
        "options": [
            "Returns NULL",
            "Behaves exactly like malloc(size)",
            "Crashes program",
            "Frees NULL"
        ],
        "answer": "Behaves exactly like malloc(size)"
    },
    {
        "question": "What is the consequence of double freeing a pointer (freeing the same pointer twice)?",
        "options": [
            "Undefined behavior / potential heap corruption crash",
            "Safely ignored second time",
            "Allocates double memory",
            "Frees stack memory"
        ],
        "answer": "Undefined behavior / potential heap corruption crash"
    },
    {
        "question": "Which header file is required to use malloc, calloc, realloc, and free?",
        "options": [
            "<stdio.h>",
            "<stdlib.h>",
            "<string.h>",
            "<memory.h>"
        ],
        "answer": "<stdlib.h>"
    },
    {
        "question": "What is the main difference between a struct and a union in C?",
        "options": [
            "struct cannot contain pointers",
            "All members of a union share the same memory location, while struct members have separate memory locations",
            "union can only contain integers",
            "struct is defined using typedef"
        ],
        "answer": "All members of a union share the same memory location, while struct members have separate memory locations"
    },
    {
        "question": "How is the total memory size of a union determined?",
        "options": [
            "Sum of sizes of all its members",
            "Size of its largest member",
            "Size of its first member",
            "Always 4 bytes"
        ],
        "answer": "Size of its largest member"
    },
    {
        "question": "Which operator is used to access structure members through a pointer to the structure?",
        "options": [
            ".",
            "->",
            "*",
            "::"
        ],
        "answer": "->"
    },
    {
        "question": "If 'p' is a pointer to struct Student (struct Student *p;), what is equivalent to 'p->age'?",
        "options": [
            "(*p).age",
            "*p.age",
            "&p.age",
            "p.*age"
        ],
        "answer": "(*p).age"
    },
    {
        "question": "What is structure padding / member alignment in C?",
        "options": [
            "Adding extra unused bytes by compiler to align structure members to memory boundary limits for faster CPU access",
            "Compressing structure size",
            "Initializing members to zero",
            "Adding null characters"
        ],
        "answer": "Adding extra unused bytes by compiler to align structure members to memory boundary limits for faster CPU access"
    },
    {
        "question": "Which pragma directive can be used to disable structure padding in C compilers?",
        "options": [
            "#pragma pack(1)",
            "#pragma align(off)",
            "#pragma nopad",
            "#pragma struct_compact"
        ],
        "answer": "#pragma pack(1)"
    },
    {
        "question": "Can a structure contain an instance of itself directly as a member (e.g., struct Node { struct Node n; });?",
        "options": [
            "Yes, always",
            "No, it causes infinite recursive nesting structure size error (must use pointer to struct)",
            "Only in C99",
            "Yes if static"
        ],
        "answer": "No, it causes infinite recursive nesting structure size error (must use pointer to struct)"
    },
    {
        "question": "What is a self-referential structure?",
        "options": [
            "A structure containing a pointer to a structure of its own type (used in linked lists/trees)",
            "A structure declared inside main",
            "A union declared inside struct",
            "A structure without members"
        ],
        "answer": "A structure containing a pointer to a structure of its own type (used in linked lists/trees)"
    },
    {
        "question": "What are bit-fields in a C structure?",
        "options": [
            "Structure members defined with specific bit widths to save memory",
            "Array of boolean flags",
            "Floating point structure fields",
            "Binary file inputs"
        ],
        "answer": "Structure members defined with specific bit widths to save memory"
    },
    {
        "question": "How do you declare a bit-field of 3 bits for an unsigned int member 'flag' inside a struct?",
        "options": [
            "unsigned int flag : 3;",
            "unsigned int flag[3];",
            "unsigned int : 3 flag;",
            "bitflag(3) flag;"
        ],
        "answer": "unsigned int flag : 3;"
    },
    {
        "question": "Can you take the address-of operator '&' on a bit-field member of a struct?",
        "options": [
            "Yes",
            "No, bit-fields do not have individual byte addresses",
            "Only if int type",
            "Only in GCC"
        ],
        "answer": "No, bit-fields do not have individual byte addresses"
    },
    {
        "question": "Which keyword creates an alias / new name for an existing data type in C?",
        "options": [
            "typedef",
            "alias",
            "define",
            "typename"
        ],
        "answer": "typedef"
    },
    {
        "question": "How do you define an alias 'ulong' for 'unsigned long int' using typedef?",
        "options": [
            "typedef unsigned long int ulong;",
            "typedef ulong unsigned long int;",
            "alias ulong = unsigned long int;",
            "#define typedef ulong"
        ],
        "answer": "typedef unsigned long int ulong;"
    },
    {
        "question": "Which statement correctly initializes a struct Point { int x, y; } instance 'p1'?",
        "options": [
            "struct Point p1 = {10, 20};",
            "Point p1 = (10, 20);",
            "struct Point p1(10, 20);",
            "struct p1 = {x:10, y:20};"
        ],
        "answer": "struct Point p1 = {10, 20};"
    },
    {
        "question": "Can structure instances be directly assigned to one another using the '=' assignment operator (e.g. p2 = p1;)?",
        "options": [
            "Yes, member-by-member shallow copy is performed",
            "No, array copy function must be used",
            "Only if pointers are used",
            "Causes compiler error"
        ],
        "answer": "Yes, member-by-member shallow copy is performed"
    },
    {
        "question": "Which string function compares two strings lexicographically in C?",
        "options": [
            "strcmp()",
            "strequal()",
            "strcat()",
            "strncmp()"
        ],
        "answer": "strcmp()"
    },
    {
        "question": "What does strcmp(\"abc\", \"abc\") return?",
        "options": [
            "1",
            "0",
            "-1",
            "true"
        ],
        "answer": "0"
    },
    {
        "question": "What does strcmp(\"apple\", \"banana\") return?",
        "options": [
            "A negative integer (< 0)",
            "A positive integer (> 0)",
            "0",
            "1"
        ],
        "answer": "A negative integer (< 0)"
    },
    {
        "question": "Which function copies up to 'n' characters from source string to destination string safely?",
        "options": [
            "strcpy()",
            "strncpy()",
            "memcpy()",
            "strncat()"
        ],
        "answer": "strncpy()"
    },
    {
        "question": "Which string function finds the FIRST occurrence of a character in a string?",
        "options": [
            "strchr()",
            "strrchr()",
            "strstr()",
            "strtok()"
        ],
        "answer": "strchr()"
    },
    {
        "question": "Which string function finds the LAST occurrence of a character in a string?",
        "options": [
            "strchr()",
            "strrchr()",
            "strstr()",
            "strfind()"
        ],
        "answer": "strrchr()"
    },
    {
        "question": "Which function searches for a substring inside a target string?",
        "options": [
            "strchr()",
            "strstr()",
            "strfind()",
            "strtok()"
        ],
        "answer": "strstr()"
    },
    {
        "question": "Which function breaks a string into a sequence of tokens based on delimiters?",
        "options": [
            "strtok()",
            "strsplit()",
            "strparse()",
            "strcut()"
        ],
        "answer": "strtok()"
    },
    {
        "question": "What is the return value of strstr(haystack, needle) if substring 'needle' is not found?",
        "options": [
            "-1",
            "0",
            "NULL",
            "EOF"
        ],
        "answer": "NULL"
    },
    {
        "question": "Which string function appends up to 'n' characters from source string to destination string?",
        "options": [
            "strcat()",
            "strncat()",
            "strcpy()",
            "strappend()"
        ],
        "answer": "strncat()"
    },
    {
        "question": "What happens if a string is missing its null terminator '\\0' when passed to strlen()?",
        "options": [
            "Returns 0",
            "strlen continues reading adjacent memory until it hits a zero byte, causing incorrect length or out-of-bounds crash",
            "Compiler fixes it automatically",
            "Returns -1"
        ],
        "answer": "strlen continues reading adjacent memory until it hits a zero byte, causing incorrect length or out-of-bounds crash"
    },
    {
        "question": "Which memory function copies 'n' bytes from memory area src to dest?",
        "options": [
            "memcpy()",
            "memmove()",
            "memset()",
            "memcmp()"
        ],
        "answer": "memcpy()"
    },
    {
        "question": "Which memory function correctly handles overlapping memory source and destination regions?",
        "options": [
            "memcpy()",
            "memmove()",
            "memset()",
            "strcpy()"
        ],
        "answer": "memmove()"
    },
    {
        "question": "Which function fills a block of memory with a specific byte value?",
        "options": [
            "memset()",
            "memcpy()",
            "bzero()",
            "memclear()"
        ],
        "answer": "memset()"
    },
    {
        "question": "Which function compares two memory buffers byte by byte?",
        "options": [
            "memcmp()",
            "strcmp()",
            "memcheck()",
            "buffer_cmp()"
        ],
        "answer": "memcmp()"
    },
    {
        "question": "Which data type pointer is used to manage files in C?",
        "options": [
            "file*",
            "FILE*",
            "FSTREAM*",
            "int*"
        ],
        "answer": "FILE*"
    },
    {
        "question": "Which function opens a file in C?",
        "options": [
            "open()",
            "fopen()",
            "file_open()",
            "create_file()"
        ],
        "answer": "fopen()"
    },
    {
        "question": "Which file open mode opens a text file for READING ONLY?",
        "options": [
            "\"r\"",
            "\"w\"",
            "\"a\"",
            "\"r+\""
        ],
        "answer": "\"r\""
    },
    {
        "question": "Which file mode opens a text file for WRITING, truncating existing content or creating a new file?",
        "options": [
            "\"r\"",
            "\"w\"",
            "\"a\"",
            "\"a+\""
        ],
        "answer": "\"w\""
    },
    {
        "question": "Which file mode opens a file for APPENDING new data at the end without erasing existing contents?",
        "options": [
            "\"w\"",
            "\"a\"",
            "\"r+\"",
            "\"w+\""
        ],
        "answer": "\"a\""
    },
    {
        "question": "What does fopen() return if the file cannot be opened?",
        "options": [
            "-1",
            "EOF",
            "NULL",
            "0"
        ],
        "answer": "NULL"
    },
    {
        "question": "Which function closes an open file pointer and flushes buffers?",
        "options": [
            "fclose()",
            "close()",
            "file_close()",
            "endfile()"
        ],
        "answer": "fclose()"
    },
    {
        "question": "Which function reads a single character from an open FILE pointer stream?",
        "options": [
            "getchar()",
            "fgetc()",
            "getc()",
            "Both fgetc() and getc()"
        ],
        "answer": "Both fgetc() and getc()"
    },
    {
        "question": "Which function writes formatted output into a file stream?",
        "options": [
            "printf()",
            "fprintf()",
            "fputs()",
            "fwrite()"
        ],
        "answer": "fprintf()"
    },
    {
        "question": "Which function reads formatted data from a file stream?",
        "options": [
            "scanf()",
            "fscanf()",
            "fgets()",
            "fread()"
        ],
        "answer": "fscanf()"
    },
    {
        "question": "Which function reads a string/line from a file stream up to n-1 characters or newline?",
        "options": [
            "gets()",
            "fgets()",
            "fgetstr()",
            "fread()"
        ],
        "answer": "fgets()"
    },
    {
        "question": "Which function performs binary block reading from a file?",
        "options": [
            "fread()",
            "fwrite()",
            "fscanf()",
            "fgetb()"
        ],
        "answer": "fread()"
    },
    {
        "question": "Which function performs binary block writing to a file?",
        "options": [
            "fwrite()",
            "fprintf()",
            "fputs()",
            "fputb()"
        ],
        "answer": "fwrite()"
    },
    {
        "question": "Which function repositions the file position indicator in a file stream?",
        "options": [
            "fseek()",
            "ftell()",
            "rewind()",
            "fsetpos()"
        ],
        "answer": "fseek()"
    },
    {
        "question": "Which function returns the current position of the file pointer in bytes from start of file?",
        "options": [
            "fseek()",
            "ftell()",
            "fgetpos()",
            "tell()"
        ],
        "answer": "ftell()"
    },
    {
        "question": "All preprocessor directives in C begin with which symbol?",
        "options": [
            "$",
            "#",
            "@",
            "&"
        ],
        "answer": "#"
    },
    {
        "question": "Which preprocessor directive is used to define symbolic constants or macro functions?",
        "options": [
            "#define",
            "#const",
            "#macro",
            "#include"
        ],
        "answer": "#define"
    },
    {
        "question": "What is the primary difference between #include <filename.h> and #include \"filename.h\"?",
        "options": [
            "< > searches standard system header directories, while \" \" searches user current directory first",
            "< > is for C++ only",
            "\" \" is for math header files only",
            "There is no difference"
        ],
        "answer": "< > searches standard system header directories, while \" \" searches user current directory first"
    },
    {
        "question": "Which directive prevents multiple header file inclusions (header guards)?",
        "options": [
            "#ifndef ... #define ... #endif",
            "#pragma once",
            "Both #ifndef guards and #pragma once",
            "#include_once"
        ],
        "answer": "Both #ifndef guards and #pragma once"
    },
    {
        "question": "What does the preprocessor stringizing operator '#' do in a macro definition?",
        "options": [
            "Converts a macro parameter into a string literal",
            "Concatenates two tokens",
            "Comments out macro",
            "Deletes variable"
        ],
        "answer": "Converts a macro parameter into a string literal"
    },
    {
        "question": "What does the preprocessor token-pasting operator '##' do in a macro definition?",
        "options": [
            "Combines / concatenates two tokens into a single token",
            "Converts token to string",
            "Performs integer division",
            "Creates a pointer"
        ],
        "answer": "Combines / concatenates two tokens into a single token"
    },
    {
        "question": "Which directive undefines an existing macro?",
        "options": [
            "#undef",
            "#delete",
            "#remove",
            "#clear"
        ],
        "answer": "#undef"
    },
    {
        "question": "What does the predefined macro '__FILE__' evaluate to in C?",
        "options": [
            "The current line number",
            "The current C source file name string",
            "The compilation date",
            "The compiler version"
        ],
        "answer": "The current C source file name string"
    },
    {
        "question": "What does the predefined macro '__LINE__' evaluate to?",
        "options": [
            "Current source code line number as integer",
            "File path",
            "Time of build",
            "Number of functions"
        ],
        "answer": "Current source code line number as integer"
    },
    {
        "question": "What is a major potential pitfall of parameterized macro functions compared to inline functions?",
        "options": [
            "No type checking and potential side-effects from multiple argument evaluations (e.g. MACRO(x++))",
            "Slower execution speed",
            "High memory allocation",
            "Macro cannot take arguments"
        ],
        "answer": "No type checking and potential side-effects from multiple argument evaluations (e.g. MACRO(x++))"
    },
    {
        "question": "Which directive emits a custom compiler error message during preprocessing?",
        "options": [
            "#error",
            "#warning",
            "#stop",
            "#fail"
        ],
        "answer": "#error"
    },
    {
        "question": "What stage of compilation handles macro expansion and comment removal?",
        "options": [
            "Preprocessing",
            "Compilation",
            "Assembly",
            "Linking"
        ],
        "answer": "Preprocessing"
    },
    {
        "question": "What stage converts compiled object files into a final executable program?",
        "options": [
            "Preprocessor",
            "Compiler",
            "Linker",
            "Loader"
        ],
        "answer": "Linker"
    },
    {
        "question": "Which file extension is commonly produced by C compilers for object code before linking?",
        "options": [
            ".obj or .o",
            ".exe",
            ".c",
            ".dll"
        ],
        "answer": ".obj or .o"
    },
    {
        "question": "What does 'rewind(fp)' do to an open file stream?",
        "options": [
            "Sets file position pointer back to the beginning of the file (0 offset)",
            "Deletes file content",
            "Closes file stream",
            "Re-opens file in write mode"
        ],
        "answer": "Sets file position pointer back to the beginning of the file (0 offset)"
    },
    {
        "question": "Which keyword is used to declare an enumeration type in C?",
        "options": [
            "enum",
            "enum_t",
            "set",
            "dictionary"
        ],
        "answer": "enum"
    },
    {
        "question": "By default, what is the integer value assigned to the first enumerator constant in an enum?",
        "options": [
            "1",
            "0",
            "-1",
            "Undefined"
        ],
        "answer": "0"
    },
    {
        "question": "In 'enum Color { RED, GREEN = 5, BLUE };', what is the value of BLUE?",
        "options": [
            "2",
            "5",
            "6",
            "0"
        ],
        "answer": "6"
    },
    {
        "question": "Which storage class specifies that a variable should be stored in CPU registers for fast access if available?",
        "options": [
            "auto",
            "register",
            "static",
            "extern"
        ],
        "answer": "register"
    },
    {
        "question": "Can you get the address of a 'register' storage class variable using the '&' operator?",
        "options": [
            "Yes",
            "No, taking address of register variable is invalid in C",
            "Only if it is float",
            "Only in 64-bit OS"
        ],
        "answer": "No, taking address of register variable is invalid in C"
    },
    {
        "question": "Which storage class extends variable scope across multiple C source files?",
        "options": [
            "auto",
            "static",
            "extern",
            "register"
        ],
        "answer": "extern"
    },
    {
        "question": "What does declaring a global variable as 'static' do in C?",
        "options": [
            "Limits variable scope strictly to the current source file (file scope / internal linkage)",
            "Makes it constant",
            "Stores it in CPU register",
            "Destroys it after main finishes"
        ],
        "answer": "Limits variable scope strictly to the current source file (file scope / internal linkage)"
    },
    {
        "question": "What default initial value do uninitialized static and global variables receive in C?",
        "options": [
            "Garbage value",
            "0 (zero)",
            "-1",
            "NULL"
        ],
        "answer": "0 (zero)"
    },
    {
        "question": "What default initial value do uninitialized local 'auto' variables contain?",
        "options": [
            "0",
            "Garbage / unpredictable value",
            "NULL",
            "1"
        ],
        "answer": "Garbage / unpredictable value"
    },
    {
        "question": "Which C keyword is used to specify that a function or variable can be modified unexpectedly by hardware/threads (preventing compiler optimization)?",
        "options": [
            "const",
            "volatile",
            "register",
            "inline"
        ],
        "answer": "volatile"
    }
];
