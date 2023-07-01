import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import "./Oder.css"
export default function Oder() {
    const { id } = useParams();
    const [Oder, setOder] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getOder = async () => {
            setLoading(true);
            const response2 = await fetch(`https://645cda6b250a246ae3103b6a.mockapi.io/products/${id}`)
            setOder(await response2.json());
            setLoading(false);
        }
        getOder();
    }, []);
    const Loading = () => {
        return (
            <>
                loading.....
            </>
        )
    }
    const Show = () => {
        return (
            <div style={{ width: "90%", display: "flex" }} className="show">
                <div>
                    <img src={Oder.imageUrl} alt={Oder.title} style={{ width: "20%" }}></img>
                    <p style={{ width: "40%" }}>
                        {Oder.Name}
                    </p>
                    <p>{Oder.qty}</p>
                    <p style={{ width: "20%" }}>
                        {Oder.Buy}vnd
                    </p>
                </div>
            </div>
        )
    }
    const Show2 = () => {
        return (
            <div style={{ width: "90%", display: "flex" }} className="show">

                <img src={Oder.imageUrl} alt={Oder.title} style={{ width: "20%" }}></img>
                <p style={{ width: "40%" }}>
                    {Oder.Name}
                </p>
                <p style={{ width: "20%" }}>
                    {Oder.Buy} vnd
                </p>
            </div>
        )
    }
    function totalcart(Oder) {
        var sumtotal = 0;
        for (var i = 0; i < Oder.length; i++) {
            sumtotal += Oder[i].Buy * Oder[i].qty;
        }
        return sumtotal;

    }
    function numberFormat(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    function sum(Oder){
        var sum=[];
        sum +=Oder.Buy-0+50
        return sum;
    }
    return (
        <div className="row" style={{ width: "100%" }} id="Pay">


            <div className="col-md-6" id="ship_pay" >
                <div>
                    <h3 className="py-3">FOOTBAL STORE</h3>
                    <p>Giỏ Hàng / Thông Tin Giao Hàng </p>
                    <p>Bạn Đã Có Tài Khoản? <Link style={{
                        textDecoration: "none",
                    }}>Đăng Nhập</Link></p>

                </div>

                <input placeholder="Họ và tên" style={{ width: "100%", padding: "8px", border: "1px solid black" }}></input>
                <div className="mail">
                    <input placeholder="Email" style={{ width: "65%", padding: "8px", border: "1px solid black" }} className="email"></input>
                    <input placeholder="Số điện thoại" type="number" style={{ width: "30%", padding: "8px", border: "1px solid black" }} className="sdt"></input>
                </div>
                <div style={{ width: "100%" }} className="ship_home">
                    <p>Giao Hàng Tận Nơi</p>
                    <input placeholder="Địa Chỉ Giao Hàng" style={{
                        padding: "8px", border: "1px solid black"
                    }}></input>
                </div>
                <h5>Phương Thức Vận Chuyển</h5>
                <div className="shiper" style={{ width: "100%" }}>
                    <input type="radio" value="Giao Hàng Nhanh" id="html" name="fav_language"></input> <p>Giao Hàng Nhanh</p>
                    <input type="radio" value="Giao Hàng Tiết Kiệm" id="html" name="fav_language"></input><p>Giao Hàng Nhanh</p>
                </div>
                <h5>Phương Thức Thanh Toán</h5>
                <div className="shiper_pay" style={{ width: "100%" }}>
                    <div className="select"><input type="radio" value="Thanh Toán Tại Nhà" id="html" name="fav_language1"></input><p>Thanh Toán Tại Nhà</p></div>
                    <div><input type="radio" value="Chuyển Khoản" id="html" name="fav_language1"></input><p>Chuyển Khoản</p></div>


                </div>
                <div className="pay"><button>Đặt Hàng</button></div>
            </div>


            <div className="col-md-6" id="product_oder">
                <div>

                    <Show2 />
                </div>
                <div className="voucher_oder py-3">
                    <input placeholder="Mã Giảm Giá" style={{
                        padding: "8px",
                        border: "none",
                    }}></input>
                    <button style={{
                        border: "none",
                        padding: "8px",
                        background: "#353b48",
                        color: "#fff",

                    }}>Sử dụng</button>

                </div>
                <div className="ship_oder">
                    <div className="ship_oder1  py-3"><p>Tạm tính:</p><div className="shipodersum"><h5>{Oder.Buy} vnd</h5></div></div>
                    < div className="ship_oder2"><p>Phí vận chuyển:</p><h5>  50.000 vnd </h5></div>
                </div>
                <div className="sum_oderCart py-4">
                    <p>Tổng Cộng:</p> <h5> {sum(Oder)}.000  vnd</h5>
                </div>
            </div>


        </div>









    )
}