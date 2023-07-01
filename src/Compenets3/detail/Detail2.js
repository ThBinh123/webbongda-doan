import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import "./Detail.css";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { FaStore, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom"
import Footer from "../footer/Footer";
const Detail2 = () => {
    const { addCart, handle_sweel3, addCart2 } = useContext(AppContext);
    const { id } = useParams();
    const [detail2, setDetail2] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getDetail2 = async () => {
            setLoading(true);
            const response = await fetch(`https://645cda6b250a246ae3103b6a.mockapi.io/products/${id}`)
            setDetail2(await response.json());
            setLoading(false);
        }
        getDetail2();
    }, []);

    const ShowDetail = () => {
        return (

            <div className="row" id="Detail" style={{ width: "100%", padding: "20px" }}>

                <div className="col-md-6" id="img">
                    <img src={detail2.imageUrl} alt={detail2.title} style={{ width: "60%" }}></img>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase display-7" style={{fontWeight:"bold"}}>
                        {detail2.Name}
                    </h4>
                    <div className="product_icon" style={{ color: "#f1c40f" }}>
                        <i><AiTwotoneStar /></i>
                        <i><AiTwotoneStar /></i>
                        <i><AiTwotoneStar /></i>
                        <i><AiTwotoneStar /></i>
                        <i><AiTwotoneStar /></i>
                        <i className="review">(4 review)</i>
                    </div>
                    <h3 className="display-6 fw-blod my-4">
                        {detail2.Buy} vnd
                    </h3>
                    <h4 className="text2">CAM KẾT SẢN PHẨM CHÍNH HÃNG 100%. ĐƯỢC BỒI HOÀN GẤP 10 LẦN NẾU KHÔNG PHẢI CHÍNH HÃNG</h4>
                    {/* <h5>SIZE ( <Link className="helpsize" to="/Huong-Dan-Chon-Size">CÁCH CHỌN SIZE GIÀY</Link>) </h5>
                    <div className="sizeoder" style={{ display: "flex" }}>
                        <div ><input type="radio" id="html" name="fav_language" value="30"></input><p>39</p></div>
                        <div className="sizeoder2"><input type="radio" id="html" name="fav_language" value="40"></input><p>40</p></div>
                        <div className="sizeoder2"><input type="radio" id="html" name="fav_language" value="41"></input><p>41</p></div>
                        <div className="sizeoder2"><input type="radio" id="html" name="fav_language" value="42"></input><p>42</p></div>
                        <div className="sizeoder2"><input type="radio" id="html" name="fav_language" value="43"></input><p>43</p></div>
                        <div className="sizeoder2"><input type="radio" id="html" name="fav_language" value="44"></input><p>44</p></div>
                        <div className="sizeoder2"><input type="radio" id="html" name="fav_language" value="45"></input><p>45</p></div>

                    </div> */}
                    <div className="address">
                        <h3> <FaStore /> CÓ TẠI 3 CỬA HÀNG</h3>
                        <p><FaMapMarkerAlt /> 148/7 HOÀNG DIỆU 2, PHƯỜNG LINH CHIỂU, THÀNH PHỐ THỦ ĐỨC</p>
                        <p><FaMapMarkerAlt /> 43A ĐIỆN BIÊN PHỦ, PHƯỜNG 15, QUẬN BÌNH THẠNH</p>
                        <p><FaMapMarkerAlt /> 637C TRẦN HƯNG ĐẠO, PHƯỜNG 01, QUẬN 5</p>
                    </div >
                    <a class="buy" href={`/DatHang/PhuKien/${detail2.id}`} style={{ marginRight: "10px" }} >Mua Ngay</a>
                    <Link to="/GioHang" class="addcart" onClick={() => addCart2(detail2.id)}>
                        <span onClick={handle_sweel3}>Thêm Vào Giỏ Hàng</span>
                    </Link>

                </div>

            </div>
        )
    }
    return (
        <div className="showdetail">
            <div>
                <p>Trang chủ /
                    Giày đá bóng /
                    {detail2.Name}</p>
                <ShowDetail />
            </div>
            <div><Footer /></div>
        </div>
    )
}
export default Detail2;