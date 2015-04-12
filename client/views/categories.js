/**
 * Created by peter.pavlovich on 4/11/15.
 */

Template.categories.helpers({
    categories: function(){
        return Categories.find();
    }
});

Template.offer.helpers({
    retailers: function(){
        var self = this;
        var temp = Retailers.find().fetch();
        var result = [];
        _.each(temp, function(retailer){
            _.each(retailer.offers, function(offer){
                var  testId = offer.category + "." + offer.offer;
                if(testId == self.id){
                    result.push(retailer);
                }
            })
        });
        return result;
    }

});