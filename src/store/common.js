//common store
export default{
    namespaced: true,
    
    state: {
        demo: "",
    },

    //store.commit & devtools & synchronous
    mutations: {
        setDemo(state, demo) {
            state.demo = demo;
        },
    },

    //store.dispatch & asynchronous backend api
    actions: {

    },
};
