// import CarouselContainer from '../component/CarouselContainer';
import Footer from '../Footer';
import "../sys.css";
import "../asv.css";
// import { $ } from "jquery";
// import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// import ReactLanguageSelect from 'react-languages-select';
import TNav from "../component/topnav";
// import { ReactVideeo } from "reactjs-media";

import Mycmd from "../component/Mycmd";


// //onSelect Method
// onSelectLanguage(languageCode){
//     console.log(languageCode)
// }

// //component render
// <ReactLanguageSelect
// defaultLanguage="en"
// onSelect={this.onSelectLanguage} />

// $("#fader").on("input",function () {
//     $('#v-28').css("font-size", $(this).val() + "px");
// });



function myViews() {
   setTimeout(showPage, 7000);
  var Services=["Library","Quality Services","Hospitability","Trained Developers","24/7 support","latest updates"
]

var rnd=Math.floor(Math.random() * Services.length);
document.getElementById("random-text").innerHTML=Services[rnd]
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


var brand = "Asvan Launcher";

const Home = () => {
  return(
    <body onLoad={myViews}>
    <div id="loader">
    <section className="smoke-section">
        <video className='video'  autoPlay loop>
          <source src={require('../videos/smoke.mp4')} type="video/mp4"/>
        </video>
        <h1 className="smoke-h1">
            <span>A</span>
            <span>S</span>
            <span>V</span>
            <span>A</span>
            <span>N</span>
            <span>-</span>
            <span>L</span>
            <span>A</span>
            <span>U</span>
            <span>N</span>
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
        </h1>
    </section>
</div>

<div id="myDiv" style={{display:"none"}}>
   <TNav />
   <div className="topnav" id='mxw_nav'>            
                 <center>
        <Link to="/"><span className='active' title='Home'><i className='fa fa-home'></i>&ensp;Home</span></Link>
        <Link to="/library"><span title='Library'><i className='fa fa-book'></i>&ensp;Library</span></Link>
        <Link to="/contact"><span title='Contact'><i className='fa fa-phone'></i>&ensp;Contact</span></Link>
        <Link to="/dic"><span title='Search'><i className='fa fa-search-plus'></i>&ensp;ITD</span></Link>
        <Link to="/collection"><span title='Tools'><i className='fa fa-clone'></i>&ensp;Tools</span></Link>        
              </center>
    </div>
    <br/>


{/* banner starts*/}
    <section id="banner" className="d-flex justify-content-center align-items-center">
            <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                <h1>Learning Today,<br/>Leading Tomorrow</h1>
                <h2>We are team of professional IT personnels that gives solutions to your problems.</h2>
                <a href="#" className="btn-get-started">Get Started</a>
            </div>
        </section>
    <br/>
   {/* banner ends */}
   
{/* why choose us starts*/}
   <section id="why-us" class="why-us">
            <div class="container" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="content">
                            <h3 style={{color:"white"}}>Why Choose {brand}?</h3>
                            <p>
                                {brand} offers a wide range of services to run your business fast and simple.
                                If you want to get the scoop on technology startups, then {brand} is there for you.
                            </p>
                            <div class="text-center">
                                <a href="about.html" class="more-btn">Learn More <i class="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-boxes d-flex flex-column justify-content-center">
                            <div class="row">
                                <div class="col-xl-4 d-flex align-items-stretch">
                                    <div class="icon-box mt-4 mt-xl-0">
                                        <i class="fa fa-bar-chart"></i>
                                        <h4>Vast Selection of Products</h4>
                                        <p>Asvan offers a diverse range of products, from electronics and gadgets to home essentials and art.</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 d-flex align-items-stretch">
                                    <div class="icon-box mt-4 mt-xl-0">
                                        <i class="fa fa-briefcase"></i>
                                        <h4>Competitive Pricing</h4>
                                        <p>We offer competitive prices without compromising on quality, ensuring you get the best value for your money</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 d-flex align-items-stretch">
                                    <div class="icon-box mt-4 mt-xl-0">
                                        <i class="fa fa-shield"></i>
                                        <h4>24/7 Customer Support</h4>
                                        <p>We offer 24/7 customer support, ensuring that any issues or concerns you may have are addressed promptly and efficiently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* why choose us ends */}


<br/>

{/* call to action starts */}
<section id="cta" className="cta">
      <div className="container">

        <div className="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn" href="/contact">Call To Action</a>
        </div>

      </div>
    </section>
    <br/>
{/* cta ends */}


{/* team starts */}
<section id="team" className="team">
      <div className="container animate__animated animate__fadeInUp">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp"  data-aos-delay="100">
              <div className="member-img">
                <img src={require('../assets/img/team/team-1.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="200">
              <div className="member-img">
                <img src={require('../img/phil.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Philemon Acheampong</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="300">
              <div className="member-img">
                <img src={require('../assets/img/team/team-3.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="400">
              <div className="member-img">
                <img src={require('../assets/img/team/team-4.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <br/>
{/* team ends */}


{/* what we do starts */}
    <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h5 className="text-primary mb-3">What we do</h5>
        </div>
        <div className="row pb-3">
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-code font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Website and WebApp Design</h6>
                    </div>
                    <div className="card-footer">
                       <img src={require('../img/code.png')}  style={{width: "95%"}}  />
                       <p>We design amazing webapps and websites which are user-friendly and from simple minimal pages to complex dynamic platforms </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-shopping-cart font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Ecommerce Solution</h6>
                    </div>
                    <div className="card-footer">
                        <img src={require('../img/Bitmap.png')} style={{width: "95%"}}  />
                    <p>Our ecommerce website solutions have all the necessary features you'll need to achieve great results</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-bullhorn font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Digital Marketing</h6>
                    </div>
                    <div className="card-footer">
                        <img src={require('../img/about.jpg')} style={{width: "95%"}}  />
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-bullhorn font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Learning platforms</h6>
                    </div>
                    <div className="card-footer">
                        <img src={require('../img/stu.jpg')} style={{width: "95%"}}  />
                        <p>Our Library can help you obtain educational knowledge</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-line-chart font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">SEO & PPC</h6>
                    </div>
                    <div className="card-footer">
                      <img src={require('../img/SEO-and-PPC.png')} style={{width: "95%"}}  />
                        <p>Our search engine optimization can help you to compete and stand out with the best top ranking result.</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
{/* what wedo ends */}
<br/>
<br/>
{/* blog starts */}
<div id="blog" className="blog-area">
      <div className="blog-inner area-padding">
        <div className="blog-overly"></div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <a href="/blog">
                    <img src={require("../img/1.jpg")} alt=""/>
                  </a>
                </div>
                <div className="blog-meta">
                  <span className="comments-type">
                    <i className="fa fa-comment-o"></i>
                    <a href="#">13 comments</a>
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                  </span>
                </div>
                <div className="blog-text">
                  <h4>
                    <a href="/blog">Assumenda repud eum veniam</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                  </p>
                </div>
                <span>
                  <a href="/blog" className="ready-btn">Read more</a>
                </span>
              </div>
              
            </div>
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <a href="/blog">
                    <img src={require("../img/2.jpg")} alt=""/>
                  </a>
                </div>
                <div className="blog-meta">
                  <span className="comments-type">
                    <i className="fa fa-comment-o"></i>
                    <a href="#">130 comments</a>
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                  </span>
                </div>
                <div className="blog-text">
                  <h4>
                    <a href="/blog">Explicabo magnam quibusdam.</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                  </p>
                </div>
                <span>
                  <a href="/blog" className="ready-btn">Read more</a>
                </span>
              </div>
             
            </div>
            {/* <div>
            <ReactVideo src="" poster="../img/loader.gif" primaryColor="red" autoplay/>
            </div> */}
            
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <a href="/blog">
                    <img src={require("../img/3.jpg")} alt=""/>
                  </a>
                </div>
                <div className="blog-meta">
                  <span className="comments-type">
                    <i className="fa fa-comment-o"></i>
                    <a href="#">10 comments</a>
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                  </span>
                </div>
                <div className="blog-text">
                  <h4>
                    <a href="/blog">Lorem ipsum dolor sit amet</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                  </p>
                </div>
                <span>
                  <a href="/blog" className="ready-btn">Read more</a>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>


{/* blog ends */}


    <br/>

    
<ScrollToTop smooth />

  <div className="navbarc" id="myNavbarc">
             <Link to="/"><span className="fa fa-home act" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>

        <Mycmd />
<Footer />

</div>
    </body>
  )
};

export default Home;