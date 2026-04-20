function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0f1117]">
      <div className="bg-[#1a1d27] w-full p-8 max-w-md shadow-xl rounded-2xl">
        <div>
          <h1 className="font-bold text-3xl text-[#6366f1] text-center">
            RoomSync
          </h1>
          <p className="mt-1 mb-8 text-center text-gray-400">Gestão de Salas</p>
        </div>

        <div>
          <label className="block text-gray-400 text-sm mb-1" htmlFor="">
            Usuário
          </label>
          <input
            className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm mb-1" htmlFor="">
            Senha
          </label>
          <input
            className="w-full bg-[#0f1117] text-white rounded-lg p-3 border border-gray-700 mb-4"
            type="password"
          />
        </div>

        <button className="w-full bg-[#6366f1] text-white font-bold p-3 rounded-lg hover:bg-[#4f46e5] transition cursor-pointer">
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
