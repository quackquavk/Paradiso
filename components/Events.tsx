import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>

        <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

        <ul className="grid-list">
          <li>
            <div className="event-card has-before hover:shine">
              <div
                className="card-banner img-holder"
                style={
                  {
                    "--width": "350px",
                    "--height": "450px",
                  } as React.CSSProperties
                }
              >
                <Image
                  src="/images/event-1.jpg"
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />

                <time className="publish-date label-2" dateTime="2024-09-15">
                  15/09/2024
                </time>
              </div>

              <div className="card-content">
                <p className="card-subtitle label-2 text-center">
                  Food, Flavour
                </p>

                <h3 className="card-title title-2 text-center">
                  Flavour so good you’ll try to eat with your eyes.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div
                className="card-banner img-holder"
                style={
                  {
                    "--width": "350px",
                    "--height": "450px",
                  } as React.CSSProperties
                }
              >
                <Image
                  src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/440403199_769717885298577_4635290579672737353_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3P9qL6XF7CoQ7kNvgE7seip&_nc_ht=scontent.fpkr1-1.fna&oh=00_AYCQH-PaGopAJ65ryFwb-_wE72-rAsNb2rXiMFXkEbN2hQ&oe=664A4DEF"
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />

                <time className="publish-date label-2" dateTime="2024-05-08">
                  08/05/2024
                </time>
              </div>

              <div className="card-content">
                <p className="card-subtitle label-2 text-center">
                  Good music
                </p>

                <h3 className="card-title title-2 text-center">
                 Music so good that blesses your ears.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div
                className="card-banner img-holder"
                style={
                  {
                    "--width": "350px",
                    "--height": "450px",
                  } as React.CSSProperties
                }
              >
                <Image
                  src="/images/event-3.jpg"
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />

                <time className="publish-date label-2" dateTime="2022-09-03">
                  03/09/2022
                </time>
              </div>

              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Recipie</p>

                <h3 className="card-title title-2 text-center">
                  Flavour so good you’ll try to eat with your eyes.
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Events;
