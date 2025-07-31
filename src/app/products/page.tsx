import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Products() {
  return (
    <>
      {/* Header section */}
      <section className="sub-header">
        <Navigation />
        <h1>Our Lineup</h1>
      </section>

      {/* Product content */}
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

      {/* Facilities */}
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit.</p>
        <div className="row">
          <div className="facilities-col">
            <Image 
              src="/library.png" 
              alt="World Class Brands"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <h3>World Class Brands</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="facilities-col">
            <Image 
              src="/basketball.png" 
              alt="Own Brands"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <h3>Own Brands</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="facilities-col">
            <Image 
              src="/cafeteria.png" 
              alt="Top Notch Warranty"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <h3>Top Notch Warranty</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Products - Smart Technologies (BD) Ltd',
  description: 'Explore our product portfolio including hardware, cloud solutions, and managed IT services.',
};
