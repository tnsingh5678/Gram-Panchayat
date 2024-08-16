import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Minister from "./utils/Minister";
import Card from "./utils/Card";
import MOPR from "./data/MOPR";
import HomeNav from "./component/components/HomeNav"
import FooterImage from "./component/components/FooterImage";
import Footer from "./component/components/Footer";
import WhatsNew from "./data/WhatsNew";


export default function Home(){
   
    return(
        <>
        
        <div className="flex object-fill justify-between">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfU34EC9GlHKR4DhdB4s5qS03owiN_tqlrDA&s" className="w-auto h-[150px]"></img>
            </div>
            <div>
             <img src="https://www.indiastack.global/wp-content/uploads/2023/01/G20-Logo-1.png" className="w-auto h-[100px]"></img>
            </div>

        </div>
        
        <div className="flex h-auto justify-center bg-slate-400">

        <HomeNav></HomeNav>
        
            

        </div>
        <div className="h-auto w-auto">
            <img src="https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5?15"></img>
        </div>
        <div className="bg-blue-800">
            <h1>Latest News</h1>
        </div>
        <div className="flex  justify-center p-4">
            <div className="w-[400px] m-4 h-auto">
                <MOPR></MOPR>
            </div>
            <div className="w-[400px] m-4 h-auto">
                <WhatsNew></WhatsNew>
            </div>
            <div className="w-[400px] m-4 h-auto">
            <Minister/>
            </div>
        </div>
        <div className="bg-blue-900">
            <div className="text-4xl text-center">Schemes/Initiatives</div>
            <br/>
        <div className="grid grid-cols-5 bg-blue-900">
          
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            <Card title="Lorem ipsum dolor sit amet." content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque."/>
            
            

        </div>
        </div>
        <FooterImage></FooterImage>
        <Footer></Footer>
        </>
    )
}