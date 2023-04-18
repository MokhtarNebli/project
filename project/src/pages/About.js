import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'

function About () {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About US </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          convallis enim id dolor suscipit dapibus. Donec non dignissim ligula.
          Donec dignissim purus et nulla sollicitudin imperdiet. Suspendisse
          auctor porta tellus, mollis rhoncus velit dapibus eget. Nunc a augue
          justo. Etiam pellentesque tortor quis consequat aliquet. Aenean velit
          nulla, vulputate et efficitur nec, aliquet at ipsum. Phasellus vitae
          dolor magna. Ut facilisis commodo turpis, a ultrices leo pharetra
          lacinia. Nulla facilisi. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Aenean congue
          feugiat est ut semper. Donec eget interdum sapien. Suspendisse eget
          erat nec nisl varius dictum et in ligula. Proin elit tellus, luctus
          nec suscipit sit amet, dapibus sed eros. Curabitur id facilisis felis.
        </p>
      </div>
      <div className='maps'>
        <iframe
          width="576"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=676&amp;height=388&amp;hl=en&amp;q=khzma%20sousse+(nebli's%20Pizza)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://maps-generator.com/"></a>
      </div>
    </div>
  );
}

export default  About;