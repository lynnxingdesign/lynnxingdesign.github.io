import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import backgroundImage from '/src/assets/Background.jpg'


const main = () => {
  return (

    <div id='main'>
        {/* insert image in main page ( scale-x-[-1] -> Flip image)*/}
        <img className='w-full h-screen object-cover object-left' src={backgroundImage}>
        </img>

        {/* Create the white shadow screen effect*/}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-industry bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent py-2'>I'm Lynn Xing</h1>
            {/* React-type-animation package (npm install react-type-animation)
            https://www.npmjs.com/package/react-type-animation */}
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#ff00aa]'>I
            <TypeAnimation
                sequence={[
                    'am an experiential designer',
                    2000, // wait 2s 
                    'specialize in creating immersive environment',
                    2000, // wait 2s 
                    'blend creativity and functionality',
                    2000, // wait 2s 
                    'strive to create memorable experiences',
                    2000 // wait 2s 
                    ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', paddingLeft:'5px' }}
            repeat={Infinity}/>
        </h2>
        
        <div className='flex text-[#543247] justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://x.com/LynnnnXing' target="_blank">
            <FaXTwitter  className='cursor-pointer' size ={20}></FaXTwitter></a>

            <a href="https://www.facebook.com/menglin.xing?mibextid=LQQJ4d" target="_blank">
            <FaFacebookF className='cursor-pointer' size ={20}></FaFacebookF></a>

            <a href="https://www.instagram.com/lynnnn.x" target="_blank">
            <FaInstagram className='cursor-pointer' size ={20} ></FaInstagram></a>

            <a href="https://www.linkedin.com/in/lynn-xing-477798223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <FaLinkedinIn className='cursor-pointer' size ={20} ></FaLinkedinIn></a>
        </div>

        </div>
        </div>

    </div>
  )
}

export default main