import express from 'express';
import { AddAppointMentCollection, AppointmentPatientsList, appointMentByDate, DoctorList, IsDoctor, AddServices, ServicesList, AddReview, ReviewsList, UpdateUserInfo, AddDoctors } from '../controllers/doctor.js';
import { login, register, viewUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
router.get("/checkauthentication",verifyToken, (req, res, next)=>{
  res.send("working token ")
})
//admin can access
router.post('/auth/addServices',verifyToken,verifyAdmin, AddServices);


//user or admin can access
router.post('/auth/addAppointMent', AddAppointMentCollection);
router.post('/auth/appointByDate',  appointMentByDate);
router.post('/auth/addReview', verifyToken, AddReview);
router.put('/auth/updateInfo/:id', verifyToken,UpdateUserInfo);
router.get('/auth/patients',AppointmentPatientsList);
router.get('/auth/users',verifyToken, verifyAdmin,viewUser);


//global
router.get('/auth/ourServices', ServicesList);
router.post('/auth/isDoctor',IsDoctor);
router.post('/auth/addDoctors',AddDoctors);
router.get('/auth/reviews', ReviewsList);
router.get('/auth/doctors', DoctorList);

//auth
router.post('/auth/register', register);
router.post('/auth/login', login);
export default router;