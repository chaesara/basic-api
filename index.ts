import express, { type Request, type Response, type Application } from 'express'

const app: Application = express()
const PORT = 4040

app.get('/', (req: Request, res: Response) => {
    res.json({
        status: 'sukses',
        message: 'backend sehat!',
        online: true,
    })
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))

// function ambilNama(nama: string) {
//     return nama
// }

// console.log(ambilNama('chaesar'))