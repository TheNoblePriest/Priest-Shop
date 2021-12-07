function SideOption({ icon, title, id, onClick }) {
  return (
    <div
      onClick={onClick}
      key={id}
      className="hover:scale-105 bg-blue-400 hover:bg-green-500 text-white transition-all duration-700 cursor-pointer p-2 flex justify-start items-center text-sm font-bold  m-2 rounded-md"
    >
      {icon}
      <p className="text-xs font-semibold">{title}</p>
    </div>
  );
}

export default SideOption;
