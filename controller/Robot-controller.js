const Robot = require("../model/Robot")

// Get all robots
 const getRobots = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const robots = await Robot.find();
        response.status(200).json(robots);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the robot in database
 const addRobot = async (request, response) => {
    // retreive the info of robot from frontend
    const robot = request.body;
    console.log("inside")

    const newRobot = new Robot(robot);
    try{
        await newRobot.save();
        response.status(201).json(newRobot);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a robot by id
 const getRobotById = async (request, response) => {
    try{
        const robot = await Robot.findById(request.params.id);
        response.status(200).json(robot);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited robot in the database
 const editRobot = async (request, response) => {
    let robot = await Robot.findById(request.params.id);
    robot = request.body;

    const editRobot = new Robot(robot);
    try{
        await Robot.updateOne({_id: request.params.id}, editRobot);
        response.status(201).json(editRobot);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of robot from the database
 const deleteRobot = async (request, response) => {
    try{
        await Robot.deleteOne({_id: request.params.id});
        response.status(201).json("Robot deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

module.exports = {getRobots, addRobot, getRobotById, editRobot, deleteRobot }