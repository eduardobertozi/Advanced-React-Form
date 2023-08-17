import { runQuery } from '@/util/database';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { cod: string }}) {
  const codProfessor = +params.cod
  const courses = await runQuery(`exec Proc_WPesquisaCursosdoProfessor @cod_prof=${codProfessor}, @log_anoatual='F'`)
  
  return NextResponse.json(courses.recordset)
}