/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { GiGolemHead } from "react-icons/gi";
import { IoAttachSharp, IoFileTrayStackedOutline } from "react-icons/io5";
import { PiMessengerLogoThin } from "react-icons/pi";
import Calender from "../Calender";
import Modal from "../Modal";
import useData from "../hooks/useData";
import useHead from "../hooks/useHead";

// function Side() {
//   return (
//     <div className="bg-slate-200 p-5">
//       <div className="bg-white p-4 ">
//         <div className="bg-slate-100 flex justify-between p-3 mb-5">
//           <div className="flex gap-2 justify-around">
//             <p className="completeBg"></p>
//             <p>Incomplete</p>
//           </div>
//           <p>0</p>
//         </div>
//         <div className="mt-5">
//           <div className="flex justify-between">
//             <div className="flex justify-around items-center gap-2">
//               <img
//                 className="w-7 h-7 rounded-full"
//                 src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//                 alt="pic"
//               />
//               <p>Client name</p>
//             </div>
//             <div className="flex justify-around items-center gap-2 ">
//               <img
//                 className="w-7 h-7 rounded-full"
//                 src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//                 alt="pic"
//               />
//               <p>Sadik Istiak</p>
//             </div>
//           </div>
//           <div className="flex justify-between mt-3">
//             <div className="flex items-center gap-1">
//               <p>
//                 <GiGolemHead />
//               </p>
//               <p>Lorem, ipsum dolor sit amet ?</p>
//             </div>
//             <p className="flex items-center gap-1">
//               <p>
//                 <IoFileTrayStackedOutline />
//               </p>
//               <p> 1/2</p>
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 mt-5">
//           <p>
//             <img
//               className="w-7 h-7 rounded-full"
//               src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//               alt="pic"
//             />
//           </p>
//           <p>
//             <img
//               className="w-7 h-7 rounded-full"
//               src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//               alt="pic"
//             />
//           </p>
//           <p>12+</p>
//           <div className="flex items-center gap-1">
//             <p>15 +</p>
//             <p>
//               <PiMessengerLogoThin />
//             </p>
//           </div>
//           <div className="flex items-center gap-1">
//             <p>
//               <IoAttachSharp />
//             </p>
//             <p>25</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <p>
//               <CgCalendarDates />
//             </p>
//             <p>12-20-24</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function Side0({ item }) {
//   const { img, number, number2, number3, date } = item;
//   return (
//     <div className="bg-slate-200 p-5">
//       <div className="bg-white p-4 ">
//         {/* <div className="bg-slate-100 flex justify-between p-3 mb-5">
//           <div className="flex gap-2 justify-around">
//             <p className="completeBg"></p>
//             <p>Incomplete</p>
//           </div>
//           <p>0</p>
//         </div> */}
//         <div className="mt-5">
//           <div className="flex justify-between">
//             <div className="flex justify-around items-center gap-2">
//               <img
//                 className="w-7 h-7 rounded-full"
//                 src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//                 alt="pic"
//               />
//               <p>Client name</p>
//             </div>
//             <div className="flex justify-around items-center gap-2 ">
//               <img
//                 className="w-7 h-7 rounded-full"
//                 src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//                 alt="pic"
//               />
//               <p>Sadik Istiak</p>
//             </div>
//           </div>
//           <div className="flex justify-between mt-3">
//             <div className="flex items-center gap-1">
//               <p>
//                 <GiGolemHead />
//               </p>
//               <p>Lorem, ipsum dolor sit amet ?</p>
//             </div>
//             <p className="flex items-center gap-1">
//               <p>
//                 <IoFileTrayStackedOutline />
//               </p>
//               <p> 1/2</p>
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 mt-5">
//           <p>
//             <img
//               className="w-7 h-7 rounded-full"
//               src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//               alt="pic"
//             />
//           </p>
//           <p>
//             <img
//               className="w-7 h-7 rounded-full"
//               src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//               alt="pic"
//             />
//           </p>
//           <p>12+</p>
//           <div className="flex items-center gap-1">
//             <p>15 +</p>
//             <p>
//               <PiMessengerLogoThin />
//             </p>
//           </div>
//           <div className="flex items-center gap-1">
//             <p>
//               <IoAttachSharp />
//             </p>
//             <p>25</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <p>
//               <CgCalendarDates />
//             </p>
//             <p>{date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Side0({ item }) {
  // eslint-disable-next-line react/prop-types
  const { img, number, number2, number3, date } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAttachClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // calender section
  const [isCalender, setIsCalender] = useState(false);

  const handleOpenModal = () => {
    setIsCalender(true);
  };

  const handleCloseModal = () => {
    setIsCalender(false);
  };

  return (
    <div className="bg-slate-200 p-5">
      <div className="bg-white p-4 ">
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="flex justify-around items-center gap-2">
              <p>
                <img
                  className="w-7 h-7 rounded-full borderImg"
                  src={img}
                  alt=""
                />
              </p>
              <p>Client name</p>
            </div>
            <div className="flex justify-around items-center gap-2 ">
              <p>
                <img
                  className="w-7 h-7 rounded-full borderRed"
                  src={img}
                  alt=""
                />
              </p>
              <p>Sadik Istiak</p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-1">
              <p>
                <GiGolemHead />
              </p>
              <p>Lorem, ipsum dolor sit amet ?</p>
            </div>
            <p className="flex items-center gap-1">
              <p>
                <IoFileTrayStackedOutline />
              </p>
              <p> 1/2</p>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <p>
            <img className="w-7 h-7 rounded-full borderImg" src={img} alt="" />
          </p>
          <p>
            <img
              className="w-7 h-7 rounded-full borderGreen"
              src={img}
              alt=""
            />
          </p>
          <p>12+</p>
          <div className="flex items-center gap-1">
            <p>15 +</p>
            <p>
              <PiMessengerLogoThin className="cursor-pointer" />
            </p>
          </div>
          <div className="flex items-center gap-1" onClick={handleAttachClick}>
            <p>
              <IoAttachSharp className="cursor-pointer" />
            </p>
            <p>25</p>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <Modal onClose={closeModal}>
              {/* Modal content goes here */}
              <p>This modal file set</p>
            </Modal>
          )}
          <div className="flex items-center gap-1">
            <p onClick={handleOpenModal} className="flex items-center">
              <p>
                {" "}
                <CgCalendarDates />
              </p>
              <p>12-03-24</p>
            </p>

            {isCalender && <Calender onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Side1({ item }) {
  // eslint-disable-next-line react/prop-types
  const { img, number, number2, number3, date } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAttachClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // calender section
  const [isCalender, setIsCalender] = useState(false);

  const handleOpenModal = () => {
    setIsCalender(true);
  };

  const handleCloseModal = () => {
    setIsCalender(false);
  };

  return (
    <div className="bg-slate-200 p-5">
      <div className="bg-white p-4 ">
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="flex justify-around items-center gap-2">
              <p>
                <img
                  className="w-7 h-7 rounded-full borderImg"
                  src={img}
                  alt=""
                />
              </p>
              <p>Client name</p>
            </div>
            <div className="flex justify-around items-center gap-2 ">
              <p>
                <img
                  className="w-7 h-7 rounded-full borderRed"
                  src={img}
                  alt=""
                />
              </p>
              <p>Sadik Istiak</p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-1">
              <p>
                <GiGolemHead />
              </p>
              <p>Lorem, ipsum dolor sit amet ?</p>
            </div>
            <p className="flex items-center gap-1">
              <p>
                <IoFileTrayStackedOutline />
              </p>
              <p> 1/2</p>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <p>
            <img className="w-7 h-7 rounded-full borderImg" src={img} alt="" />
          </p>
          <p>
            <img
              className="w-7 h-7 rounded-full borderGreen"
              src={img}
              alt=""
            />
          </p>
          <p>12+</p>
          <div className="flex items-center gap-1">
            <p>15 +</p>
            <p>
              <PiMessengerLogoThin className="cursor-pointer" />
            </p>
          </div>
          <div className="flex items-center gap-1" onClick={handleAttachClick}>
            <p>
              <IoAttachSharp className="cursor-pointer" />
            </p>
            <p>25</p>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <Modal onClose={closeModal}>
              {/* Modal content goes here */}
              <p>This modal file set</p>
            </Modal>
          )}
          <div className="flex items-center gap-1">
            <p onClick={handleOpenModal} className="flex items-center">
              <p>
                {" "}
                <CgCalendarDates />
              </p>
              <p>12-03-24</p>
            </p>

            {isCalender && <Calender onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}
function Side2({ item }) {
  // eslint-disable-next-line react/prop-types
  const { img, number, number2, number3, date } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAttachClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // calender section
  const [isCalender, setIsCalender] = useState(false);

  const handleOpenModal = () => {
    setIsCalender(true);
  };

  const handleCloseModal = () => {
    setIsCalender(false);
  };

  return (
    <div className="bg-slate-200 p-5">
      <div className="bg-white p-4 ">
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="flex justify-around items-center gap-2">
              <p>
                <img
                  className="w-7 h-7 rounded-full borderImg"
                  src={img}
                  alt=""
                />
              </p>
              <p>Client name</p>
            </div>
            <div className="flex justify-around items-center gap-2 ">
              <p>
                <img
                  className="w-7 h-7 rounded-full borderRed"
                  src={img}
                  alt=""
                />
              </p>
              <p>Sadik Istiak</p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-1">
              <p>
                <GiGolemHead />
              </p>
              <p>Lorem, ipsum dolor sit amet ?</p>
            </div>
            <p className="flex items-center gap-1">
              <p>
                <IoFileTrayStackedOutline />
              </p>
              <p> 1/2</p>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <p>
            <img className="w-7 h-7 rounded-full borderImg" src={img} alt="" />
          </p>
          <p>
            <img
              className="w-7 h-7 rounded-full borderGreen"
              src={img}
              alt=""
            />
          </p>
          <p>12+</p>
          <div className="flex items-center gap-1">
            <p>15 +</p>
            <p>
              <PiMessengerLogoThin className="cursor-pointer" />
            </p>
          </div>
          <div className="flex items-center gap-1" onClick={handleAttachClick}>
            <p>
              <IoAttachSharp className="cursor-pointer" />
            </p>
            <p>25</p>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <Modal onClose={closeModal}>
              {/* Modal content goes here */}
              <p>This modal file set</p>
            </Modal>
          )}
          <div className="flex items-center gap-1">
            <p onClick={handleOpenModal} className="flex items-center">
              <p>
                {" "}
                <CgCalendarDates />
              </p>
              <p>12-03-24</p>
            </p>

            {isCalender && <Calender onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function First() {
  const [data] = useData();
  const [head] = useHead();
  console.log(head);

  return (
    <>
      <div
        className="flex head"
        style={{
          height: "810px",
          width: "2200px",
          overflowY: "scroll",
          overflowX: "scroll",
        }}
      >
        <div
          className="firstDiv"
          style={{ height: "810px", overflowY: "scroll", overflowX: "hidden" }}
        >
          {/* {head.map((item2) => {
            <Side key={item2.id} item2={item2} />;
          })} */}
          <div className="flex gap-2 items-center justify-between px-8 p-4">
            <div className="flex items-center gap-2 justify-center">
              <p className="completeBg"></p>
              <p className="textColor">Incomplete</p>
            </div>
            <div>0</div>
          </div>
          {data.map((item) => (
            <Side0 key={item.id} item={item} />
          ))}
        </div>
        <div
          className=""
          style={{ height: "750px", overflowY: "scroll", overflowX: "hidden" }}
        >
          <div className="flex gap-2 items-center justify-between px-8 p-4">
            <div className="flex items-center gap-2 justify-center">
              <p className="completeBg1"></p>
              <p className="textColor">To Do</p>
            </div>
            <div>0</div>
          </div>
          {data.map((item) => (
            <Side1 key={item.id} item={item} />
          ))}
        </div>
        <div
          className=""
          style={{ height: "740px", overflowY: "scroll", overflowX: "hidden" }}
        >
          <div className="flex gap-2 items-center justify-between px-8 p-4">
            <div className="flex items-center gap-2 justify-center">
              <p className="completeBg2"></p>
              <p className="textColor">Doing</p>
            </div>
            <div>0</div>
          </div>
          {data.map((item) => (
            <Side2 key={item.id} item={item} />
          ))}
        </div>
        <div
          className=""
          style={{ height: "740px", overflowY: "scroll", overflowX: "hidden" }}
        >
          <div className="flex gap-2 items-center justify-between px-8 p-4">
            <div className="flex items-center gap-2 justify-center">
              <p className=""></p>
              <p className="textColor">Under Review</p>
            </div>
            <div>0</div>
          </div>
          {data.map((item) => (
            <Side2 key={item.id} item={item} />
          ))}
        </div>
        <div
          className=""
          style={{ height: "740px", overflowY: "scroll", overflowX: "hidden" }}
        >
          <div className="flex gap-2 items-center justify-between px-8 p-4">
            <div className="flex items-center gap-2 justify-center">
              <p className=""></p>
              <p className="textColor">Complete</p>
            </div>
            <div>0</div>
          </div>
          {data.map((item) => (
            <Side2 key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
