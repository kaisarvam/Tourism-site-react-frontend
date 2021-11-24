import React from 'react';
import Services from '../ServiceModule/Services/Services'
import Zoom from 'react-reveal/Zoom';
import SliderSection from './SliderSection/SliderSection';

const Home = () => {
    return (
        <div>
           <strong> <h1 className="m-5 fw-bold text-light">  <span className="text-warning">Home </span>Page</h1> </strong>
            <section className="container-fluid">
                <img src="./travel-banner.jpg" alt="" className="img-fluid" />
            </section>
            <section>
                <Services></Services>
            </section>
            <section>
                <hr/>
                <p className="text-light m-3 fw-bold"><strong> " Travel
                     because if you don't travel then
                     your thoughts won’t be strengthened,
                     won’t get filled with ideas.
                     Your dreams will be born with fragile legs and then you end up believing in tv-shows, and in those who invent enemies
                     that fit perfectly with your nightmares
                     to make you live in terror. "</strong></p>
                     <hr/>
                <SliderSection></SliderSection>
            </section>
            <section className="m-5">
            <div className="container-fluid w-75  text-light  pb-3 pt-3">
            <h2><strong> Contact Us </strong></h2>
  <form action="/action_page.php" >
  <Zoom top cascade>
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label htmlFor="country">Country</label>
    <select id="country" name="country" >
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something."></textarea>
    <button className="btn btn-primary w-50">Submit</button>
    </Zoom>
  </form>

  </div>   
            </section>
        </div>
    );
};

export default Home;