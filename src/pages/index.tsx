import axios from 'axios';
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { DashboardModule } from '@modules';

const Home: React.FC = () => {
  return (
    <>
      <DashboardModule />
    </>
  )
}

export default Home