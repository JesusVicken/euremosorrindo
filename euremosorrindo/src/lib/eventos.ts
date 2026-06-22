export const REDIRECT_URL = "https://escolafernandarachid.com.br/";

export type Evento = {
    date: string;
    titulo: string;
    imagem: string;
    local: string;
    hora: string;
};

type TemplateEvento = Omit<Evento, 'date' | 'hora'>;

const TEMPLATES: Record<string, TemplateEvento> = {
    luaCheia: { titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ' },
    porDoSol: { titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ' },
    lagoinha: { titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha' },
    tapicuru: { titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru' },
    astral:   { titulo: 'Remada Astral', imagem: '/cards/astral.png', local: 'Clube ASSTJ' },
    infanto:  { titulo: 'Turma Infanto Juvenil', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ' },
};

const criarEventos = (template: TemplateEvento, agendas: { d: string; h: string }[]): Evento[] =>
    agendas.map(({ d, h }) => ({ ...template, date: d, hora: h }));

const criarEventosFixos = (template: TemplateEvento, hora: string, datas: string[]): Evento[] =>
    datas.map(date => ({ ...template, date, hora }));

const gerarIntervalo = (inicio: string, fim: string, titulo: string, imagem: string, local: string, hora: string): Evento[] => {
    const lista: Evento[] = [];
    let atual = new Date(inicio);
    const final = new Date(fim);

    while (atual <= final) {
        const dataFormatada = atual.toISOString().split('T')[0];
        lista.push({ date: dataFormatada, titulo, imagem, local, hora });
        atual.setDate(atual.getDate() + 1);
    }
    return lista;
};

const eventosFixos: Evento[] = [
    // --- JULHO 2026 ---
    { date: '2026-07-03', titulo: 'Festa Julina', imagem: '/cards/festaJulina.png', local: 'Clube ASSTJ', hora: '18:30' },
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-07-05', '2026-07-12', '2026-07-19', '2026-07-26']),
    ...criarEventosFixos(TEMPLATES.tapicuru, '09:00', ['2026-07-04', '2026-07-11', '2026-07-18', '2026-07-25']),
    ...criarEventosFixos(TEMPLATES.porDoSol, '17:00', ['2026-07-04', '2026-07-05', '2026-07-11', '2026-07-12', '2026-07-18', '2026-07-19', '2026-07-25', '2026-07-26']),
    ...criarEventosFixos({ ...TEMPLATES.astral, titulo: 'Remada Astral – Pro Dia Nascer Feliz' }, '06:00', ['2026-07-04', '2026-07-11', '2026-07-18', '2026-07-25']),
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-07-29', h: '17:30' }, { d: '2026-07-30', h: '18:00' }, { d: '2026-07-31', h: '19:10' }
    ]),

    // --- JUNHO 2026 ---
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-06-01', h: '18:00' }, { d: '2026-06-02', h: '19:00' },
        { d: '2026-06-30', h: '18:00' }, { d: '2026-07-01', h: '18:40' }
    ]),
    { date: '2026-06-04', titulo: 'Longão de Feriado', imagem: '/longao.png', local: 'Clube ASSTJ', hora: '07:30' },
    ...criarEventosFixos(TEMPLATES.porDoSol, '17:00', ['2026-06-06', '2026-06-07', '2026-06-14', '2026-06-20', '2026-06-21']),
    ...criarEventosFixos(TEMPLATES.astral, '06:00', ['2026-06-13', '2026-06-20']),
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-06-07', '2026-06-14', '2026-06-21']),
    ...criarEventosFixos(TEMPLATES.tapicuru, '07:30', ['2026-06-06', '2026-06-20']),
    { date: '2026-06-14', titulo: 'Remada da Lua Nova', imagem: '/luanovaMaio.png', local: 'Clube ASSTJ', hora: '19:00' },

    // --- MAIO 2026 ---
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-05-01', h: '17:20' }, { d: '2026-05-02', h: '17:50' },
        { d: '2026-05-04', h: '19:20' }, { d: '2026-05-30', h: '17:10' }, { d: '2026-05-31', h: '17:20' }
    ]),
    { date: '2026-05-01', titulo: 'Longão', imagem: '/longao.png', local: 'Clube ASSTJ', hora: '08:00 às 11:30' },
    ...criarEventosFixos({ titulo: 'Remada da Lua Nova', imagem: '/luanovaMaio.png', local: 'Clube ASSTJ' }, '19:00', ['2026-05-15', '2026-05-16']),
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-05-03', '2026-05-10', '2026-05-17', '2026-05-24']),
    ...criarEventosFixos(TEMPLATES.tapicuru, '07:15', ['2026-05-09', '2026-05-23']),
    ...criarEventosFixos(TEMPLATES.porDoSol, '17:15', ['2026-05-09', '2026-05-10', '2026-05-16', '2026-05-17', '2026-05-23', '2026-05-24']),
    ...criarEventosFixos(TEMPLATES.astral, '06:00', ['2026-05-16', '2026-05-30']),

    // --- ABRIL 2026 ---
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-04-02', h: '18:00' }, { d: '2026-04-03', h: '18:30' },
        { d: '2026-04-04', h: '19:00' }, { d: '2026-04-05', h: '19:30' }
    ]),
    ...criarEventosFixos(TEMPLATES.infanto, '09:30', ['2026-04-05', '2026-04-12', '2026-04-18', '2026-04-26']),
    ...criarEventosFixos(TEMPLATES.porDoSol, '17:45', ['2026-04-11', '2026-04-18', '2026-04-25']),
    ...criarEventosFixos(TEMPLATES.astral, '05:40', ['2026-04-12', '2026-04-18']),
    ...criarEventosFixos(TEMPLATES.tapicuru, '07:30', ['2026-04-11', '2026-04-25']),
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-04-12', '2026-04-19', '2026-04-26']),

    // --- MARÇO 2026 ---
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-03-02', h: '18:00' }, { d: '2026-03-03', h: '18:30' },
        { d: '2026-03-04', h: '19:00' }, { d: '2026-03-05', h: '19:30' }
    ]),
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-03-01', '2026-03-08', '2026-03-15', '2026-03-22', '2026-03-29']),
    ...criarEventosFixos(TEMPLATES.tapicuru, '07:30', ['2026-03-14', '2026-03-21', '2026-03-28']),
    { date: '2026-03-08', titulo: 'Remada Só Para Mulheres', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '17:00' },
    ...criarEventosFixos(TEMPLATES.porDoSol, '17:45', ['2026-03-14', '2026-03-21', '2026-03-28']),

    // --- JANEIRO 2026 ---
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-01-02', h: '18:10' }, { d: '2026-01-03', h: '19:00' },
        { d: '2026-01-04', h: '20:00' }, { d: '2026-01-31', h: '17:50' }
    ]),
    ...criarEventosFixos(TEMPLATES.porDoSol, '17:15', ['2026-01-10', '2026-01-17', '2026-01-24']),
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-01-11', '2026-01-18', '2026-01-25']),

    // --- FEVEREIRO 2026 ---
    ...criarEventos(TEMPLATES.luaCheia, [
        { d: '2026-02-01', h: '18:30' }, { d: '2026-02-02', h: '19:10' }, { d: '2026-02-03', h: '19:50' }
    ]),
    { date: '2026-02-02', titulo: 'Cortejo para Iemanjá', imagem: '/cards/iemanja.jpeg', local: 'Clube ASSTJ', hora: '08:00 e 12:00' },
    { date: '2026-02-07', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:30' },
    ...criarEventosFixos(TEMPLATES.lagoinha, '10:00', ['2026-02-08', '2026-02-22']),
    { date: '2026-02-15', titulo: 'Canoa Elétrica (Carnaval)', imagem: '/cards/carnaval.jpeg', local: 'Clube ASSTJ', hora: '10:00' },
    { date: '2026-02-28', titulo: 'Trilha do Tapicuru', imagem: '/cards/tapicuru.jpeg', local: 'Tapicuru', hora: '09:30' },

    // --- HISTÓRICO (DEZEMBRO 2025) ---
    ...criarEventosFixos({ titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Clube ASSTJ' }, '19:30', ['2025-12-03', '2025-12-04'])
];

const coloniaFerias = gerarIntervalo('2026-01-12', '2026-01-23', 'Colônia de Férias', '/servicos/COLONIA/coloniaBg.png', 'Clube ASSTJ', 'Manhã e Tarde');
const coloniaFeriasJulho = gerarIntervalo('2026-07-06', '2026-07-24', 'Colônia de Férias & Teen Experience', '/servicos/COLONIA/coloniaBg.png', 'Clube ASSTJ', 'Vespertino');
const recessoDezembro = gerarIntervalo('2025-12-22', '2025-12-31', 'Recesso', '/recesso.png', '-', 'Off');
const recessoJaneiro = gerarIntervalo('2026-01-01', '2026-01-01', 'Recesso', '/recesso.png', '-', 'Off');

export const eventosDB: Evento[] = [...eventosFixos, ...coloniaFerias, ...coloniaFeriasJulho, ...recessoDezembro, ...recessoJaneiro];