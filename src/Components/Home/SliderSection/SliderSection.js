import React from 'react';
import './SliderSection.css';

const SliderSection = () => {
    return (
        <div className=" col-12 mt-3">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701311268.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-info-bg">
      <h5>Green hills, rocky rivers, rain or swamp forests and tea gardens at the bends of the hills, Sylhet is a canvas of natural beauty! </h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpaperaccess.com/full/6218052.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-info-bg">

      <h5>The most helpful way to get a great experience on a trip abroad is to have the right tour plan and local support. And in both cases</h5>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://www.wallpaperup.com/uploads/wallpapers/2015/11/15/836416/f19feffa5df1b435284da00952693b84.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-info-bg">
      <h5>Green hills, mountain rivers, and living canvas of clouds and waterfall</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
};

export default SliderSection;