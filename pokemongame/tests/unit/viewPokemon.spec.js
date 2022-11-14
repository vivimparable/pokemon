import { shallowMount,mount } from '@vue/test-utils'
import PokemonView from '@/pages/pokemonView.vue'
import { pokemonMock } from "@/mocks/pokemon.mock.js";


describe('View Vue APP',()=>{

    
    let wrapper = shallowMount(PokemonView);
    beforeEach(()=>{
        wrapper = shallowMount(PokemonView)

    })
            test('El array de pokemons debe devolver 4 elementos',()=>{
                expect(wrapper.componentVM.arrayPokemon.length).toBe(4)
            })

            test('El numero aleatorio pokemon debe estar dentro del array aleatorio',()=>{
                let numberFather = wrapper.componentVM.numberFather;
                let arrayMixed = wrapper.componentVM.arrayPokemon;  
                let finder = arrayMixed.find(a => a == numberFather)
                expect(finder).toBeTruthy();
            })
            test('Array de 4 pokemons ID debe ser igual al MIXIN array Numbers',async()=>{
                await  wrapper.vm.pokemonName();
                const first =  wrapper.componentVM.pokemonsNames;
                const second = first.map(a=> a.id)
                expect(second).toStrictEqual(wrapper.componentVM.arrayPokemon)    
            })

            test('que sea String y Number',async()=>{
                await  wrapper.componentVM.pokemonName();
                const first =  wrapper.componentVM.pokemonsNames;
                
                expect(first).toEqual([
                    { name: expect.any(String), id: expect.any(Number) },
                    { name: expect.any(String), id: expect.any(Number) },
                    { name: expect.any(String), id: expect.any(Number) },
                    { name: expect.any(String), id: expect.any(Number) }
                ])
            })

            test('llamada del componente pokemonName', ()=>{

                const data1 = jest.spyOn(PokemonView.methods, 'pokemonName');
                shallowMount(PokemonView);
                expect(data1).toBeCalledTimes(1);
            })

            test('snapshot despues de cargar', ()=>{

                const wrapper = shallowMount(PokemonView,{
                    data(){
                        return{
                            arrayPokemon:[1,2,3,4] ,
                            numberFather: 4,
                            pokemonsNames: pokemonMock,
                            showfather:false,
                            mensaje:"",
                            showOptions:true,
                            apiGet:true
                        }
                    }
                })
                expect(wrapper.html()).toMatchSnapshot();

                console.log(wrapper.html())

                const data1 = wrapper.find('imagen-stub');
                const data2 = wrapper.find('opciones-stub');

                expect(data1.exists()).toBeTruthy();
                expect(data2.exists()).toBeTruthy();

                expect(data1.attributes('numberpokemon')).toBe('4')
                expect(data2.attributes('numberreal')).toBe('4')

            })

            

})