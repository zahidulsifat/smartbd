import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Header section */}
      <section className="sub-header">
        <Navigation />
        <h1>About Us</h1>
      </section>

      {/* About us content */}
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the largest ICT distribution company in Bangladesh</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae 
              aspernatur maiores recusandae eveniet nesciunt quia illum voluptatibus voluptate 
              error, voluptates labore soluta sed consequatur! Quis repellendus quia, expedita sit. 
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link href="/products" className="hero-btn red-btn">
              EXPLORE NOW
            </Link>
          </div>
          <div className="about-col">
            <Image 
              src="/about.jpg" 
              alt="About Smart Technologies"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'About Us - Smart Technologies (BD) Ltd',
  description: 'Learn about Smart Technologies (BD) Ltd, the largest ICT distribution company in Bangladesh.',
};
