const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const query = require('./db/queries')

var port = process.env.PORT || 3000

app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
  query.getLinks()
  .then(linkData => {
    // res.send(linkData)
      res.render('index', {
        title: 'FoodFeed',
        linkData: linkData,
      })
  })
})


app.get('/addlink', (req, res) => {
  res.render('addlink', {
    title: 'Add to the list'
  })
})



app.post('/newLink', (req,res) => {
  query.addLink(req.body)
  .then(addedLink => {
    res.render('addLink', {
      description: 'Thanks for contributing! Head back to home and check out your post!',
      addedLink: addedLink
    })
  })
})


app.put('/up/:id', (req, res) => {
  // console.log('hit route');
  // console.log('body is ',req.body)
  const vote = req.body.vote
  const linkid = Number(req.params.id)
  query.updateVote(linkid, vote)
  .then(vote => {
    // res.send(vote)
    res.redirect('/')
  })
})


app.put('/down/:id', (req, res) => {
  const vote = Number(req.body.vote)
  const linkid = Number(req.params.id)
  query.decreaseVote(linkid, vote)
  .then(vote => {
    res.redirect('/')
  })
})


app.get('/comment/:id', (req, res) => {
  const linkid = Number(req.params.id)
  console.log('route', linkid)
    query.getComments(linkid)
    .then(commentData => {
      // res.send(commentData)
      res.render('comments', {
        title: 'Leave a Comment',
        commentData: commentData
      })
    })
  })


// app.post('/newcomment', (req, res) => {
//   query.addComments(req.body)
//
// })



app.listen(port, (req, res) => {
  console.log('listeninggg', port)
})
