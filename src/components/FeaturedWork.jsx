import React from 'react';
import Logo from '../assets/Logo/Logo_White.png';

const FeaturedWork = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="w-full min-h-[3583px] relative bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto h-full relative">
          {/* Decorative Blocks + Logo + Text */}
          <div className="w-20 h-40 absolute left-[89px] top-[81px] bg-neutral-100" />
          <div className="w-36 h-40 absolute left-[134.97px] top-[81px] bg-neutral-100" />
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

          {/* Gallery Grid */}
          <div className="w-[1268.78px] absolute left-[85px] top-[272px] inline-flex flex-wrap justify-start items-end gap-4">
            {/* Item 1 */}
            <div className="flex justify-start items-end">
              <img
                className="w-[634.78px] h-96 object-cover"
                src="https://placehold.co/635x357"
                alt="Milwaukee Tool DIB 2025"
              />
              <div className="w-[634px] h-96 relative bg-neutral-200 overflow-hidden">
                <div className="absolute left-[180px] top-[138px] text-neutral-400 text-3xl font-light font-['Lato']">
                  MILWAUKEE TOOL
                </div>
                <div className="absolute left-[235px] top-[169px] text-black text-4xl font-['Lato']">
                  DIB 2025
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="w-[634px] h-96 relative bg-neutral-200 overflow-hidden">
              <div className="absolute left-[251px] top-[138px] text-neutral-400 text-3xl font-light font-['Lato']">
                ADS, INC
              </div>
              <div className="absolute left-[219px] top-[169px] text-black text-4xl font-['Lato']">
                AUSA 2025
              </div>
            </div>
            {/* Item 3 */}
            <img
              className="w-[632.89px] h-96 object-cover"
              src="https://placehold.co/633x356"
              alt="Placeholder"
            />
            {/* Item 4 */}
            <div className="flex justify-start items-end">
              <img
                className="w-[635px] h-96 object-cover"
                src="https://placehold.co/635x357"
                alt="Honeywell NRF 2024"
              />
              <div className="w-[634px] h-96 relative bg-neutral-200 overflow-hidden">
                <div className="absolute left-[219.22px] top-[138px] text-neutral-400 text-3xl font-light font-['Lato']">
                  HONEYWELL
                </div>
                <div className="absolute left-[235px] top-[169px] text-black text-4xl font-['Lato']">
                  NRF 2024
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="w-[634px] h-96 relative bg-neutral-200 overflow-hidden">
              <div className="absolute left-[227px] top-[138px] text-neutral-400 text-3xl font-light font-['Lato']">
                ELECTROLIT
              </div>
              <div className="absolute left-[217px] top-[169px] text-black text-4xl font-['Lato']">
                NACS 2024
              </div>
            </div>
            {/* Item 6 */}
            <img
              className="w-[634.67px] h-96 object-cover"
              src="https://placehold.co/635x357"
              alt="Placeholder"
            />
            {/* Item 7 */}
            <img
              className="w-[633px] h-96 object-cover"
              src="https://placehold.co/633x356"
              alt="Placeholder"
            />
            {/* Item 8 */}
            <div className="w-[634px] h-96 relative bg-neutral-200 overflow-hidden">
              <div className="absolute left-[157px] top-[138px] text-neutral-400 text-3xl font-light font-['Lato']">
                DELL TECHNOLOGIES
              </div>
              <div className="absolute left-[243px] top-[169px] text-black text-4xl font-['Lato']">
                SC 2024
              </div>
            </div>
            {/* Item 9 */}
            <div className="w-[634px] h-96 relative bg-neutral-200 overflow-hidden">
              <div className="absolute left-[176px] top-[138px] text-neutral-400 text-3xl font-light font-['Lato']">
                AUDI SHOWROOM
              </div>
              <div className="absolute left-[271px] top-[169px] text-black text-4xl font-['Lato']">
                2023
              </div>
            </div>
            {/* Item 10 */}
            <img
              className="w-[633px] h-96 object-cover"
              src="https://placehold.co/633x356"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
