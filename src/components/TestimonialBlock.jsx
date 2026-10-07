import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialBlock.css';

const reviews = [
  { 
    id: 1, 
    text: "The interior execution was flawless. The design team listened to all our requirements and delivered a spectacular commercial office setup on Vibhuti Khand.", 
    author: "Rahul Verma", 
    location: "GOMTI NAGAR, LUCKNOW", 
    rating: 5 
  },
  { 
    id: 2, 
    text: "Amazing gypsum ceiling work. The team was highly professional, respected our space, and finished our living room stepped cove ceiling on the promised timeline.", 
    author: "Sneha Gupta", 
    location: "INDIRA NAGAR, LUCKNOW", 
    rating: 5 
  },
  { 
    id: 3, 
    text: "Top quality modular kitchen! The Marine ply cabinetry and soft-close hardware are truly durable and the acrylic finishing is top notch. Very satisfied.", 
    author: "Amit Singh", 
    location: "ALIGANJ, LUCKNOW", 
    rating: 5 
  },
  { 
    id: 4, 
    text: "Beautiful WPC louvers and UV marble sheet TV unit installation. Completely transformed our drawing room. It looks luxurious and very neat.", 
    author: "Priya Sharma", 
    location: "HAZRATGANJ, LUCKNOW", 
    rating: 5 
  },
  { 
    id: 5, 
    text: "Great wholesale pricing for genuine Gyproc boards and GI ceiling channels. Fast delivery to our site in Dubagga with zero damages. Honest suppliers.", 
    author: "Mohd Rizwan", 
    location: "DUBAGGA, LUCKNOW", 
    rating: 5 
  },
  { 
    id: 6, 
    text: "Qarat managed our full 3BHK turnkey interior. The transition from 3D designs to final ceiling and carpentry execution was seamless. Highly recommended.", 
    author: "Neha Patel", 
    location: "KANPUR ROAD, LUCKNOW", 
    rating: 5 
  }
];

const TestimonialBlock = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="tb-section">
      <div className="tb-container">
        
        <div className="tb-header-row">
          <div className="tb-header-left">
            <span className="tb-eyebrow">Client Reviews</span>
            <h2 className="tb-title">What Our Clients Say</h2>
            <p className="tb-subtitle">Real experiences from residential and commercial clients across Lucknow and Uttar Pradesh.</p>
          </div>

          <div className="tb-nav-controls">
            <button 
              type="button" 
              onClick={() => scroll('left')} 
              className="tb-nav-btn" 
              aria-label="Previous review"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              type="button" 
              onClick={() => scroll('right')} 
              className="tb-nav-btn" 
              aria-label="Next review"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="tb-grid" ref={scrollRef}>
          {reviews.map((review) => (
            <div key={review.id} className="tb-card">
              <div className="tb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "#B79A6B" : "transparent"} 
                    color={i < review.rating ? "#B79A6B" : "#D4CFC9"} 
                  />
                ))}
              </div>
              <p className="tb-text">"{review.text}"</p>
              <div className="tb-author-box">
                <div className="tb-author-avatar">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h3 className="tb-author-name">{review.author}</h3>
                  <p className="tb-author-loc">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialBlock;
