import { useEffect } from "react"


function useOutsideClick(ref, cb, tagId) {
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {  
            if (!ref.current.contains(e.target) && e.target.id != tagId) {
                cb();
            }
        })
    }, [ref])

}

export default useOutsideClick