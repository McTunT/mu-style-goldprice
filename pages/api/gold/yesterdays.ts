import { endpoints } from './../../../lib/endpoints'
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import initMiddleware from '../../../lib/init-middleware'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET'],
})

const yesterday = endpoints.yesterday

const Gold = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(yesterday, {
    body: null as any,
    headers: {
      'Content-Type': 'application/json',
    },

    method: 'GET',
  })

  await initMiddleware(req, res, cors)
  const gold = await response.json()
  return res.status(200).json(gold)
}

export default Gold
