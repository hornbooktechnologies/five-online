"use client"

import React from "react"
import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container"

export default function Disclaimer() {
    const socialLinks = [
        {
            href: "https://www.instagram.com/fiveonline.in/",
            icon: "/figma/about/social-1.svg",
            label: "Instagram",
        },
        {
            href: "https://twitter.com/FiveOnline2",
            icon: "/figma/about/twitter-icon.svg",
            label: "Twitter",
        },
        {
            href: "https://www.linkedin.com/company/71971288/admin/feed/posts/",
            icon: "/figma/about/linkedin-icon.svg",
            label: "LinkedIn",
        },
        {
            href: "/cdn-cgi/l/email-protection#91f2feffe5f0f2e5d1f7f8e7f4fefffdf8fff4bff8ff",
            icon: "/figma/about/mails-icon.svg",
            label: "Email",
        },
        {
            href: "tel:9930265505",
            icon: "/figma/about/phone-icon.svg",
            label: "Call",
        },
    ];

    return (
        <div className="bg-black fixed bottom-0 w-full">
            <Container className='!px-0 !py-2'>
                <div className="flex justify-center items-center gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target='_blank'
                            rel='noreferrer'
                            aria-label={link.label}
                        >
                            <Image
                                src={link.icon}
                                alt=''
                                width={20}
                                height={20}
                                className='!h-[20px] !w-[20px] object-contain'
                                style={{ filter: link.label === "Email" ? "invert(1) brightness(2) " : "" }}
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}