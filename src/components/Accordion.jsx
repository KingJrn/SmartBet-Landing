function Accordion() {
  return (
    <>
      <section className="main-con">

        <div className="container">
          <h1 className="has-text-centered mb-4 is-size-2 is-size-4-mobile">FAQs</h1>
          <h2 className="has-text-centered mb-6 is-size-2 is-size-4-mobile">Frequently Asked Questions</h2>

          <div className="px-5">
            <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" />
              <label className="faq-drawer__title" htmlFor="faq-drawer">
                DRAWER ONE
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" />
              <label className="faq-drawer__title" htmlFor="faq-drawer-2">
                DRAWER TWO
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" />
              <label className="faq-drawer__title" htmlFor="faq-drawer-3">
                DRAWER THREE
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Accordion;
