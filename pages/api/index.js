import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "ok from next connect" });
  })
  .post((req, res) => {
    res.json({ message: "post route" });
  });

export default handler;
