const express = require('express');
const router = express.Router();
const { createProfile, getProfiles, getProfileById, updateProfile, deleteProfile } = require('../controllers/profileController');

router.post('/', createProfile);
router.get('/', getProfiles);
router.get('/:id', getProfileById);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

module.exports = router;
