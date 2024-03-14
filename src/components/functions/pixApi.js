export default async function generationQrcodePixApi(data){

    const response = await fetch('https://api-ecommerce-supermercado-familia.thiagosoftwareengineer.shop/cobpix', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {

        throw new Error('Erro na requisição');

    }

    const { imagemQrcode, txid } = await response.json();

    return {imagemQrcode, txid}

}