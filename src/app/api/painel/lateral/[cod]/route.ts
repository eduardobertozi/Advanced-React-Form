import { LateralTypes } from '@/models/lateral';
import { runQuery } from '@/util/database';
import { uploadFile } from '@/util/uploadFile';

export async function PUT(request: Request, { params } : { params: { cod: string } }) {
  const codDestaque = +params.cod
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as LateralTypes
  const file = await uploadFile(formData)
    
  await runQuery(`    
      update dbo.adm_destaquelateral
      set 
        nom_tipo='${data.nomTipo}',
        des_link='${data.desLink}',
        des_idyoutube='${data.desIdYoutube}',
        ${file && `des_urlimagem='${file}',`}
        num_ordem='${data.numOrdem}',
        dat_ultalteracao=getdate()
      where cod_destaque=${codDestaque}
  `)
  
  return new Response(null, {
    status: 200,
    statusText: 'Modified',
  })
}

export async function DELETE(request: Request, { params } : { params: { cod: string } }) {
  const codDestaque = +params.cod

  await runQuery(`    
      update dbo.adm_destaquelateral
      set 
        nom_tipo='',
        des_link='',
        des_idyoutube='',
        des_urlimagem='',
        num_ordem=${0},
        dat_ultalteracao=getdate()
      where cod_destaque=${codDestaque}
  `)
  
  return new Response(null, {
    status: 200,
    statusText: 'Deleted',
  })
}