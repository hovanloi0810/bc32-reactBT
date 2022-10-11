import React from "react";

const GlassesList = ({ data, onSelect }) => {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <div key={item.id} className="col-sm-2 text-center mt-4">
            <div onClick={() => onSelect(item)} style={{cursor: "pointer"}}>
              <img 
                src={item.url} 
                alt={item.name} 
                width="100px" 
                height="auto"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlassesList;
