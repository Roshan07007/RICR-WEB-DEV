const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen  ">
        <div className="text-center p-6  shadow-2xl border-2 rounded-xl w-80">
          <h1 className="text-2xl font-bold mb-4">Login Page</h1>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="border-2 w-full p-1 rounded mt-1" />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              className="border-2 w-full p-1 rounded mt-1"
            />
          </div>

          <div>
            <button className="bg-blue-500 m-2 text-white px-4 py-1 rounded-2xl">
              Login
            </button>
            <button className="bg-red-700 m-2 text-white px-4 py-1 rounded-2xl">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
