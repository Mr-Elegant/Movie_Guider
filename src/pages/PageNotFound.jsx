import { useEffect } from "react"
import { Link } from "react-router-dom"
import PageNotFoundImage  from "../assets/images/snf.jpg"

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page not found`
  }, )
  


  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          {/* <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white"> 404, Oops</p> */}
          <div className="w-100%">
          <img className="rounded" src={PageNotFoundImage} alt="404 Page not found " />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/"><button className="w-64 text-white rounded-lg px-5 py-2.5 mr-2 mb-2 text-xl font-medium bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  ">Back to homepage</button></Link> 
        </div>

      </section>
    </main>
  )
}
