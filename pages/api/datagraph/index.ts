import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import { endpoints } from 'lib/endpoints'
import https from 'https'

const datagraph = endpoints.datagraph
const agent = new https.Agent({
  rejectUnauthorized: false,
})

const Datagraph = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(datagraph, {
    body: null as any,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    agent,
  })

  const data = await response.json()
  const json = JSON.parse(data)
  return res.status(200).json(json)
}

export default Datagraph
