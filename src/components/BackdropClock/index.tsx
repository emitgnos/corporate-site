import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { css } from 'configs/stitches'
import { dayjs } from 'configs/dayjs'

export const BackdropClock: React.VFC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const [nowMinutesOfSecond, setNowMinutesOfSecond] = useState<number>()
  const { resolvedTheme } = useTheme()
  const now = dayjs()

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const sleep = async (): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }

  useEffect(() => {
    let isMounted = true
    sleep().then(() => {
      if (isMounted) {
        setNowMinutesOfSecond(now.minute() * 60 + now.second())
      }
    })
    return () => {
      isMounted = false
    }
  }, [setNowMinutesOfSecond, now])

  const calcMinuteDeg = (nowMinute: number) => nowMinute * (360 / 3600) + 360

  const backdropStyles = css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) rotate(${
      nowMinutesOfSecond ? calcMinuteDeg(nowMinutesOfSecond) : 0
    }deg)`,
    width: '720px',
    height: '720px',
    overflow: 'hidden',
    borderRadius: '820px',
    transition: '1s ease',
    background: isDarkMode
      ? `conic-gradient(from 0deg at 50% 50%, rgb(14, 18, 14) 0deg, rgb(32, 28, 15) 180deg, rgb(12, 59, 55) 360deg)`
      : `conic-gradient(from 0deg at 50% 50%, rgb(251, 251, 249) 0deg, rgb(255, 249, 241) 50deg, rgb(221, 230, 222) 360deg)`,
    opacity: 0,
    '&.-is-visible': {
      opacity: 1,
    },
    '@sm': {
      width: '820px',
      height: '820px',
    },
  })

  return (
    <div
      className={classnames(
        backdropStyles(),
        nowMinutesOfSecond && '-is-visible'
      )}
    />
  )
}
