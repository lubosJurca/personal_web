import ImageCarousel from '../../components/ImageCarousel';

const About = () => {
  return (
    <section className='flex flex-col text-center  py-10  gap-8'>
      <div className='flex gap-4 justify-center  items-center'>
        <div className='w-3 h-full bg-decoration'></div>
        <h1>Něco málo o mně</h1>
      </div>

      <p>
        Jsem odhodlaný samouk, který se každý den učí nové technologie, aby se
        stal vývojářem v IT. Můj cíl není poháněn finančními důvody – v
        současném oboru mám bohaté zkušenosti a schopnost stabilně si udržet
        práci. Přesto mě programování zaujalo natolik, že v něm vidím svou
        budoucnost.
      </p>
      <p>
        Po dokončení maturity jsem se rozhodl cestovat a objevovat nové kultury
        i sám sebe. Strávil jsem přes dva roky ve Vancouveru v Kanadě, kde jsem
        pracoval ve strojírenství bez krajanů a díky tomu se zdokonalil v
        angličtině. Později jsem pracoval také v Německu, což mi dalo základy
        němčiny. Mimo to jsem procestoval Asii, navštívil jsem Bali, Kambodžu,
        Bangkok a Singapur, což mě obohatilo o nové zážitky a pohled na svět.
      </p>
      <p>
        K programování mě přivedla vášeň pro řešení problémů. Začal jsem s HTML,
        CSS, JavaScriptem a Reactem, a poté se posunul k Next.js a backend
        technologiím prostřednictvím MERN stacku (MongoDB, Express.js, React,
        Node.js). Umím navrhnout jednoduchý backend a propojit ho s databází,
        což mi umožňuje vytvářet plně funkční webové aplikace.
      </p>
      <p>
        Na svém vlastním projektu ukazuji, co jsem se dosud naučil – od
        uživatelského rozhraní až po práci s daty na serveru. Moje chuť neustále
        se zlepšovat a objevovat nové technologie je moje největší síla. Ačkoliv
        nemám formální IT vzdělání, věřím, že moje praktické zkušenosti,
        jazyková vybavenost a silná motivace mě dovedou rychle rozvíjet pod
        správným vedením. Jsem připraven přinášet hodnotu do každého týmu, se
        kterým budu spolupracovat.
      </p>
      <ImageCarousel />
    </section>
  );
};
export default About;
