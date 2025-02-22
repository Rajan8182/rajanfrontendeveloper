import React from "react";

const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "450px", overflow: "hidden" }} className="mt-10 rounded-xl">
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1885446873!2d72.6571296445404!3d21.159120022105085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2z4Kq44KuB4Kqw4KqkLCDgqpfgq4HgqpzgqrDgqr7gqqQ!5e0!3m2!1sgu!2sin!4v1740032913376!5m2!1sgu!2sin" 
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

