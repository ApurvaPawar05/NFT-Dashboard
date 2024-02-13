
const {Router } = require('router')

const nftRouter = new Router()


nftRouter.get('/', (req, res) => {
    res.send('NFTs')
})


export {nftRouter}