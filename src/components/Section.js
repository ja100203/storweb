import React from 'react'
import moduleName from 'module'
import "@emotion/styled"
import "@mui/icons-material"
import "@emotion/react"
const Section = () => {
  return (
    <>
   <div className="bg-gray">
          <header className="header">
            <div className="bg-transparent">
              <div className="container">
                <nav id="top-links" className="nav">
                  <ul className="list-inline">
                    <li className="first">
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=common/home"><i className="fl-line-icon-set-home62" /><span>Home</span>
                      </a>
                    </li>
                    <li className="toggle-wrap">
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=account/account" title="My Account" className="toggle"><i className="fl-line-icon-set-profile7" />
                        <span>My Account</span>
                        <span className="caret" /></a>
                      <ul className="toggle_cont pull-right">
                        <li>
                          <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=account/register">Register</a>
                        </li>
                        <li>
                          <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=account/login">Login</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=account/wishlist" id="wishlist-total" title="Wish List (0)"><i className="fl-line-icon-set-heart66" /> <span>Wish List (0)</span></a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=checkout/cart" title="Shopping Cart"><i className="fl-line-icon-set-shopping63" /> <span>Shopping Cart</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=checkout/checkout" title="Checkout"><i className="fl-line-icon-set-circular48" /> <span>Checkout</span></a>
                    </li>
                  </ul>
                </nav>
                <div className="box-cart">
                  <div id="cart" className="cart toggle-wrap">
                    <button type="button" data-loading-text="Loading..." className="toggle" fdprocessedid="mhm6z">
                      <i className="fl-line-icon-set-shopping63" /> 
                    </button>
                    <ul className="pull-right toggle_cont">
                      <li>
                        <p className="text-center">Your shopping cart is empty!</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-currency">
                  <form action="https://livedemo00.template-help.com/opencart_55593/index.php?route=common/currency/currency" method="post" encType="multipart/form-data" id="currency">
                    <div className="btn-group toggle-wrap">
                      <span className="toggle">
                        $			<span className="hidden-xs hidden-sm hidden-md hidden">Currency</span> </span>
                      <ul className="toggle_cont pull-right">
                        <li><button className="currency-select" type="button" name="EUR">€ Euro</button></li>
                        <li><button className="currency-select" type="button" name="GBP">£ Pound Sterling</button></li>
                        <li><button className="currency-select" type="button" name="USD">$ US Dollar</button></li>
                      </ul>
                    </div>
                    <input type="hidden" name="code" defaultValue />
                    <input type="hidden" name="redirect" defaultValue="https://livedemo00.template-help.com/opencart_55593/index.php?route=common/home" />
                  </form>
                </div>
                <div className="box-language">
                  <form action="https://livedemo00.template-help.com/opencart_55593/index.php?route=common/language/language" method="post" encType="multipart/form-data" id="language">
                    <div className="btn-group toggle-wrap">
                      <span className="toggle">
                        <img className="hidden" src="image/flags/gb.png" alt="English" title="English" />
                        en							<span className="hidden-xs hidden-sm hidden-md hidden">Language</span> </span>
                      <ul className="toggle_cont pull-right">
                        <li><a href="en"><img className="hidden" src="image/flags/gb.png" alt="English" title="English" /> English</a></li>
                        <li><a href="de"><img className="hidden" src="image/flags/de.png" alt="Deutsch" title="Deutsch" /> Deutsch</a></li>
                        <li><a href="ru"><img className="hidden" src="image/flags/ru.png" alt="Русский" title="Русский" /> Русский</a></li>
                      </ul>
                    </div>
                    <input type="hidden" name="code" defaultValue />
                    <input type="hidden" name="redirect" defaultValue="https://livedemo00.template-help.com/opencart_55593/index.php?route=common/home" />
                  </form>
                </div>
                <div id="search" className="search">
                  <input type="text" name="search" defaultValue fdprocessedid="gg6ow5" />
                  <button type="button" className="button-search" fdprocessedid="tbty9i" />
                </div>          </div>    
            </div>
            <div className="container">
              <div id="logo" className="logo">
                <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=common/home"><img src="https://livedemo00.template-help.com/opencart_55593/image/catalog/logo.png" title="Stationery online store" alt="Stationery online store" className="img-responsive" /></a>
              </div>
            </div>
            <div className="container">
              <div id="menu-gadget" className="menu-gadget">
                <div id="menu-icon" className="menu-icon">Categories</div>
                <ul className="menu">
                  <li>
                    <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=33">CD &amp; DVD</a>
                  </li>
                  <li>
                    <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=25">Cleaning</a>
                    <i className="fa fa-angle-down" /><ul>
                      <li>
                        <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=32" className="parent">Paper products</a><i className="fa fa-angle-down" /><ul>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=40">Consectetur adipisicing elit</a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=42">Incididunt ut labore et dolore </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=39">Lorem ipsum dolor sit amet</a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=43">Magna aliqua ut enim ad </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=41">Sed do eiusmod tempor </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=28" className="parent">Adchesives &amp; tapes</a><i className="fa fa-angle-down" /><ul>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=46">Incididunt ut labore et dolore </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=36">Lorem ipsum dolor sit amet </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=49">Lorem ipsum dolor sit amet </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=47">Magna aliqua ut enim ad </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=48">Minim veniam quis nostrud </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=44">Sed do eiusmod tempor </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=31" className="parent">Diaries &amp; planners</a><i className="fa fa-angle-down" /><ul>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=50">Consectetur adipisicing elit </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=52">Incididunt ut labore et dolore </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=35">Lorem ipsum dolor sit amet </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=53">Magna aliqua ut enim ad </a>
                          </li>
                          <li>
                            <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=51">Sed do eiusmod tempor </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=20">Furniture</a>
                  </li>
                  <li>
                    <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=18">Inks &amp; toners</a>
                  </li>
                  <li>
                    <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=34">Supplies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="stuck" className="stuck-menu scroll-fix" style={{width: '0px'}}>
              <div id="tm_menu" className="nav__primary">
                <div className="container">
                  <ul className="menu sf-js-enabled sf-arrows">
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=33">CD &amp; DVD</a>
                    </li>
                    <li className>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=25" className="sf-with-ul">Cleaning</a>
                      <ul style={{display: 'none'}}>
                        <li style={{opacity: 0}}>
                          <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=32" className="parent sf-with-ul">Paper products</a><ul style={{display: 'none'}}>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=40">Consectetur adipisicing elit</a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=42">Incididunt ut labore et dolore </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=39">Lorem ipsum dolor sit amet</a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=43">Magna aliqua ut enim ad </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=41">Sed do eiusmod tempor </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{opacity: 0}} className>
                          <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=28" className="parent sf-with-ul">Adchesives &amp; tapes</a><ul style={{display: 'none'}}>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=46">Incididunt ut labore et dolore </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=36">Lorem ipsum dolor sit amet </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=49">Lorem ipsum dolor sit amet </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=47">Magna aliqua ut enim ad </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=48">Minim veniam quis nostrud </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=44">Sed do eiusmod tempor </a>
                            </li>
                          </ul>
                        </li>
                        <li style={{opacity: 0}}>
                          <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=31" className="parent sf-with-ul">Diaries &amp; planners</a><ul style={{display: 'none'}}>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=50">Consectetur adipisicing elit </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=52">Incididunt ut labore et dolore </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=35">Lorem ipsum dolor sit amet </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=53">Magna aliqua ut enim ad </a>
                            </li>
                            <li style={{opacity: 0}}>
                              <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=51">Sed do eiusmod tempor </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=20">Furniture</a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=18">Inks &amp; toners</a>
                    </li>
                    <li>
                      <a href="https://livedemo00.template-help.com/opencart_55593/index.php?route=product/category&path=34">Supplies</a>
                    </li>
                  </ul>
                  <div className="clear" />
                </div>
              </div>
            </div><div id="stuck" className="stuck-menu" style={{visibility: 'hidden', height: '82px'}} />
          </header>
          <div className="header_modules">	<div className="container">
              <div className="banner_wrap"><div className="banner-1">
                  <div className="banner-cnt">
                    <a className="clearfix" href="index.php?route=product/product&product_id=49">
                      <img src="https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/banner-1-400x365.png" alt="banner-1" className="img-responsive" />
                      <div className="s-desc"><span>$10.99</span>
                        <p>Architects fine <br />art students <br />stationery</p></div>
                    </a>
                  </div>
                </div><div className="box_html order">
                  <div className="order_cnt">
                    <dl className="fl-line-icon-set-flat10">
                      <dt>Order online:</dt>
                      <dd><a href="callto:#">1-800-123-1234</a></dd>
                    </dl>
                  </div></div></div>
              <div className="banner-2">
                <div className="banner-cnt">
                  <a className="clearfix" href="index.php?route=product/product&product_id=47">
                    <img src="https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/banner-2-770x523.png" alt="banner-2" className="img-responsive" />
                    <div className="s-desc"><p>Smead slash pocket <br />folders, jacket</p>
                      <span>$14.15</span></div>
                  </a>
                </div>
              </div>
              <div className="banner-3">
                <div className="banner-cnt">
                  <a className="clearfix" href="index.php?route=product/product&product_id=47">
                    <img src="https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/banner-3-600x507.png" alt="banner-3" className="img-responsive" />
                    <div className="s-desc"><p>Camlin office <br />highlighter</p>
                      <span>$13.90</span></div>
                  </a>
                </div>
              </div>
              <div className="banner-4">
                <div className="banner-cnt">
                  <a className="clearfix" href="index.php?route=product/product&product_id=46">
                    <img src="https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/banner-4-570x254.png" alt="banner-4" className="img-responsive" />
                    <div className="s-desc"><p>Snap-N-Store snap <br />together file box</p>
                      <span>$25.99</span></div>
                  </a>
                </div>
              </div>
              <div className="box_html shop">
                <div className="shop_cnt">
                  <p className="fl-line-icon-set-blank20">Shop &amp; save</p>
                  <span>on all our store items</span>
                </div></div>
              <div className="box_html gift">
                <a href="index.php?route=account/voucher">
                  <div className="gift_cnt">
                    <p className="fl-line-icon-set-diamond18">Special <br />gift cards</p>
                    <span>give the perfect gift</span>
                  </div>
                </a></div>
              <div className="banner-5">
                <div className="banner-cnt">
                  <a className="clearfix" href="index.php?route=product/product&product_id=45">
                    <img src="https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/banner-5-1170x260.png" alt="banner-5" className="img-responsive" />
                    <div className="s-desc"><p>Kangaro <br />TRENDY 45 stapler</p>
                      <span>$15.90</span></div>
                  </a>
                </div>
              </div>
              <div className="box_html shipping">
                <h2>Free shipping on orders over $99</h2>
                <p>This offer is valid on all our store items</p></div>
            </div>
          </div>
          </div>
    </>
  )
}

export default Section
