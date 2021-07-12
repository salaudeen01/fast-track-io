import { Tawk } from './Tawk';
import cors from 'cors'

cors({
    origin: ['*'],
    allowedHeaders: ['Content-Type']
})
const tawk = new Tawk({
    position: 'bottom-right', token: 'toyyib'
});