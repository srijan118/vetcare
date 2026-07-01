import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import BlogDetail from './BlogDetail';
import './Blog.css';

const blogData = [
    {
        title: 'Top 10 Reasons Why Dogs Are the Best Companions',
        description: 'Dogs have been humans best friends for centuries and for good reason. They are loyal, affectionate, and make the perfect companion for people of all ages. From providing emotional support to helping with physical disabilities, dogs have proven to be indispensable members of our families. They are always there to lend an ear or a paw, and their presence can help alleviate stress and anxiety. In this blog, we will explore the top 10 reasons why dogs are the best companions and how they can bring joy and happiness to our lives. Whether you are a first-time dog owner or have had dogs all your life, this blog is for you!',
        author: 'Dr. Jha',
        authorImg: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1677522964~exp=1677523564~hmac=bc49099a8cff11228244d848df3f1b0352e38def8ed25e30dff10dd973b5128c',
        date: '23 April 2019'
    },
    {
        title: 'Exploring the Wonders of Underwater Life: A Beginners Guide to Snorkeling',
        description: 'Snorkeling is an exciting and affordable way to explore the beauty of underwater life. Whether you are a beginner or an experienced swimmer, snorkeling allows you to get up close and personal with vibrant coral reefs, tropical fish, and other marine life. With just a few essential pieces of equipment, such as a mask, snorkel, and fins, you can enjoy an immersive experience in the underwater world. In this beginners guide to snorkeling, we will cover everything you need to know, from how to choose the right equipment to essential safety tips. Whether you are planning a tropical vacation or simply want to explore your local waterways, snorkeling is an excellent way to discover the wonders of the underwater world. So, grab your snorkeling gear and get ready for an adventure!        ',
        author: 'Dr. Kumari',
        authorImg: 'https://img.freepik.com/free-vector/social-media_24877-51887.jpg?w=740&t=st=1677523020~exp=1677523620~hmac=27259619a36cd8330c0c71fbe91af43fc16df3473459ac7163c663217159f5f3',
        date: '23 April 2019'
    },
    {
        title: 'The Benefits of Adopting a Senior Dog',
        description: 'Adopting a senior dog can be a rewarding and fulfilling experience for both the dog and the owner. Senior dogs are often overlooked in shelters in favor of younger puppies, but they have so much to offer. They are usually already trained and socialized, which makes them easier to integrate into a new family. They also tend to have a more relaxed and calm demeanor, making them perfect for households with young children or seniors. Additionally, senior dogs often require less exercise and attention than younger dogs, which can be ideal for people with busy schedules or who may not be able to commit to a high-energy dog. Most importantly, adopting a senior dog can give them a second chance at a happy and comfortable life, and provide them with the love and attention they deserve in their twilight years. Overall, adopting a senior dog is a great option for anyone looking to bring a furry friend into their home and make a positive impact in the life of an older dog.        ',
        author: 'Dr. Tyagi',
        authorImg: 'https://img.freepik.com/free-vector/customer-persona-abstract-concept-vector-illustration-understand-potential-customer-needs-target-audience-data-driven-user-research-brand-positioning-collect-feedback-abstract-metaphor_335657-2940.jpg?w=740&t=st=1677523064~exp=1677523664~hmac=b13841e10cc014ac410b1bc3773587c617fee3161819fb1f138ff028358a0e0e',
        date: '23 April 2019'
    },
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;