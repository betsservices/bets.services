import Link from 'next/link'
import clsx from 'clsx'

export default function Button() {
  return (
    <Link href="https://join.skype.com/invite/J2v8slBZKJJy" target="_blank" id="skype-support-button" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-white drop-shadow shadow-xl p-3 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64px"
        height="64px"
      >
        <radialGradient
          id="i9XPGrB2gyN3qVjYck37sa"
          cx="32.5"
          cy="31.5"
          r="30.516"
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor="#afeeff" />
          <stop offset=".193" stopColor="#bbf1ff" />
          <stop offset=".703" stopColor="#d7f8ff" />
          <stop offset="1" stopColor="#e1faff" />
        </radialGradient>
        <path
          fill="url(#i9XPGrB2gyN3qVjYck37sa)"
          d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24 C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757 C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23 c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757 C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59 c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"
        />
        <linearGradient
          id="i9XPGrB2gyN3qVjYck37sb"
          x1="32"
          x2="32"
          y1="65.347"
          y2="13.347"
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor="#155cde" />
          <stop offset=".278" stopColor="#1f7fe5" />
          <stop offset=".569" stopColor="#279ceb" />
          <stop offset=".82" stopColor="#2cafef" />
          <stop offset="1" stopColor="#2eb5f0" />
        </linearGradient>
        <path
          fill="url(#i9XPGrB2gyN3qVjYck37sb)"
          d="M56.388,36.488C56.784,34.721,57,32.886,57,31C57,17.195,45.805,6,32,6 c-1.886,0-3.721,0.216-5.488,0.612C24.566,5.587,22.353,5,20,5C12.268,5,6,11.268,6,19c0,2.353,0.587,4.566,1.612,6.512 C7.216,27.279,7,29.114,7,31c0,13.805,11.195,25,25,25c1.886,0,3.721-0.216,5.488-0.612C39.434,56.413,41.647,57,44,57 c7.732,0,14-6.268,14-14C58,40.647,57.413,38.434,56.388,36.488z"
        />
        <path
          fill="#fff"
          d="M32.128,46C23.789,46,20,41.874,20,38.749C20,37.123,21.135,36,22.778,36c3.538,0,2.655,5,9.35,5 C35.538,41,38,39.467,38,37.592c0-1.605-1.076-2.593-3.345-3.218l-7.456-1.875C21.263,31,20,27.748,20,24.623 C20,18.251,26.064,16,31.62,16C36.801,16,43,18.623,43,22.373C43,23.999,41.737,25,40.094,25c-3.03,0-2.789-4-8.854-4 c-3.03,0-5.24,1.25-5.24,3.252c0,1.997,2.842,2.622,4.988,3.125l5.561,1.25C42.609,29.999,44,33.5,44,36.874 C43.872,42.123,40.082,46,32.128,46z"
        />
      </svg>
    </Link>
  )
}
