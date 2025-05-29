import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0035] via-[#2b0b52] to-[#100026] text-white font-sans">
      <header className="text-center py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/30 to-transparent blur-3xl"></div>
        <img
          src="/logo.png"
          alt="MEGA Logo"
          className="mx-auto w-32 h-32 rounded-full shadow-2xl border border-purple-500"
        />
        <h1 className="text-5xl font-extrabold mt-6 tracking-widest text-purple-300 drop-shadow">MEGA</h1>
        <p className="text-xl mt-3 text-white/80">место, где начинается твой путь в киберспорт</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-purple-500/30 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-purple-200">О клубе</h2>
              <p className="text-white/90">
                Сеть киберспортивных клубов в нескольких городах. Мы создаём
                настоящую атмосферу киберспорта для тебя. Играй комфортно,
                побеждай красиво!
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-purple-500/30 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-purple-200">Цены</h2>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>1 час — 80₽</li>
                <li>Ночной тариф — 400₽</li>
                <li>Абонемент 20 часов — 1300₽</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-purple-500/30 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-purple-200">Техническое оснащение</h2>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Процессор: Intel i5 / i7 (placeholder)</li>
                <li>Видеокарта: NVIDIA GTX 1660 / RTX 3060 (placeholder)</li>
                <li>Монитор: 240Hz, 1ms (placeholder)</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-purple-500/30 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-purple-200">Контакты</h2>
              <p className="mb-1 text-white/90">Филиал: г. Пример, ул. Победы, д. 1</p>
              <p className="mb-1 text-white/90">Телефон: +7 (999) 123-45-67</p>
              <p className="text-white/90">График работы: ежедневно с 10:00 до 06:00</p>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="text-center text-sm text-white/40 py-10">
        © {new Date().getFullYear()} MEGA. Все права защищены.
      </footer>
    </div>
  );
}
