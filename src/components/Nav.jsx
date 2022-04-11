function Nav() {
  return (
    <div className=" text-center">
      {" "}
      <h1 className="text-5xl my-4">Routes App</h1>
      <div className="flex justify-center">
        <input
          className=" rounded-md border-gray border-2 w-96 mr-2"
          placeholder="Puedes agregar un nuevo punto en tu recorrido"
        />{" "}
        <button className="hover:bg-slate-200 border-black border-2 rounded-md px-2">
          Añadir nuevo punto
        </button>
      </div>
    </div>
  );
}

export default Nav;
