import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemonMock } from "@/mocks/pokemon.mock.js";


describe("Pokemon options", () => {
  let wrapper = shallowMount(PokemonOptions);

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        arrayHijo: pokemonMock,
        numberReal:1,
        BooleanName:true
      },
    });
  });

  test("snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Mostrar 4 opciones correctamante", () => {

    const [l1,l2,l3,l4] = wrapper.findAll('li');
    expect(l1.text()).toBe('charmander')
    expect(l2.text()).toBe('mew')
    expect(l3.text()).toBe('kakuna')
    expect(l4.text()).toBe('mewtwo')

  })

  test("Emit",   () => {
   const [l1,l2,l3,l4] = wrapper.findAll('li');

    l1.trigger('click');
    l2.trigger('click');
    l3.trigger('click');
    l4.trigger('click');
    expect(wrapper.emitted('changeValue').length).toBe(4);
    expect(wrapper.emitted('changeValue')[0]).toBeTruthy();
    expect(wrapper.emitted('changeValue')[1][0]).toBeFalsy();
    expect(wrapper.emitted('changeValue')[2][0]).toBeFalsy();
    expect(wrapper.emitted('changeValue')[3][0]).toBeFalsy(); 
  });

  test('repracticar',()=>{
    const [boton1,boton2,boton3,boton4] = wrapper.findAll('li');

    boton1.trigger('click');
    boton2.trigger('click');

    expect(wrapper.emitted('changeValue').length).toBe(2);
    expect(wrapper.emitted('changeValue')[0]).toBeTruthy();
    expect(wrapper.emitted('changeValue')[1][0]).toBeFalsy();

    
  })
});
