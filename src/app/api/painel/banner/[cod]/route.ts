import { BannerTypes } from '@/models/banner';
import { runQuery } from '@/util/database';
import { uploadFile } from '@/util/uploadFile';

export async function PUT(request: Request, { params } : { params: { cod: string } }) {
  const codDestaque = +params.cod
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries()) as unknown as BannerTypes
  const file = await uploadFile(formData)

  await runQuery(`
    update adm_destaque
    set
      nom_titulo='${data.nomTitulo}',
      nom_categoria='${data.nomCategoria}',
      ${file && `des_urlimagem='${file}',`}
      des_link='${data.desLink}',
      num_ordem=${data.numOrdem},
      des_obs='${data.desObs}',
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
    update adm_destaque
    set
      nom_titulo='',
      nom_categoria='',
      des_urlimagem='',
      des_link='',
      des_obs='',
      dat_ultalteracao=getdate()
    where cod_destaque=${codDestaque}
  `)
  
  return new Response(null, {
    status: 200,
    statusText: 'Deleted',
  })
}