function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-body m-auto container">
          <p className="_title is-size-1-mobile">#1 CRYPTO BETTING PLATFORM</p>
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
          <div className="is-flex is-justify-content-space-evenly is-align-items-center">
            <button className="button is_warning is_3">
              <a href="play.smartcryptobet.co" className="has-text-black"> Play Now</a>

            </button>
          </div>
        </div>

      </section>
      <div className="welcome_page">
        <div className="welcome_page_wrapper ">
          <h1 className="is-size-2 is-size-4-mobile">Welcome to SmartBet</h1>
          <p className="">
            This is a decentralized web3 betting platform built on the Binance Smartchain.
            Bridging the gap between traditional betting and the future of online gambling using Web3 technology.
            You will only experience the benefits of trustless and fast transactions, low fees, and total transparency with Smartbet.
          </p>
        </div>
      </div>
    </>
  );
}
export default Hero;
