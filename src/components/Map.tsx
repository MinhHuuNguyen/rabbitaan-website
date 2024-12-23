import { useEffect, useState } from 'react';
import map from "../styles/VietnamMap.module.css";
import placesData from '../utils/json/trips.json';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Download, Fullscreen, Zoom, Thumbnails } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const VietnamMap: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [highlightedProvinces, setHighlightedProvinces] = useState<string[]>([]);
  const [selectedProvinceImages, setSelectedProvinceImages] = useState<string[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

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
            path.setAttribute('fill', '#ffcc00'); 
            path.setAttribute('data-highlight', 'true'); 
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
      setSelectedProvinceImages(provinceData.image.slice(0, 6)); 
      setIsLightboxOpen(true); 
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div>
      <div className={map.title}>
        <h2>Our Journey</h2>
      </div>
      <div
        className={map.vietnam}
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
      />
      {isLightboxOpen && (
        <Lightbox
          plugins={[Download, Fullscreen, Zoom, Thumbnails]}
          slides={selectedProvinceImages.map((image) => ({ src: image }))}
          open={isLightboxOpen}
          close={closeLightbox}
        />
      )}
    </div>
  );
};

export default VietnamMap;