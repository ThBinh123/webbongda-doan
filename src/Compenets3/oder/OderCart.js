import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { useParams, Link } from "react-router-dom";
import Cart from "../cart/Cart";
import "./OderCart.css"
import totalcart from "../cart/Cart"
export default function OderCart() {
    const { ChangeQty, cart, changeMinus, changeSum, DeleteMode, handle_sweel, addOder } = useContext(AppContext)
    function totalcart(cart) {
        var sumtotal = 0;
        for (var i = 0; i < cart.length; i++) {
            sumtotal += cart[i].Buy * cart[i].qty;
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
        return x1 + x2;
    }
    return (
        <div className="row" style={{ width: "100%" }} id="Pay">


            <div className="col-md-6" id="ship_pay" >
                <div>
                    <h3 className="py-3" style={{ color: "#f39c12", fontSize: "20px" }}>FOOTBAL STORE</h3>
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

            </div>


            <div className="col-md-6" id="product_oder">

                {
                    cart && cart.map((item, index) =>
                    (
                        <div key={index}>
                            <div className="oderCart" style={{ display: "flex" }}>
                                <img src={item.imageUrl} alt="" className="image-carts" />
                                <div className="name_oderCart">{item.Name}</div>
                                <p className="prices_oderCart"><div>{item.Buy}</div></p>
                                <p className="btn_oderCart"> {item.qty} </p>

                                <p className="sum_oder">
                                    <div>{numberFormat((item.Buy * item.qty).toFixed(3).replace('.', ','))}</div></p>

                            </div>

                        </div>
                    )
                    )
                }
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
                    <div className="ship_oder1  py-3"><p>Tạm tính:</p><div className="shipodersum"><h5>{numberFormat((totalcart(cart)).toFixed(3).replace('.', ','))} vnd</h5></div></div>
                    < div className="ship_oder2"><p>Phí vận chuyển:</p><h5>  50,000 vnd </h5></div>
                </div>
                <div className="sum_oderCart py-4">
                    <p>Tổng Cộng:</p> <h5> {numberFormat((totalcart(cart) + 50).toFixed(3).replace('.', ','))}   vnd</h5>
                </div>
                <div className="pay"><button>Đặt Hàng</button></div>
            </div>


        </div>
    )
}





