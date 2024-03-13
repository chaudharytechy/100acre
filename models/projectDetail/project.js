const mongoose = require('mongoose')

const bhk_Schema = new mongoose.Schema({
    bhk_type: {
        type: String //1/2/3bhk
    },
    price: {
        type: String
    },
    bhk_Area: {
        type: String
    }

})
const highlight_Schema = new mongoose.Schema({
    highlight_Point: {
        type: String
    }
})

const projectSchema = new mongoose.Schema({

    project_floorplan_Image: [],
    frontImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    logo: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    project_locationImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    state: {
        type: String
    },
    projectName: {
        type: String,

    },
    projectAddress: {
        type: String,
    },
    project_discripation: {
        type: String,
    },
    projectRedefine_Connectivity: [{
        type: String,

    }],
    projectRedefine_Entertainment: [{
        type: String,

    }],
    projectRedefine_Business: [{
        type: String,

    }],
    projectRedefine_Education: [{
        type: String,

    }],

    meta_description: {
        type: String
    },
    meta_title: {
        type: String
    },

    Amenities: [{ type: String }],
    projectBgContent: {
        type: String
    },
    projectReraNo: {
        type: String
    },
    type: {
        type: String
    },
    city: {
        type: String
    },
    builderName: {
        type: String
    },
    AboutDeveloper: {
        type: String
    },
    projectOverview: {
        type: String
    },
    schema_type: {
        type: String,
        default: "project"
    },
    project_Brochure: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    project_Status: {
        type: String
    },
    project_url: {
        type: String
    },
    projectGallery:[],
    highlightImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    projectMaster_Image:{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    BhK_Details: [bhk_Schema],
    highlight: [highlight_Schema],
},

    {
        timestamps: true
    }
)
projectSchema.index({
    projectName: 'text',
    projectAddress: 'text',
    project_discripation: 'text',
    builderName: 'text',
    city: 'text',
    type: 'text',
    'BhK_Details.bhk_Area': 1,
    'BhK_Details.price': 1,
    'BhK_Details.bhk_type': 1
    
});

const ProjectModel = mongoose.model("projectData", projectSchema)
module.exports = ProjectModel