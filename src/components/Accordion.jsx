function Accordion() {
  return (
    <>
      <section className="main-con">
        <div className="container">
          <h1 className="has-text-centered mb-4 is-size-2 is-size-4-mobile">
            FAQs
          </h1>
          <h2 className="has-text-centered mb-6 is-size-2 is-size-4-mobile">
            Frequently Asked Questions
          </h2>

          <div className="px-5">
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id="faq-drawer"
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor="faq-drawer">
                How do I place a bet on Smartbet ?
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    To place a bet, open play.smartcryptobet.co, connect your
                    wallet, navigate to the desired sports event or casino game,
                    select your wager, and confirm transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id="faq-drawer-2"
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor="faq-drawer-2">
                What Coins are supported on Smartbet?
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    We support BNB and USDT on the binance smartchain network
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id="faq-drawer-3"
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor="faq-drawer-3">
                Can I trust the security of my personal and financial information?
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    Absolutely. Our platform doesn't keep users funds/details, after transacting on our platform you can proceed to disconnect your wallet from our platform. Our platform is designed with robust measures to safeguard your privacy and financial transactions.

                  </p>
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id="faq-drawer-4"
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor="faq-drawer-4">
                What type of odds does smartbet use, and what do they represent?
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    Smartbet uses a dynamic odds system which ranges from 2X-10X at different times for our virtual games and football Odds are determined based on various factors, including team performance, player statistics, and market conditions. They represent the potential payout multiplier for a successful bet.                  </p>
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id="faq-drawer-5"
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor="faq-drawer-5">
                Are there any bonuses or promotions for new users?
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    No, currently we do not offer exciting welcome bonuses or ongoing promotions for either new and existing users. Check our social media page regularly to stay updated on the latest offers and boost your betting experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id="faq-drawer-6"
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor="faq-drawer-6">
              How can I become an ambassador or affiliate

              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                  To be a Smartbet ambassador or an affiliate partner kindly send a mail containing your CV to smartcryptobet@gmail.com                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordion;
