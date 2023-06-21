import Listing from './listing';
import { data } from './assets/data';

export default function App() {
    return (
        <div>
            <Listing items={data} />
        </div>
    )
}
