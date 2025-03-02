import express from 'express'
import { registerCompany,getCompanyData,loginCompany, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationStatus, changeVisiblity, postJob } from '../controllers/companyController.js'
import upload from '../config/multer.js'
// import { protectCompany } from '../middleware/authMiddleware.js'

const router=express.Router()

// Register a company
router.post('/register',upload.single('image'), registerCompany)

// Company Login
router.post('/login',loginCompany)

// Get company data
router.get('/company',getCompanyData)

// Post a job
router.post('/post-job',postJob)

// Get Applicants Data of Company
router.get('/applicants',getCompanyJobApplicants)

// Get company Job List
router.get('/list-jobs',getCompanyPostedJobs)

// Change Application Status
router.post('/change-status',ChangeJobApplicationStatus)

// Change Application Visiblity
router.post('/change-visiblity',changeVisiblity)


export default router