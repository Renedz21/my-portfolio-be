import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Contact Route');
})

export default router;
