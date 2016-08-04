var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    name: String,
    slogan: String,
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member'
        }],
    managers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member'
        }]

})
mongoose.model('Team',teamSchema)