import { runQuery } from '@/util/database';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { cod: string } }) {
  const codTurma = params.cod
  const turma = await runQuery(`exec Proc_wpesquisaprofessoresdaturma @cod_turma='${codTurma}'`)
  
  return NextResponse.json(turma.recordset)
}