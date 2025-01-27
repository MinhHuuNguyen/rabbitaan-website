import { useEffect, useState } from 'react';
import map from "../styles/VietnamMap.module.css";
import placesData from '../utils/trips.json';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Download, Fullscreen, Zoom, Thumbnails } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Image from "next/image";

const VietnamMap: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [highlightedProvinces, setHighlightedProvinces] = useState<string[]>([]);
  const [selectedProvinceImages, setSelectedProvinceImages] = useState<string[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [hoveredMap, setHoveredMap] = useState<string | null>(null);

  useEffect(() => {
    // Load Viet Nam Map SVG
    fetch('/vietnam.svg')
      .then((response) => response.text())
      .then((data) => {
        const provinces = placesData.map((item) => item.place);
        setHighlightedProvinces(provinces);

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, "image/svg+xml");

        svgDoc.querySelectorAll('path').forEach((path) => {
          const provinceName = path.getAttribute('title');
          if (provinceName && provinces.includes(provinceName)) {
            path.classList.add(map.vietnam);
            path.setAttribute('data-highlight', 'true');
            path.setAttribute('data-province', provinceName); // Add a unique identifier
          }
        });

        const updatedSvg = new XMLSerializer().serializeToString(svgDoc);
        setSvgContent(updatedSvg);
      })
      .catch((error) => console.error('Error loading SVG:', error));
  }, []);

  const handleProvinceClick = (provinceName: string) => {
    const provinceData = placesData.find(item => item.place === provinceName);
    if (provinceData) {
      setSelectedProvinceImages(provinceData.image);
      setIsLightboxOpen(true);
    }
  };

  const handleCircularImageClick = (provinceName: string) => {
    handleProvinceClick(provinceName);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const provincesTotal = placesData.length;

  return (
    <div id="journey" className="container mx-auto my-40">
      <div className="text-center mb-20">
        <h2>Our Journey</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        {/* Map Container */}
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="relative p-4">
            <div
              className={`${map.vietnam} `}
              dangerouslySetInnerHTML={{ __html: svgContent }}
              onClick={(event) => {
                const target = event.target as SVGElement;
                if (target.tagName === 'path') {
                  const provinceName = target.getAttribute('title');
                  if (provinceName) {
                    handleProvinceClick(provinceName);
                  }
                }
              }}
              onMouseOver={(event) => {
                const target = event.target as SVGElement;
                if (target.tagName === 'path') {
                  const provinceName = target.getAttribute('title');
                  if (provinceName) {
                    setHoveredProvince(provinceName);
                  }
                }
              }}
              onMouseOut={() => {
                setHoveredProvince(null);
              }}
            />
            <p className="text-lg mt-10 text-center font-semibold">Bọn mình đã đi được {provincesTotal} tỉnh thành</p>
          </div>
        </div>

        {/* Circular Images Container */}
        <div className="md:w-2/3 grid gap-6">
          {placesData.map((place, index) => (
            <div
              key={index}
              className={`w-24 h-24 rounded-full text-center cursor-pointer ${hoveredProvince === place.place ? 'ring-4 ring-yellow-400' : ''
                }`}
              onClick={() => handleCircularImageClick(place.place)}
              onMouseOver={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const isMouseInside =
                  e.clientX >= rect.left &&
                  e.clientX <= rect.right &&
                  e.clientY >= rect.top &&
                  e.clientY <= rect.bottom;

                if (isMouseInside) {
                  setHoveredMap(place.place);
                  const svgDoc = new DOMParser().parseFromString(svgContent, "image/svg+xml");
                  const path = svgDoc.querySelector(`path[data-province="${place.place}"]`);
                  if (path) {
                    path.classList.add(map.hoveredProvince);
                    setSvgContent(new XMLSerializer().serializeToString(svgDoc));
                  }
                }
              }}
              onMouseOut={() => {
                setHoveredMap(null);
                const svgDoc = new DOMParser().parseFromString(svgContent, "image/svg+xml");
                const path = svgDoc.querySelector(`path[data-province="${place.place}"]`);
                if (path) {
                  path.classList.remove(map.hoveredProvince);
                  setSvgContent(new XMLSerializer().serializeToString(svgDoc));
                }
              }}
            >
              <Image
                src={place.image[0]}
                alt={place.place}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full border-2 border-gray-300 hover:scale-110 hover:shadow-md transition"
              />
              <span className="font-lora font-bold mt-2 text-black-600 auto-shrink-text">
                {place.place}
              </span>
              <span className="block font-bold text-xs text-gray-500">{place.day}</span>
            </div>
          ))}
        </div>


        {isLightboxOpen && (
          <Lightbox
            plugins={[Download, Fullscreen, Zoom, Thumbnails]}
            slides={selectedProvinceImages.map((image) => ({ src: image }))}
            open={isLightboxOpen}
            close={closeLightbox}
          />
        )}
      </div>
    </div>
  );
};

export default VietnamMap;