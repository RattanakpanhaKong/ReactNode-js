module.exports = (sequelize, Datatypes) => {
    const Comments = sequelize.define("Comments", { 
        commentBody: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })
    return Comments
}


// This is a schema for creating the table in the database
// Table name is Comments has 3 columns such as title, postText. username