const router = require('express').Router();
const { users, organs, purpose } = require('../../models');


// get all organs
router.get('/', (req, res) => {
organs.findAll (
  {
    include : [
        {
            model: users,
            attributes : [ 'Donor_id']
        },
      {
      model: organs,
      attributes : [ 'id', 'organ_name']
  },
  {
    model: purpose,
    attributes: [ 'id', 'purpose_name']
  }]
})
.then(organsData => res.json(organsData))
 .catch(err => {
   console.log(err);
   res.status(500).json(err)
 })
});

// get one organ
router.get('/:id', (req, res) => {
    organs.findOne (
      {
        where : {
            id: req.params.id
      },
      include : [
        {
            model: users,
            attributes : [ 'Donor_id']
        },
      {
      model: organs,
      attributes : [ 'id', 'organ_name']
  },
  {
    model: purpose,
    attributes: [ 'id', 'purpose_name']
  }]
        })
     .then(organsData => res.json(organsData))
     .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
   });  
   

   router.delete('/:id', (req, res) => {
   
  });

   module.exports = router;