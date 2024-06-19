import React, { useEffect, useRef } from 'react';
import building from '../services/buildings';


function Map() {

  const buildings = building.batiments;

  let canvasRef = useRef(null);

  useEffect(() => {
    function drawBuilding(building) {
      if (building.state === 'enable') {
        const canvas = canvasRef.current;
        
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight; 

        const ctx = canvas.getContext('2d');
        const image = new Image();
        console.log(image, 'image');

      

        image.src = building.image;
        console.log(image.src, 'image');
        image.onload = () => {
         
          ctx.drawImage(
            image,
            building.positionX,
            building.positionY,
            building.width,
            building.height
          );
        };
      }
    }

    buildings.map(building => {
      drawBuilding(building)
    });

  }, [buildings]);

  return <canvas ref={canvasRef}></canvas>;
}

export default Map;
