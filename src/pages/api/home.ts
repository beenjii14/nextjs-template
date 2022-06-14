import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  project: string
}

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  res.statusCode = 200;
  res.json({ project: 'It is working' });
}
