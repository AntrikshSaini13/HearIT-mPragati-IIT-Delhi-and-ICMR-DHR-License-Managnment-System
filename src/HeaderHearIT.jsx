import './css/header.css';
import './css/main.css';
import mPragatiLogo from './assets/mPragati_Logo_V6.avif'
import HearITLogo from './assets/Hear-It logo clean.png'
function HeaderHearIT ()
{
    return <header class="header">
                <div class="container-fluid">
                    <div class="row pt-4">  
                        {/* /* <!-- logo of header Conatiner  --> */ }
                        <div id="nav_logo" class="col-xl-5 col-md-12 text-center">
                            <ul id="nav_logo_items" class="list-inline">
                                <li class="list-inline-item">
                                    <a id="hearIT_logo" class="navbar-brand" href="#HeaderHearIT.jsx">
                                        <img src={HearITLogo} alt="Hear-It-logo" width="80" height="80"/> 
                                    </a>
                                </li>       
                                <li class="list-inline-item">
                                    <a id="mPrgati_logo" class="navbar-brand" href="#">
                                        <img src={mPragatiLogo} alt="mPragati_Logo" width="80" height="80"/> 
                                    </a>
                                </li>                        
                                <li class="list-inline-item">
                                    <a id="logo_text" class="navbar text-start text-decoration-none text-white" href="#">                                
                                    <font size="3">m<font size="6">P</font>ragati<br/> IIT  Delhi and ICMR-DHR </font>                               
                                    </a>
                                </li>                        
                            </ul>                  
                        </div> 
                        {/* <!-- navbar of header  --> */}
                        <div id="navbar" class="col-xl-7 col-md-12 text-center header-nav pt-3">
                            <ul id="nav_items" class="list-inline">
                                <li class="list-inline-item "><a id="home" href="#" class="text-decoration-none text-white">Home</a></li>                     
                                <li class="list-inline-item "><a id="about" href="#" class="text-decoration-none text-white">About</a></li>                     
                                <li class="list-inline-item "><a id="products" href="#" class="text-decoration-none text-white">Products</a></li>                     
                                <li class="list-inline-item "><a id="pricing" href="#" class="text-decoration-none text-white">Pricing</a></li>                     
                                <li class="list-inline-item "><a id="support" href="#" class="text-decoration-none text-white">Support</a></li>                     
                                <li class="list-inline-item "><a id="contact" href="#" class="text-decoration-none text-white">Contact</a></li>                     
                                <li class="list-inline-item "><a id="login" href="#" class="text-decoration-none text-white">Login</a></li>                     
                                <li class="list-inline-item "><button type="button" id="registor" class="btn btn-outline-light">Registor</button></li>                                                                                   
                            </ul>                    
                        </div>               
                    </div>            
                </div>
            </header>
}
export default HeaderHearIT;