import React from "react";
import img2 from "../Pic/adobe.svg";
import img3 from "../Pic/adobe (1).svg";
import img4 from "../Pic/google.svg";
import img5 from "../Pic/meta.svg";
import img6 from "../Pic/figma.svg";
import img7 from "../Pic/notion.svg";
import img8 from "../Pic/mico.svg";
import img9 from "../Pic/framer.svg";
import img10 from "../Pic/webflow.svg";
import img11 from "../Pic/zeplin.svg";

const WorksExperience = () => {
  return (
    <div>
      <div className="flex  flex-col">
        <div className="bg-white shadow-md p-6  text-black  rounded-2xl w-[420px]">
          <h2 className="font-bold mb-10 text-3xl text-center">Work Experience</h2>
          <div className="flex flex-col items-center space-y-1 h-[217px] text-nowrap overflow-y-hidden marqueeContainer">
            <div className="marqueeDiv">
              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img2} alt="Adobe" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Adobe</h3>
                  <p className="text-gray-500 text-sm">Senior UI UX Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img3} alt="Meta" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Meta Inc.</h3>
                  <p className="text-gray-500 text-sm">Product Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img4} alt="Google" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Google Inc.</h3>
                  <p className="text-gray-500 text-sm">
                    Senior Product Designer
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img5} alt="Meta" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Meta Inc.</h3>
                  <p className="text-gray-500 text-sm">Product Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img4} alt="Google" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Google Inc.</h3>
                  <p className="text-gray-500 text-sm">
                    Senior Product Designer
                  </p>
                </div>
              </div>
            
            </div>
            <div className="marqueeDiv">
              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img2} alt="Adobe" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Adobe</h3>
                  <p className="text-gray-500 text-sm">Senior UI UX Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img3} alt="Meta" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Meta Inc.</h3>
                  <p className="text-gray-500 text-sm">Product Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img4} alt="Google" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Google Inc.</h3>
                  <p className="text-gray-500 text-sm">
                    Senior Product Designer
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img5} alt="Meta" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Meta Inc.</h3>
                  <p className="text-gray-500 text-sm">Product Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-gray-500 w-20">2021-2024</span>
                <img src={img4} alt="Google" className="w-8 h-8 rounded-lg" />
                <div>
                  <h3 className="font-bold">Google Inc.</h3>
                  <p className="text-gray-500 text-sm">
                    Senior Product Designer
                  </p>
                </div>
              </div>
            
            </div>

          </div>
        </div>

        <div className="bg-white shadow-md p-8 text-center  text-black  rounded-2xl w-[420px] h-[340px] mt-3">
        <h2 className="font-bold mb-10 text-3xl text-center">My Expert Area</h2>
          <div className="grid grid-cols-2  gap-4">
            <div className=" flex mt-8 gap-24">
              {/* 1 */}
              <div className="text-center">
                <div className="rounded-lg text-center">
                  <img
                    src={img6}
                    alt="Figma"
                    className="w-8 h-8 inline"
                  />
                </div>
                <h3>Figma</h3>
              </div>

              {/* 2 */}
              <div className="text-center ">
                <div className="rounded-lg text-center">
                  <img
                    src={img7}
                    alt="Notion"
                    className="w-8 h-8 inline"
                  />
                </div>
                <h3>Notion</h3>
              </div>

              {/* 3 */}
              <div className="text-cente">
                <div className="rounded-lg text-center">
                  <img
                    src={img8}
                    alt="Miro"
                    className="w-8 h-8 inline"
                  />
                </div>
                <h3>Miro</h3>
              </div>
            </div>
          </div>
          <div className="flex mt-10 gap-20">
            {/* 4 */}
            <div className="text-center">
              <div className="rounded-lg text-center">
                <img
                  src={img9}
                  alt="Framer"
                  className="w-8 h-8 inline"
                />
              </div>
              <h3>Framer</h3>
            </div>

            {/* 5 */}
            <div className="text-center">
              <div className="rounded-lg text-center">
                <img
                  src={img10}
                  alt="Webflow"
                  className="w-8 h-8 inline"
                />
              </div>
              <h3>Webflow</h3>
            </div>

            {/* 6 */}
            <div className="text-center">
              <div className="rounded-lg text-center">
                <img
                  src={img11}
                  alt="Zeplin"
                  className="w-8 h-8 inline"
                />
              </div>
              <h3>Zeplin</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksExperience;
