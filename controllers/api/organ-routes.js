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
   
   router.post('/', (req, res) => {
    organs.create(req.body)
    .then(organsData => res.status(200).json(organsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    });
    
    router.put('/:id', (req, res) => {
        organs.update(req.body, {
        where: {
          id: req.params.id
        }
      }) .then(organsData => {
        if(!organsData) {
          res.status(404).json({ message: 'organ does not exist'});
          return;
        }
        res.json(organsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

   router.delete('/:id', (req, res) => {
    organs.destroy ({
        where: {
          id: req.params.id
        }
      })
      .then(organsData => {
        if(!organsData) {
          res.status(404).json({ message: 'organ does not exist'});
          return;
        }
        res.json(organsData);
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
      
    });
  });

   module.exports = router;