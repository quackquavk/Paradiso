import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Special Selection
        </p>

        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={
                  { "--width": "100", "--height": "100" } as React.CSSProperties
                }
              >
                <Image
                  src="/images/menu-1.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Greek Salad"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                    Pan Grilled Local Pork Belly
                    </a>
                  </h3>

                  <span className="badge label-1">Seasonal</span>

                  <span className="span title-2">NRs. 599</span>
                </div>

                <p className="card-text label-1">
                Combined Nepali herbs, Spices served with salad & pickle 
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={
                  { "--width": "100", "--height": "100" } as React.CSSProperties
                }
              >
                <Image
                  src="/images/menu-2.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Lasagne"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                    Mustang Aloo/Timur Aloo
                    </a>
                  </h3>

                  <span className="span title-2">NRs. 999</span>
                </div>

                <p className="card-text label-1">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings
                  and spices
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={
                  { "--width": "100", "--height": "100" } as React.CSSProperties
                }
              >
                <Image
                  src="/images/menu-3.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Butternut Pumpkin"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Local Sukuti Sadheko
                    </a>
                  </h3>

                  <span className="span title-2">NRs 399</span>
                </div>

                <p className="card-text label-1">
                Dried Buff mixed with onion, ginger, tomato, garlic, green chilly, corriander and Nepali spices
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={
                  { "--width": "100", "--height": "100" } as React.CSSProperties
                }
              >
                <Image
                  src="/images/menu-4.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Tokusen Wagyu"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Thai Pork Chilly
                    </a>
                  </h3>

                  <span className="badge label-1">New</span>

                  <span className="span title-2">NRs. 890</span>
                </div>

                <p className="card-text label-1">
                Marinated pork deep fried served with thai spices sauce.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={
                  { "--width": "100", "--height": "100" } as React.CSSProperties
                }
              >
                <Image
                  src="/images/menu-5.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Olivas Rellenas"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Olivas Rellenas
                    </a>
                  </h3>

                  <span className="span title-2">NRs. 2000</span>
                </div>

                <p className="card-text label-1">
                  Avocados with crab meat, red onion, crab salad stuffed red
                  bell pepper and green bell pepper.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={
                  { "--width": "100", "--height": "100" } as React.CSSProperties
                }
              >
                <Image
                  src="/images/menu-6.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Opu Fish"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Opu Fish
                    </a>
                  </h3>

                  <span className="span title-2">NRs. 490</span>
                </div>

                <p className="card-text label-1">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings
                  and spices
                </p>
              </div>
            </div>
          </li>
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">7:00 pm</span> to{" "}
          <span className="span">9:00 pm</span>
        </p>

        <a href="#menus" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>

          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a>

        <Image
          src="/images/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <Image
          src="/images/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default Menu;
