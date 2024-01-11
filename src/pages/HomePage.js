// import { useState } from "react";
// import { storage } from "./firebase";
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";

//   const [imageUpload, setImageUpload] = useState(null);
//   const uploadImage = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then(() => {
//       alert("Image Uploaded");
//     });
//   };

const HomePage = () => (
  <>
    <body>
      <div class="container">
        <div class="block">
          <h2>豬</h2>
        </div>
        <div class="block">
          <h2>牛</h2>
        </div>
        <div class="block">
          <h2>羊</h2>
        </div>
        <div class="block">
          <h2>雞</h2>
        </div>
        {/* <div className="App">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}> upload image </button>
        </div> */}
      </div>
    </body>
  </>
);

export default HomePage;
