import Express  from "express";
import cors from "cors";

const app = Express()

app.use(cors())

app.get('/', (req,res) => {
    res.json([
        {
            "id": "1",
            "title": "Game Review: The Bear & The Nightingale"
        },
        {
            "id":"2",
            "title":"Game Review: Pokemon Brilliant Diamond"
          },
          {
            "id":"3",
            "title":"Show Review: Alice in Borderland"         }

    ])
})

app.listen(4000, () => {
    console.log('listening for requests on port 4000......')
})