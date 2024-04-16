import Image from "next/image";
import Img from "@/assets/banner.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Banner = () => {
  return (
    <div>
      <div className="h-full"></div>
      <div className="">
        <Image
          src={Img}
          className="h-full object-cover w-full absolute top-0 contain brightness-75"
          alt=""
        />
        <div className="h-full w-full flex items-center justify-center text-white bg-transparent font-semibold text-center absolute z-10">
          <div className="space-y-5">
            <h1 className="text-6xl pt-20">
              We have the best Deals <br /> For Parking Lots!
            </h1>
            <p>Instantly book your space today. Trusted by millions.</p>
            <div className="p-5 bg-white flex gap-5 rounded-lg">
                <select name={'park'} className="text-black px-5">
                    <option value={''}>Select Car Park</option>
                    <option value={''}>Normal Park</option>
                    <option value={''}>VIP Car Park</option>
                </select>

                <input className="text-black text-center py-3" placeholder="Your name" type="text" />
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <input className="text-black text-center" placeholder="Your Number" type="number" />
                {/* <Button variant="contained">Outlined</Button> */}
                <button className="text-lg w-32 h-14 bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Book Space</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
