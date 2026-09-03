const fluxo = {
  inicio: {
    texto: "Amanda acabou de almoçar e quer comer uma fruta de sobremesa. Qual ela escolhe?",
    opcaoA: { texto: "Pitaya", proximo: "pitaya_1" },
    opcaoB: { texto: "Uva", proximo: "uva_1" }
  },
  
  // Nível 1
  pitaya_1: {
    texto: "A pitaya é rosa e chamativa! Ao cortar a fruta, ela percebe que pode fazer um bowl decorado ou comer direto em pedaços. O que fazer?",
    opcaoA: { texto: "Fazer um bowl decorado", proximo: "pitaya_2_bowl" },
    opcaoB: { texto: "Comer direto em pedaços", proximo: "pitaya_2_rapido" }
  },
  uva_1: {
    texto: "Amanda pega um cacho de uvas roxas bem geladas. Ela deve lavar e comer puras ou congelar para fazer um snack geladinho?",
    opcaoA: { texto: "Comer puras agora", proximo: "uva_2_pura" },
    opcaoB: { texto: "Congelar para depois", proximo: "uva_2_gelada" }
  },

  // Nível 2
  pitaya_2_bowl: {
    texto: "O bowl ficou lindo! Amanda quer tirar uma foto para postar. Onde ela tira a foto?",
    opcaoA: { texto: "Na mesa perto da janela", proximo: "pitaya_fim_foto" },
    opcaoB: { texto: "No jardim sob o sol", proximo: "pitaya_fim_jardim" }
  },
  pitaya_2_rapido: {
    texto: "A pitaya estava muito saborosa! Sobrou metade. O que ela faz?",
    opcaoA: { texto: "Guardar na geladeira", proximo: "pitaya_fim_guardar" },
    opcaoB: { texto: "Oferecer para alguém", proximo: "pitaya_fim_dividir" }
  },
  uva_2_pura: {
    texto: "As uvas estão doces! Enquanto come, ela assiste a um vídeo. Que tipo de vídeo?",
    opcaoA: { texto: "Receitas com frutas", proximo: "uva_fim_receita" },
    opcaoB: { texto: "Série favorita", proximo: "uva_fim_serie" }
  },
  uva_2_gelada: {
    texto: "Depois de 2 horas no congelador, as uvas viraram 'bonbons' naturais. Como ela finaliza?",
    opcaoA: { texto: "Passar no açúcar fino", proximo: "uva_fim_doce" },
    opcaoB: { texto: "Comer puras e congeladas", proximo: "uva_fim_refrescante" }
  },

  // Nível 3 (Finais)
  pitaya_fim_foto: {
    texto: "Fim da aventura! A foto ganhou muitas curtidas e Amanda adorou a sobremesa bonita.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  pitaya_fim_jardim: {
    texto: "Fim da aventura! Comer no jardim deu uma sensação de piquenique relaxante.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  pitaya_fim_guardar: {
    texto: "Fim da aventura! A metade guardada garantiu o lanche da tarde perfeitamente.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  pitaya_fim_dividir: {
    texto: "Fim da aventura! Amanda dividiu a fruta e fez o dia da sua amiga mais feliz.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  uva_fim_receita: {
    texto: "Fim da aventura! Amanda se inspirou e já planejou a sobremesa de amanhã.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  uva_fim_serie: {
    texto: "Fim da aventura! Foi uma tarde relaxante de sobremesa e maratona de episódios.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  uva_fim_doce: {
    texto: "Fim da aventura! As uvas com açúcar pareceram um docinho de festa incrível.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  },
  uva_fim_refrescante: {
    texto: "Fim da aventura! A escolha perfeita para espantar o calor do dia.",
    opcaoA: { texto: "Jogar Novamente", proximo: "inicio" },
    opcaoB: { texto: "Jogar Novamente", proximo: "inicio" }
  }
};

let estadoAtual = "inicio";

function atualizarTela() {
  const cena = fluxo[estadoAtual];
  document.getElementById("texto-historia").innerText = cena.texto;
  
  const container = document.getElementById("container-opcoes");
  container.innerHTML = "";

  const btnA = document.createElement("button");
  btnA.className = "btn";
  btnA.innerText = cena.opcaoA.texto;
  btnA.onclick = () => avançarCena(cena.opcaoA.proximo);

  const btnB = document.createElement("button");
  btnB.className = "btn";
  btnB.innerText = cena.opcaoB.texto;
  btnB.onclick = () => avançarCena(cena.opcaoB.proximo);

  container.appendChild(btnA);
  container.appendChild(btnB);
}

function avançarCena(proximaCena) {
  estadoAtual = proximaCena;
  atualizarTela();
}

// Inicializa a primeira cena ao carregar
atualizarTela();
