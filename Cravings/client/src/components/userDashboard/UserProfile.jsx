import { Mail, MapPin } from "lucide-react";

export default function UserProfiled() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="relative w-80 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 text-center">

        {/* Avatar */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="mt-16 text-white">
          <h2 className="text-2xl font-semibold">Roshan</h2>
          <p className="text-sm text-gray-300 mt-1">Frontend Developer</p>

          {/* Info */}
          <div className="mt-4 space-y-2 text-sm text-gray-200">
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} />
              <span>malviyakalr@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} />
              <span>India</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-medium hover:scale-105 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
