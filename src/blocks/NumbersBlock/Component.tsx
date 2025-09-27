export default function NumbersBlock() {
  return (
    <div className="bg-yellow-300 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">Numbers</h1>
          <p className="text-lg text-black font-medium">Education as an influence</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Unique Courses */}
          <div className="text-center">
            <div className="text-6xl font-bold text-black mb-4">10</div>
            <div className="text-lg text-black font-medium">Unique Courses</div>
          </div>

          {/* Applicants */}
          <div className="text-center">
            <div className="text-6xl font-bold text-black mb-4">51,000 +</div>
            <div className="text-lg text-black font-medium">Applicants</div>
          </div>

          {/* Countries & States */}
          <div className="text-center">
            <div className="text-6xl font-bold text-black mb-4">40+</div>
            <div className="text-lg text-black font-medium">Countries & States</div>
          </div>
        </div>

        {/* Course Instructors - Centered */}
        <div className="mb-12">
          <div className="text-6xl font-bold text-black mb-4">2,100+</div>
          <div className="text-lg text-black font-medium">Course Instructors</div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-yellow-400 transition-colors duration-300 uppercase tracking-wide">
            SEE OUR TEAM
          </button>
        </div>
      </div>
    </div>
  );
}