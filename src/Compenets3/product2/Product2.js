import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { AiTwotoneStar,AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {BsFillCartPlusFill} from "react-icons/bs"
import "./Product2.css";
import image1 from "../../imgsProduct2/bangkeodumau.jpg";
import image2 from "../../imgsProduct2/bangkeotrang.jpg";
import image3 from "../../imgsProduct2/bongdongluc.jpg";
import image4 from "../../imgsProduct2/bongfifa.jpg";
import image5 from "../../imgsProduct2/bongworldcup2022.jpg";
import image6 from "../../imgsProduct2/combotatdai.jpg";
import image7 from "../../imgsProduct2/gangtayadidas.jpg";
import image8 from "../../imgsProduct2/gangtayadidas2.jpg";
import image9 from "../../imgsProduct2/gangtayadidas3.jpg";
import image10 from "../../imgsProduct2/gangtaynike.jpg";
import image11 from "../../imgsProduct2/gangtaynike2.jpg";
import image12 from "../../imgsProduct2/gangtaynike3.jpg";
import Form from 'react-bootstrap/Form';
import Footer from "../footer/Footer";
export default function Product2() {
    const { product2, addCart2,filterList2,setCheck2 ,handle_sweel} = useContext(AppContext);
    function getvalue(){
        let value = document.getElementById("loc").value
        return value;
    }
    return (
        <div className="productplus">
        <div className="container">
             <div className="book"><p>Trang Chủ / Phụ Kiện</p></div>
            <div className="filter" style={{display:"flex"}}>
            <Form.Select aria-label="Floating label select example" id="loc">
            <option>Tất Cả</option>
            <option value="1">Găng Tay</option>
            <option value="2">Tất</option>
            <option value="3">Băng Keo</option>
            <option value="4">Bóng</option>
          </Form.Select>
          <button className="filter_click" onClick={() => setCheck2(getvalue)}><AiOutlineSearch/></button>
          </div>
            <h1>TẤT CẢ PHỤ KIỆN</h1>
            <div className="row">
                {product2 && filterList2(product2).map((item, key) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item " >
                        <div class="card" key={key}>
                            <img src={item.imageUrl} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.Name}</h5>
                                <p class="card-text">{item.Buy} vnd</p>
                                {/* <a href="#" class="btn btn-primary" onClick={()=>addCart2(item.id)}>Thêm Vào Giỏ Hàng</a> */}
                                <Link class="seen" to={`/SanPham/PhuKien/${item.id}`} >Xem Chi Tiết</Link>
                                <div className="product_icon">
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i className="review">(1 review)</i>
                                </div>
                                <div><BsFillCartPlusFill/></div>
                                
                                {/* <h3>{image1}</h3>
                                <h3>{image2}</h3>
                                <h3>{image3}</h3>
                                <h3>{image4}</h3>
                                <h3>{image5}</h3>
                                <h3>{image6}</h3>
                                <h3>{image7}</h3>
                                <h3>{image8}</h3>
                                <h3>{image9}</h3>
                                <h3>{image10}</h3>
                                <h3>{image11}</h3>
                                <h3>{image12}</h3> */}

                            </div>
                        </div>
                    </div>
                ))}
         </div>
           
         </div>
         <Footer/>
         </div>
    )
}

