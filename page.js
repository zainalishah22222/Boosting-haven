export default function Home() {
  return (
    <div className=\"min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8\">
      <h1 className=\"text-4xl font-bold mb-4 text-purple-400\">Boosting Haven</h1>
      <p className=\"text-lg text-gray-300 max-w-xl text-center\">
        Welcome to <span className=\"text-purple-300\">Boosting Haven</span>, your trusted place for game boosting services.
        We provide ranked climbs, coaching, and more across popular games.
      </p>
      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl\">
        <div className=\"bg-gray-900 rounded-2xl shadow-lg p-6 text-center\">
          <h2 className=\"text-xl font-semibold text-purple-300 mb-2\">Rank Boosting</h2>

          <p className=\"text-gray-400\">Climb divisions quickly and safely with our professional players.</p>
        </div>
        <div className=\"bg-gray-900 rounded-2xl shadow-lg p-6 text-center\">
          <h2 className=\"text-xl font-semibold text-purple-300 mb-2\">Coaching</h2>
          <p className=\"text-gray-400\">1-on-1 sessions with experienced pros to improve your skills.</p>
        </div>
        <div className=\"bg-gray-900 rounded-2xl shadow-lg p-6 text-center\">
          <h2 className=\"text-xl font-semibold text-purple-300 mb-2\">Custom Orders</h2>
          <p className=\"text-gray-400\">Tailor-made boosting services to fit your exact needs.</p>
        </div>
      </div>
      <footer className=\"mt-12 text-gray-500 text-sm\">
        Contact: <a href=\"mailto:zain.ali.shah22222@gmail.com\" className=\"text-purple-400 hover:underline\">zain.ali.shah22222@gmail.com</a> | WhatsApp: <span className=\"text-purple-400\">+92 332 5195882</span>
      </footer>
    </div>
  );
}