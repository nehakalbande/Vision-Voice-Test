import React, { useEffect } from "react";
import MyCard from "./MyCard";
import src from "../assets/eye-checkup.png";
import src1 from "../assets/ear.png";
import InfoCard from "./InfoCard";

const Home = () => {
  useEffect(() => {
    document.title = "Vision Voice ";
  });

  return (
    <div className="main-home-div">
      <div className="why-div" style={{minHeight:"100vh"}}>
        <InfoCard />
      </div>
      <div className="card-holder" style={{minHeight:"100vh", backgroundColor:"#f5f5f5"}}>
        <h1
          style={{
            paddingTop: "75px",
            textAlign: "center"
          }}
        >
          VISION TEST
        </h1>
        <MyCard
          src={src}
          context={
            "Healthy brain function needs healthy eyesight. Considering that your optic nerve connects your eyes and your brain, a healthy co-dependent relationship is necessary. By keeping your eyes healthy, you keep your brain healthy – improving your overall quality of life!Your future can be colorful and full of life just by making sure that you take regularly.Eyesight checkup and adopt good habits for your eyes."
          }
          name={"Test Your Eyes"}
          to={"/eyetest"}
          alt={"mello"}
          isReverse={"false"}
        />
      </div>
      <div className="card-holder" style={{minHeight:"100vh"}}>
        <h1 style={{ textAlign: "center" ,paddingTop: "50px"}}>AURAL TEST</h1>
        <MyCard
          src={src1}
          context={
            " Our ears play a crucial role in how we communicate with those around us. They are responsible for hearing and our sense of balance. When your ears aren’t functioning properly, you can experience an array of symptoms, including hearing loss, cognitive decline, balance issues, and delayed speech processing. Because our ears are such an important part of how we communicate and process information, it’s important to have them examined regularly.It’s a noisy world?  So protect your hearing !"
          }
          name={"Test Your Ears"}
          to={"/auraltest"}
          alt={"mello"}
          isReverse={"true"}
        />
      </div>
    </div>
  );
};

export default Home;
