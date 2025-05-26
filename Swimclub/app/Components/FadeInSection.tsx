'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInSectionProps {
    children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
    return (
        <motion.div
            initial={false} // <- Viktigt! INTE börja svart
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                ease: 'easeOut',
            }}
            style={{
                opacity: 0,
                transform: 'translateY(30px)',
            }}
        >
            {children}
        </motion.div>
    );
}
