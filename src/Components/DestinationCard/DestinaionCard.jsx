import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const DestinaionCard = ({ destination }) => {
      return (
            <div>
                  <div className=" flex flex-col-reverse md:flex-row items-center justify-between mr-10 w-11/12 mx-auto gap-7  ">
                        <div className=" w-11/12 md:w-2/5 flex-col flex gap-3">
                              <h1 className="text-white text-3xl md:text-5xl xl:text-7xl font-bebes md:font-semibold">{destination.placeName}</h1>
                              <p className=" text-lg text-gray-300">{destination.description}
                              </p>
                              <Link to={`/home/destination/${destination.id}`} className=" w-fit  flex items-center gap-2 rounded bg-[#F9A51A] border-none  px-6 py-2">Booking <FaLongArrowAltRight /></Link>
                        </div>
                        <div className=" w-11/12  mx-auto md:w-fit h-fit ">
                              <img className=" md:w-60  h-48 w-full md:h-96 object-cover rounded-md border-[5px] border-yellow-500" src={destination.image} alt={destination.placeName} />
                        </div>
                  </div>
            </div>
      );
};
DestinaionCard.propTypes ={
      destination:PropTypes.object.isRequired
}
export default DestinaionCard;