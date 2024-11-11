import { useEffect, useState } from 'react';
import map from "../styles/VietnamMap.module.css";
import placesData from '../utils/json/trips.json';

const VietnamMap: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [highlightedProvinces, setHighlightedProvinces] = useState<string[]>([]);
  const [selectedProvinceImages, setSelectedProvinceImages] = useState<string[]>([]); 
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

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
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false); 
  };

  return (
    <div>
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
      {isPopupOpen && (
        <div className={map.popup}>
          <div className={map.popupContent}>
            <span className={map.closeButton} onClick={closePopup}>&times;</span>
            <h2>Images</h2>
            <div className={map.imageGrid}>
              {selectedProvinceImages.map((image, index) => (
                <img key={index} src={image} alt={image} className={map.image} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VietnamMap;
