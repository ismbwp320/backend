import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('User route');
});
router.get('/profile', (req, res) => {
  res.send('User profile route');
});
router.get('/settings', (req, res) => {
  res.send('User settings route');
});
router.get('/notifications', (req, res) => {
  res.send('User notifications route');
});

export default router;