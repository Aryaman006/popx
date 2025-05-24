"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AccountSettings() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const storedPic = localStorage.getItem("profilePic");
      if (storedPic) {
        userData.profilePic = storedPic;
      }
      setUser(userData);
      setLoading(false);
    } else {
      setNotLoggedIn(true);
      setLoading(false);
      setTimeout(() => {
        router.push("/signin");
      }, 3000);
    }
  }, [router]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      // Update user state and localStorage for profile pic
      setUser((prev) => ({ ...prev, profilePic: base64String }));
      localStorage.setItem("profilePic", base64String);
    };
    reader.readAsDataURL(file);
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg font-medium">
          Loading your account details...
        </p>
      </div>
    );
  }

  if (notLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen  px-4 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <p className="text-red-600 font-semibold text-xl mb-4">
            You are not logged in.
          </p>
          <p className="text-gray-700">Redirecting to the sign-in page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen  px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 px-6 py-5">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-wide">
            Account Settings
          </h2>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-700 shadow-lg overflow-hidden cursor-pointer" onClick={openFileSelector} title="Change profile picture">
              <Image
                src={user.profilePic || "/profile.jpg"}
                alt="Profile Picture"
                fill
                style={{ objectFit: "cover" }}
                sizes="80px"
                priority
              />
              {/* Camera icon overlay */}
              <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md flex items-center justify-center">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                  <circle cx="12" cy="13.5" r="3.5" />
                  <path d="M7 7l3-3h4l3 3" />
                </svg>
              </div>
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-semibold text-gray-900">{user.fullName || "User Name"}</p>
              <p className="text-gray-500 mt-1">{user.email || "email@example.com"}</p>
            </div>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed text-sm">
            Welcome back, {user.fullName ? user.fullName.split(" ")[0] : "User"}! This is your account overview. You can manage your profile information and settings here.
          </p>
        </div>
      </div>
    </div>
  );
}
