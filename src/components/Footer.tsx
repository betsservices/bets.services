import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Özellikler</NavLink>
              {/* <NavLink href="#testimonials">Müşterilerimizden Gelenler</NavLink> */}
              <NavLink href="#pricing">Fiyatlandırma</NavLink>
              <NavLink href="#faq">S.S.S</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {/* <Link
              href="https://twitter.com"
              className="group"
              aria-label="Bets Services on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://github.com/betsservices"
              className="group"
              aria-label="Bets Services on GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link> */}
            <Link
              href="https://join.skype.com/invite/J2v8slBZKJJy"
              className="group"
              target='_blank'
              aria-label="Bets Services on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-5 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 14.28125 0 C 6.410156 0 0 6.324219 0 14.09375 C 0 16.476563 0.621094 18.800781 1.78125 20.875 C 1.507813 22.3125 1.375 23.792969 1.375 25.25 C 1.375 38.25 12.074219 48.8125 25.25 48.8125 C 26.601563 48.8125 27.953125 48.722656 29.28125 48.5 C 31.257813 49.488281 33.480469 50 35.71875 50 C 43.589844 50 50 43.675781 50 35.90625 C 50 33.820313 49.539063 31.828125 48.65625 29.96875 C 48.976563 28.433594 49.15625 26.847656 49.15625 25.25 C 49.15625 12.253906 38.425781 1.6875 25.25 1.6875 C 24.011719 1.6875 22.761719 1.78125 21.53125 1.96875 C 19.335938 0.683594 16.847656 0 14.28125 0 Z M 25.09375 9.375 C 27.140625 9.375 28.933594 9.597656 30.4375 10.0625 C 31.945313 10.523438 33.222656 11.136719 34.21875 11.90625 C 35.226563 12.683594 35.996094 13.511719 36.46875 14.375 C 36.945313 15.246094 37.1875 16.132813 37.1875 16.96875 C 37.1875 17.777344 36.84375 18.484375 36.21875 19.125 C 35.59375 19.765625 34.808594 20.09375 33.875 20.09375 C 33.027344 20.09375 32.367188 19.898438 31.90625 19.5 C 31.476563 19.125 31.023438 18.554688 30.53125 17.71875 C 29.960938 16.648438 29.292969 15.777344 28.5 15.1875 C 27.730469 14.613281 26.421875 14.34375 24.65625 14.34375 C 23.015625 14.34375 21.675781 14.640625 20.6875 15.28125 C 19.730469 15.898438 19.28125 16.628906 19.28125 17.46875 C 19.28125 17.984375 19.441406 18.410156 19.75 18.78125 C 20.078125 19.171875 20.511719 19.496094 21.09375 19.78125 C 21.695313 20.078125 22.316406 20.332031 22.9375 20.5 C 23.574219 20.671875 24.660156 20.945313 26.125 21.28125 C 27.976563 21.675781 29.679688 22.089844 31.1875 22.5625 C 32.710938 23.046875 34.019531 23.652344 35.09375 24.34375 C 36.1875 25.046875 37.070313 25.949219 37.6875 27.03125 C 38.304688 28.113281 38.59375 29.441406 38.59375 31 C 38.589844 32.859375 38.066406 34.546875 37 36.03125 C 35.9375 37.511719 34.371094 38.703125 32.34375 39.53125 C 30.335938 40.351563 27.925781 40.75 25.1875 40.75 C 21.898438 40.75 19.148438 40.191406 17 39.0625 C 15.460938 38.246094 14.175781 37.117188 13.21875 35.75 C 12.242188 34.367188 11.75 33.011719 11.75 31.6875 C 11.75 30.863281 12.085938 30.152344 12.71875 29.5625 C 13.347656 28.984375 14.136719 28.6875 15.09375 28.6875 C 15.878906 28.6875 16.574219 28.914063 17.125 29.375 C 17.65625 29.816406 18.105469 30.472656 18.46875 31.3125 C 18.875 32.230469 19.308594 32.980469 19.78125 33.59375 C 20.226563 34.175781 20.863281 34.679688 21.6875 35.0625 C 22.515625 35.453125 23.652344 35.65625 25.03125 35.65625 C 26.925781 35.65625 28.460938 35.253906 29.625 34.46875 C 30.765625 33.703125 31.34375 32.785156 31.34375 31.65625 C 31.34375 30.765625 31.03125 30.046875 30.4375 29.5 C 29.8125 28.925781 28.992188 28.492188 28 28.1875 C 26.957031 27.871094 25.558594 27.519531 23.8125 27.15625 C 21.4375 26.652344 19.417969 26.046875 17.8125 25.375 C 16.167969 24.683594 14.84375 23.722656 13.875 22.53125 C 12.890625 21.316406 12.375 19.820313 12.375 18.03125 C 12.375 16.324219 12.902344 14.761719 13.9375 13.4375 C 14.957031 12.125 16.449219 11.105469 18.375 10.40625 C 20.273438 9.710938 22.539063 9.375 25.09375 9.375 Z"/></svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            {/* Copyright   */}
            &copy; {new Date().getFullYear()} Bets Services. Tüm hakları saklıdır.
          </p>
        </div>
      </Container>
    </footer>
  )
}
