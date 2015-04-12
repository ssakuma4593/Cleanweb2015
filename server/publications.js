/**
 * Created by peter.pavlovich on 4/11/15.
 */

Meteor.publish('categories', function(){
    return Categories.find({a: 4});
});

Meteor.publish('retailers', function(){
    return Retailers.find();
});
