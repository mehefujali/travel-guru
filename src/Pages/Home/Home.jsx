import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css'
import { useEffect, useState } from "react";
import DestinaionCard from "../../Components/DestinationCard/DestinaionCard";
// import { AuthContext } from "../../Context/AuthProvider";


const Home = () => {
      const [destinations, setDestination] = useState([])
      useEffect(() => {
            fetch('/destinations.json')
                  .then(res => res.json())
                  .then(data => setDestination(data))
      }, [])
      
      
    
      const sliderSetting = {

            adaptiveHeight: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            // fade:true,

            autoplaySpeed: 4000,
            autoplay: true,
            swipe: true,
            pauseOnHover: true,
            arrows: true,
        
      }
      return (
            <div>
                  <div className=" pt-20 lg:pt-0  lg:h-[100vh] bg-homeBg bg-[#000000cc] bg-blend-multiply bg-cover items-center justify-center flex">

                        <div className=" container  mx-auto w-10/12  xl:w-full justify-center items-center   ">
                              <Slider {...sliderSetting} >
                                    {
                                          destinations.map(destination => <DestinaionCard key={destination.id} destination={destination}></DestinaionCard>)
                                    }

                              </Slider>
                        </div>
                  </div>


            </div>
      );
};

export default Home;