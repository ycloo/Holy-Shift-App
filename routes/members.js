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
        mongoose.model('Member').find({}, function(err,members){
            if(err){
                return console.error(err);
            } else {
                res.json(members)
            }
        });
    })
    .post(function(req,res){
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var memberId = req.body.memberId;
    var email = req.body.email;
    var rate = req.body.rate;

        mongoose.model('Member').create({
            firstName:firstName,
            lastName:lastName,
            memberId:memberId,
            rate:rate,
            email:email
        },function(err,member){
            if(err){
                console.log(err)
                res.send("Error");
            }else{
                console.log('POST creating new member: ' + member);
                res.json(member);
            }
        });
    });
    
    
// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model('Member').findById(id, function (err, member) {
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
            //console.log(member);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next(); 
        } 
    });
});

router.post('/:id/members',function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var memberId = req.body.memberId;
    var email = req.body.email;
    var rate = req.body.rate;
    
    mongoose.model('Member').create({
            firstName:firstName,
            lastName:lastName,
            memberId:memberId,
            rate:rate,
            email:email
        },function(err,member){
            if(err){
                console.log(err)
                res.send("Error creating member");
            } else {
                    mongoose.model('Team').findById(req.id,function (err, team) {
                      if (err) {
                        console.log('GET Error: There was a problem retrieving: ' + err);
                      } else {
                        console.log('GET Retrieving ID: ' + team._id + ' to POST member ID:' +member._id);
                        team.members.push(member);
                        team.save();
                        res.json(member);
                      }
                    })
            }
    });
});    
    
router.get('/:id',function(req,res){
    mongoose.model('Member').findById(req.id, function (err, member) {
          if (err) {
            console.log('GET Error: There was a problem retrieving: ' + err);
          } else {
            console.log('GET Retrieving ID: ' + member._id);
            res.json(member);
          }
    });
});

router.put('/:id',function(req,res){
    
    // Get our REST or form values. These rely on the "name" attributes
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var memberId = req.body.memberId;
    var email = req.body.email;
    var rate = req.body.rate;
    
    mongoose.model('Member').findById(req.id, function (err, member) {
            if (err) {
                console.log('PUT Error: There was a problem updating: ' + err);
            }
            //update it
            member.update({
                firstName:firstName,
                lastName:lastName,
                memberId:memberId,
                rate:rate,
                email:email
            }, function (err, memberID) {
              if (err) {
                  res.send("There was a problem updating the information to the database: " + err);
              } 
              else {
                  res.json(member);
              }
            });
    })
});

router.delete('/:id',function(req,res){
    mongoose.model('Member').findById(req.id, function (err, member) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            member.remove(function (err, member) {
                if (err) {
                    return console.error(err);
                } else {
                    console.log('DELETE removing ID: ' + member._id);
                    res.json({message : 'deleted',
                                   item : member
                               });
                }
            });
        }
    });
});
module.exports = router;