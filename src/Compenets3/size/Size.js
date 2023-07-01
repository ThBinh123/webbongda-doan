import sodo from "../size/sodo1.PNG"
import sodonike from "../size/sodonike.PNG"
import sodoadidas from "../size/sodoadidas.PNG"
import sodopuma from "../size/sodopuma.PNG"
import "./Size.css"
import Footer from "../footer/Footer"
export default function Size() {
    return (
        <div style={{width:"100%"}}>
            <div className="size">
                <h1>Cách Chọn Size Giày Chuẩn</h1>
                <img src={sodo}></img>
                <h1>Chọn Size Giày NIKE</h1>
                <img src={sodonike}></img>
                <h1>Chọn Size Giày PUMA</h1>
                <img src={sodopuma}></img>
                <h1>Chọn Size Giày ADIDAS</h1>
                <img src={sodoadidas}></img>
            </div>
            <Footer />
        </div>
    )
}