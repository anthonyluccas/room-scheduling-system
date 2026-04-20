import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Calendar() {
  const [mes, setMes] = useState(4);
  const [ano, setAno] = useState(2026);
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const primeiroDia = new Date(ano, mes - 1, 1).getDay();
  const totalDias = new Date(ano, mes, 0).getDate();
  const dias = [
    ...Array(primeiroDia).fill(null),
    ...Array.from({ length: totalDias }, (_, i) => i + 1),
  ];
  const hoje = new Date();
  const diaHoje = hoje.getDate();
  const mesHoje = hoje.getMonth() + 1;
  const anoHoje = hoje.getFullYear();

  return (
    <div className="p-6 text-white">
      <div className="flex items-center gap-4 mb-6 justify-between">
        <button
          onClick={() => {
            if (mes === 1) {
              setMes(12);
              setAno(ano - 1);
            } else {
              setMes(mes - 1);
            }
          }}
        >
          <ChevronLeft />
        </button>

        <p>
          {meses[mes - 1]} / {ano}
        </p>

        <button
          onClick={() => {
            if (mes === 12) {
              setMes(1);
              setAno(ano + 1);
            } else {
              setMes(mes + 1);
            }
          }}
        >
          <ChevronRight />
        </button>
      </div>

      <div>
        <div className="grid grid-cols-7 mb-2">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((dia) => (
            <div
              key={dia}
              className="text-center text-sm text-gray-400 font-bold p-4"
            >
              {dia}
            </div>
          ))}

          {dias.map((dia, index) => (
            <div
              key={index}
              className={`${dia ? "border border-gray-800" : "border border-transparent"} flex flex-col p-2 min-h-16 text-sm ${
                dia === diaHoje && mes === mesHoje && ano === anoHoje
                  ? "bg-[#6366f1]"
                  : ""
              }`}
            >
              <span>{dia}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
