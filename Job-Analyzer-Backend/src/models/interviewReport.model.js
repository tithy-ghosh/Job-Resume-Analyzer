const mongoose = require('mongoose')

/**
 * --- User Provided ---
 * job descriprion schema: string
 * resume text: string
 * self description: string
 * match score: {
 * 
 * }
 * 
 * --- From AI ---
 * Technical questions :[{
 *       question: ""
 *       intention:""
 *       answer:""
 *     }]
 * Behavioral questions: [{
 *       question: ""
 *       intention:""
 *       answer:""
 *     }]
 * Skill gaps: [{
 *       skill: ""
 *       severity::{
 *        type: String,
 *      enum: ["low", "medium",     "high"]      
 *         }
 *      
 *     }]
 * Prepartation plan: [{
 *     day: Number,
 *     focus: String,
 *     Task: [String]
 * }]
 */
const technicalQuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: [true, "Technical question is reuired"]
        },
        intention: {
            type: String,
            required: [true, "Intention is reuired"]
        },
        answer: {
            type: String,
            required: [true, "Answer is reuired"]
        },
    }, {
        _id: false
    }
)
const behavioralQuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: [true, "Behavioral question is reuired"]
        },
        intention: {
            type: String,
            required: [true, "Intention is reuired"]
        },
        answer: {
            type: String,
            required: [true, "Answer is reuired"]
        },
    }, {
        _id: false
    }
)

const skillGapSchema = new mongoose.Schema({
    skill:{

        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required"]
    }
},{
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required: [true, "Day is required"]
    },
    focus:{
        type: String,
        required: [true, "Focus is reuired"]
    },
    tasks:{
        type: String,
        required: [true, "Task is required"]
    }
})
const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume:{
        type: String,
    },

    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestion:[technicalQuestionSchema ],
    behavioralQuestion: [behavioralQuestionSchema],
    skillgaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title:{
        type: String,
        required: [true, "Job title is required"]
    }

}, {
    timestamps: true
})

const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema)

module.exports = interviewReportModel;