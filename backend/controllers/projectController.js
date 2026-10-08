// Project Controller
const mockProjects = [
    {
        id: "proj_1",
        title: "Simple Calculator",
        difficulty: "Easy",
        language: "C",
        description: "Create a calculator that takes two numbers and an operator (+, -, *, /) and outputs the result.",
        inputPreview: "10 + 20",
        outputPreview: "30"
    },
    {
        id: "proj_2",
        title: "Student Grade Management",
        difficulty: "Medium",
        language: "C",
        description: "Calculate student average grade and determine Pass/Fail status.",
        inputPreview: "85 90 78",
        outputPreview: "Average: 84.33 - Grade A"
    }
];

exports.getAllProjects = async (req, res) => {
    return res.status(200).json({
        success: true,
        count: mockProjects.length,
        projects: mockProjects
    });
};

exports.getProjectById = async (req, res) => {
    const { id } = req.params;
    const project = mockProjects.find(p => p.id === id) || mockProjects[0];
    return res.status(200).json({
        success: true,
        project
    });
};

exports.submitProject = async (req, res) => {
    const { projectId, code, userId } = req.body;
    return res.status(200).json({
        success: true,
        message: "Project code submitted successfully!",
        submission: {
            projectId,
            userId: userId || "Mohan",
            submittedAt: new Date().toISOString(),
            status: "Passed"
        }
    });
};
