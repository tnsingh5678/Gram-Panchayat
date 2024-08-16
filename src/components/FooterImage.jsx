import { Link } from "react-router-dom"
export default function FooterImage(){
    return(
        <>
        <div className="m-4 p-4 grid grid-cols-2 bg-slate-200">
            <h1>Important Links</h1>
            <br/>
            <div className="grid grid-cols-3 p-1">
                <li><Link to="admin/panchayati raj" className="text-left">Panchayati Raj</Link></li>
                <li>e</li>
                <li>l</li>
                <li>l</li>
                <li>o</li>
                <li>o</li>
            </div>
            <div className="m-2 p-2 flex-wrap w-30%">thik bhai</div>
        </div>

        <div className="m-4 p-4 grid grid-cols-2">
            <h1 className="text-4xl">Photo Gallery</h1><br/>
            <div className="m-2 p-1 grid grid-cols-3">
                <div>
                <img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
                <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-300 h-400 p-2"></img></div>
            </div>

            <div className="w-300 h-400 p-4">
                <iframe src="https://www.youtube.com/live/dHZFrUoby8Y?si=sYd9y-66DHs_sw88"></iframe>
            </div>

        </div>

        </>
    )
}