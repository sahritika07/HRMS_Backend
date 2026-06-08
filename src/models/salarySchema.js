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
        month: {
            type: Number,
            required: true,
        },

        year: {
            type: Number,
            required: true,
        },

        totalWorkingDays: {
            type: Number,
            default: 0,
        },

        presentDays: {
            type: Number,
            default: 0,
        },

        leaveDays: {
            type: Number,
            default: 0,
        },

        absentDays: {
            type: Number,
            default: 0,
        },

        grossSalary: {
            type: Number,
            default: 0,
        },

        deductions: {
            type: Number,
            default: 0,
        },

        bonus: {
            type: Number,
            default: 0,
        },

        netSalary: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
)

salarySchema.index(
    {
        user: 1,
        month: 1,
        year: 1,
    },
    {
        unique: true,
    }
);

export default mongoose.model("Salary", salarySchema);