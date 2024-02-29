import Image from "next/image";
import { Inter } from "next/font/google";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs';
import{BiHash, BiHomeCircle, BiUser} from 'react-icons/bi'
import FeedCard from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton{
  title:string,
  icon:React.ReactNode
}

const sideBarMenuItems:TwitterSidebarButton[]=[
  {
    title:"Home",
    icon:<BiHomeCircle/>,
  },
  {
    title:"Explore",
    icon:<BiHash/>,
  },
  {
    title:"Notifications",
    icon:<BsBell/>,
  },
  {
    title:"Messages",
    icon:<BsEnvelope/>,
  },
  {
    title:"Bookmarks",
    icon:<BsBookmark/>
  },
  {
    title:"Profile",
    icon:<BiUser/>
  },
  {
    title:"More",
    icon:<BsBookmark/>
  }
]

export default function Home() {
  return (
  <div className={inter.className}>
    <div className="grid grid-cols-12 h-screen w-screen pl-56 ">
      <div className="col-span-3 justify-start px-4 pt-8 ">
        <div className="text-4xl h-fit w-fit hover:bg-gray-600 p-4 rounded-full cursor-pointer transistion-all " >
        <BsTwitter />
        </div>
        <div className="h-fit mt-4 text-xl font-semibold pr-4">
          <ul>{
            sideBarMenuItems.map((item)=>(
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer "
              key={item.title}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>)
                )
            }
          </ul>
          <div className="px-4 mt-4">
          <button className="bg-[#1d9bf0] text-lg p-3 rounded-full w-full " >Tweet</button>
          </div>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-r-slate-500  border-l-slate-500">
        <FeedCard/>
      </div>
      <div className="col-span-3"></div>
    </div> 
  </div>
  );
}
