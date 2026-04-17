import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        month: {
            type: String,
            required: true,
        },
        baseSalary: Number,
        deductions: {
            type: Number,
            default: 0,
        },
        finalSalary: Number,
    },
    {timestamps: true}
)

export default mongoose.model("Salary", salarySchema);