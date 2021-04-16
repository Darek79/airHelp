// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type {
  NextApiRequest,
  NextApiResponse,
} from "next";
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    // let data: {
    //   results: any[];
    //   offset: number;
    //   number: number;
    //   totalResults: number;
    // };
    const {data} = await axios.get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=2f34b1a96f6742648549302fd1b844cf&query=${req.body.data}&number=5&sort=calories&sortDirection=desc`
    );
    if (!data) {
      res.status(500).json({msg: "not ok"});
    }

    res.status(200).json({data});
  }
};
