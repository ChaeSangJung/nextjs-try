import Navi from './Navi';
import Footer from "./Footer";

export default function Layout({children}){
    return (
        <>
            <div>
                <Navi />
                {children}
                <Footer/>
            </div>
        </>
    )
}