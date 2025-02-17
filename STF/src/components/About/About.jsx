import React, { useState, useEffect, useRef } from "react";
import "./About.css"; // Include CSS file for styling

const Slider = () => {
  const [itemActive, setItemActive] = useState(0);
  const autoSlideInterval = useRef(null);

   

  const items = [
    {
      img: "img/About/img1.png",
      title: "Expert Mentors",
      description: "Learn from seasoned traders with years of experience in forex, stocks, crypto, and beyond.",
    },
    {
      img: "img/About/img2.jpg",
      title: "Slider 02",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "img/About/img3.jpg",
      title: "Slider 03",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "img/About/img4.jpg",
      title: "Slider 04",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "img/About/img5.jpg",
      title: "Slider 05",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const thumbnails = items; // Since thumbnails use the same data

  const countItem = items.length;

  // Function to navigate to the next item
  const handleNext = () => {
    setItemActive((prev) => (prev + 1) % countItem);
  };

  // Function to navigate to the previous item
  const handlePrev = () => {
    setItemActive((prev) => (prev - 1 + countItem) % countItem);
  };

  // Function to handle thumbnail clicks
  const handleThumbnailClick = (index) => {
    setItemActive(index);
    startAutoSlide(); // Restart auto-slide
  };

  // Start auto-slide
  const startAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  // Stop auto-slide when component unmounts
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  // Scroll thumbnail into view when active item changes
  useEffect(() => {
    const activeThumbnail = document.querySelector(
      `.thumbnail .item:nth-child(${itemActive + 1})`
    );
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  }, [itemActive]);

  return (
    <div className="slider-container text-[#FFFFFF] bg-black margin-0 ">
      {/* Main Slider */}
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${itemActive === index ? "active" : ""}`}
            >
              <img src={item.img} alt={`Slider ${index + 1}`} />
              <div className="content">
                <p>design</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Thumbnail Slider
      <div className="thumbnail">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`item ${itemActive === index ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={thumb.img} alt={`Thumbnail ${index + 1}`} />
            <div className="content">Name Slider</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
