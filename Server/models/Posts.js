module.exports = (sequelize, Datatypes) => {
    const Posts = sequelize.define("Posts", { 
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        postText: {
            type: Datatypes.STRING,
            allowNull: false
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: 'cascade'
        })
    }

    return Posts
}


// This is a schema for creating the table in the database
// Table name is Posts has 3 columns such as title, postText. username
// Cascade means when deleting a post we delete everything related to that post. ex: comment in the post