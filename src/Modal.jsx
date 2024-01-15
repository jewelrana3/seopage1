// // eslint-disable-next-line react/prop-types
// const Modal = ({ onClose }) => {

//   // Wrap the code inside a window load event listener
//   onload = function () {
//     // Add your JavaScript code here
//     const fileInput = document.getElementById("file-input");

//     if (fileInput) {
//       fileInput.addEventListener("change", handleFileSelect);
//     }

//     function handleFileSelect(event) {
//       const input = event.target;
//       const files = input.files;

//       // Do something with the selected files (e.g., display file names)
//       if (files.length > 0) {
//         const fileNames = Array.from(files).map((file) => file.name);
//         alert("Selected Files: " + fileNames.join(", "));
//       }
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg">
//         {/* Modal content goes here */}
//         <p>This modal file set</p>
//         <div className="flex gap-3">
//           <div>
//             <p className="w-56 h-56">
//               <img
//                 src="https://i.ibb.co/rppq8Xz/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//                 alt="pic"
//               />
//             </p>
//             <p className="w-56 h-56">
//               <img
//                 src="https://i.ibb.co/rppq8Xz/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
//                 alt="pic"
//               />
//             </p>
//           </div>
//           <p>
//             <img
//               src="https://i.ibb.co/5BNXw9q/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg"
//               alt="pic"
//             />
//           </p>
//           <p className="w-96 h-96">
//             <img
//               src="https://i.ibb.co/p4t5xff/friendly-polite-good-looking-african-american-girl-glasses-with-curly-hair-striped-office-blouse-poi.jpg"
//               alt="pic"
//             />
//           </p>
//           <p>
//             <img
//               src="https://i.ibb.co/sjvkpH6/confident-business-woman-portrait-smiling-face-53876-137693.jpg"
//               alt="pic"
//             />
//           </p>
//         </div>
//         <div className="file-upload">
//           <label htmlFor="file-input" className="custom-file-upload"></label>
//           <input type="file" id="file-input" name="files[0]" multiple />
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-4 bg-blue-500 text-white p-2 rounded-md"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const input = event.target;
    const files = input.files;

    setSelectedFiles(Array.from(files));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <p>This modal file set</p>
        <div className="flex gap-3">
          {selectedFiles.map((file, index) => (
            <p key={index} className="w-56 h-56">
              <img src={URL.createObjectURL(file)} alt={`pic-${index}`} />
            </p>
          ))}
        </div>
        <div className="flex gap-3">
          <div>
            <p className="w-56 h-56">
              <img
                src="https://i.ibb.co/rppq8Xz/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
                alt="pic"
              />
            </p>
          </div>
          <p className="w-40 h-40">
            <img
              src="https://i.ibb.co/5BNXw9q/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg"
              alt="pic"
            />
          </p>
          <p className="w-40 h-40">
            <img
              src="https://i.ibb.co/p4t5xff/friendly-polite-good-looking-african-american-girl-glasses-with-curly-hair-striped-office-blouse-poi.jpg"
              alt="pic"
            />
          </p>
          <p className="w-40 h-40">
            <img
              src="https://i.ibb.co/sjvkpH6/confident-business-woman-portrait-smiling-face-53876-137693.jpg"
              alt="pic"
            />
          </p>
        </div>
        <div className="file-upload">
          <label htmlFor="file-input" className="custom-file-upload"></label>
          <input
            type="file"
            id="file-input"
            name="files[]"
            multiple
            onChange={handleFileSelect}
          />
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
