import Image from "next/image";

export default function Backgrounds(){
    return(
        <div className="absolute inset-0 z-0">
            <Image
            src="/fern-kyaw-tun.png"
            alt="purple galazy"
            fill
            style ={{ objectFit:"cover"}}
            priority
            />
        </div>
    )
}