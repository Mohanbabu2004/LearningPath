// Course Controller
const mockCourses = [
    { id: "c", name: "C Programming", status: "Open", progress: 72, icon: "⚡" },
    { id: "cpp", name: "C++", status: "Locked", progress: 0, icon: "⚙️" },
    { id: "python", name: "Python", status: "Locked", progress: 0, icon: "🐍" },
    { id: "ts", name: "TypeScript", status: "Locked", progress: 0, icon: "📘" },
    { id: "js", name: "JavaScript", status: "Locked", progress: 0, icon: "🟨" },
    { id: "java", name: "Java", status: "Locked", progress: 0, icon: "☕" },
    { id: "r", name: "R", status: "Locked", progress: 0, icon: "📊" },
    { id: "cuda", name: "CUDA", status: "Locked", progress: 0, icon: "🚀" },
    { id: "ruby", name: "Ruby", status: "Locked", progress: 0, icon: "💎" },
    { id: "php", name: "PHP", status: "Locked", progress: 0, icon: "🐘" },
    { id: "html", name: "HTML", status: "Locked", progress: 0, icon: "🌐" },
    { id: "css", name: "CSS", status: "Locked", progress: 0, icon: "🎨" }
];

exports.getAllCourses = async (req, res) => {
    return res.status(200).json({
        success: true,
        count: mockCourses.length,
        courses: mockCourses
    });
};

exports.getCourseById = async (req, res) => {
    const { id } = req.params;
    const course = mockCourses.find(c => c.id.toLowerCase() === id.toLowerCase()) || mockCourses[0];
    return res.status(200).json({
        success: true,
        course
    });
};

exports.createCourse = async (req, res) => {
    const newCourse = req.body;
    return res.status(201).json({
        success: true,
        message: "Course created successfully",
        course: newCourse
    });
};
