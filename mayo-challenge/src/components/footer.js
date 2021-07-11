import * as React from "react"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="home__footer">
            <div  className="home__footer-return">
                <button>Back to top</button>
            </div>
            <div className="home__footer-content-wrapper">
                <div>
                    <p>Nunc efficitur quam leo, ac tincidunt velit lobortis id. Etiam nec mi pellentesque, iaculis arcu et, eleifend nisl. Donec tempus pretium turpis non consequat. Phasellus finibus finibus dolor et tristique. Curabitur elementum, nulla ut facilisis blandit, eros massa varius metus, ut laoreet massa nunc quis lectus.</p>
                    <p>© 1998-2020 XYZ Company. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;