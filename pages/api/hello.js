// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async (req, res) => {
  if (req.method === "POST") {
    const {data} = await axios.get(
      req.body.fetchUrl
    );

    res.status(200).json({data});
  }
};
