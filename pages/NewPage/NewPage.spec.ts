import { mount, shallowMount } from '@vue/test-utils'
import NewPage from '@/pages/NewPage/index.vue'
import Vue from "vue";
import Vuetify from 'vuetify';

Vue.use(Vuetify)
const wrapper = mount(NewPage);

describe('NewPage', () => {

  test('testa a emissão do botão', async () => {
    await wrapper.find('#testeButton').trigger('click');
  });

  test('testa a variavel', async () => {
    const testando = wrapper.find('#testandoSaBudega');
    const test = testando.element.textContent;
    expect(test).toBeCalled
  });

  test('acessando a função e saber se ela é chamada', async () => {
    expect(wrapper.vm.$data.teste).toBeCalled
  })

  test('acessando a função e saber se ela é emitida', async () => {
    // expect(wrapper.vm.$data.teste).resolves
    const testeVar = wrapper.vm.$data.testando
    const testeVarFunc = wrapper.vm.$data.teste
    console.log(testeVar, 'testevars');

    // expect(wrapper.vm.$data.teste).toBeCalledWith(testeVar)
    expect(wrapper.emitted(testeVarFunc))
    // expect(wrapper.emitted(testeVar))

  })
})
