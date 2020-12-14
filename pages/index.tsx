import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as React from 'react';

export default function Home() {
  const iFrame = React.useRef<HTMLIFrameElement>(null);

  const onIframeLoad = React.useCallback(() => {
    const current = iFrame.current;

    console.log({ current });

    if (current) {
      // const innerDocument = current.contentWindow.document;
      // #post-10 > div > div:nth-child(2) > div > div > div > div.gel-heading.gel-heading-style-02.text-center.has-line-separator.gel-5fd6720aa5683 > h2
      // const foo = current.contentWindow!.document.body.querySelectorAll(
      //   ".gel-heading-title"
      // );
      // const foo = current.contentWindow.parent.document.body.querySelectorAll(
      //   ".gel-heading-title"
      // );
      // https://ristoly.progressionstudios.com/
      // https://porus.g5plus.net/home-01/

      // console.log('Teraz gotowe', { foo });
      // const subtitle = innerDocument.querySelector('body > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1edd257.elementor-section-height-min-height.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle.animated.fadeIn > div.elementor-container.elementor-column-gap-default > div > div > div > div > div.elementor-element.elementor-element-4394d894.elementor-widget.elementor-widget-heading.animated.fadeInDown > div > h3') as HTMLHeadingElement;

      // console.log({ innerDocument });
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Piekarnia Nugat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe id="target" ref={iFrame} onLoad={onIframeLoad} className="full-screen-preview__frame" src="https://ristoly.progressionstudios.com/" name="preview-frame" frameBorder="0" noresize="noresize" data-view="fullScreenPreview" allow="geolocation 'self'; autoplay 'self'" >
</iframe>
{/*
        <iframe src="http://hn.arrowpress.net/bakery-kit/"
        width="100%" height="100%" frameBorder="0"
        allowFullScreen sandbox>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary">
       Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
<embed src="https://developer.mozilla.org/en-US/docs/Glossary" style={{ width:'500px', height: '300px' }} />
 */}
    </div>
  )
}
