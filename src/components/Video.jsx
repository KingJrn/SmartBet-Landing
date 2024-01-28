
function Video() {
  return (
    <>
      <section className="section_">
    <div className=" ">
      <figure className="image plays is-16by9">
        <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/watch?v=lLFSfGikXK8" frameBorder="0" allowfullscreen></iframe>
      </figure>
      <p className="has-text-centered mt-4 how_to_play is-size-3-mobile">How to play</p>
    </div>
  </section>
    </>
  );
}
export default Video;
