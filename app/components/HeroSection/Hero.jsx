"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

import { gsap } from 'gsap';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  const listItems = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0 }); // Set a delay of 3 seconds for the entire timeline

    gsap.set('.hero-title', { opacity: 0, y: -50 });
    gsap.set('.text-display-small', { opacity: 0, y: -50 });
    gsap.set('.hero-list', { opacity: 0 });
    gsap.set('.hero-button', { opacity: 0, scale: 0.8 });

    // Animation Sequence
    tl.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })  // Animate title
      .to('.text-display-small', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')  // Animate subtitle
      .to('.hero-list', { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')  // Animate list
      .to('.hero-list li', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.5 }, '-=0.5')  // Staggered list items
      .to('.hero-button', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.5');  // Animate button

  }, []);
  useEffect(() => {
    const showListItems = () => {
      // Initial hide of all items
      gsap.set(listItems.current, { opacity: 0, y: -20 });

      // Function to handle the animation of items
      const animateItems = (index) => {
        if (index >= listItems.current.length) return; // Stop if index exceeds the list length

        const item = listItems.current[index];

        // Animate the current item
        gsap.fromTo(
          item,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              // After showing, wait for 5 seconds and then fade out
              gsap.to(item, {
                opacity: 0,
                y: -20,
                duration: 0.6,
                ease: 'power2.in',
                delay: 5,
                onComplete: () => {
                  // Animate the next item after the current one fades out
                  animateItems(index + 1);
                }
              });
            }
          }
        );
      };

      // Start the animation with the first item
      animateItems(0);
    };

    showListItems();
  }, []);

  return (
    <section className="hero-section flex flex-col items-start text-left pt-56 pr-0 pb-12">
      <div className="container">
        <div className="hero-content flex flex-col gap-1">
          <div className="image__wrapper mb-10 ">
            <Image src="/profile.jpg" width={140} height={140} className=" rounded-full h-full w-full object-cover object-center" />
          </div>
          <h1 className=" text-display-large mb-8">Hi, I'm Sijan — Software Engineer</h1>
          <h3 className="text-display-small mb-3 max-w-[30em]">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.
          </h3>
         
          <div className=" flex-col sm:flex-row wrap flex items-center gap-12 mt-6 hero__btn ">
            <Button element="link" link="/about" theme="secondary" className = "w-full">
              About me
            </Button>
            <p className="hero-opportunity tracking-widest ping">Open for opportunities

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
