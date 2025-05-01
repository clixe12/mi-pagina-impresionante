"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 -z-10 h-screen w-full">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(255,0,255,0.5)] opacity-50 blur-[80px]"></div>
          <div className="absolute bottom-auto left-0 right-auto top-0 h-[600px] w-[600px] translate-x-[10%] translate-y-[30%] rounded-full bg-[rgba(56,182,255,0.4)] opacity-50 blur-[80px]"></div>
        </div>
      </div>

      {/* Hero section */}
      <section ref={ref} className="relative h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6"
        >
          <motion.h1
            style={{ y: textY }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-6"
          >
            Diseño Web Impresionante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-200 mb-8"
          >
            Creando experiencias digitales extraordinarias con las últimas tecnologías web
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Ver Demos
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </motion.div>
      </section>

  {/* Features section */}
  <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              Características Impresionantes
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-400">
              Descubre las tecnologías y técnicas que hacen que esta página web sea visualmente extraordinaria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Diseño Interactivo</h2>
              <p className="text-gray-400">Experimenta con estos elementos interactivos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveCard />
              <InteractiveCard />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </section>

      {/* About Us section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          {/* Disclaimer Banner */}
          <div className="mb-12 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center">
            <p className="text-white font-bold text-lg">
              ⚠️ AVISO IMPORTANTE: NovaTech Solutions es una empresa FICTICIA. Todos los datos presentados a continuación
              han sido generados por IA y no representan una entidad real. ⚠️
            </p>
          </div>

          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Nosotros - NovaTech Solutions</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg">
                En NovaTech Solutions, creemos que la tecnología debe trabajar para las personas, no al revés. Somos una
                empresa ficticia especializada en el desarrollo de software a medida, aplicaciones web modernas y
                soluciones de inteligencia artificial para pequeñas y medianas empresas.
              </p>

              <p className="text-gray-300 text-lg mt-4">
                Desde nuestro nacimiento en 2023, nos hemos enfocado en ofrecer productos de alto rendimiento,
                escalables y con una experiencia de usuario impecable. Nos impulsa la innovación, la eficiencia y el
                deseo de transformar ideas en productos funcionales y elegantes.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-6">Nuestros Servicios</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <ServiceCard
                  title="Desarrollo Web Full Stack"
                  description="Utilizamos tecnologías modernas como React, Next.js, Node.js y Tailwind CSS para crear plataformas rápidas, responsivas y seguras."
                  icon="🌐"
                />
                <ServiceCard
                  title="Aplicaciones Móviles"
                  description="Creamos apps nativas e híbridas con Flutter y React Native, optimizadas para Android e iOS."
                  icon="📱"
                />
                <ServiceCard
                  title="Inteligencia Artificial & Automatización"
                  description="Implementamos soluciones de IA con Python, TensorFlow y OpenAI API, desde chatbots hasta sistemas de recomendación personalizados."
                  icon="🤖"
                />
                <ServiceCard
                  title="Consultoría y Optimización de Procesos"
                  description="Analizamos tus flujos de trabajo y diseñamos herramientas digitales para reducir tiempos y costos operativos."
                  icon="📊"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-6">Nuestro Compromiso Tecnológico</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <CommitmentItem icon="🔒" text="Seguridad desde el diseño" />
                <CommitmentItem icon="⚙️" text="APIs RESTful y GraphQL eficientes" />
                <CommitmentItem icon="🌐" text="Arquitecturas escalables basadas en la nube (AWS, Vercel, Firebase)" />
                <CommitmentItem icon="📈" text="Métricas integradas para monitoreo y mejora continua" />
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-6">Tecnologías que Dominamos</h3>

              <div className="flex flex-wrap gap-2 mb-10">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-6">¿Por qué elegir NovaTech?</h3>

              <p className="text-gray-300 text-lg">
                Porque no solo escribimos código. Traducimos ideas en experiencias digitales que funcionan, crecen y
                enamoran al usuario. Cada línea de código refleja pasión, precisión y propósito.
              </p>

              <div className="mt-8 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center">
                <p className="text-white font-bold">
                  RECORDATORIO: NovaTech Solutions es una empresa ficticia creada con fines ilustrativos. Cualquier
                  similitud con empresas reales es pura coincidencia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Diseño Web Impresionante
              </h3>
              <p className="text-gray-400 mt-2">Creando experiencias digitales extraordinarias</p>
            </div>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Diseño Web Impresionante. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Service Card component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

// Commitment Item component
function CommitmentItem({ icon, text }: { icon: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4"
    >
      <div className="text-2xl">{icon}</div>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  )
}

// Feature card component
function FeatureCard({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
        <CardHeader>
          <div className="p-2 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <CardTitle className="text-white">{feature.title}</CardTitle>
          <CardDescription className="text-gray-400">{feature.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{feature.content}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
            Aprender más <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Interactive card with hover effects
function InteractiveCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 blur-lg transition-all duration-500",
          hovered ? "opacity-100 scale-105" : "opacity-70 scale-100",
        )}
      />
      <Card className="relative bg-gray-900/80 backdrop-blur-sm border-gray-800 h-full">
        <CardHeader>
          <CardTitle className="text-white">Elemento Interactivo</CardTitle>
          <CardDescription className="text-gray-400">Pasa el cursor para ver efectos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-32 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <motion.div
              animate={hovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 2, ease: "linear", repeat: hovered ? Number.POSITIVE_INFINITY : 0 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
            Interactuar <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Technologies array
const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Firebase",
  "Tailwind CSS",
  "GitHub Actions",
  "OpenAI API",
  "TensorFlow",
]

// Sample features data
const features = [
  {
    icon: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
        className="h-6 w-6 text-white"
      >
        ⚛️
      </motion.div>
    ),
    title: "React y Next.js",
    description: "Framework moderno y potente",
    content: "Utilizamos React con Next.js para crear una experiencia de usuario fluida y de alto rendimiento.",
  },
  {
    icon: (
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="h-6 w-6 text-white"
      >
        🎨
      </motion.div>
    ),
    title: "Tailwind CSS",
    description: "Estilos modernos y responsivos",
    content: "Tailwind CSS nos permite crear diseños complejos y responsivos con facilidad y consistencia.",
  },
  {
    icon: (
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="h-6 w-6 text-white"
      >
        ✨
      </motion.div>
    ),
    title: "Framer Motion",
    description: "Animaciones fluidas",
    content: "Framer Motion proporciona animaciones suaves y profesionales que mejoran la experiencia del usuario.",
  },
  {
    icon: (
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="h-6 w-6 text-white"
      >
        📱
      </motion.div>
    ),
    title: "Diseño Responsivo",
    description: "Se adapta a todos los dispositivos",
    content: "La página se ve increíble en cualquier dispositivo, desde móviles hasta pantallas de escritorio.",
  },
  {
    icon: (
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="h-6 w-6 text-white"
      >
        🌈
      </motion.div>
    ),
    title: "Gradientes Modernos",
    description: "Colores vibrantes",
    content: "Utilizamos gradientes modernos para crear una estética visual atractiva y contemporánea.",
  },
  {
    icon: (
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="h-6 w-6 text-white"
      >
        🔍
      </motion.div>
    ),
    title: "Atención al Detalle",
    description: "Pequeños detalles, gran impacto",
    content: "Cada elemento está cuidadosamente diseñado para crear una experiencia visual coherente y atractiva.",
  },
]