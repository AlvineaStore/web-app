
"use client";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <motion.h1
          className="text-4xl font-bold text-center font-bricolage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur AlvineaStore
        </motion.h1>
        <motion.p
          className="text-lg text-center max-w-2xl font-bricolage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Votre boutique en ligne pour les logiciels tech et services numériques.
        </motion.p>
        <motion.footer className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          © {new Date().getFullYear()} AlvineaStore. Tous droits réservés.
        </motion.footer>
      </div>
    </div >
  );
}
