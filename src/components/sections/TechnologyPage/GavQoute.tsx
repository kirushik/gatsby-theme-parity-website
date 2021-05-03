import React from 'react';
import { useIntl } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';

export default function GavQoute() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gav-quote-1.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2048, quality: 90) {
            src
          }
        }
      }
    }
  `);
  const bgStyles = {
    backgroundImage: `url(${backgroundImg.file.childImageSharp.fluid.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <section className="h-full bg-black">
      <div className="2xl:container" style={bgStyles}>
        <div className="container py-28 max-w-3xl">
          <div className="text-center text-white">
            <blockquote className="mb-8 leading-8">
              {`"${intl.formatMessage({ id: 'technology-page-gavin-quote' })}"`}
            </blockquote>
            <h4 className="font-semibold text-white mb-2">{intl.formatMessage({ id: 'homepage-team-gavin' })}</h4>
            <span className="text-sm">{intl.formatMessage({ id: 'technology-page-gavin-title' })}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
