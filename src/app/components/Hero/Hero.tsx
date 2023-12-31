import React from 'react'

function Hero() {
  return (
    <section className="px-3 py-5 bg-dark opacity-100 lg:py-10 bg-[url('https://res.cloudinary.com/dabfdxbfj/image/upload/v1692039667/pexels-ivan-samkov-7676496_p5z1gg.jpg')] bg-cover h-full" >
  <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
      <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
      <p className="text-4xl font-bold md:text-7xl">Streaming AI</p>
      <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
      <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Stream Now</button>
    </div>
    <div className="order-1 lg:order-2">
      <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://res.cloudinary.com/dabfdxbfj/image/upload/v1692039484/pexels-artem-podrez-6003074_cg1rrz.jpg" alt=""/>
    </div>
  </div>
</section>
  )
}

export default Hero