import pokemonAPI from '@/api/axios.js'
import {another,toOther} from '@/api/axios.js'

describe('La direccion Axios debe ser igual',()=>{
    test('La url de la api coincide correctamente',()=>{
        expect(pokemonAPI.defaults.baseURL).
        toBe('https://pokeapi.co/api/v2/pokemon')
    })
    
})