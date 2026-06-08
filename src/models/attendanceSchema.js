import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        date: {
            type: Date,
            required: true,
            index: true,
        },
        checkIn: Date,
        checkOut: Date,
        workingHours: {
  type: Number,
  default: 0,
},
attendanceSource: {
  type: String,
  enum: ["web", "mobile", "system"],
  default: "web",
},
        status: {
            type: String,
            enum: [
                "present",
                "absent",
                "late",
                "half_day",
                "holiday",
                "leave"
            ],
            default: "present",
        },
    },
    { timestamps: true }

);

attendanceSchema.index({ user: 1, date: 1 }, { unique: true });

export default mongoose.model("Attendance", attendanceSchema)