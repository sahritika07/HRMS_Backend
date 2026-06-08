import mongoose from 'mongoose';

const leaveSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        fromDate: {
            type: Date,
            required: true,
        },
        toDate: {
            type: Date,
            required: true,
        },
        reason: String,
        leaveType: {
            type: String,
            enum: [
                "casual",
                "sick",
                "earned"
            ],
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
        approvedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        remarks: {
  type: String,
},
    },
    { timestamps: true }
);

export default mongoose.model("Leave", leaveSchema);