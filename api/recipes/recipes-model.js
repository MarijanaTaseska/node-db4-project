const db = require('../../data/db_config')
    
async function getRecepieById(recipe_id) {
const recepieRows = await db('recipes as r')
.where('recipe_id', recipe_id)

return recepieRows

}

module.exports = { getRecepieById }