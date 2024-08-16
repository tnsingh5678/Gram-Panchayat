import { Link } from "react-router-dom";
import VideoEmbed from "./Videoembed";
import TwitterEmbedExample from "../../utils/TwitterEmbedExample";

export default function FooterImage() {
  return (
    <>
      <div className="m-4 p-4 h-auto grid grid-cols-3 bg-slate-200">
        <h1>Important Links</h1>
        <br />
        <div className="grid col-span-2">
            <div className="grid grid-cols-3 gap-1 p-1">
          <li><Link to="admin/panchayati-raj" className="text-left hover:text-blue-700">Panchayati Raj</Link></li>
          <li><Link to="admin/panchayati-raj" className="text-left hover:text-blue-700">Panchayati Raj</Link></li>
          <li><Link to="admin/panchayati-raj" className="text-left hover:text-blue-700">Panchayati Raj</Link></li>
          <li><Link to="admin/panchayati-raj" className="text-left hover:text-blue-700">Panchayati Raj</Link></li>
          <li><Link to="admin/panchayati-raj" className="text-left hover:text-blue-700">Panchayati Raj</Link></li>
          <li><Link to="admin/panchayati-raj" className="text-left hover:text-blue-700">Panchayati Raj</Link></li>
          </div>
        </div>
        <div className="m-2 p-2 flex-wrap">
          <TwitterEmbedExample />
        </div>
      </div>

      <div className="m-4 p-4 grid grid-cols-2">
        <h1 className="text-4xl">Photo Gallery</h1><br />
        <div className="m-2 p-1 grid grid-cols-3">
          <div>
            <img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
          <div><img src="https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/Udaipur/765x580/aravalli-tarrace.jpg" className="w-full h-auto p-2"></img></div>
        </div>

        <div className="w-full h-auto p-4">
          <VideoEmbed />
        </div>

      </div>
    </>
  );
}
