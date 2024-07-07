// 

import { bedRoom, cabinet, chair, furniture, kitchen, livingRoom } from "../../../assets";

const CollectionItem = ({ imageSrc, productName }) => (
  <div className="relative overflow-hidden group">
    <img src={imageSrc} alt={productName} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <h3 className="text-white text-xl font-semibold">{productName}</h3>
    </div>
  </div>
);

const Collection = () => {
  const items = [
    { imageSrc: chair, productName: "Modern Chair" },
    { imageSrc: kitchen, productName: "Kitchen" },
    { imageSrc: furniture, productName: "Furniture" },
    { imageSrc: cabinet, productName: "Cabinet" },
    { imageSrc: bedRoom, productName: "Bedroom" },
    { imageSrc: livingRoom, productName: "Living Room" },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Our Furniture Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <CollectionItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
