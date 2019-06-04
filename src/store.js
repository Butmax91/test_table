import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: localStorage.data ? JSON.parse(localStorage.data) : []
    },
    getters: {
        getData: state => state.data
    },
    mutations: {
        addUser : (state,payload)=>{
            const payloadData = {
                name: payload.name,
                surname: payload.surname,
                phone: payload.phone,
                email: payload.email
            };
            state.data.push(payloadData);
            localStorage.data = JSON.stringify(state.data);
            router.push('/')
        },
        deleteUser : (state,payload)=>{
            state.data.splice(payload,1);
            localStorage.data = JSON.stringify(state.data);
        },
        editUser : (state,payload)=>{
            state.data.splice(payload.index,1,payload.data);
            localStorage.data = JSON.stringify(state.data);
            router.push('/')

        },
        adJsonData(state,payload){
            try {
                let newDAta =  JSON.parse(payload);
                if (newDAta.length){
                    newDAta.forEach((el)=>{
                        let lenght = 0;
                        for (let elKey in el) {
                            lenght++
                        }
                        if (lenght === 4 && el.name && el.surname && el.phone && el.email){
                            state.data.push(el)
                        }

                    });
                }else{
                    let lenght = 0;
                    for (let newDAtaKey in newDAta) {
                        lenght++
                    }
                    if (lenght === 4 && !!newDAta.name && !!newDAta.surname && !!newDAta.phone && !!newDAta.email){
                        console.log(1);
                        state.data.push(newDAta)
                    }
                }
                router.push('/');
            }catch (e) {

                alert("Not valid JSON")
            }

            //window.location.href = '/'
            localStorage.data = JSON.stringify(state.data);
        }
    },
})
