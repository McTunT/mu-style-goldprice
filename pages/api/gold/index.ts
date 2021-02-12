import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import initMiddleware from '../../../lib/init-middleware'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET'],
})
const url1 = 'http://27.254.77.78/rest/public/rest/goldspot'

const Gold = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(url1, {
    body: null as any,
    headers: {
      'Content-type': 'application/json',
      'Accept-Charset': 'utf-8',
    },
    method: 'GET',
  })

  await initMiddleware(req, res, cors)
  const gold = await response.json()
  return res.status(200).json(gold)
}

export default Gold
