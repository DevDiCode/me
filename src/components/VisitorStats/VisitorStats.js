import React, { useEffect, useState, useRef } from 'react'
import CountUp from 'react-countup'
import './VisitorStats.css'

const VisitorStats = () => {
  const [visitorCount, setVisitorCount] = useState(0)
  const [animatedCount, setAnimatedCount] = useState(0)
  const socketRef = useRef(null)

  useEffect(() => {
    const wsUrl = process.env.REACT_APP_WS_URL

    if (!wsUrl) {
      console.error("Missing WebSocket URL in environment")
      return undefined
    }

    const socket = new WebSocket(wsUrl)
    socketRef.current = socket

    socket.onopen = () => {
      console.log("✅ WebSocket connected")
      socket.send(JSON.stringify({ action: "getCount" }))
    }

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (typeof data.visitorCount === "number") {
          setVisitorCount(data.visitorCount)
        }
      } catch (err) {
        console.error("WebSocket message error:", err)
      }
    }

    socket.onclose = () => {
      console.log("❌ WebSocket disconnected")
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <div className="visitor-stats-container">
      👁 <span className="visitor-count-number">
        <CountUp end={visitorCount} duration={1} />
      </span>
    </div>
  )
}

export default VisitorStats
