import express from 'express';
import {
  getMembershipInfoById,
  getAllMembers,
  updateUserProfile,
  addNewMember, // Import the addNewMember function
  deleteMemberById, // Import the deleteMember function
  updateMemberById // Import the updateMemberByName function
} from '../controllers/gymController.js'; // Fixed import
import userAuth from '../middleware/userAuth.js';

const gymRouter = express.Router();

// Protected Route: Get Gym Membership Information (specific member)
gymRouter.get('/membership', userAuth, getMembershipInfoById);

// Protected Route: Get All Membership Information
gymRouter.get('/membership/all', userAuth, getAllMembers);

// Protected Route: Update User Profile
gymRouter.put('/profile', userAuth, updateUserProfile);

// Protected Route: Add New Member (POST route)
gymRouter.post('/membership', userAuth, addNewMember); // Add the new route for creating members

// Protected Route: Delete Member (DELETE route)
gymRouter.delete('/membership', userAuth, deleteMemberById); // Adding DELETE route for deleting a member


gymRouter.put('/membership/edit', userAuth, updateMemberById); // Adding PUT route for updating a member

export default gymRouter;

