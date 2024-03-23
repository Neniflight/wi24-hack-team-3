const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
});

//Delete an user
router.delete('/:id', async(req, res)=>{
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if(!deletedUser){
      return res.status(404).send({message: 'User not found'});//Error handling
    }
    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    console.log(error)
    res.status(500).send({message: 'Internal server error'});//Error handling
  }
});

//Update an user with new username, email, or password
router.put('/:id', async(req, res)=>{
  try {
    const userId = req.params.id;
    const updateFields = req.body; //Array of specific field(s) in user

    let user = await User.findById(userId);

    if(!user){
      return res.status(404).send({message: 'User not found'});//Error handling
  }
    for (let field in updateFields){
      user[field] = updateFields[field]; //Update specific field
    }

    user = await user.save() //Save updated user in database
    res.json({ message: 'User updated successfully', updatedUser });

  } catch (error) {//Error handling
    console.log(error)
    res.status(500).send({message: 'Internal server error'});
  }
});

module.exports = router;
