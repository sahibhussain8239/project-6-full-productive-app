

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center text-white items-center h-[44vh]">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">Brew me a Coffee <span><img src="/coffee.gif" width={80} alt="" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium border border-none rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Read More</button>
        </div>

      </div>

      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white max-w-6xl mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-10">Your Fans can buy you a Coffee</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img width={88} className="bg-slate-400 rounded-full p-2 text-black" src="/giphy.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img width={88} className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center"> 
            <img width={88} className="bg-slate-400 rounded-full p-2 text-black" src="/coffee-morning.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your Fans are available for you to help you</p>  
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white max-w-6xl mx-auto py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-10">Learn about this Project</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=v1FZNtRPnw0elwvH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
