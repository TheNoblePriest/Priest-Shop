import {
  SearchIcon,
  BellIcon,
  BadgeCheckIcon,
  DotsCircleHorizontalIcon,
  ChevronDoubleDownIcon,
  MicrophoneIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  MailOpenIcon,
  MenuAlt1Icon,
  XIcon,
  ShoppingBagIcon,
  ViewGridAddIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import SideOption from "./SideOption";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useStateValue } from "../components/StateProvider";

import next from "next";

function Header() {
  const { data: session } = useSession();
  const [{ basket }, dispatch] = useStateValue();
  const router = useRouter();

  const sidebarList = [
    {
      id: 1,
      icon: <HomeIcon onClick={() => router.push("/")} className="side-btn" />,
      title: "Home",
      loc: "/",
    },
    {
      id: 2,
      icon: (
        <ShoppingCartIcon
          onClick={() => router.push("/cart/Cart")}
          className="side-btn"
        />
      ),
      title: "Cart",
      loc: "/cart/Cart",
    },
    {
      id: 3,
      icon: <MailOpenIcon className="side-btn" />,
      title: "Mail",
    },
    {
      id: 4,
      icon: <ViewGridAddIcon className="side-btn" />,
      title: "WatchList",
    },
    {
      id: 5,
      icon: <ShoppingBagIcon className="side-btn" />,
      title: "Bag",
    },

    {
      id: 6,
      icon: <BadgeCheckIcon className="side-btn" />,
      title: "Offer Zone",
    },
    {
      id: 7,
      icon: <DotsCircleHorizontalIcon className="side-btn" />,
      title: "More",
    },
    {
      id: 8,
      icon: <HeartIcon className="side-btn" />,
      title: "Favorites",
    },

    {
      id: 9,
      icon: <BellIcon className="side-btn" />,
      title: "Notification",
    },
    {
      id: 10,
      icon: <UserCircleIcon className="side-btn" />,
      title: "Log Out",
      loc: "/auth/signin",
    },
  ];
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="w-full p-2 fixed top-0 shadow-sm border-b justify-between items-center flex bg-gray-100">
      <div className="lg:ml-2">
        <img
          onClick={() => router.push("/")}
          className="w-12 h-12 rounded-lg object-cover cursor-pointer"
          src="https://images.ctfassets.net/3n0fku9d0jjr/4m3Hd15tsiUXxOQuLG5nKz/cbd692deeca4026cbd2e3ac8082feb60/shopping_logo_white__2_.svg"
          alt="kart_image"
        />
      </div>
      <div className="flex items-center w-[60%] md:w-[50%] lg:w-[40%] bg-white rounded-lg md:pl-2 pr-3 h-8">
        <SearchIcon className="h-4 text-gray-500 px-2" />
        <input
          className="text-sm outline-none  border-0 w-[85%] pl-1focus:bg-transparent"
          type="text"
          placeholder="Search"
        />
        <MicrophoneIcon className=" cursor-pointer  h-4 text-gray-500 px-2" />
      </div>

      {session ? (
        <>
          <div className="flex justify-center items-center ">
            <div className="relative hidden lg:inline-flex">
              <HomeIcon onClick={() => router.push("/")} className="nav-btn" />
              <ShoppingCartIcon
                onClick={() => router.push("/cart/Cart")}
                className="nav-btn"
              />
              <p className="text-xs flex justify-center items-center   h-5 bg-red-600 absolute top-0 right-1 text-white animate-bounce p-1 rounded-full lg:inline-flex">
                {basket.length}
              </p>
            </div>

            <MailOpenIcon className="nav-btn" />
            <div className="relative hidden lg:inline-flex">
              <BellIcon className="nav-btn" />
              <p className="text-xs flex justify-center items-center  h-5 bg-red-500 absolute top-0 right-0 text-white animate-pulse p-1 rounded-full">
                2
              </p>
            </div>

            {sideMenu ? (
              <XIcon
                onClick={() => setSideMenu(!sideMenu)}
                className="nav-btn2"
              />
            ) : (
              <MenuAlt1Icon
                onClick={() => setSideMenu(!sideMenu)}
                className="nav-btn2"
              />
            )}

            <div className="userCon" onClick={() => signOut()}>
              <img
                className="w-8 h-8 rounded-full shadow-xl"
                src={session?.user?.image}
                alt=""
              />
              <p className="text-xs pl-2 font-bold text-gray-700">
                {session?.user.name}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div
          className="flex px-4 justify-around items-center"
          onClick={() => router.push("/auth/signin")}
        >
          <HomeIcon onClick={() => router.push("/")} className="nav-btn" />
          <p className="font-bold cursor-pointer text-sm text-blue-600">
            Sign in
          </p>
        </div>
      )}

      <div
        className={
          sideMenu
            ? `fixed top-16 shadow-2xl transition-all duration-700 ease-out sm:inline-block w-36 lg:w-60 lg:text-sm h-screen rounded-sm bg-white  py-2 right-0`
            : `fixed top-16 -right-64 px-1 py-2 rounded-sm lg:w-60 `
        }
      >
        {sidebarList.map((items) => (
          <SideOption
            onClick={() => router.push(`${items.loc}`)}
            icon={items.icon}
            title={items.title}
            id={items.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
