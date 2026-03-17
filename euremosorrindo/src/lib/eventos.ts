// --- CONFIGURAÇÃO ---
export const REDIRECT_URL = "https://escolafernandarachid.com.br/"

// --- TIPAGEM ---
export type Evento = {
    date: string;
    titulo: string;
    imagem: string;
    local: string;
    hora: string;
}

// --- FUNÇÕES AUXILIARES ---
const gerarIntervalo = (inicio: string, fim: string, titulo: string, imagem: string, local: string, hora: string): Evento[] => {
    const lista: Evento[] = []
    let atual = new Date(inicio)
    const final = new Date(fim)

    while (atual <= final) {
        const dataFormatada = atual.toISOString().split('T')[0]
        lista.push({ date: dataFormatada, titulo, imagem, local, hora })
        atual.setDate(atual.getDate() + 1)
    }
    return lista
}

// --- BANCO DE DADOS DE EVENTOS ---
const eventosFixos: Evento[] = [
    // --- ABRIL 2026 ---
    // Remada da Lua Cheia
    { date: '2026-04-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:00' },
    { date: '2026-04-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:30' },
    { date: '2026-04-04', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:00' },
    { date: '2026-04-05', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:30' },

    // Turma Infanto Juvenil
    { date: '2026-04-05', titulo: 'Turma Infanto Juvenil', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '09:30' },
    { date: '2026-04-12', titulo: 'Turma Infanto Juvenil', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '09:30' },
    { date: '2026-04-18', titulo: 'Turma Infanto Juvenil', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '09:30' },
    { date: '2026-04-26', titulo: 'Turma Infanto Juvenil', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '09:30' },

    // Remada do Pôr do Sol
    { date: '2026-04-11', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },
    { date: '2026-04-18', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },
    { date: '2026-04-25', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },

    // Remada Astral
    { date: '2026-04-12', titulo: 'Remada Astral', imagem: '/cards/astral.png', local: 'Clube ASSTJ', hora: '05:40' },
    { date: '2026-04-18', titulo: 'Remada Astral', imagem: '/cards/astral.png', local: 'Clube ASSTJ', hora: '05:40' },

    // Trilha do Tapicuru
    { date: '2026-04-11', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },
    { date: '2026-04-25', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },

    // Trilha da Lagoinha
    { date: '2026-04-12', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-04-19', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-04-26', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },

    // --- MARÇO 2026 ---
    // Lua Cheia
    { date: '2026-03-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:00' },
    { date: '2026-03-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:30' },
    { date: '2026-03-04', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:00' },
    { date: '2026-03-05', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:30' },

    // Trilha da Lagoinha (Domingos)
    { date: '2026-03-01', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-08', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-15', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-22', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-29', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },

    // Trilha do Tapicuru (Sábados)
    { date: '2026-03-14', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },
    { date: '2026-03-21', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },
    { date: '2026-03-28', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },

    // Só para Mulheres
    { date: '2026-03-08', titulo: 'Remada Só Para Mulheres', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '17:00' },

    // Remada Pôr do Sol (Sábados)
    { date: '2026-03-14', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },
    { date: '2026-03-21', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },
    { date: '2026-03-28', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },

    // --- JANEIRO 2026 ---
    { date: '2026-01-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:10' },
    { date: '2026-01-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:00' },
    { date: '2026-01-04', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '20:00' },
    { date: '2026-01-10', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:15' },
    { date: '2026-01-17', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:15' },
    { date: '2026-01-24', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:15' },
    { date: '2026-01-11', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-01-18', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-01-25', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-01-31', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '17:50' },

    // --- FEVEREIRO 2026 ---
    { date: '2026-02-01', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:30' },
    { date: '2026-02-02', titulo: 'Cortejo para Iemanjá', imagem: '/cards/iemanja.jpeg', local: 'Clube ASSTJ', hora: '08:00 e 12:00' },
    { date: '2026-02-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:10' },
    { date: '2026-02-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:50' },
    { date: '2026-02-07', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:30' },
    { date: '2026-02-08', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-02-15', titulo: 'Canoa Elétrica (Carnaval)', imagem: '/cards/carnaval.jpeg', local: 'Clube ASSTJ', hora: '10:00' },
    { date: '2026-02-22', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-02-28', titulo: 'Trilha do Tapicuru', imagem: '/cards/tapicuru.jpeg', local: 'Tapicuru', hora: '09:30' },

    // --- HISTÓRICO ---
    { date: '2025-12-03', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Clube ASSTJ', hora: '19:30' },
    { date: '2025-12-04', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Clube ASSTJ', hora: '19:30' },
]

const coloniaFerias = gerarIntervalo('2026-01-12', '2026-01-23', 'Colônia de Férias', '/servicos/COLONIA/coloniaBg.png', 'Clube ASSTJ', 'Manhã e Tarde')
const recessoDezembro = gerarIntervalo('2025-12-22', '2025-12-31', 'Recesso', '/recesso.png', '-', 'Off')
const recessoJaneiro = gerarIntervalo('2026-01-01', '2026-01-01', 'Recesso', '/recesso.png', '-', 'Off')

export const eventosDB: Evento[] = [...eventosFixos, ...coloniaFerias, ...recessoDezembro, ...recessoJaneiro]