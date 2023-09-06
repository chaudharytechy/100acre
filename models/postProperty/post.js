const mongoose = require('mongoose')

const post_Schema =new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    },
    postProperty: [
        {
            frontImage: {
                public_id: {
                    type: String,
                },
                url: {
                    type: String,
                }
            },
            otherImage: [

            ],
            propertyType: {
                type: String // means for resident home ,or for commercial like warehouse
            },
            propertyName: {
                type: String
            },
            price: {
                type: String
            },
            area: {
                type: String
            },
            availableDate: {
                type: String
            },
            descripation: {
                type: String
            },
            furnishing: {
                type: String
            },
            builtYear: {
                Type: String
            },
            amenities: [
                {
                    type: String,

                }
            ],
            landMark: {
                type: String
            },
            type: {
                type: String
            },//resident or commercial
            city: {
                type: String
            },
            state: {
                type: String
            },
            address: {
                type: String
            },
        }
    ],

    role: {
        type: String,
        default: "Seller"
    },
    token: {
        type: String,
        default: ''
    },
   
   
}
)
const postPropertyModel = mongoose.model('postProperty', post_Schema)
module.exports = postPropertyModel