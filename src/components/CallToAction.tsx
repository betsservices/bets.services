import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-white-400 py-32"
    >
    <Image
      className="absolute left-0 right-0 top-0 w-full"
      src={backgroundImage}
      alt=""
      width={1558}
      height={946}
      unoptimized
    />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl text-blue drop-shadow-lg">
            Hemen Başlayın
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue drop-shadow-lg">
            {/* It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive. */}
            İşlerinizi kolaylaştıracak bir çok özellik burada. Yazılımımızı satın alarak sizde bu özelliklerden faydalanabilirsiniz.
          </p>
          <Button href="https://join.skype.com/invite/J2v8slBZKJJy" color="blue" className="mt-10 hover:drop-shadow-xl" target='_blank'>
            Demo Talep Et
          </Button>
        </div>
      </Container>
    </section>
  )
}
