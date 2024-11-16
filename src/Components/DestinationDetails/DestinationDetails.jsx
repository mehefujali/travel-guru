import { useLoaderData, useParams } from "react-router-dom";


const DestinationDetails = () => {
      const { id } = useParams()
      const data = useLoaderData()
      const filter = data.find(destination => destination.id === parseInt(id))
      console.log(filter);



      return (
            <div>
                  <div className="  h-[100vh] bg-homeBg bg-[#000000cc] bg-blend-multiply bg-cover items-center justify-center flex">

                        <div className=" container  mx-auto w-10/12  xl:w-full justify-center items-center   ">
                              <div className=" flex justify-between">
                                    <div className=" w-11/12 md:w-2/5 flex-col flex gap-3">
                                          <h1 className="text-white text-3xl md:text-5xl xl:text-7xl font-bebes md:font-semibold">{filter.placeName}</h1>
                                          <p className=" text-lg text-gray-300">{filter.description}
                                          </p>

                                    </div>
                                    <div className=" bg-white p-10 rounded">
                                          <div  className=" grid grid-cols-6 gap-6">
                                                <label htmlFor="" className=" col-span-6">
                                                      <p>Origin</p>
                                                      <input 
                                                      placeholder="From"
                                                      className=" input focus:outline-none w-full bg-gray-500 bg-opacity-20" type="text" name="" id="" />
                                                      
                                                </label>
                                                <label htmlFor="" className=" col-span-6">
                                                      
                                                      <p>Destination</p>
                                                      <input 
                                                      value={filter.placeName}
                                                      className=" input focus:outline-none w-full bg-gray-500 bg-opacity-20" type="text" name="" id="" />
                                                      
                                                </label>
                                                <label htmlFor="" className=" col-span-3">
                                                      <p>Form</p>
                                                      
                                                      <input 
                                                      placeholder="dd/mm"
                                                      className=" input focus:outline-none bg-gray-500 bg-opacity-20" type="date" name="" id="" />
                                                      
                                                </label>
                                                <label htmlFor="" className=" col-span-3">
                                                      <p>To</p>
                                                      <input 
                                                      placeholder="dd/mm"
                                                      className=" input focus:outline-none bg-gray-500 bg-opacity-20" type="date" name="" id="" />
                                                      
                                                </label>
                                                <button className=" btn w-full bg-[#F9A51A] col-span-6 ">Start Booking</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default DestinationDetails;