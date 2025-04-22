import React from 'react';
import Logo from '../assets/Logo/Logo_Gray.png';
import Milwaukee from '../assets/Milwaukee Tool/MilwaukeeToolProject2.jpg'
import Ads from '../assets/ADS/AdsProject2.jpg'
import Honeywell from '../assets/Honeywell/HoneywellProject2.jpg'
import Electrolit from '../assets/Electrolit/ElectrolitProject2.jpg'
import Dell from '../assets/Dell SC 24/DellProject2.jpg'
import Audi from '../assets/Audi/AudiProject2.jpg'

const FeaturedWork = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="w-full relative bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative">
          {/* Header Section with absolute positioning */}
          <div className="relative h-[300px]"> {/* Added fixed height container for absolute elements */}
            <div className="w-20 h-40 absolute left-[89px] top-[81px]" />
            <div className="w-36 h-40 absolute left-[134.97px] top-[81px]" />
            <img
              className="w-[185px] h-[160px] absolute left-[50px] top-[81px]"
              src={Logo}
              alt="Lynn Xing Logo"
            />
            <div className="absolute left-[50px] top-[161px] text-[#A5A5A5] text-4xl font-normal font-['Lato']">
              Featured Works
            </div>
            <div className="absolute left-[50px] top-[213px] text-[#424242] text-2xl font-black font-['Lato']">
              Visual Storytelling | Spatial Planning | Brand Expression
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mx-auto flex justify-center">
            <div className="w-[1268.78px] flex flex-wrap gap-4">
              {/* Item 1: Milwaukee */}
              <div className="flex justify-start items-end">
                <img
                  className="w-[634.78px] h-96 object-cover"
                  src={Milwaukee}
                  alt="Milwaukee Tool Project"
                />
                <div className="w-[634px] h-96 bg-neutral-200 flex flex-col justify-center items-center">
                  <div className="text-neutral-400 text-3xl font-light font-['Lato']">
                    MILWAUKEE TOOL
                  </div>
                  <div className="text-black text-4xl font-['Lato'] mt-1">
                    DIB 2025
                  </div>
                </div>
              </div>

              {/* Item 2: ADS */}
              <div className="flex justify-start items-end">
                <div className="w-[634px] h-96 bg-neutral-200 flex flex-col justify-center items-center">
                  <div className="text-neutral-400 text-3xl font-light font-['Lato']">
                    ADS, INC
                  </div>
                  <div className="text-black text-4xl font-['Lato'] mt-1">
                    AUSA 2025
                  </div>
                </div>
                <img
                  className="w-[632.89px] h-96 object-cover"
                  src={Ads}
                  alt="ADS Project"
                />
              </div>

              {/* Item 3: Honeywell */}
              <div className="flex justify-start items-end">
                <img
                  className="w-[635px] h-96 object-cover"
                  src={Honeywell}
                  alt="Honeywell Project"
                />
                <div className="w-[634px] h-96 bg-neutral-200 flex flex-col justify-center items-center">
                  <div className="text-neutral-400 text-3xl font-light font-['Lato']">
                    HONEYWELL
                  </div>
                  <div className="text-black text-4xl font-['Lato'] mt-1">
                    NRF 2024
                  </div>
                </div>
              </div>

              {/* Item 4: Electrolit */}
              <div className="flex justify-start items-end">
                <div className="w-[634px] h-96 bg-neutral-200 flex flex-col justify-center items-center">
                  <div className="text-neutral-400 text-3xl font-light font-['Lato']">
                    Electrolit
                  </div>
                  <div className="text-black text-4xl font-['Lato'] mt-1">
                    NACS 2024
                  </div>
                </div>
                <img
                  className="w-[632.89px] h-96 object-cover"
                  src={Electrolit}
                  alt="Electrolit Project"
                />
              </div>

              {/* Item 5: Dell */}
              <div className="flex justify-start items-end">
                <img
                  className="w-[635px] h-96 object-cover"
                  src={Dell}
                  alt="Dell Project"
                />
                <div className="w-[634px] h-96 bg-neutral-200 flex flex-col justify-center items-center">
                  <div className="text-neutral-400 text-3xl font-light font-['Lato']">
                    DELL TECHNOLOGIES
                  </div>
                  <div className="text-black text-4xl font-['Lato'] mt-1">
                    SC 2024
                  </div>
                </div>
              </div>

              {/* Item 6: Audi */}
              <div className="flex justify-start items-end">
                <div className="w-[634px] h-96 bg-neutral-200 flex flex-col justify-center items-center">
                  <div className="text-neutral-400 text-3xl font-light font-['Lato']">
                    AUDI SHOWROOM
                  </div>
                  <div className="text-black text-4xl font-['Lato'] mt-1">
                    2023
                  </div>
                </div>
                <img
                  className="w-[632.89px] h-96 object-cover"
                  src={Audi}
                  alt="Audi Project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;