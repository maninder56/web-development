'use client'

import { AnimatePresence, motion } from 'motion/react'
import { style } from 'motion/react-client'
import { useEffect, useId, useState } from 'react'

export default function InfoCard({
  face,
  cardDetails,
  className = '',
}: {
  face: React.ReactNode
  cardDetails: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId() // unique layoutId per card instance

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div className={`${className} min-w-20 min-h-20`}>
        {!open && (
          <motion.div
            layoutId={id}
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ borderRadius: 16 }} // set radius via style so Motion corrects distortion
            className='h-full w-full cursor-pointer shadow-lg bg-surface-primary'
          >
            {face}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <div key='overlay' className='fixed inset-0 z-50 grid place-items-center'>
            {/* Backdrop */}
            <motion.div
              className='absolute inset-0 bg-black/30'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              layoutId={id}
              style={{ borderRadius: 16 }}
              className='relative w-full max-w-2xl shadow-xl bg-surface-background pt-5'
            >
                <motion.button 
                    className='absolute top-3 right-3 cursor-pointer'
                    onClick={() => setOpen(false)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <svg viewBox='0 0 24 24' fill='none' className='w-10'>
                        <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3-13-6 6m0-6 6 6' 
                            stroke='#7f3e0d' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </motion.button>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                >
                    {cardDetails}
                </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}