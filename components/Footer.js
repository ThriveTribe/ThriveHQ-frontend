import Link from 'next/link';

export default function Footer({locations}){
    return(
        <footer className='p-3 bg-emerald-500'>
      <p>{locations.length} Locations World Wide</p>

    </footer>

    )

}