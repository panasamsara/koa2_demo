const router = require('koa-router')()
const ArtileController = require('../controllers/articleController');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/article/create',ArtileController.create);
router.get('/article/:id',ArtileController.detail)

module.exports = router
