import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Second Hand Laptop`;
    }, [title])
};

export default useTitle;