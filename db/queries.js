const db = require('./connection')


function getLinks(){
  return db('links').select('*')
}

function addLink(link){
  return db('links').insert(link).returning('*')
}


function getLinkById(id){
  return db('links').select().where('id', id)
}


function updateVote(id, vote){
  // console.log('hit query');
  // console.logt(typeof id)
  vote = Number(vote)
  return db('links').where('id', id).update('vote', vote+1).returning('vote')
}


function decreaseVote(id, vote){
  // vote = Number(vote)
  return db('links').where('id', id).update('vote', vote-1).returning('vote')
}


// get all votes?
// .orderby('vote', 'desc')



module.exports = {
  getLinks: getLinks,
  addLink: addLink,
  getLinkById: getLinkById,
  updateVote: updateVote,
  decreaseVote: decreaseVote
}
