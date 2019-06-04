import Vue from 'vue'
import Vuex from 'vuex'

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
            }
            state.data.push(payloadData);;
            localStorage.data = JSON.stringify(state.data);
        },
        deleteUser : (state,payload)=>{
            state.data.splice(payload,1)
            localStorage.data = JSON.stringify(state.data)
        },
        editUser : (state,payload)=>{
            state.data.splice(payload.index,1,payload.data)
            localStorage.data = JSON.stringify(state.data)

        },
        adJsonData(state,payload){
            state.data.push(payload);
            localStorage.data = JSON.stringify(state.data);

        }

    },
    actions: {
        getJsonData : async ({commit},path)=>{
            const data =   import('./data.json').then(r=>{
                r.default.forEach((el)=>{
                    commit('adJsonData',el)
                })
            })
        }
    }
})
