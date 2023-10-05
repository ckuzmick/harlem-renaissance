"use client"

import Head from 'next/head';
import Image from 'next/image'
import { useState } from 'react';
import Card from '@/components/Card';
import HRData from "@/data/harlem-renaissance-data.json"

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Harlem Renaissance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The Harlem Renaissance</h1>

        <h4>The Harlem Renaissance was an era in the 1920’s and 1930’s that took Place in Harlem, New York. Over 60% of Harlem is populated by African American and Hispanic people. During this time there was a lot of music, poetry, literature, performances and activism involved with this era. This era was widely known as a rebirth of African American arts. Some icons of this time period were Langston Hughes, Zora Hurston and W.E.B Dubois.</h4>

        <div className="card-grid">
            {HRData.map((el) => {
                return (
                    <Card 
                        title={el.Title}
                        imageUrl={el.ImageURL}
                        desc={el.Description}
                        key={el.Title}
                    ></Card>
                )
            })}
        </div>
      </main>
    </div>
  );
}