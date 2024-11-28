import {getServerSession} from 'next-auth/next'
import {authOpts} from './auth/[...nextauth]'

export default async (req, res) => {
  const session = await getServerSession(req, res, authOpts)

  if (session) {
    return res.send({
      content: 'PROTECTED CONTENT',
    })
  }

  return res.send({
    error: 'Not signed in!!!',
  })
}
