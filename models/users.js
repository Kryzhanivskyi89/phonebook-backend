const { Schema, model } = require("mongoose");

const { emailRegexp } = require("../values/patterns");
const subscriptionList = require("../values/subscriptionList");

const usersSchema = new Schema(
    {
        name: {
            type: String,
            // required: [true, "Name is required"],
        },
        password: {
            type: String,
            required: [true, "Set password for user"],
        },
        email: {
            type: String,
            match: emailRegexp,
            required: [true, "Email is required"],
            unique: true,
        },
        subscription: {
            type: String,
            enum: subscriptionList,
            default: "starter",
        },
        token: String,
        avatarURL: {
            type: String,
            required: true,
        },
        verify: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
            required: [true, "Verify token is required"],
        },
    },
    { versionKey: false, timestamps: true },
    // { collection: 'db-contacts/users' }
);

const User = model ("User", usersSchema);

module.exports =  User;