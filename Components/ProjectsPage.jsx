
const ProjectsPage = () => {
  return (
    <div className="flex flex-row w-[100%] p-3 h-screen">
      <div className="w-[100%] flex justify-center items-center flex-col">
        <h1 className="lg:text-6xl font-extrabold">View our pricing</h1>
        <h5 className="lg:text-2xl font-extrabold">Bring an Idea to life</h5>
      </div>

      <div className="w-[100%] flex justify-center items-center flex-col">

        <div className="grid grid-cols-2 gap-10">

          <div className="block-one h-[16rem] w-[16rem] skeleton rounded-xl flex justify-center items-center shadow-2xl">
            <button className="btn bg-white shadow-none border-[0rem] hover:bg-zinc-100">click me</button>
          </div>

          <div className="block-one h-[16rem] w-[16rem] border border-violet-300 rounded-xl mt-10 flex justify-center items-center">
            <button className="btn bg-white shadow-none border-[0rem] hover:bg-zinc-100">click me</button>
          </div>

          <div className="block-one h-[16rem] w-[16rem] border border-violet-300 rounded-xl flex justify-center items-center">
            <button className="btn bg-white shadow-none border-[0rem] hover:bg-zinc-100">click me</button>
          </div>

          <div className="block-one h-[16rem] w-[16rem] skeleton rounded-xl mt-10 flex justify-center items-center shadow-2xl">
            <button className="btn bg-white shadow-none border-[0rem] hover:bg-zinc-100">click me</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProjectsPage;
