import React from 'react'
import '../Styles/PreNavbar.css'

const cart =<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M13,10h-2V8h2V10z M13,6h-2V1h2V6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18 c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7 H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z"/></svg>

const PreNavbar = () => {
    return (
        <div className="preNav">
             <div>
                 <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                 <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
             </div>
             <div>
             <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  href="https://store.mi.com/in/site/login">{cart}  CART (0)</a>
               
             </div>
            
        </div>
    )
}

export default PreNavbar
