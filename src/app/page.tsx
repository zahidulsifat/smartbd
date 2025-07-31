import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header section */}
      <section className="header">
        <Navigation />
        <div className="text-box">
          <h1>Smart Technologies (BD) Ltd.</h1>
          <p>
            Smart Technologies (BD) Ltd is one of the largest ICT distribution company in Bangladesh,
            <br />
            100+ world renowned brands in Smart basket..
          </p>
          <Link href="/about" className="hero-btn">
            Visit Us To Know More
          </Link>
        </div>
      </section>

      {/* Product section */}
      <section className="product">
        <h1>Product Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit.</p>
        <div className="row">
          <div className="product-col">
            <h3>Hardware</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque voluptate 
              iusto veritatis est modi consequatur elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="product-col">
            <h3>Cloud Solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque voluptate 
              iusto veritatis est modi consequatur elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="product-col">
            <h3>Managed IT Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque voluptate 
              iusto veritatis est modi consequatur elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="cta">
        <h1>
          Contact For Our Various Managed IT Solution <br />
          Anywhere Form The World
        </h1>
        <Link href="/contact" className="hero-btn">
          CONTACT US
        </Link>
      </section>
    </>
  );
}
