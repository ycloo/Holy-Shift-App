var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({extended:true}))

router.use(methodOverride(function(req,res){
    if(req.body && typeof req.body ==='object' && '_method' in req.body){
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

router.route('/')
    .get(function(req,res){
        mongoose.model('Team').find({}, function(err,teams){
            if(err){
                return console.error(err);
            } else {
                res.json(teams)
            }
        });
    })
    .post(function(req,res){
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        console.log(req.body)
        var name = req.body.name;
        var slogan = req.body.slogan;
        var members = req.body.members;
        var managers = req.body.managers;

        mongoose.model('Team').create({
            name:name,
            slogan:slogan,
            members:members,
            managers:managers
        },function(err,team){
            if(err){
                console.log(err)
                res.send("Error");
            }else{
                console.log('POST creating new team: ' + team);
                res.json(team);
            }
        });
    });
    
    
// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Team').findById(id, function (err, team) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.json({message : err.status  + ' ' + err});

        //if it is found we continue on
        } else {
            //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
            //console.log(team);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next(); 
        } 
    });
});
    
    
router.get('/:id',function(req,res){
    mongoose.model('Team').findById(req.id).populate('members').exec(function (err, team) {
          if (err) {
            console.log('GET Error: There was a problem retrieving: ' + err);
          } else {
            console.log('GET Retrieving ID: ' + team._id);
            res.json(team);
          }
    });
});

router.put('/:id',function(req,res){
    
    // Get our REST or form values. These rely on the "name" attributes
    var name = req.body.name;
    var slogan = req.body.slogan;
    var members = req.body.members;
    var managers = req.body.managers;
    
    mongoose.model('Team').findById(req.id, function (err, team) {
            if (err) {
                console.log('PUT Error: There was a problem updating: ' + err);
            }
            //update it
            team.update({
                name:name,
                slogan:slogan,
                members:members,
                managers:managers
            }, function (err, teamID) {
              if (err) {
                  res.send("There was a problem updating the information to the database: " + err);
              } 
              else {
                  res.json(team);
              }
            });
    })
});

router.delete('/:id',function(req,res){
    mongoose.model('Team').findById(req.id, function (err, team) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            team.remove(function (err, team) {
                if (err) {
                    return console.error(err);
                } else {
                    console.log('DELETE removing ID: ' + team._id);
                    res.json({message : 'deleted',
                                   item : team
                               });
                }
            });
        }
    });
});
module.exports = router;