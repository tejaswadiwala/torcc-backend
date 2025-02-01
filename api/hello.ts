import type { VercelRequest, VercelResponse } from '@vercel/node'
import { allowCors } from '../src/allowCors'

async function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}


module.exports = allowCors(handler)
