// Register a new company
export const registerCompany=async(req,res)=>{
    const {name,email,password}=req.body
    const imageFile=req.file
    if(!name||!email||!password||!imageFile){
        return res.json({success:false,message:"Missing Details"})
    }
}

// Company login
export const loginCompany=async(req,res)=>{

}

// Get Company data
export const getCompanyData=async(req,res)=>{

}

// Post a new Job
export const postJob=async(req,res)=>{

}

// Get Company Job Applicants
export const getCompanyJobApplicants=async(req,res)=>{

}

// Get Company Posted JObs
export const getCompanyPostedJobs=async(req,res)=>{

}

// Change Job Application Status
export const ChangeJobApplicationStatus=async(req,res)=>{

}

// Change job visibility
export const changeVisiblity=async(req,res)=>{

}