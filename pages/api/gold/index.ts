import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const url = 'http://27.254.77.78/rest/public/rest/goldspot'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(url, {
    body: null as any,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const gold = await response.json()
  return res.status(200).json(gold)
}
