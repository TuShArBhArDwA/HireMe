import express from 'express'
import { registerCompany,getCompanyData,loginCompany, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationStatus, changeVisiblity, postJob } from '../controllers/companyController.js'

const router=express.Router()

// Register a company
router.post('/register',registerCompany)

// Company Login
router.post('/login',loginCompany)

// Get company data
router.get('/company',getCompanyData)

// Post a job
router.post('/post-job',postJob)

// Get Applicants Data of Company
router.get('/applicants',getCompanyJobApplicants)

// Get company Job List
router.get('/list-job',getCompanyPostedJobs)

// Change Application Status
router.post('/change-status',ChangeJobApplicationStatus)

// Change Application Visibility
router.post('/change-visiblity',changeVisiblity)


export default router