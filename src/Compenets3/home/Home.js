
import ControlledCarousel from "./slide/Slide"
import "./Home.css"
import image1 from "../../imgsProduct/Puma_logo.jpg"
import image2 from "../../imgsProduct/nike_logo_black.png"
import image3 from "../../imgsProduct/logo-adidas-vector.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from "./swiper/Swiper"
import messi from "./lionel-messi.jpg"
import kevin from "./kevin.jpg"
import ramos from "./ramos.jpg"
import vini from "./vini.jpg"
import CoolPage from "../header/ScrollToTop"
import Footer from "../footer/Footer"
import { AiOutlineSearch,AiFillEye } from "react-icons/ai";
export default function Home() {
    return (
        <div className="home">
            <div className="box-home">

                <div className="Slide"> <ControlledCarousel/></div>
            </div>
            <h1> SẢN PHẨM NỔI BẬT</h1>
            <div className="products-hot">
                <Swiper />
            </div>

            <div className="text">
                <h1>Sản Phẩm Theo Thương Hiệu</h1>
            </div>
            <div className="contain">
                <div className="box">
                    <img className="images" src={image1}></img>
                    <a href="/SanPham" className='linkproduct'><AiOutlineSearch/></a>
                    <p className="namecontain">PUMA</p>
                </div>
                <div className="box">
                    <img className="images" src={image2}></img>
                    <a href="/SanPham" className='linkproduct'><AiOutlineSearch/></a>
                    <p className="namecontain">NIKE</p>
                </div>
                <div className="box">
                    <img className="images" src={image3}></img>
                    <a href="/SanPham" className='linkproduct'><AiOutlineSearch/></a>
                    <p className="namecontain">ADIDAS</p>
                </div>

            </div>
            <h1>SẢN PHẨM THEO VỊ TRÍ</h1>
            <div className="main">

                <div className="box-main">
                    <img src={messi} className="image_main"></img>
                    <p className="text_main">Tiền Đạo</p>
                    <a href="/SanPham" className='linkmain'><AiFillEye/></a>
                </div>
                <div className="box-main">
                    <img className="image_main" src={kevin}></img>
                    <p className="text_main">Tiền Vệ Trung Tâm</p>
                    <a href="/SanPham" className='linkmain'><AiFillEye/></a>
                </div>
                <div className="box-main">
                    <img className="image_main"src={vini}></img>
                    <p className="text_main">Tiền Đạo Chạy Cánh</p>
                    <a href="/SanPham" className='linkmain'><AiFillEye/></a>
                </div>
                <div className="box-main">
                    <img className="image_main" src={ramos}></img>
                    <p className="text_main">Hậu Vệ</p>
                    <a href="/SanPham" className='linkmain'><AiFillEye/></a>
                </div>
            </div>
           <div><Footer/></div>
            <button><CoolPage/></button>
        </div>

    )
}
