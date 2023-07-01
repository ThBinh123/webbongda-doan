import { FaFacebook, FaInstagramSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import shopee from "./logo_shopee_img.webp"
import DarkVariantExample from "../home/slide_footer/slide_footer"
import imageFooter from "./banner-top.jpg"
import "./Footer.css"
import BCT from "./BCT.webp"
import DMCA from "./DMCA.png"
export default function Footer() {
    return (
        <div className="footer">
            <div className="box-footer">
                <h3>HỖ TRỢ</h3>
                <p>GỌI TƯ VẤN ĐẶT HÀNG ONLINE(08:30-21:00 MỖI NGÀY)</p>
                <h4 style={{ color: "#f39c12" }}>0789.970.962</h4>
                <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                <div className="BCT">
                    <div><img src={BCT}></img></div>
                    <div><img src={DMCA}></img></div>
                </div>
                <a className="shopee"><img src={shopee}></img></a>
                <p>Theo Dõi Chúng Tôi Trên Các Nền Tảng</p>
                <div className='internet'>
                    <a><FaFacebook /></a>
                    <a><FaInstagramSquare /></a>
                    <a><FaYoutube /></a>
                    <a><FaTiktok /></a>
                </div>

            </div>
            <div className="box-footer">
                <h3>HỆ THỐNG CỬA HÀNG</h3>
                <div><DarkVariantExample /></div>

            </div>
            <div className="box-footer">
                <h3>KHÁCH HÀNG NỔI TIẾNG</h3>
                <img src={imageFooter} ></img>

            </div>

        </div>
    )
}