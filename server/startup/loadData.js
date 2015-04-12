Meteor.startup(function () {
    if (Categories.find().count() === 0) {
        var categories = [
            {
                "id": 'coffee',
                "name": "Coffee",
                "description": "Coffee Shops",
                "offers": [
                    {
                        "id": "coffee.mugs",
                        "name": "Reusable Mugs",
                        "description": "Participants offer refills to reusable mugs at a discounted price."
                    },
                    {
                        "id": "coffee.coupons",
                        "name": "Coupons",
                        "description": "Participants offer coupons providing discounts and other incentives."
                    }
                ]
            },
            {
                "id": 'groceries',
                "name": "Groceries",
                "description": "Grocery Outlets",
                "offers": [
                    {
                        "id": "groceries.bags",
                        "name": "Reusable Bags",
                        "description": "Participants offer discounts to customers using reusable bags."
                    },
                    {
                        "id": "groceries.coupons",
                        "name": "Coupons",
                        "description": "Participants offer coupons providing discounts and other incentives."
                    }
                ]
            }
        ];
        for (var i = 0; i < categories.length; i++) {
            Categories.insert(categories[i])
        }
    }

    if (Retailers.find().count() === 0) {
        var retailers = [
            {
                "id": "caribou",
                "name": "Caribou",
                "offers": [
                    {
                        "category": "coffee",
                        "offer": "mugs",
                        "details": {
                            discount: {
                                label: 'Discounted amount',
                                value: "$0.10"
                            }
                        }
                    }
                ]
            },
            {
                "id": "barismo",
                "name": "Barismo",
                "offers": [
                    {
                        "category": "coffee",
                        "offer": "mugs",
                        "details": {
                            discount: {
                                label: 'Discounted amount',
                                value: "$0.15"
                            }
                        }
                    },
                    {
                        "category": "coffee",
                        "offer": "coupons",
                        "details": {
                            discount: {
                                label: 'BOGOF',
                                value: "$1.50"
                            }
                        }
                    }
                ]
            }
        ];
        for (var i = 0; i < retailers.length; i++) {
            Retailers.insert(retailers[i])
        }
    }
});
