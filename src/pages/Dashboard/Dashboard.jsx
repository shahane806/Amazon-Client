import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import watch from "../../assets/logos/watch.jpg";
import bag from "../../assets/logos/bag.jpg";
import camera from "../../assets/logos/camera.jpg";
import earphones from "../../assets/logos/earphones.jpg";
import banner from "../../assets/logos/banner.jpg";
import keyboard from "../../assets/logos/keyboard.webp";
import mobile from "../../assets/logos/mobile.jpg";
import tv from "../../assets/logos/tv.jpg";
import Product from "../../components/Products/Product";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const auth = useSelector((state)=>state?.authReducer);
  const[userDatabaseId,setUserDatabaseId] = useState('');
  useEffect(()=>{
    
    auth.then((res)=>setUserDatabaseId(res?.result?._id));
    localStorage.setItem("Id",userDatabaseId);
  })
  const Products = [
    {
      ProductName: "Noise Pulse Go Buzz Bluetooth Calling Smart Watch",
      ProductPrice: 1999,
      ProductRating: 3,
      ProductImage: watch,
    },
    {
      ProductName:
        "boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)",
      ProductPrice: 2999,
      ProductRating: 5,
      ProductImage: earphones,
    },
    {
      ProductName:
        "Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",
      ProductPrice: 199,
      ProductRating: 2,
      ProductImage: keyboard,
    },
    {
      ProductName: "Apple iPhone 14 Plus 512GB (Product) RED",
      ProductPrice: 10000,
      ProductRating: 5,
      ProductImage: mobile,
    },
    {
      ProductName:
        "Samsung 138 cm (55 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA55AUE70AKLXL (Black)",
      ProductPrice: 29999,
      ProductRating: 4,
      ProductImage: tv,
    },
    {
      ProductName:
        "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
      ProductPrice: 4000,
      ProductRating: 3,
      ProductImage: camera,
    },
    {
      ProductName:
        "Wesley Milestone 2.0 Casual Waterproof Laptop Backpack(Blue & black)",
      ProductPrice: 200,
      ProductRating: 3,
      ProductImage: bag,
    },
  ];
  return (
    <div id="Dashboard">
      <div className="Banner">
        <img src={banner} alt="Banner"></img>
        
      </div>
      <div className="ProductSectionOne">
        {Products.map(
          (
            { ProductImage, ProductName, ProductPrice, ProductRating },
            index
          ) => {
            return (
              <Product
                key={index}
                ProductImage={ProductImage}
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                ProductRating={ProductRating}
              />
            );
          }
        )}
      </div>
      <div className="ProductSectionTwo">
        {Products.map(
          (
            { ProductImage, ProductName, ProductPrice, ProductRating },
            index
          ) => {
            return (
              <Product
                key={index}
                ProductImage={ProductImage}
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                ProductRating={ProductRating}
              />
            );
          }
        )}
      </div>
      <div className="ProductSectionThree">
        {Products.map(
          (
            { ProductImage, ProductName, ProductPrice, ProductRating },
            index
          ) => {
            return (
              <Product
                key={index}
                ProductImage={ProductImage}
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                ProductRating={ProductRating}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Dashboard;
