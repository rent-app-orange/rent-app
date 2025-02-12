import React from 'react'

function Footer() {
  return (
    <>
<footer className="bg-white border-t border-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-red-500">Help Center</a></li>
              <li><a href="#" className="hover:text-red-500">AirCover</a></li>
              <li><a href="#" className="hover:text-red-500">Anti-discrimination</a></li>
              <li><a href="#" className="hover:text-red-500">Disability support</a></li>
              <li><a href="#" className="hover:text-red-500">Cancellation options</a></li>
              <li><a href="#" className="hover:text-red-500">Report neighborhood concern</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hosting</h4>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-red-500">Airbnb your home</a></li>
              <li><a href="#" className="hover:text-red-500">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:text-red-500">Hosting resources</a></li>
              <li><a href="#" className="hover:text-red-500">Community forum</a></li>
              <li><a href="#" className="hover:text-red-500">Hosting responsibly</a></li>
              <li><a href="#" className="hover:text-red-500">Airbnb-friendly apartments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Airbnb</h4>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-red-500">Newsroom</a></li>
              <li><a href="#" className="hover:text-red-500">New features</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
              <li><a href="#" className="hover:text-red-500">Investors</a></li>
              <li><a href="#" className="hover:text-red-500">Gift cards</a></li>
              <li><a href="#" className="hover:text-red-500">Airbnb emergency stays</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">More</h4>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-red-500">English (US)</a></li>
              <li><a href="#" className="hover:text-red-500">Terms</a></li>
              <li><a href="#" className="hover:text-red-500">Sitemap</a></li>
              <li><a href="#" className="hover:text-red-500">Your Privacy Choices</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 text-gray-400">
          <p>© 2005 - 2023 Airbnb, our project named by us.</p>
          <div className="flex space-x-4">
          <box-icon name='globe' ></box-icon> 
          <a href="#" className="hover:text-red-500">English(US) </a>

          <box-icon type='logo' name='instagram'></box-icon>       
          <box-icon name='facebook-square' type='logo' ></box-icon> 
          <box-icon name='envelope' type='solid' ></box-icon>
            {/* يمكنك إضافة أيقونات أخرى هنا */}
          </div>
        </div>
      </div>
    </footer>
</>

)
}

export default Footer ;