import { useEffect, useState } from "react"
import "./ShareButton.css"

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false)
  const [copiedMsg, setCopiedMsg] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const copyLink = () => {
    const url = window.location.href
  
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedMsg(true)
        setTimeout(() => setCopiedMsg(false), 1200)
      }).catch(err => console.error("Clipboard error:", err))
    } else {
      // Fallback for unsupported browsers
      const textarea = document.createElement("textarea")
      textarea.value = url
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
  
      setCopiedMsg(true)
      setTimeout(() => setCopiedMsg(false), 1200)
    }
  }
  

  const shareWhatsapp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(window.location.href)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Floating buttons */}
      <div className="floating-buttons">
        <div className="share-container">
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            title="Share options"
          >
            <i className="fa fa-share-alt"></i>
          </button>

          {showShareOptions && (
            <div className="share-options">
              <button onClick={copyLink}>
                <i className="fa fa-link"></i>
              </button>
              <button onClick={shareWhatsapp}>
                <i className="fa-brands fa-whatsapp"></i>
              </button>
            </div>
          )}
        </div>

        {showScroll && (
          <button onClick={scrollToTop} title="Back to top">
            <i className="fa fa-arrow-up"></i>
          </button>
        )}
      </div>

      {/* Center popup */}
      {copiedMsg && (
        <div className="copied-center">
          <i className="fa fa-check"></i> Link copied!
        </div>
      )}
    </>
  )
}

export default FloatingButtons
