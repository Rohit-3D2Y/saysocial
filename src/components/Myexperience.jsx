export default function Component() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-neutral-800 mr-2" />
            Why choose us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 max-w-3xl mx-auto">
            Experience excellence in every project
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Abstract Image */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm aspect-square">
            <img
              src="https://i.pinimg.com/736x/cb/dd/d9/cbddd946acc46006ae8f020789ca03cb.jpg"
              alt="Abstract 3D render with purple, orange, and yellow elements"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Card 2: Awards & recognition */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative aspect-square">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Awards & recognition</h3>
              <div className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-4">15</div>
              <p className="text-neutral-600 text-sm sm:text-base">
                These accolades are a testament to our passion, hard work, and the trust our clients place in us.
              </p>
            </div>
          </div>
          {/* Card 3: Person with blue smoke Image - Made responsive */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm aspect-square md:row-span-2 md:aspect-auto">
            <img
              src="https://i.pinimg.com/736x/ef/9b/c2/ef9bc22fbe017e3d6fedb37e69a14663.jpg"
              alt="Person with green hair standing in blue smoke in an urban setting"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Card 4: Happy customers */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative aspect-square">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Happy customers</h3>
              <div className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-4">15</div>
              <p className="text-neutral-600 text-sm sm:text-base">
                Our commitment to client satisfaction is reflected in every successful partnership.
              </p>
            </div>
          </div>
          {/* Card 5: Projects completed */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative aspect-square">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Projects completed</h3>
              <div className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-4">
                16k<span className="text-3xl sm:text-4xl align-top">+</span>
              </div>
              <p className="text-neutral-600 text-sm sm:text-base">
                Over 350 successful projects delivered to our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
