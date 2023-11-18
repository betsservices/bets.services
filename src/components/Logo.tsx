export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex flex-col items-center">
      {/* <p>Bets Services</p> */}
      {/* create bets services logo  */}
      <p className="text-xl font-bold text-gray-900">
        <span className="text-blue-600">Bets</span>
        <span className="text-gray-900">Services</span>
      </p>
    </div>
  )
}
