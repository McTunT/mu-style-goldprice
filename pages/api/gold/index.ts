import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import initMiddleware from '../../../lib/init-middleware'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET'],
})
const url1 = 'https://ausiris-api.vercel.app/api/gold'

//const url = 'http://27.254.3.29:5006/api/gprice'
let username = 'aus_price'
let password = 'Ausiris@Price'

let authString = `${username}:${password}`

const Gold = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(url1, {
    body: null as any,
    headers: {
      // Authorization: 'Basic ' + btoa(authString),
      'Content-type': 'application/json',
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
    method: 'GET',
  })

  await initMiddleware(req, res, cors)
  const gold = await response.json()
  return res.status(200).json(gold)
}

export default Gold
