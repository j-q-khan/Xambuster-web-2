import React from 'react';

const SignUp = () => {
  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Join XamBuster Today!</h1>
          <p className="text-center mb-8 text-gray-400">Sign up for free and start your journey to exam success.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2">Full Name</label>
              <input type="text" id="fullName" className="w-full bg-gray-700 rounded px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-gray-700 rounded px-3 py-2" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input type="password" id="password" className="w-full bg-gray-700 rounded px-3 py-2" />
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full">
              Create Account
            </button>
          </form>
          <p className="text-center mt-6">
            Already have an account? <a href="#" className="text-purple-500 hover:underline">Login here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;