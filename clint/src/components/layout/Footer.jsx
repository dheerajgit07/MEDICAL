import React from 'react';

const Footer = () => {
  // Links ka data (Isse code clean rehta hai aur edit karna aasan hota hai)
  const getToKnowUsLinks = [
    { name: "Home", url: "https://www.indosurgicals.com" },
    { name: "About Us", url: "https://www.indosurgicals.com/page/about-us.php" },
    { name: "Products", url: "https://www.indosurgicals.com/products.php" },
    { name: "Quality", url: "https://www.indosurgicals.com/page/quality.php" },
    { name: "Enquiry Form", url: "https://www.indosurgicals.com/enquiry-form.php" },
    { name: "Warranty", url: "https://www.indosurgicals.com/warranty.php" },
    { name: "Contact Us", url: "https://www.indosurgicals.com/page/contact-us.php" },
    { name: "Careers", url: "https://www.indosurgicals.com/page/careers.php" }
  ];

  const usefulLinks = [
    { name: "Exhibition", url: "https://www.indosurgicals.com/exhibition/index.php" },
    { name: "Product Catalogue", url: "https://www.indosurgicals.com/product-catalouge.php" },
    { name: "Testimonial", url: "https://www.indosurgicals.com/testimonial.php" },
    { name: "Faq", url: "https://www.indosurgicals.com/page/faq.php" },
    { name: "Disclaimer", url: "https://www.indosurgicals.com/page/disclaimer.php" },
    { name: "Copyright", url: "https://www.indosurgicals.com/page/copyright.php" }
  ];

  const associateSites = [
    { name: "www.meddeal.in", url: "https://www.meddeal.in" },
    { name: "www.indoortho.com", url: "http://www.indoortho.com" },
    { name: "www.heightscale.com", url: "http://www.heightscale.com" },
    { name: "www.radarmour.com", url: "http://www.radarmour.com" }
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/indosurgicalspvtltd", img: "https://www.indosurgicals.com/images/facebook-logo.jpg" },
    { name: "Twitter", url: "https://twitter.com/indosurgicals", img: "https://www.indosurgicals.com/images/twitter-logo.jpg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/indosurgicals/", img: "https://www.indosurgicals.com/images/linked-in-logo.jpg" },
    { name: "YouTube", url: "https://www.youtube.com/c/IndoSurgicals/", img: "https://www.indosurgicals.com/images/you-tube-logo.jpg" }
  ];

  return (
    // Dark medical blue background with a top accent border
    <footer className="bg-sky-950 text-sky-100 py-16 px-5 border-t-4 border-sky-500 font-sans">
      <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Company Info */}
        <div className="flex flex-col">
          <h6 className="text-lg font-bold text-white uppercase tracking-wider mb-6">
            IndoSurgicals Pvt. Ltd.
          </h6>
          <div className="text-sm text-sky-200 leading-relaxed mb-6">
            <p>C-117, 3rd Floor,</p>
            <p>Mayapuri Industrial Area Phase II,</p>
            <p>New Delhi - 110064, India</p>
            
            <div className="mt-6 space-y-2">
              <p><span className="text-sky-400 font-semibold">Hours:</span> Monday to Saturday</p>
              <p><span className="text-sky-400 font-semibold">Landline:</span> +91-11-4909 2567</p>
              <p><span className="text-sky-400 font-semibold">E-mail:</span> <a href="mailto:info@indosurgicals.com" className="hover:text-white transition-colors hover:underline">info@indosurgicals.com</a></p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-auto">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="bg-white p-1 rounded-full shadow-sm hover:shadow-sky-400/50 hover:-translate-y-1 transition-all duration-300"
                title={social.name}
              >
                <img 
                  src={social.img} 
                  alt={social.name} 
                  className="w-8 h-8 rounded-full object-cover" 
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Get to Know Us */}
        <div>
          <h6 className="text-lg font-bold text-white uppercase tracking-wider mb-6">
            Get to Know Us
          </h6>
          <ul className="space-y-3 text-sm">
            {getToKnowUsLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-sky-200 hover:text-sky-400 hover:ml-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2 opacity-50 text-xs">▸</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h6 className="text-lg font-bold text-white uppercase tracking-wider mb-6">
            Useful Links
          </h6>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-sky-200 hover:text-sky-400 hover:ml-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2 opacity-50 text-xs">▸</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Associate Sites */}
        <div>
          <h6 className="text-lg font-bold text-white uppercase tracking-wider mb-6">
            Associate Sites
          </h6>
          <ul className="space-y-3 text-sm">
            {associateSites.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-200 hover:text-sky-400 hover:ml-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2 opacity-50 text-xs">🔗</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Section (Optional but recommended for professional look) */}
      <div className="w-full px-4 md:px-8 lg:px-12 mt-16 pt-8 border-t border-sky-800 text-center text-xs text-sky-400/60">
        <p>&copy; {new Date().getFullYear()} IndoSurgicals Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;