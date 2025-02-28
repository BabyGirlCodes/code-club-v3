import styles from '@/app/ui/home.module.css'
import { Lusitana } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
export default function Page() {
  return (<main className="flex min-h-screen flex-col p-6">
  
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-500 p-4 md:h-52"></div>
   <div className={styles.shape}></div>
  </main>
  )
}