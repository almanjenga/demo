import Image from "next/image";
import { Hero } from "../../components";

export default function Home() {
  return (

      <main
      className="overflow-hidden">
        <Hero/>
        <div className="mt-0.5 padding-x padding-y max-width bg-white " id ="discover">
          <div className="home__text-container flex flex-col items-start justify-start gap-y-2.5 text-black-100 ">
            <h1 className="text-3xl font-extrabold text-black">Product Catalog</h1>

          </div>

        </div>
      </main>
      

  )
}
