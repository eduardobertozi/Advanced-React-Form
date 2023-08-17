import { runQuery } from '@/util/database';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const formData = await request.formData()
  const nomCorFundo = formData.get('nomCorFundo')
  const desTexto = formData.get('desTexto')
  
  await runQuery(`
    update adm_itemtopo 
    set
    nom_corfundo='${nomCorFundo}',
    des_texto='${desTexto}',
    dat_ultalteracao=getdate()
  `)
  
  return new Response(null, {
    status: 200,
    statusText: 'Modified',
  })
}

export async function GET() {
  const topo = await runQuery(`select top 1 * from adm_itemtopo`)

  return NextResponse.json(topo.recordset[0])
}