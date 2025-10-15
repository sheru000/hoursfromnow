import { NextApiRequest, NextApiResponse } from 'next';
import { submitToIndexNow } from '@/lib/utils/IndexNow';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: 'Missing URL in body' });
    }

    await submitToIndexNow(url);
    res.status(200).json({ message: `Successfully submitted ${url} to IndexNow` });
  } catch (err) {
    console.error('Error submitting to IndexNow:', err);
    res.status(500).json({ message: 'IndexNow submission failed' });
  }
}
