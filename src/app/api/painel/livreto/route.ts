import { LivretoTypes } from '@/models/livreto'
import { runQuery } from '@/util/database'
import { uploadFile } from '@/util/uploadFile'
import { NextResponse } from 'next/server'

export async function GET() {
  const livretos = await runQuery(`select * from adm_livreto order by dat_cadastro asc`)
  
  return NextResponse.json(livretos.recordset)
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as LivretoTypes
  const file = await uploadFile(formData)

  await runQuery(`
    insert into adm_livreto (
      des_urlpdf,
      nom_titulo,
      des_livreto,
      dat_ultalteracao
    ) values (
      '${file || ''}',
      '${data.nomTitulo || ''}',
      '${data.desLivreto || ''}',
      getdate()
    )
  `)
    
  return new Response(null, {
    status: 201,
    statusText: 'Created',
  })
}