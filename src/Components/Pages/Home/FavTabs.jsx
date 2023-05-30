// import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import doll1 from "../../../assets/doll1.avif";
// import doll2 from "../../../assets/doll2.avif";
// import doll3 from "../../../assets/doll3.avif";
// import doll4 from "../../../assets/doll4.avif";
// import doll5 from "../../../assets/doll5.avif";
// import doll6 from "../../../assets/doll6.avif";
// import doll7 from "../../../assets/doll7.avif";
// import doll8 from "../../../assets/doll8.avif";
import { useEffect, useState } from "react";

import DollData from "./DollData";

function FavTabs() {
  const [categoryData, setCategoryData] = useState([]);
  const [categories, setCategories] = useState("Doll");

  console.log(categoryData);

  useEffect(() => {
    fetch(`https://the-toy-server-hazzadmdap-gmailcom.vercel.app/categories?category=${categories}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [categories]);

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => setCategories("Doll")}>
          <span className="font-bold text-[#BC0A4D] text-xl ">DOLLS</span>{" "}
        </Tab>
        <Tab onClick={() => setCategories("Accessories")}>
          <span className="font-bold text-[#BC0A4D] text-xl ">ACCESSORIES</span>
        </Tab>
        <Tab onClick={() => setCategories("pals")}>
          <span className="font-bold text-[#BC0A4D] text-xl ">PALS</span>
        </Tab>
      </TabList>
      <TabPanel className={''}>
        <div className="flex-col flex lg:flex-row  gap-4  ">
          {categoryData.slice(0,3).map((data) =>  <DollData key={data._id} data={data} /> )}

          
        </div>
        
      </TabPanel>
      <TabPanel>
      <div className="flex-col flex lg:flex-row  gap-4 ">
          {categoryData.slice(0,3).map((data) =>  <DollData key={data._id} data={data} /> )}

          
        </div>
      </TabPanel>
      <TabPanel>
      <div className="flex-col flex lg:flex-row  gap-4 ">
          {categoryData.slice(0,3).map((data) =>  <DollData key={data._id} data={data} /> )}

          
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default FavTabs;
