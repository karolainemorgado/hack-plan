export default function Button({onClick, label}) {
  return (

    <div className="w-full max-w-md mt-3">
      <button
        type="submit"
        className="w-full mt-6 h-14 
        rounded-3xl bg-black focus:outline-none text-white"
        onClick={onClick}
      >
{label}        
</button>
</div>
  )
}