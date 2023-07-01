import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { AiTwotoneStar, AiOutlineSearch } from "react-icons/ai";
import "./Product.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import image1 from "../../imgsProduct/giayNike.jpg";
import image2 from "../../imgsProduct/giayAdidas.jpg";
import image3 from "../../imgsProduct/giayPuma.jpg";
import image4 from "../../imgsProduct/giayAdidas1.jpg";
import image5 from "../../imgsProduct/giayAdidas2.jpg";
import image6 from "../../imgsProduct/giayAdidasKd.jpg";
import image7 from "../../imgsProduct/giayAdidasKd1.jpg";
import image8 from "../../imgsProduct/giayCr7.jpg";
import image9 from "../../imgsProduct/giayNike1.jpg";
import image10 from "../../imgsProduct/giayNike3.jpg";
import image11 from "../../imgsProduct/giayNikeTiempo.jpg";
import image12 from "../../imgsProduct/giayPuma2.jpg";
import Form from 'react-bootstrap/Form';

export default function Product() {
    const { product, addCart, filterList, setCheck, handle_sweel2 } = useContext(AppContext);
    function getvalue() {
        let value = document.getElementById("loc").value
        return value;
    }
    console.log(getvalue)
    return (
        <div className="productplus">
            <div className="container">
                <div className="book"><p>Trang Chủ / Tất Cả Sản Phẩm</p></div>
                <div style={{ width: "100%"}}>
                    <div className="filter" style={{ display: "flex" }}>
                        <Form.Select aria-label="Floating label select example" id="loc">
                            <option> Tất Cả </option>
                            <option  value="1">Nike</option>
                            <option value="2">Adidas</option>
                            <option value="3">Puma</option>
                        </Form.Select>
                        <button className="filter_click" onClick={() => setCheck(getvalue)}><AiOutlineSearch /></button>
                    </div>
                </div>


                <h1>TẤT CẢ SẢN PHẨM</h1>

                <div className="row">
                    {product && filterList(product).map((item, key) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item " >
                            <div class="card" key={key}>
                                <img src={item.imageUrl} class="card-img-top" alt="..." />
                                <div class="card-body">

                                    <h5 class="card-title">{item.Name}</h5>
                                    <p class="card-text">{item.Buy} vnd</p>
                                    <Link class="seen" to={`/SanPham/Giay/${item.id}`} >Xem Sản Phẩm</Link>
                                    <div className="product_icon">
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i className="review">(1 review)</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}



