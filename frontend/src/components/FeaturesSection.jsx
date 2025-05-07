import { ArrowRight, Phone, BarChart2, User, Globe, PieChart, Zap } from 'lucide-react';
import mockup from "../assets/Mockup.png";

export default function FeaturesSection() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Features List Column */}
        <div className="w-full lg:w-3/5 space-y-8">
          {/* Feature 1 - Highlighted */}
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Phone className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Dive Into Call Data and Thrive With AI-Coaching</h3>
                <p className="text-gray-600 mb-4">
                  Analyze real call recordings, detect skill gaps and transform your sales reps into rockstars with precision AI coaching.
                </p>
                <button className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                  View Details <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Other Features */}
          <div className="-space-y-1">
            {/* Feature 2 */}
            <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="bg-gray-200 p-2 rounded-lg">
                <BarChart2 size={20} className="text-gray-700" />
              </div>
              <h3 className="font-medium">AI Call Scoring</h3>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="bg-gray-200 p-2 rounded-lg">
                <User size={20} className="text-gray-700" />
              </div>
              <h3 className="font-medium">Personalized AI Scorecard</h3>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="bg-gray-200 p-2 rounded-lg">
                <Globe size={20} className="text-gray-700" />
              </div>
              <h3 className="font-medium">Multilingual AI Roleplay (30+ languages)</h3>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="bg-gray-200 p-2 rounded-lg">
                <PieChart size={20} className="text-gray-700" />
              </div>
              <h3 className="font-medium">Reporting & Analytics</h3>
            </div>

            {/* Feature 6 */}
            <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="bg-gray-200 p-2 rounded-lg">
                <Zap size={20} className="text-gray-700" />
              </div>
              <h3 className="font-medium">AI Call Companion</h3>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Column */}
        <div className="w-full lg:w-3/5 ">
        <img src={mockup} alt="" />
        </div>
      </div>
    </div>
  );
}