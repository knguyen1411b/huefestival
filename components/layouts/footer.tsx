export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 shadow-inner">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p className="text-sm sm:text-base font-medium">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Hue Festival</span>. All rights
          reserved.
        </p>
        <p className="mt-1 text-sm sm:text-base">Made with Khanh Nguyen</p>
      </div>
    </footer>
  )
}
