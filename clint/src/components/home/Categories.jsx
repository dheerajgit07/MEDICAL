import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesSlide from './CatagoriesSlide';
import CustomerTestimonial from './CustomerTestimonial';
import Footer from './Footer';

const categoriesData = [
  { name: "Diagnostic Equipments", link: "diagnostic-products-manufacturer/index.php", img: "/images/categories/diagnostic-equipments.jpg" },
  { name: "Hospital Scrubs & Linens", link: "hospital-scrubs-linens-manufacturer/index.php", img: "/images/categories/hospital-scrubs-linens.jpg" },
  { name: "Lab Coat", link: "lab-coat-apron/index.php", img: "/images/categories/lab-caot-apron.jpg" },
  { name: "X-Ray Supplies", link: "x-ray-supplies-manufacturer/index.php", img: "/images/categories/x-ray-supplies.jpg" },
  { name: "Anaesthesia Equipments", link: "anaesthesia-equipments-manufacturer/index.php", img: "/images/categories/anaesthesia-equipments.jpg" },
  { name: "Autoclave & Sterilizer", link: "autoclave-sterilizer-manufacturer/index.php", img: "/images/categories/autoclave-sterilizer.jpg" },
  { name: "Height & Weight Scales", link: "height-weight-scales-manufacturer/index.php", img: "/images/categories/height-weight-scales.jpg" },
  { name: "Cold Chain Equipment", link: "cold-chain-equipment-manufacturers/index.php", img: "/images/categories/cold-chain.jpg" },
  { name: "Surgical Instruments", link: "surgical-instruments-manufacturer/index.php", img: "/images/categories/surgical-instruments-manufacturer.jpg" },
  { name: "Dental Instruments", link: "dental-instruments/index.php", img: "/images/categories/dental-instruments.jpg" },
  { name: "Laparoscopy Instruments", link: "laparoscopy-instruments/index.php", img: "/images/categories/laparoscopy-instruments.jpg" },
  { name: "Orthopedic Instruments", link: "orthopedic-instruments/index.php", img: "/images/categories/orthopedic-instruments.jpg" },
  { name: "Hospital Furniture", link: "hospital-furniture-manufacturer/index.php", img: "/images/categories/hospital-bed_furniture.jpg" },
  { name: "Hospital Holloware", link: "hospital-holloware-manufacturer/index.php", img: "/images/categories/hospital-holloware.jpg" },
  { name: "Hospital Waste Management Products", link: "hospital-waste-management-products/index.php", img: "/images/categories/hospital-waste-management.jpg" },
  { name: "Miscellaneous Medical Products", link: "miscellaneous-medical-products/index.php", img: "/images/categories/miscellaneous-medical-products.jpg" },
  { name: "Laboratory Plasticware", link: "laboratory-plasticware-manufacturer/index.php", img: "/images/categories/laboratory-plasticware.jpg" },
  { name: "Obstetrics & Gynaecology", link: "gynaecological-products-manufacturer/index.php", img: "/images/categories/ob-gyn-gynecological.jpg" },
  { name: "Suction Machines & Units", link: "suction-machine-unit-manufacturer/index.php", img: "/images/categories/suction-machines-units.jpg" },
  { name: "Health & Yoga Products", link: "health-and-yoga-products/index.php", img: "/images/categories/health-and-yoga.jpg" },
  { name: "OT Equipment", link: "ot-equipment/index.php", img: "/images/categories/ot-lights-tables.jpg" },
  { name: "Infant Care Equipment", link: "infant-care-equipment-manufacturer/index.php", img: "/images/categories/infant-care.jpg" },
  { name: "Medical Rubber Products", link: "medical-rubber-products-manufacturer/index.php", img: "/images/categories/medical-rubber-products.jpg" },
  { name: "Orthopaedic Aids & Rehab Products", link: "orthopaedic-aids-rehabilitation-product/index.php", img: "/images/categories/orthopaedic-aids.jpg" },
  { name: "Laboratory Equipments", link: "laboratory-equipments-manufacturer/index.php", img: "/images/categories/laboratory-products.jpg" },
  { name: "Medical Disposable", link: "medical-disposable/index.php", img: "/images/categories/medical-disposable.jpg" },
  { name: "Physiotherapy Products", link: "physiotherapy-products/index.php", img: "/images/categories/physiotherapy-products.jpg" },
  { name: "Laboratory Reagents & Fine Chemicals", link: "laboratory-reagents-fine-chemicals/index.php", img: "/images/categories/laboratory-reagents-fine-chemicals.jpg" },
  { name: "Disposable Medical Apparel & Drapes", link: "hospital-disposable-products/index.php", img: "/images/categories/disposable-products.jpg" }
];

const Categories = () => {
  // Agar image load nahi hoti hai, toh yeh function ek default medical placeholder set kar dega
  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/400x300/e0f2fe/0369a1?text=Medical+Product";
  };

  const getCategoryRoute = (item) => {
    // Mapping specific legacy links to our clean routes
    const mapping = {
      "diagnostic-products-manufacturer/index.php": "/diagnostic-equipments",
      "hospital-scrubs-linens-manufacturer/index.php": "/scrubs-linens",
      "lab-coat-apron/index.php": "/lab-coat",
      "x-ray-supplies-manufacturer/index.php": "/xray-supplies",
      "anaesthesia-equipments-manufacturer/index.php": "/anaesthesia",
      "autoclave-sterilizer-manufacturer/index.php": "/autoclave",
      "height-weight-scales-manufacturer/index.php": "/scales",
      "cold-chain-equipment-manufacturers/index.php": "/cold-chain",
      "surgical-instruments-manufacturer/index.php": "/surgical-instruments",
      "dental-instruments/index.php": "/dental-instruments",
      "laparoscopy-instruments/index.php": "/laparoscopy",
      "orthopedic-instruments/index.php": "/orthopedic-instruments",
      "hospital-furniture-manufacturer/index.php": "/hospital-furniture",
      "hospital-holloware-manufacturer/index.php": "/holloware",
      "hospital-waste-management-products/index.php": "/waste-management",
      "miscellaneous-medical-products/index.php": "/miscellaneous",
      "laboratory-plasticware-manufacturer/index.php": "/lab-plasticware",
      "gynaecological-products-manufacturer/index.php": "/gynaecology",
      "suction-machine-unit-manufacturer/index.php": "/suction-machines",
      "health-and-yoga-products/index.php": "/health-yoga",
      "ot-equipment/index.php": "/ot-equipment",
      "infant-care-equipment-manufacturer/index.php": "/infant-care",
      "medical-rubber-products-manufacturer/index.php": "/rubber-products",
      "orthopaedic-aids-rehabilitation-product/index.php": "/rehab-products",
      "laboratory-equipments-manufacturer/index.php": "/lab-equipments",
      "medical-disposable/index.php": "/medical-disposable",
      "physiotherapy-products/index.php": "/physiotherapy",
      "laboratory-reagents-fine-chemicals/index.php": "/lab-reagents",
      "hospital-disposable-products/index.php": "/medical-apparel"
    };
    return mapping[item.link] || "/products";
  };

  return (
    <div>
  
    <div className="px-5 py-12 bg-sky-50 min-h-screen">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        {/* Skyblue Dark Heading */}
        <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-12">
          Product Categories
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categoriesData.map((item, index) => (
            <div
              key={index}
              // Card styling with soft skyblue borders and shadow
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-sky-100"
            >
              <Link to={getCategoryRoute(item)} className="block overflow-hidden relative group">
                {/* Image Section */}
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  onError={handleImageError} // Image fail hone par fallback lagayega
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Image ke upar halka sa skyblue overlay hover karne par */}
                <div className="absolute inset-0 bg-sky-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>

              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold text-sky-950 mb-3">
                  <Link to={getCategoryRoute(item)} className="hover:text-sky-600 transition-colors duration-200">
                    {item.name}
                  </Link>
                </h3>

                <Link
                  to={getCategoryRoute(item)}
                  // Medical blue button text
                  className="inline-block mt-auto px-4 py-2 bg-sky-50 text-sky-700 text-sm font-semibold rounded-lg hover:bg-sky-600 hover:text-white transition-colors duration-300"
                >
                  View All Products &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
     {/* <CategoriesSlide />
      <CustomerTestimonial />
      <Footer /> */}
    </div>
  );
};

export default Categories;