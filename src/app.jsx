import Listing from './listing';
import { data } from './assets/data';

export default function App() {
    console.log(data)
    return (
        <div>
            <Listing items={data} />
        </div>
    )
}
