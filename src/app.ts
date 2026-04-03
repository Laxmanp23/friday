import express,{Request,Response} from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());


app.get('/', (req:Request,res:Response) => {
    res.send('Hello World!');
})

app.listen(PORT,()=>{
 console.log(`Server running on http://localhost:${PORT}`);
 
})
