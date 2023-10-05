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
        <h2>The Harlem Renaissance</h2>
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
