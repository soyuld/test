// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const count = { value:0 }

export default function handler(req, res) {
    res.status(200).json(count)
  }
