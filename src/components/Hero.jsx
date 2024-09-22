function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-body m-auto container">
          <p className="_title is-size-1-mobile">#1 PLAY 2 EARN PLATFORM</p>
          <div id="actions" className="_subtitle is-flex is-flex-direction-row is-flex-wrap is-justify-content-space-between is-align-items-center">
            <span className="is-size-5-mobile">Safe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <circle cx="7.5" cy="8" r="7.5" fill="#FFD321" />
            </svg>
            <span className="is-size-5-mobile">Decentralized</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <circle cx="7.5" cy="8" r="7.5" fill="#FFD321" />
            </svg>
            <span className="is-size-5-mobile">Fun</span>
          </div>

          <div className="is-flex  is-align-items-center is-flex-wrap-wrap hero_btn is-justify-content-center">
            <button className="button is_warning is_3">
              <a href="https://play.smartcryptobet.co/" className="has-text-black"> Play Now</a>

            </button>
            <button className="button  is_3">
              <a href="/referralapp.apk" className="has-text-black" download> Download App</a>

            </button>
          </div>
        </div>

      </section>
      <div className="welcome_page">
        <div className="welcome_page_wrapper ">
          <h1 className="is-size-2 is-size-4-mobile">Welcome to SmartGame</h1>
          <p className="">
          Smart Game is a cutting-edge decentralized gaming platform designed to entertain and educate users simultaneously Smart Game operates on a “play-to-earn” model, allowing users to earn rewards while enjoying a seamless gaming experience. Our platform is fast, reliable, and built with low transaction fees. Currently, we support four major blockchain networks: Ethereum (ETH-Base), TON, Binance Smart Chain (BSC), and Solana. Additionally, we provide API integrations for 
          both Web2 and Web3 companies, offering scalable solutions for future-forward businesses.
          </p>
        </div>
      </div>
    </>
  );
}
export default Hero;
