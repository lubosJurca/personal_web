import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import mernAppScreenshot from '@/public/mernApp.png';
import InvoiceAppTechStack from '@/components/InvoiceAppTechStack';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className='text-center py-10  '>
      <div className='container '>
        <div className='flex gap-4 justify-center pb-10 items-center'>
          <div className='w-3 h-8 bg-decoration'></div>
          <h1>Projekty</h1>
        </div>

        <div className='flex flex-col md:flex-row  justify-around'>
          {/* Project Card */}
          <Card className='bg-transparent border-none shadow-none'>
            <CardHeader className='flex flex-col gap-3'>
              <CardTitle className='text-primaryLight flex gap-2 items-center  underline text-3xl'>
                Invoice App
              </CardTitle>
              <Image
                src={mernAppScreenshot}
                alt='Project Screenshot'
                className='w-full h-40 object-cover rounded-lg mb-4'
              />
              <CardDescription className='text-primaryLight'>
                MERN Stack aplikace pro správu faktur.
              </CardDescription>
            </CardHeader>

            <CardFooter className='flex justify-between'>
              <Button className='text-primaryLight hover:text-decoration'>
                <Link
                  href='https://github.com/lubosJurca/MERN-Invoice'
                  target='_blank'
                >
                  View on GitHub
                </Link>
              </Button>
              <Button className='text-primaryLight hover:text-decoration'>
                <Link
                  href='https://mern-invoice-jkgn.onrender.com/'
                  target='_blank'
                >
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className='bg-transparent border-none shadow-none'>
            <CardHeader>
              <CardTitle className='text-primaryLight text-2xl'>Info</CardTitle>

              <CardDescription className='text-primaryLight'>
                Tato aplikace je postavená na MERN stacku (MongoDB, Express.js,
                React, Node.js) a zaměřená na vysoký výkon, škálovatelnost a
                jednoduchou údržbu.
              </CardDescription>
            </CardHeader>
            <CardContent className='text-primaryLight flex flex-col gap-8'>
              <div>
                <h2>Frontend</h2>
                <div className='flex flex-col gap-4'>
                  <p>
                    Frontend je postaven v Reactu s TypeScriptem, což poskytuje
                    typovou bezpečnost a usnadňuje správu komplexních datových
                    struktur. Aplikace umožňuje uživatelům volbu jazyka mezi
                    češtinou a angličtinou, což zlepšuje dostupnost pro různé
                    uživatele. Pro správu jazyků je využita knihovna i18next.
                  </p>
                  <p>
                    Formuláře jsou spravovány pomocí React Hook Form s validací
                    dat prostřednictvím knihovny Zod, což zajišťuje hladkou
                    práci s uživatelskými vstupy. Pro práci s daty používám
                    React Query, který zajišťuje efektivní synchronizaci a
                    cachování dat, čímž zlepšuje celkovou výkonnost aplikace.
                  </p>
                  <p>
                    Aplikace je plně responzivní, postavená s pomocí
                    TailwindCSS, což umožňuje rychlé úpravy a flexibilní
                    přizpůsobení rozhraní různým zařízením. Uživatelé mohou
                    navíc přepínat mezi tmavým a světlým režimem, což jim dává
                    možnost přizpůsobit vzhled aplikace jejich preferencím.
                  </p>
                </div>
              </div>
              <div>
                <h2>Backend</h2>
                <div className='flex flex-col gap-4'>
                  <p>
                    Backend běží na Express.js a je navržen tak, aby byl
                    jednoduchý, robustní a efektivní. Autentizace a správa
                    uživatelů je řešena pomocí jsonwebtoken, což poskytuje
                    bezpečný přístup k chráněným zdrojům. Pro bezpečné ukládání
                    hesel je nasazen bcryptjs.
                  </p>
                  <p>
                    Práce s databází je realizována prostřednictvím MongoDB a
                    Mongoose, což zajišťuje flexibilní a škálovatelné ukládání
                    dat. Validace vstupů na backendu je prováděna také pomocí
                    Zod, který zajišťuje konzistenci a validitu dat už od úrovně
                    API.
                  </p>
                  <p>
                    Pro optimalizaci práce s API a rychlé iterace je aplikace
                    navržena podle RESTful principů, což zajišťuje snadnou
                    údržbu a rozšiřitelnost.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
              <h2>Použité technologie</h2>
              <InvoiceAppTechStack />
            </CardFooter>
          </Card>
          {/* Repeat this card for each project */}
        </div>
      </div>
    </section>
  );
};
export default Projects;
