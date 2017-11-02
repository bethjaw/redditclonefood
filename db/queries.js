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
  // console.log(typeof id)
  vote = Number(vote)
  return db('links').where('id', id).update('vote', vote+1).returning('vote')
}


function decreaseVote(id, vote){
  // vote = Number(vote)
  return db('links').where('id', id).update('vote', vote-1).returning('vote')
}


// get all votes?
// .orderby('vote', 'desc')


function getComments(id){
  return db('comments').select('*').where('link_id', id)
}

function addComment(id){
  return db('comments').select('*').where('link_id', id)
}

module.exports = {
  getLinks: getLinks,
  addLink: addLink,
  getLinkById: getLinkById,
  updateVote: updateVote,
  decreaseVote: decreaseVote,
  getComments: getComments,
  addComment: addComment

}
