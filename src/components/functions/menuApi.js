import baseUrl from "./baseUrl";


async function saveItem(item){

    try {
        
        const response = await fetch(`${baseUrl}/dinner`, {
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })

        if(!response.ok){

            throw new Error('Erro ao salvar um item de cardápio.');
        }

        const itemSave = await response.json()

        return itemSave

    } catch (error) {

        console.error('Erro ao salvar item de cardápio:', error.message)

    }

}

async function getItemsMenu(){
    
    try {
        const response = await fetch(`${baseUrl}/menu`)
        const itemsMenu = response.json()

        return itemsMenu

    } catch (error) {
        
        console.log('Erro ao tentar obter a lista de items de cardápio')

    }

}

async function getItemsBreakFast(){
    
    try {
        const response = await fetch(`${baseUrl}/breakfast`)
        const itemsMenu = response.json()

        return itemsMenu

    } catch (error) {
        
        console.log('Erro ao tentar obter a lista de items de cardápio')

    }
}

async function getItemsLunch(){
    
    try {
        
        const response = await fetch(`${baseUrl}/lunch`)
        const itemsMenu = response.json()

        return itemsMenu

    } catch (error) {
        
        console.log('Erro ao tentar obter a lista de items de cardápio')

    }

}

async function getItemsDinner(){
    
    try {
        const response = await fetch(`${baseUrl}/dinner`)
        const itemsMenu = response.json()

        return itemsMenu

    } catch (error) {
        
        console.log('Erro ao tentar obter a lista de items de cardápio')

    }

}

export {saveItem, getItemsMenu, getItemsBreakFast, getItemsLunch, getItemsDinner}