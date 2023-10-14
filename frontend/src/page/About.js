import React from 'react';
import Footer from '../component/footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-center items-center h-full p-9">
          <div className="bg-gray-100 p-4 rounded-md text-center">
            <h2 className="text-2xl font-bold py-4 pl-4">About Us</h2>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
