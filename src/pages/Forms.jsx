import React, { useEffect, useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Forms = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const param = parseInt(useParams().id)

  console.log(param)
  const handleToggle = () => {
    
    setIsToggled(!isToggled);
  };

  const [cars, setCars] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState(null);


  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  useEffect(() => {
    fetch('/data/data.json')
    .then(res=> res.json())
    .then(data=> {
      setCars(data)
      const car = data.filter(c=> c.id == param)
      setSelectedVehicle(car[0])
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])
  console.log(selectedVehicle)


  return (
    <>
    {
    selectedVehicle ? 
    <div>
      <div class="flex justify-center items-center">
        <div class=" main-form w-[600px] shadow-md  bg-white">
          <div class="bg-white pb-5 pt-5 ">
            <div class="header-part bg-white mb-3 px-10 ">
              <Link to='/'>
                <span class="arrow material-symbols-outlined">arrow_back</span>
              </Link>
              <h1 className="rental">Rental</h1>
              <h3 className="trip">Request a Trip</h3>
            </div>

            <hr />

            <div class="car-brand flex justify-between py-6 px-10 ">
              <div class="item-detail ">
                <div>
                  <img
                    className="car"
                    src={selectedVehicle.img}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="sedan">{selectedVehicle.name}</h2>
                  <p className="car-seat">{selectedVehicle.seat}</p>
                </div>
              </div>
              
              <div>
                <a
                  href="#"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <span class="pen material-symbols-outlined">edit</span>
                </a>
                {/*modal ------*/}
                <dialog id="my_modal_3" className="modal main-modal">
                  <div className="modal-box bg-white text-black">
                    <form method="dialog">
                      <h3 className="select-vechiel">Select Vehicle Type</h3>
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="modal-body p-2 ">
                      {/* vehicl-number-------- */}
                      <div className="form-control">
                        <label className="label cursor-pointer ">
                          <div class="item-detail ">
                            <div>
                              <img
                                className="car"
                                src="../../public/images/s1.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <h2 className="sedan">Sedan Car</h2>
                              <p className="car-seat">4 Seats</p>
                            </div>
                          </div>

                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500 border-gray-400"
                            checked
                            onClick={handleCloseModal}
                          />
                        </label>
                      </div>
                      {/* vehicl-number-------- */}
                      <div className="form-control">
                        <label className="label cursor-pointer ">
                          <div class="item-detail ">
                            <div>
                              <img
                                className="car"
                                src="../../public/images/s2.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <h2 className="sedan">Premium Sedan</h2>
                              <p className="car-seat">4 Seats</p>
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500 border-gray-400"
                            checked
                            onClick={handleCloseModal}
                          />
                        </label>
                      </div>
                      {/* vehicl-number-------- */}
                      <div className="form-control">
                        <label className="label cursor-pointer ">
                          <div class="item-detail ">
                            <div>
                              <img
                                className="car"
                                src="../../public/images/s3.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <h2 className="sedan">Mini Microbus</h2>
                              <p className="car-seat">4 Seats</p>
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500 border-gray-400"
                            checked
                            onClick={handleCloseModal}
                          />
                        </label>
                      </div>
                      {/* vehicle-number-------- */}
                      <div className="form-control">
                        <label className="label cursor-pointer ">
                          <div class="item-detail ">
                            <div>
                              <img
                                className="car"
                                src="../../public/images/s4.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <h2 className="sedan">Microbus</h2>
                              <p className="car-seat">4 Seats</p>
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500 border-gray-400"
                            checked
                            onClick={handleCloseModal}
                          />
                        </label>
                      </div>
                      {/* vehicle-number-------- */}
                      <div className="form-control">
                        <label className="label cursor-pointer ">
                          <div class="item-detail ">
                            <div>
                              <img
                                className="car"
                                src="../../public/images/s5.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <h2 className="sedan">Minibus</h2>
                              <p className="car-seat">4 Seats</p>
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500 border-gray-400"
                            checked
                            onClick={handleCloseModal}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="devider"></div>

            <div class="destination flex gap-4 items-center px-10  py-3">
              <div class="pick-drop flex flex-col gap-3 items-center">
                <span class="pickup-logo material-symbols-outlined">
                  radio_button_unchecked
                </span>
                <div className="vertile"></div>
                {/*  */}
                <span
                  id="hiddenDiv3"
                  className="hidden pickup-logo2 material-symbols-outlined"
                >
                  radio_button_unchecked
                </span>
                <div id="hiddenDiv4" className="hidden vertile"></div>
                {/*  */}

                <span class="drop-logo material-symbols-outlined">stop</span>
              </div>

              <div className="flex flex-col gap-5 me-20">
                <div>
                  <h2 className="pickup">Pickup Point</h2>
                  
                    <AutoComplete2 />
                  
                  {/* <input
                    placeholder="Search pickup location"
                    className="search focus:outline-none"
                    type="search"
                  /> */}
                </div>

                {/*  */}
                {/*    <div id="hiddenDiv5" className="hidden">
                  <h2 className="pickup ">Via Point</h2>
                  <input
                    placeholder="Search via location "
                    className="search focus:outline-none"
                    type="search"
                  />
                </div>

                <div
                  id="hiddenDiv6"
                  className="hidden relative"
                  data-v-a0ca3c8a
                >
                  <hr class="border-dashed mt-[4px] w-[470px]" />
                </div> */}
                {/*  */}

                <div>
                  <h2 className="pickup">Drop Off Point</h2>
                  <AutoComplete/>
                  {/* <input
                    placeholder="Search drop off location"
                    className="search focus:outline-none"
                    type="search"
                  /> */}
                </div>
              </div>
            </div>

            <div className="devider"></div>

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        calendar_month
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Date</h1>
                  </div>
                </div>
              </div>
              <div
                onClick={(e) =>
                  document.querySelector('input[type="date"]').click()
                }
              >
                <input
                  type="date"
                  placeholder="Type here"
                  className="bg-cyan-400 text-white input   w-full max-w-xs"
                />
              </div>
            </div>

            <hr />

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        schedule
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Time</h1>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="time"
                  placeholder="3.44 am"
                  className="dtt2 bg-cyan-400 text-white input  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class=" schedule-logo2 material-symbols-outlined">
                        travel
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Round Trip </h1>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={handleToggle}>
                  {isToggled ? (
                    <FaToggleOn size={30} />
                  ) : (
                    <FaToggleOff size={30} />
                  )}
                </button>
              </div>
            </div>

            <hr />

            <div>
              {isToggled && (
                <div>
                  <div
                    id="hiddenDiv1"
                    class="flex  date-time justify-between items-center px-10  py-6"
                  >
                    <div class="item-detail ">
                      <div className="flex gap-2">
                        <div>
                          <a href="#">
                            <span class="schedule-logo material-symbols-outlined">
                              calendar_month
                            </span>
                          </a>
                        </div>
                        <div>
                          <h1 className="dt"> Select Round Trip Date</h1>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="dtt2 bg-cyan-400 text-white input  w-full max-w-xs "
                      />
                    </div>
                  </div>

                  <hr />
                  <div
                    id="hiddenDiv2"
                    class="flex  date-time justify-between items-center px-10  py-6"
                  >
                    <div class="item-detail ">
                      <div className="flex gap-2">
                        <div>
                          <a href="#">
                            <span class="schedule-logo material-symbols-outlined">
                              schedule
                            </span>
                          </a>
                        </div>
                        <div>
                          <h1 className="dt">Select Time</h1>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="time"
                        placeholder="3.44 am"
                        className="dtt2 input bg-cyan-400 text-white  w-full max-w-xs "
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr />

          <div class="flex  justify-center py-6">
            <div class="item-detail">
              <form>
                <textarea
                  className="messege"
                  type="text"
                  maxlength="100"
                  minlength="10"
                  placeholder="Note ......"
                />
              </form>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="w-full max-w-xs bg-cyan-400 text-white py-3 rounded-lg  px-20"
            >
              Next
            </button>

            {/*modal ------*/}
            <dialog id="my_modal_4" className="modal main-modal">
              <div className="modal-box bg-white text-black">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="modal-body p-2 ">
                  <div className="card ">
                    <form className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Phone</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Phone"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="py-3 rounded-lg bg-cyan-400 text-white">Booking</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div> : <div>Loading...</div>
    }
    </>
  );
};

export default Forms;