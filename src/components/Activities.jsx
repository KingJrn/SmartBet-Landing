import football from '../assets/images/derbystar-ballstars.gif';
import car from '../assets/images/832wng.gif';
import dice from '../assets/images/loader.gif';
import coin from '../assets/images/coin.gif';
import fruits from '../assets/images/847myv.gif';

function Activities() {
  return (
    <>
      <section className="activities">
        <div className="mb-6 is_mb mt-6">
          <div className="columns  is-desktop mx-6 is_gap">
            <div className=" column rect is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <img id="img_width" src={football} alt="Your GIF" />
            </div>
            <div className="has-text-center column is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <div className="activity-info">
                <h2 className="is-size-3-mobile">FOOTBALL</h2>
                <p className="is-size-5-mobile">
                  Feel the pulse of the pitch, predict the final whistle's pitch! Football's your canvas, paint it and claim your victory.
                </p>
                <div className="buttons">
                  <a href="https://play.smartcryptobet.co/" className="button is_warning is-size-5 _white">
                    Launch App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* next columns */}
        <div className="mb-6 is_mb">
          <div className="columns test is-desktop mx-6 is_gap set_column_reverse ">
            <div className="has-text-center column is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <div className="activity-info">
                <h2 className="is-size-3-mobile">CAR RACE</h2>
                <p className="is-size-5-mobile">
                  Place your bet on the fastest wheels. Feel the adrenaline, win big!
                </p>
                <div className="buttons">
                  <a href="https://play.smartcryptobet.co/" className="button is_warning is-size-5 _white">
                    Launch App
                  </a>
                </div>
              </div>

            </div>
            <div className="column rect is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <img id="img_width" src={car} alt="Your GIF" />
            </div>
          </div>
        </div>
        {/* next */}
        <div className="mb-6 is_mb">
          <div className="columns is-desktop mx-6 is_gap">
            <div className="column rect is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <img id="img_width" src={dice} alt="Your GIF" />            </div>
            <div className="has-text-center _activity column is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <div className="activity-info">
                <h2 className="is-size-3-mobile">DICE</h2>
                <p className="is-size-5-mobile">
                  Take a chance on luck. Bet on the roll, watch the numbers unfold, and seize your winning moment!                </p>
                <div className="buttons">
                  <a href="https://play.smartcryptobet.co/" className="button is_warning is-size-5 _white">
                    Launch App
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* next columns */}
        <div className="mb-6 is_mb">
          <div className="has-text-center columns is-desktop mx-6 is_gap set_column_reverse ">
            <div className="_activity column is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <div className="activity-info">
                <h2 className="is-size-3-mobile">COIN FLIP</h2>
                <p className="is-size-5-mobile">
                  Luck meets strategy. Call it right, double your thrill, double your coins.</p>
                <div className="buttons">
                  <a href="https://play.smartcryptobet.co/" className="button is_warning is-size-5 _white">
                    Launch App
                  </a>
                </div>
              </div>

            </div>
            <div className="column rect is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <img id="img_width" src={coin} alt="Your GIF" />            </div>
          </div>
        </div>
        <div className="is_mb">
          <div className=" has-text-center columns is-desktop mx-6 is_gap">
            <div className="column rect is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <img id="img_width" src={fruits} alt="Your GIF" />            </div>
            <div className="_activity column is-flex is-flex-direction-row is-flex-wrap is-justify-content-center is-align-items-center">
              <div className="activity-info">
                <h2 className="is-size-3-mobile">FRUITS</h2>
                <p className="is-size-5-mobile">
                  Bet on nature's luck. Sweeten your odds with a fruity twist. Harvest winnings!                </p>
                <div className="buttons">
                  <a href="https://play.smartcryptobet.co/" className="button is_warning is-size-5 _white">
                    Launch App
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Activities
