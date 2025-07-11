import { useEffect } from 'react'
import { useLocation } from 'react-router-dom' //хук из react-router-dom, который позволяет узнать текущий путь в URL

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
