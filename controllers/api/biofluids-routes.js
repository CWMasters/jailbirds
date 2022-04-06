const router = require('express').Router();
const { users, purpose, biofluids } = require('../../models');


// get all organs
router.get('/', (req, res) => {
biofluids.findAll (
  {
    include : [
        {
            model: users,
            attributes : [ 'Donor_id']
        },
      {
      model: biofluids,
      attributes : [ 'id', 'biofluids_name']
  },
  {
    model: purpose,
    attributes: [ 'id', 'purpose_name']
  }]
})
.then(biofluidsData => res.json(biofluidsData))
 .catch(err => {
   console.log(err);
   res.status(500).json(err)
 })
});

// get one biofluid
router.get('/:id', (req, res) => {
    biofluids.findOne (
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
      model: biofluids,
      attributes : [ 'id', 'biofluids_name']
  },
  {
    model: purpose,
    attributes: [ 'id', 'purpose_name']
  }]
        })
     .then(biofluidsData => res.json(biofluidsData))
     .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
   });  

   router.post('/', (req, res) => {
    biofluids.create(req.body)
    .then(biofluidsData => res.status(200).json(biofluidsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    });
    
    router.put('/:id', (req, res) => {
        biofluids.update(req.body, {
        where: {
          id: req.params.id
        }
      }) .then(biofluidsData => {
        if(!biofluidsData) {
          res.status(404).json({ message: 'category does not exist'});
          return;
        }
        res.json(biofluidsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });
    
   

   router.delete('/:id', (req, res) => {
    biofluids.destroy ({
        where: {
          id: req.params.id
        }
      })
      .then(biofluidsData => {
        if(!biofluidsData) {
          res.status(404).json({ message: 'category does not exist'});
          return;
        }
        res.json(biofluidsData);
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
      
    });
  });

   module.exports = router;