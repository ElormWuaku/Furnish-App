import { Handshake, Truck, Sofa, HeadphonesIcon } from "lucide-react"
import K from "../../../constants"


const iconMap = {
  Handshake: Handshake,
  Truck: Truck,
  Sofa: Sofa,
  HeadphonesIcon: HeadphonesIcon,
};

const Services = () => {
  return (
    <div className="container mx-auto px-2 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {K.SERVICES.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div 
              key={index} 
              className="p-6 rounded-lg text-center"
              style={{ backgroundColor: `${service.bgColor}` }} 
            >
              <div 
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: service.bgColor }}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services