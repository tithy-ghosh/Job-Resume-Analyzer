const express = require("express")
const authMiddleWare = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")

const upload = require("../middlewares/file.middleware")
const interviewRouter = express.Router()
/**
 * @route POST /api/interview
 * @description generate new interview report on the basis of user self description, resume pdf and jo description
 * @access Private
 */
interviewRouter.post("/", authMiddleWare.authUser, upload.single("resume"), interviewController.generateInterviewController)

/**
 * @route GET /api/interview/report/:interviewId
 * @description get interview report by InterviewId
 * @access private
 */

interviewRouter.get("/report/:interviewId", authMiddleWare.authUser, interviewController.getInterviewReportByIdController)


/**
 * @route GET /api/interview
 * @description get all interview reports of logged in user
 * @access private
 */

interviewRouter.get('/', authMiddleWare.authUser, interviewController.getAllInterviewReportsController)

module.exports = interviewRouter 