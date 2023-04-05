const express   = require('express');
const { getRobots, addRobot, getRobotById, editRobot, deleteRobot } = require('../controller/Robot-controller');
const router    = express.Router()



router.get('/', getRobots);
router.post('/add', addRobot);
router.get('/:id', getRobotById);
router.put('/:id', editRobot);
router.delete('/:id', deleteRobot);

module.exports = router