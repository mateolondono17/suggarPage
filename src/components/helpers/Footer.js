import Github from "./Github";
import Instagram from "./Instagram";
import Twitter from "./Twitter";

const Footer = ()=>{
    return(

        <footer className="footer">
           <section className="sectionFooter">
           <p>____________________________________________________________</p>
           <Instagram/>
           <Github/>
           <Twitter/>
           <p>____________________________________________________________</p>
            </section> 
        </footer>

    )
}

export default Footer;