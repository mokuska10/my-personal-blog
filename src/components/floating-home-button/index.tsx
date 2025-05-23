import { useEffect, useState } from "react"

import './style.css'

export default function FloatingBtn() {
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return (
        visible && (
            <button 
                className="floating-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    ⬆️
            </button>
        )

    )
}