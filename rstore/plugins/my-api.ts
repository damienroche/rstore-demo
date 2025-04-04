export default defineRstorePlugin({
  name: 'my-api',

  setup({ hook }) {
    hook('fetchFirst', (payload) => {
      console.log('fetch first', payload.model.name)
    })
    hook('fetchMany', (payload) => {
      console.log('fetch many', payload.model.name)
      payload.setResult([{ id: 1, label: `${payload.model.name} 1`}, {id: 2, label: `${payload.model.name} 2`}]);
    })
  },
})
