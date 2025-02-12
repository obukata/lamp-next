import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany();
      console.log('Fetched posts:', posts);

      // データが存在しない場合のチェック
      if (!posts || posts.length === 0) {
        return res.status(404).json({ message: 'No posts found' });
      }

      // ここでのnullチェックを確認
      res.status(200).json(posts ?? []);
    } catch (error) {
      console.error('Prisma Error:', error);
      res.status(500).json({ message: 'Database connection error', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
