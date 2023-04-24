import Head from 'next/head';
import { Navbar, Footer, HeaderTitle } from '..';
import { ClubIconSVG as ClubIconSVG } from '..';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export function Layout({ children, image, title }) {
  return (
    <>
      <Head>
        <title>{title && `${title} -`} Club Agronomía Central</title>
      </Head>
      <Navbar />
      <main className="w-full pt-14 min-h-screen">
        {title && <HeaderTitle image={image} title={title} />}
        <div className="w-full lg:max-w-5xl mx-auto">{children}</div>
        <WhatsAppWidget
          CompanyIcon={ClubIconSVG}
          phoneNumber="584149056161"
          companyName="Club Agronomía Central"
          replyTimeText="Usualmente responde en un día"
          message="¡Hola! ¿Cómo puedo ayudarte?"
          sendButtonText="Enviar"
          inputPlaceHolder="Escribí tu mensaje"
        />
      </main>
      <Footer />
    </>
  );
}
