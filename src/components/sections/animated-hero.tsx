import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrServerCluster } from "react-icons/gr";
import { TfiDashboard } from "react-icons/tfi";
import { TbPlugConnected } from "react-icons/tb";
import { TbCalendarWeek } from "react-icons/tb";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["revolucionário", "inteligente", "personalizado", "eficiente", "24/7"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-gray-800">Atendimento ao Cliente</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#2aa3e9]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="px-4 text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Transforme a experiência dos seus clientes e faça mais conversões com nosso agente de IA personalizado.
              Atendimento rápido, preciso e disponível 24 horas por dia, enquanto sua equipe 
              foca no que realmente importa.
            </p>

            <div className="grid grid-cols-2 px-4 md:grid-cols-4 gap-4 mt-4 max-w-3xl w-full mx-auto">
              <div className="md:w-full flex justify-center items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-medium">Cluster dedicado</span>
                <GrServerCluster className="ml-2"/>
              </div>
              <div className="md:w-full flex justify-center items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-medium">Relatórios</span>
                <TfiDashboard className="ml-2"/>
              </div>
              <div className="md:w-full flex justify-center items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-medium">24/7</span>
                <TbCalendarWeek className="ml-2"/>
              </div>
              <div className="md:w-full flex justify-center items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-medium">integrações</span>
                <TbPlugConnected className="ml-2"/>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="w-full h-12 text-lg bg-[#2aa3e9] hover:bg-[#1d8af0] text-white"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Entre em contato agora <PhoneCall className="w-4 h-4" />
            </Button>
          </motion.div>
          <div className="px-4 mt-2 text-center text-sm text-muted-foreground">
            <p><span className="font-bold text-gray-600">Garantia de satisfação: </span>Melhoria de 20% no atendimento em 60 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
