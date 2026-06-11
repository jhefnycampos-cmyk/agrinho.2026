// 1. Funcionalidade: Medidor de Pureza da Água
function atualizarMedidor() {
    const seletor = document.getElementById("seletor-agua");
    const grafico = document.getElementById("grafico-pureza");
    const valor = seletor.value;

    if (valor === "cristalina") {
        grafico.className = "status-box azul-limpo";
        grafico.innerHTML = `
            <h4>🔵 Pureza: 98% (Excelente)</h4>
            <p>Apta para consumo e manutenção da vida aquática selvagem. Indica ausência de esgotos ou lixo químico.</p>
        `;
    } else if (valor === "turva") {
        grafico.className = "status-box amarelo-alerta";
        grafico.innerHTML = `
            <h4>🟡 Pureza: 60% (Alerta Médio)</h4>
            <p>Contém excesso de argila, terra batida ou pequenas partículas suspensas. Necessita de decantação e filtração completa antes de beber.</p>
        `;
    } else if (valor === "poluida") {
        grafico.className = "status-box vermelho-perigo";
        grafico.innerHTML = `
            <h4>🔴 Pureza: 15% (Altamente Crítica)</h4>
            <p>Presença de agentes poluidores pesados ou esgoto. Risco extremo de contaminação para os animais e seres humanos. Imprópria!</p>
        `;
    }
}

// 2. Funcionalidade: Simulador de Filtração Passo a Passo
const passosFiltro = [
    { etapa: "Passo 1: Gradeamento", acao: "A água passa por telas e grades que barram lixos grandes jogados incorretamente pelas pessoas (garrafas, plásticos e galhos)." },
    { etapa: "Passo 2: Floculação e Decantação", acao: "A sujeira fina se junta em pequenos flocos pesados e desce para o fundo do tanque, separando a terra da água mais limpa." },
    { etapa: "Passo 3: Filtro Ecológico (Carvão e Areia)", acao: "A água atravessa camadas de carvão ativado, areia e cascalho grosso, retendo impurezas microscópicas e odores ruins." },
    { etapa: "Passo 4: Desinfecção Final", acao: "Adiciona-se cloro ou luz ultravioleta para matar germes e bactérias. Pronto! A água está 100% pura e segura de volta." }
];

let passoAtual = 0;

function avancarFiltro() {
    const tela = document.getElementById("tela-simulador");
    const info = passosFiltro[passoAtual];
    
    tela.innerHTML = `
        <h4 style="color:#00CED1; margin-bottom: 0.4rem;">${info.etapa}</h4>
        <p style="font-size: 0.95rem;">${info.acao}</p>
    `;
    
    passoAtual = (passoAtual + 1) % passosFiltro.length;
}

// 3. Funcionalidade: Acessibilidade de Tamanho da Letra
let tamanhoBase = 16;
function alterarFonte(modificador) {
    tamanhoBase += modificador;
    // Impede que a fonte fique minúscula ou exageradamente gigante
    if (tamanhoBase < 12) tamanhoBase = 12;
    if (tamanhoBase > 24) tamanhoBase = 24;
    document.body.style.fontSize = tamanhoBase + "px";
}

// 4. Funcionalidade: Direcionamento para pesquisas/notícias
function buscarNoticia(link) {
    window.open(link, '_blank');
}

// Carregar funções iniciais ao abrir o site
window.addEventListener("DOMContentLoaded", () => {
    atualizarMedidor();
    avancarFiltro();
});
