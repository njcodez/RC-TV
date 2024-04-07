import Link from 'next/link';

const Main = () => {
  return (
    <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden ml-4 md:ml-0"> {/* Added ml-4 class for left margin */}
        <h1 className="my-4 text-3xl md:text-5xl text-white  font-bold leading-tight text-center md:text-left">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            RC-TV
          </span>
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-purple-500 ml-4 md:ml-0"> 
          Watch Movies, TV Shows and more....
        </p>

        <div className="bg-gray-900 w-full max-w-md shadow-lg rounded-lg px-4 pt-2 pb-2" style={{ paddingLeft: '20px' }}> 
          <div className="flex items-center justify-center" style={{ marginLeft: '-20px' }}> 
            <Link href='/home'>
              <button
                className="bg-gradient-to-r from-blue-800 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-10 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="/macbook.svg" alt="macbook" />
      </div>
    </div>
  );
}

export default Main;
