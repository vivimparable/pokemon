import { shallowMount } from "@vue/test-utils";
import PokemonView from '@/pages/pokemonView.vue'


describe('main',()=>{

let wrapper = shallowMount(PokemonView);
beforeEach(()=>{wrapper = shallowMount(PokemonView)})

test('primer metodo',()=>{
let primero = wrapper.componentVM.arrayPokemon.length;
expect(primero).toBe(4)
})

test('numero aleatorio dentro del array ',()=>{
let primero = wrapper.componentVM.arrayPokemon; 
let segundo = wrapper.componentVM.numberFather; 
let recero = primero.find(a => a == segundo);

expect(recero).toBeTruthy();
})

test('Array de 4 pokemons ID debe ser igual al MIXIN array Numbers',async()=>{

    await wrapper.componentVM.pokemonName();

    let primero = wrapper.componentVM.pokemonsNames;
    let tercero = wrapper.componentVM.arrayPokemon; 
    let segundo = primero.map(a => a.id);
    expect(segundo).toStrictEqual(tercero);
})

test('Array de 4 pokemons ID debe ser igual al MIXIN array Numbers',async()=>{

    await wrapper.componentVM.pokemonName();

    let primero = wrapper.componentVM.pokemonsNames;

    expect(primero).toEqual([
        { name: expect.any(String), id: expect.any(Number) },
        { name: expect.any(String), id: expect.any(Number) },
        { name: expect.any(String), id: expect.any(Number) },
        { name: expect.any(String), id: expect.any(Number) }]
    )
})
test('llamada del componente pokemonName',  ()=>{

    const data1 = jest.spyOn(PokemonView.methods, 'pokemonName');

    shallowMount(PokemonView);

    expect(data1).toBeCalledTimes(1);

})
})
