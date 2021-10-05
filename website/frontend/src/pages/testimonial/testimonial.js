import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="carus">
          <img src={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"} style={{width:"200px",borderRadius:"50%"}} />
          <div className="myCarousel" >
            <h3>Kavita Ambulkar, Pune</h3>
            <p>
            The yoga class makes me set the tone for the day.
             It really calms me down. Although a little early, I got a chance to learn Sudarshan Kriya, 
             which is proving beneficial to me. Pranamayam helps me to calm myself.
            Also the evening chanting helps a lot.
            </p>
          </div>
        </div>

        <div>
          <img src={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"} style={{width:"200px",borderRadius:"50%"}}/>
          <div className="myCarousel">
            <h3>Aditya, Bangalore</h3>
          
            <p>
            Jai Gurudev, I am still learning and it's my baby step towards spritual path. 
            It provides a platform where you understand and connect with your body and mind. 
            I think it will lead me towards inner peace. 🙏
            </p>
          </div>
        </div>

        <div>
          <img src={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"} style={{width:"200px",borderRadius:"50%"}} />
          <div className="myCarousel">
            <h3>Harshada, Pune</h3>
    
            <p>
            I feel so fortunate that I got a wonderful opportunity to learn Sudarshan Kriya at the comfort of my home. I did the breath and meditation course out of curiosity. But the results that I have seen in my self over the time are amazing. I was so amazed to see the increase in my energy levels during the course itself. I have been able to overcome my anger and anxiety to a level where even my family members have seen the change. My teachers have been doing a wonderful job in bringing this wonderful change in so many lives. I highly recommend learning this life changing skill to everyone.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}