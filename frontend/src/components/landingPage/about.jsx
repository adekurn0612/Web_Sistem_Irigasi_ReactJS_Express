import React from 'react'

const AboutLP = () => {
  return (
    <div id='About'>
      <div className="flex flex-wrap px-10 py-4">
      <div className="w-full md:w-1/2">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nec lorem ut consectetur. Vestibulum sed condimentum tellus, id bibendum nisl. Sed lobortis lectus eget diam euismod ullamcorper. Nullam in volutpat metus.
          </p>
          <p className="text-gray-700 mb-4">
            Integer feugiat malesuada eros, vitae egestas ligula aliquet nec. Donec non ante velit. Sed pellentesque ex ac dolor fermentum, non placerat sapien cursus.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 border-solid border-2">
        <img src="../../client.jpg" alt="Gambar Konten" className="w-full h-auto" />
      </div>
    </div>
    </div>
  )
}

export default AboutLP
