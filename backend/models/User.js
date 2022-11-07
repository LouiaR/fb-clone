const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "user name is required"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password name is required"],
    },
    email: {
      type: String,
      required: [true, "email name is required"],
      trim: true,
      unique: true,
    },
    picture: {
      type: String,
      default:
        "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
    },
    picture: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "gender name is required"],
    },
    bYear: {
      type: String,
      required: true,
    },
    bMonth: {
      type: String,
      required: true,
    },
    bDay: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      jobs: {
        type: String,
      },
      workplace: {
        type: String,
      },
      hightschool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentPlace: {
        type: String,
      },
      homeTown: {
        type: String,
      },
      relattionship: {
        type: String,
        enum: ["Single", "In a relationship", "Darried", "Divorced"],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: mongoose.Schema.ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
