// import play from '../assets/images/play.png'
function Video() {
  return (
    <>
      <section className="section">
    <div className="">
      <figure className="image is-16by9">
        <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowfullscreen></iframe>
      </figure>
      <p className="has-text-centered mt-4 how_to_play is-size-3-mobile">How to play</p>
    </div>
  </section>
    </>
  );
}
export default Video;
