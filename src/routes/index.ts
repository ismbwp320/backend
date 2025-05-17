import express, { Request, Response } from 'express';
import User from '@modals/User';

const router = express.Router();

router.route('/')
  .get(async (req: Request, res: Response) => {
    try {
        const users = await User.find({}, '-password');
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
})
.post(async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, isAdmin } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Create and save new user
    const user = new User({ name, email, password, isAdmin });
    const savedUser = await user.save();

    // Respond with created user (excluding password)
    const { password: _, ...userData } = savedUser.toObject();
    res.status(201).json(userData);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to create user', error: error.message });
  }
});
router.get('/profile', (req: Request, res: Response) => {
  res.send('User profile route');
});
router.get('/settings', (req: Request, res: Response) => {
  res.send('User settings route');
});
router.get('/notifications', (req: Request, res: Response) => {
  res.send('User notifications route');
});

export default router;