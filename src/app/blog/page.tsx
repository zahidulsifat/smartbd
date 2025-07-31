import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Blog() {
  return (
    <>
      {/* Header section */}
      <section className="sub-header">
        <Navigation />
        <h1>Our Blogs</h1>
      </section>

      {/* Blog page content */}
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <Image 
              src="/certificate.png" 
              alt="Strength of Smart"
              width={600}
              height={400}
              className="w-full"
            />

            <h2>Strength Of Smart</h2>
            <p>Broad Product Portfolio</p>
            <br />
            <p>Our skilled Team</p>
            <br />
            <p>Client Satisfaction</p>
            <br />
            <p>Strong Distribution channel</p>
            <br />
            <p>Vendor Relationships</p>
            <br />
            <p>International Presence</p>
            <br />
            <p>Value-Added Services</p>
            <br />
            <p>Focus on Digital Transformation</p>
            <br />
            <p>Financial Stability</p>

            <div className="comment-box">
              <h3>Leave a comment</h3>
              <form className="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea rows={5} placeholder="Your Comment"></textarea>
                <button type="submit" className="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className="blog-right">
            <h3>Industries</h3>
            <div>
              <span>Global Automation</span>
              <span>21</span>
            </div>
            <div>
              <span>Smart Printing Solutions</span>
              <span>29</span>
            </div>
            <div>
              <span>Smart Academy</span>
              <span>18</span>
            </div>
            <div>
              <span>Smart Fire and Safety Solutions</span>
              <span>37</span>
            </div>
            <div>
              <span>Smart Group</span>
              <span>45</span>
            </div>
            <div>
              <span>Smart Dairy</span>
              <span>42</span>
            </div>
            <div>
              <span>Smart Hi-Tech Park</span>
              <span>23</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Blog - Smart Technologies (BD) Ltd',
  description: 'Read our latest blog posts about technology, industry insights, and company updates.',
};
