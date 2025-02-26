import express from 'express'
import { registerCompany,getCompanyData,loginCompany, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationStatus, changeVisiblity, postJob } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router=express.Router()

// Register a company
router.post('/register',upload.single('image'), registerCompany)

// Company Login
router.post('/login',loginCompany)

// Get company data
router.get('/company',protectCompany ,getCompanyData)

// Post a job
router.post('/post-job',protectCompany,postJob)

// Get Applicants Data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

// Get company Job List
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

// Change Application Status
router.post('/change-status',protectCompany,ChangeJobApplicationStatus)

// Change Application Visibility
router.post('/change-visiblity',protectCompany,changeVisiblity)


export default router