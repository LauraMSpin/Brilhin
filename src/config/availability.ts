/**
 * Regras do calendário de agendamento.
 * A data escolhida pelo cliente é apenas uma preferência: a confirmação
 * é sempre feita pela equipe no WhatsApp.
 */
export const availability = {
  /** Dias da semana habilitados (0 = domingo, 1 = segunda ... 6 = sábado) */
  enabledWeekdays: [0, 1, 2, 3, 4, 5, 6],
  /** Datas bloqueadas no formato 'AAAA-MM-DD', ex.: ['2026-12-25', '2027-01-01'] */
  blockedDates: [] as string[],
  /** Antecedência mínima em dias (2 = a data mais próxima é depois de amanhã) */
  minAdvanceDays: 2,
  /** Até quantos dias no futuro o cliente pode escolher */
  maxAdvanceDays: 90,
}
