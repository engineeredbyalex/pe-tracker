// importing toasty 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notify() {
    const notify = () => toast("Data entry successfull");

    useEffect(() => {
        notify()
    },[])
    return (
        <div className="absolute top-0 w-full flex items-center justify-center">

        </div>
    )
}