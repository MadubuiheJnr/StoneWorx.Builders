import { Construction, Home, Landmark, type LucideIcon } from "lucide-react";
import whatwedo_img_1 from "/whatwedo_img_1.jpg";
import whatwedo_img_2 from "/whatwedo_img_2.jpg";
import whatwedo_img_3 from "/whatwedo_img_3.jpg";
import { Button } from "./ui/button";

type WhatWeDoType = {
  id: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  img: string;
};
const whatWeDoData: WhatWeDoType[] = [
  {
    id: "1",
    title: "Residential Construction",
    desc: "We build modern, durable homes crafted with precision ad timeless design.",
    Icon: Home,
    img: whatwedo_img_1,
  },
  {
    id: "2",
    title: "Commercial Buildings",
    desc: "From offices to retail spaces, we deliver functional, efficient, and well-engineered commercial projects.",
    Icon: Landmark,
    img: whatwedo_img_2,
  },
  {
    id: "3",
    title: "Renovation & Remodeling",
    desc: "Transforming existing spaces with thoughtful upgrades, structural improvements, and clean, modern finishes.",
    Icon: Construction,
    img: whatwedo_img_3,
  },
];
const WhatWeDo = () => {
  return (
    <div className="bg-secondary p-5 py-20 lg:-translate-y-40  lg:p-10 lg:py-25">
      <div
        className="
    lg:w-[85%] lg:mx-auto "
      >
        <p
          className="w-[35%] mx-auto text-center font-semibold uppercase text-primary text-sm p-1 border-b border-b-muted-foreground
      lg:w-[10%]"
        >
          What we do
        </p>
        <p
          className="text-center mt-2 text-xl font-bold text-primary
        lg:w-[60%] lg:mx-auto lg:text-5xl"
        >
          Our Full-Spectrum Construction services
        </p>

        <div
          className="mt-10 
      lg:flex items-center gap-x-7"
        >
          {whatWeDoData.map((data) => (
            <div
              key={data.id}
              style={{ backgroundImage: `url(${data.img})` }}
              className="p-1 w-full h-120 object-cover rounded-3xl bg-no-repeat bg-cover flex mt-5"
            >
              <div
                key={data.id}
                className="self-end flex flex-col items-center text-center bg-secondary p-3 rounded-3xl"
              >
                <data.Icon className="text-primary" size={25} />
                <p className="text-lg font-bold text-primary mt-2">
                  {data.title}
                </p>
                <p className="text-sm text-muted-foreground">{data.desc}</p>

                <Button className="mt-3 cursor-pointer">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
