
import React from 'react'
import FooterLink from './FooterLink'
import Image from 'next/image'


export default function Footer({ }) {
    return (
        <footer className='px-20 py-5'>
            <div className='flex flex-col gap-10 justify-between sm:flex-row  items-start '>
        <Image
                src="/logo.png"
                alt='Logo'
                height={120}
                width={100}
                className='rounded-4xl' />


                <ul>
                    <h2 className='font-bold mb-4'>Sitemap</h2>
                    {/* <FooterLink li="Sitemap" link="/sitemap"/> */}
                    <FooterLink li="Home" link="/" />
                    <FooterLink li="Projects" link="#projects" />
                    <FooterLink li="About" link="#About" />
                    <FooterLink li="Contact" link="/#Contact" />
                </ul>


                {/* <ul>
                    <h2 className='font-bold mb-4'>Resources</h2>
                    <FooterLink li="Resources" link="/resources" />
                    <FooterLink li="Styleguide" link="/styleguide" />
                    <FooterLink li="Changelog" link="/changelog" />
                    <FooterLink li="Licenses" link="/licenses" />
                    <FooterLink li="404" link="/not-found" />
                </ul>
 */}


                <ul>
                    <h2 className='font-bold mb-4'>Socials</h2>
                    {/* <FooterLink li="Socials" link="/socials" /> */}
                    <FooterLink li="Facebook" link="/facebook" />
                    <FooterLink li="Twitter" link="/twitter" />
                    <FooterLink li="Instagram" link="/instagram" />
                    <FooterLink li="LinkedIn" link="/linkedin" />
                </ul>



            </div>
            <div className='mt-15'>
                <p>&copy;The Mustapha Yahaya. All rights reserved.</p>
            </div>

        </footer>
    )
}
