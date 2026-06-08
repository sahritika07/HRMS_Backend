// import mongoose from 'mongoose'

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//             minlength: 2,
//         },
//         email: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true,
//             lowercase: true,
//             index: true,
//         },
//         password: {
//             type: String,
//             required: true,
//             minlength: 6,
//             select: false,
//         },
//         role: {
//             type: String,
//             enum: ["admin", "employee", "manager"],
//             default: "employee",
//         },
//         department: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Department"
//         },
//         designation: {
//             type: String,
//             trim: true,
//         },
//         employeeId: {
//   type: String,
//   required: true,
//   unique: true,
// },

// phone: {
//   type: String,
// },

// manager: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User",
// },
//         salaryStructure: {
//   monthlySalary: {
//     type: Number,
//     default: 0,
//   },
// },
//         joiningDate: {
//             type: Date,
//             default: Date.now,
//         },
//         isActive: {
//             type: Boolean,
//             default: true,
//             index: true,
//         },
//     },
//     { timestamps: true }
// );


// export default mongoose.model("User", userSchema);




const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    employeeId: {
      type: String,
      unique: true,
    },

    role: {
      type: String,
      enum: ["admin", "hr", "manager", "employee"],
      default: "employee",
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    designation: {
      type: String,
    },

    joiningDate: {
      type: Date,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);