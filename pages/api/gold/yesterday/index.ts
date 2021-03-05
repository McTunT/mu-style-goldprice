import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import fetch from 'node-fetch'
import initMiddleware from 'lib/init-middleware'
import { endpoints } from 'lib/endpoints'

const cors = Cors({
  methods: ['GET'],
})

const url = 'http://27.254.77.78/rest/public/rest/goldspot-yesterday'

const GYesterday = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(url, {
    body: null as any,
    headers: {
      'Content-type': 'application/json',
      'Accept-Charset': 'utf-8',
    },
    method: 'GET',
  })

  await initMiddleware(req, res, cors)
  const yesterday = await response.json()
  return res.status(200).json(yesterday)
}

export default GYesterday
