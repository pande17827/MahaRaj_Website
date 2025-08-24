import React from 'react';

const Download = () => {
  return (
    <>
      <style>{`
        .wrapper {
          position: relative;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width:1200px;
          left:20px;
          background-color: #f0f2f5;
          font-family: 'Inter', sans-serif;
        }

        /* New container to manage positioning of phone and trapezium */
        .download-container {
            position: relative;
            width: 110%;
            max-width: 1100px;
            margin-top: 190px; /* Half phone's height to prevent cutoff at top of viewport */
            margin-bottom: 2rem;
        }

        /* Trapezium base */
        .trapezium {
          position: relative;
          width: 100%;
          background: #7a0c0c;
          border-radius: 24px;
          display: grid;
          /* Adjusted grid: no longer holds the phone */
          grid-template-columns: 1fr auto;
          align-items: center;
          padding: 3rem 2rem;
          /* Added left padding to make space for the absolutely positioned phone */
          padding-left: 240px; 
          min-height: 250px;
          /* The clip-path makes it look like a trapezium */
          clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);
          color: #fff;
        }

        /* Phone mockup is now positioned absolutely relative to download-container */
        .phone {
          position: absolute;
          width: 180px;
          height: 360px;
          background: #5b0707;
          border: 4px solid black;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Positioned at the top-left and pulled up by 50% of its height */
          top: 0;
          left: 40px;
          transform: translateY(-50%);
          z-index: 3;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .phoneContent {
          text-align: center;
        }

        .logoCircle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          color: #7a0c0c;
          font-weight: bold;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
          border: 3px solid #5b0707;
        }

        .appName {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        /* Middle content */
        .middle {
          z-index: 2;
        }

        .heading {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }

        .avatars {
          margin-top: 1rem;
          display: flex;
          align-items: center;
        }

        .avatars img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 3px solid white;
          margin-left: -15px; /* Adjust overlap */
          transition: transform 0.2s ease;
        }
        
        .avatars img:hover {
            transform: scale(1.1);
        }

        .avatars img:first-child {
          margin-left: 0;
        }

        /* Store cards */
        .storeCards {
          display: flex;
          gap: 1.5rem;
          align-self: center; /* Align to center for better look */
          z-index: 2;
        }

        .card {
          background: white;
          color: #333;
          border-radius: 16px;
          padding: 1rem;
          text-align: center;
          width: 140px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

        .storeIcon {
          height: 40px; /* Set height for consistency */
          width: auto;
          margin-bottom: 0.5rem;
        }

        .stars {
          font-size: 1rem;
          color: #FFC107; /* A more standard gold color */
        }

        .rating {
          font-weight: bold;
          margin-top: 0.3rem;
          font-size: 0.9rem;
        }

        /* Badge is now positioned relative to download-container */
        .badge {
          position: absolute;
          top: 0; /* Position relative to the top of the container */
          right: 40px;
          transform: translateY(-50%); /* Pull up by half its height */
          z-index: 5;
        }

        .badgeCircle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: white;
          color: #7a0c0c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 2.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
        }
        
        /* Responsive adjustments */
        @media (max-width: 900px) {
            .download-container {
                margin-top: 150px; /* Adjust for smaller phone */
            }
            .trapezium {
                grid-template-columns: 1fr;
                text-align: center;
                padding: 2rem;
                /* Add top padding to push content below the phone */
                padding-top: 120px; 
                clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0% 100%);
            }
            .phone {
                /* Center the phone on mobile */
                left: 50%;
                transform: translate(-50%, -50%);
                width: 150px;
                height: 300px;
            }
            .avatars {
                justify-content: center;
            }
            .storeCards {
                margin-top: 2rem;
                justify-content: center;
                width: 100%;
            }
            .badge {
                top: 0;
                right: 20px;
                transform: translateY(-30%);
            }
            .badgeCircle {
                width: 60px;
                height: 60px;
                font-size: 2rem;
            }
        }
      `}</style>
      <section className="wrapper">
        <div className="download-container">
          {/* Phone mockup is now a sibling of the trapezium, not a child */}
          <div className="phone">
            <div className="phoneContent">
              <div className="logoCircle">M</div>
              <p className="appName">Maharaj</p>
            </div>
          </div>

          {/* Badge is also a sibling now */}
          <div className="badge">
            <div className="badgeCircle">M</div>
          </div>

          <div className="trapezium">
            {/* Middle Content */}
            <div className="middle">
              <h1 className="heading">
                Download <br /> our Mobile App
              </h1>
              <div className="avatars">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" />
                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="user" />
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="user" />
                <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="user" />
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="user" />
              </div>
            </div>

            {/* Store Cards */}
            <div className="storeCards">
              <div className="card">
                <img
                  className="storeIcon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                />
                <div className="stars">★★★★★</div>
                <p className="rating">4.5/5</p>
              </div>
              <div className="card">
                <img
                  className="storeIcon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store"
                />
                <div className="stars">★★★★★</div>
                <p className="rating">4.8/5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
