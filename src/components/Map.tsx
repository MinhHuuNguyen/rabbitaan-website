import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from "yet-another-react-lightbox";
import { useEffect, useState } from 'react';
import { Stack } from "@mui/material";
import Image from "next/image";

import mapStyles from "../styles/VietnamMap.module.css";
import textStyles from '../styles/Text.module.css';
import tripsData from '../utils/trips.json';

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
        const provinces = tripsData.map((item) => item.place);
        setHighlightedProvinces(provinces);

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, "image/svg+xml");

        svgDoc.querySelectorAll('path').forEach((path) => {
          const provinceName = path.getAttribute('title');
          if (provinceName && provinces.includes(provinceName)) {
            path.classList.add(mapStyles.vietnam);
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
    const provinceData = tripsData.find(item => item.place === provinceName);
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

  const provincesTotal = tripsData.length;

  return (
    <div id="journey" className="container">
      <div className={`${textStyles.title}`}>Những chuyến đi...</div>
      <div className={`${textStyles.sub1} text-center`}>Bọn mình đã đi được {provincesTotal} tỉnh thành</div>
      <div className="flex" style={{ minHeight: "86vh", maxHeight: "86vh" }}>
        {/* Map Container */}
        <div className="w-1/4">
            <div
              className={`${mapStyles.vietnam}`}
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
        </div>
        {/* Circular Images Container */}
        <div className="w-3/4 grid grid-cols-6">
          {tripsData.map((place, index) => (
            <Stack>
              <Stack
                key={index}
                className={`
                  w-full
                  overflow-hidden
                  group
                  ${hoveredProvince === place.place ? 'ring-4 ring-yellow-500' : ''
                }`}
                sx={{ borderRadius: "50px", marginTop: "10px", padding: "1px" }}
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
                      path.classList.add(mapStyles.hoveredProvince);
                      setSvgContent(new XMLSerializer().serializeToString(svgDoc));
                    }
                  }
                }}
                onMouseOut={() => {
                  setHoveredMap(null);
                  const svgDoc = new DOMParser().parseFromString(svgContent, "image/svg+xml");
                  const path = svgDoc.querySelector(`path[data-province="${place.place}"]`);
                  if (path) {
                    path.classList.remove(mapStyles.hoveredProvince);
                    setSvgContent(new XMLSerializer().serializeToString(svgDoc));
                  }
                }}
              >
                <Image
                  src={place.image[0]}
                  alt={place.place}
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  style={{ minHeight: "12vh", maxHeight: "12vh" }}
                  className="object-cover transition-transform hover:scale-110 hover:'ring-4 ring-yellow-500' transition"
                />
              </Stack>
              <p className={`${textStyles.sub2} text-center`}>{place.place}</p>
              <p className={`${textStyles.sub2} text-center`}>{place.day}</p>
            </Stack>
          ))}
        </div>


        {isLightboxOpen && (
          <Lightbox
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