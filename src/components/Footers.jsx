import Accordion from "./Accordion";

function Footers() {

  return (
    <>
      <section className="section community mt-6">
        <h1 className="title_ is-size-5-mobile">Join Our Community</h1>
        <div className="subtitle_ is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M39.8068 80C61.7914 80 79.6135 62.0914 79.6135 40C79.6135 17.9086 61.7914 0 39.8068 0C17.8221 0 0 17.9086 0 40C0 62.0914 17.8221 80 39.8068 80Z" fill="white" />
            <path d="M14.825 41.9567C19.4784 39.381 24.6729 37.2313 29.5263 35.0707C37.8761 31.5317 46.2591 28.054 54.7267 24.8163C56.374 24.2647 59.3343 23.7253 59.6246 26.1787C59.4653 29.6513 58.8118 33.1037 58.3633 36.556C57.2252 44.148 55.9093 51.714 54.6265 59.281C54.1843 61.8013 51.0422 63.1063 49.0317 61.4933C44.1998 58.2133 39.3307 54.966 34.5606 51.61C32.9981 50.0147 34.4471 47.7233 35.8423 46.584C39.822 42.643 44.0425 39.2947 47.8142 35.15C48.8316 32.6813 45.8255 34.762 44.834 35.3997C39.3858 39.1723 34.0709 43.1753 28.3268 46.491C25.3927 48.114 21.973 46.727 19.0402 45.821C16.4107 44.7273 12.5574 43.625 14.8247 41.957L14.825 41.9567Z" fill="black" />
          </svg></a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="79" height="80" viewBox="0 0 79 80" fill="none">
              <path d="M39.5547 80C61.0614 80 78.4961 62.0914 78.4961 40C78.4961 17.9086 61.0614 0 39.5547 0C18.0479 0 0.613281 17.9086 0.613281 40C0.613281 62.0914 18.0479 80 39.5547 80Z" fill="white" />
              <path d="M64.5233 24.0887C62.6865 24.9259 60.7137 25.4919 58.6394 25.7463C60.7564 24.4441 62.3782 22.3807 63.1439 19.9249C61.1329 21.1517 58.9321 22.0154 56.637 22.4785C54.7693 20.4335 52.106 19.1568 49.1594 19.1568C43.5035 19.1568 38.9167 23.8665 38.9167 29.6794C38.9167 30.5031 39.007 31.3066 39.1806 32.0781C30.6665 31.6385 23.1182 27.4493 18.0658 21.0838C17.1835 22.6385 16.6785 24.446 16.6785 26.3746C16.6785 30.0248 18.4873 33.2455 21.2357 35.1321C19.6087 35.0803 18.0174 34.6292 16.5948 33.8165V33.9494C16.5948 39.0483 20.1255 43.2998 24.8122 44.2667C23.9513 44.509 23.0477 44.6356 22.113 44.6356C21.4521 44.6356 20.811 44.5714 20.1846 44.4504C21.4882 48.6295 25.2716 51.6716 29.7531 51.7575C26.247 54.5806 21.8292 56.2635 17.0311 56.2635C16.2046 56.2635 15.3879 56.2128 14.586 56.1135C19.1203 59.1 24.504 60.8434 30.2894 60.8434C49.1315 60.8434 59.4363 44.8092 59.4363 30.9042C59.4363 30.4476 59.4265 29.9945 59.4051 29.5431C61.4128 28.0514 63.146 26.2044 64.5233 24.0887Z" fill="black" />
            </svg>
          </a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M40.3029 0C62.2883 0 80.1096 17.9078 80.1096 40C80.1096 62.0922 62.2883 80 40.3029 80C18.3174 80 0.496094 62.0922 0.496094 40C0.496094 17.9078 18.3174 0 40.3029 0Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M40.3044 47.7219C36.0594 47.7219 32.6183 44.2656 32.6183 40C32.6183 35.7344 36.0594 32.2781 40.3029 32.2781C44.5479 32.2781 47.989 35.7344 47.989 40C47.989 44.2641 44.5479 47.7219 40.3029 47.7219H40.3044ZM30.7974 16.9719C22.2499 17.3641 17.7592 22.1953 17.3875 30.4484C17.1014 36.6953 17.1014 43.3047 17.3875 49.5531C17.7592 57.8047 22.2499 62.6375 30.7974 63.0281C37.0157 63.3141 43.5916 63.3141 49.8098 63.0281C58.0231 62.6516 62.8294 58.1453 63.2213 49.5531C63.5043 43.3031 63.5027 36.6984 63.2213 30.4484C62.8388 22.0359 58.1817 17.3547 49.8098 16.9719C43.5916 16.6859 37.0157 16.6859 30.7974 16.9719ZM49.6201 21.1422C55.8306 21.4266 58.7897 24.3969 59.0711 30.6375C59.351 36.7562 59.3495 43.2438 59.0711 49.3625C58.7819 55.7828 55.6704 58.5813 49.6201 58.8594C43.5294 59.1375 37.0779 59.1375 30.9871 58.8594C24.9368 58.5813 21.8269 55.7828 21.5361 49.3625C21.2578 43.2438 21.2578 36.7562 21.5361 30.6375C21.8114 24.5578 24.5978 21.4359 30.9871 21.1422C37.0779 20.8625 43.5294 20.8609 49.6201 21.1422ZM55.3781 27.6328C55.3781 29.1672 54.1388 30.4125 52.6119 30.4125C51.0818 30.4125 49.844 29.1688 49.844 27.6328C49.844 26.0969 51.0818 24.8531 52.6119 24.8531C54.1388 24.8516 55.3781 26.0969 55.3781 27.6328ZM40.3044 28.1031C33.7658 28.1031 28.4635 33.4297 28.4635 40C28.4635 46.5703 33.7658 51.8969 40.3029 51.8969C46.843 51.8969 52.1438 46.5703 52.1438 40C52.1438 33.4297 46.843 28.1031 40.3044 28.1031Z" fill="black" />
            </svg>
          </a>
        </div>

      </section>
      {/* Accordion */}
      <Accordion />
      <section className='section p-0 form'>
        <div className="textarea-card">
          <h1 className='is-size-4-mobile mb-3 has-text-centered is-size-1 has-text-white'>Contact Us</h1>
          <p className='is-size-7-mobile mb-6 has-text-centered is-size-4 has-text-white'>Do you have anything to share with us?</p>
          <div className="send-message">
            <textarea className=" textarea container-fluid" placeholder="Anything you’d like to share or feedback" rows="10"></textarea>
            <span className="send-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 44 44" fill="none">
                <path d="M41.9509 2.11C43.3288 3.51027 43.7409 5.45875 43.8971 6.87412C44.0714 8.45388 44.0114 10.2662 43.8138 12.1323C43.4165 15.8847 42.4064 20.3579 41.0541 24.6634C39.7035 28.9634 37.9559 33.2741 36.0068 36.6594C35.0357 38.3462 33.9484 39.9198 32.7505 41.1609C31.6059 42.3468 30.0271 43.5771 28.0377 43.9125L28.0268 43.9143C27.6524 43.9762 27.2874 43.99 27.1587 43.9949L27.1342 43.9958C25.8352 44.0486 24.7135 43.5905 23.9477 43.1792C23.129 42.7394 22.3607 42.1589 21.6756 41.5502C20.3023 40.3301 18.9638 38.7289 17.8747 37.0587C17.2779 36.1436 16.7125 35.1413 16.2504 34.1039C15.5648 32.565 15.9834 30.8165 17.0202 29.4874L23.3111 22.0748C23.6331 21.6954 23.6096 21.1331 23.2571 20.7817C22.9046 20.4302 22.3407 20.4068 21.9601 20.7279L14.5254 27C13.1083 28.0989 11.2342 28.5247 9.61348 27.7548C8.57717 27.2626 7.57802 26.6693 6.66528 26.0416C4.94177 24.8563 3.29037 23.3858 2.07933 21.8529C1.4751 21.0882 0.904265 20.2122 0.515462 19.2644C0.139766 18.3487 -0.184658 17.0727 0.121715 15.6769L0.122222 15.6746C0.54089 13.7687 1.79559 12.2596 2.98477 11.1604C4.23704 10.0029 5.81159 8.94031 7.50217 7.98266C10.8944 6.06113 15.19 4.31869 19.4734 2.96495C23.7591 1.61051 28.2068 0.590187 31.9371 0.188379C33.7916 -0.011373 35.5988 -0.0730753 37.1774 0.105631C38.5949 0.266103 40.5557 0.69217 41.9509 2.11Z" fill="#FFD321" />
              </svg>
            </span>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="footer-content is-size-7-mobile">
            <span>2023 BEI CONSULTANCY LTD. ALL RIGHTS RESERVED</span>
            <span className='me-auto'><span>How it works</span> <span className='about-us'>About Us</span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footers;
